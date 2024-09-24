var Jf = Object.defineProperty;
var Gf = (e, t, n) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var E = (e, t, n) => (Gf(e, typeof t != "symbol" ? t + "" : t, n), n);
import { b9 as Fr, as as Ps, ar as tc, at as Kf, b2 as nc, ba as _n, o as h, a0 as _o, A as Rt, U as zf, d as U, w as yd, V as Qf, X as hd, Y as Cf, Z as Yf, bb as Xf, $ as Zf, r as bd, bc as is, bd as ep, be as tp, bf as np, bg as rc, bh as vd, bi as wd, bj as rp, bk as sp, ah as Sn, ai as op, bl as ip, bm as ap, bn as cp, bo as up, bp as lp, bq as sc, br as dp, bs as mp, bt as fp, bu as pp, bv as gp, bw as yp, bx as hp, by as bp, bz as oc, bA as vp, bB as wp, bC as _p, bD as Sp, bE as Ap, bF as Pp, bG as kp, bH as Ep, bI as Tp, bJ as Op, bK as Ip, bL as ic, bM as Bp, bN as Np, bO as Mp, bP as Rp, bQ as jp, aj as Dp, bR as _d, bS as Sd, bT as Ad, bU as Up, al as $p, bV as Ui, aY as $i, b3 as xp, aE as Hp, bW as qp, au as Fp, av as Vp, aw as Lp, ax as xi, ay as Wp, az as Jp, _ as w, L as ue, H as lt, g as Gp, b6 as Ge, x as zs, S as Kp, I as zp, bX as Qp, bY as Qs, ac as Cp, bZ as Yp, b_ as Hi, b$ as Yc, c0 as Xc, c1 as Zc, c2 as Xp, c3 as Zp, aC as eg } from "./index-DV1w5RNX.mjs";
import { C as tg, P as ng } from "./chain-tk4BDPwT.mjs";
import { g as rg, s as _a, a as Pd, k as Sa, d as eu } from "./ens-validation.es6-BfRAUNmA.mjs";
var tu;
(function(e) {
  e.Erc20Contract = "erc20-contract", e.Peggy = "peggy-contract", e.PeggyOld = "peggy-old-contract";
})(tu || (tu = {}));
var Aa;
(function(e) {
  e.Auction = "chain-auction", e.Auth = "chain-auth", e.Authz = "chain-authz", e.Bank = "chain-bank", e.Distribution = "chain-distribution", e.Exchange = "chain-exchange", e.Gov = "chain-gov", e.Ibc = "chain-ibc", e.InsuranceFund = "chain-insurance", e.Mint = "chain-mint", e.Oracle = "chain-oracle", e.Peggy = "chain-peggy", e.Staking = "chain-staking", e.Wasm = "chain-wasm", e.WasmX = "chain-wasmx", e.Tendermint = "chain-tendermint";
})(Aa || (Aa = {}));
var Pa;
(function(e) {
  e.Account = "indexer-account", e.Auction = "indexer-auction", e.Derivatives = "indexer-derivatives", e.Explorer = "indexer-explorer", e.InsuranceFund = "indexer-insurance-fund", e.Meta = "indexer-meta", e.Mito = "indexer-mito", e.Dmm = "dmm", e.Oracle = "indexer-oracle", e.Portfolio = "indexer-portfolio", e.Spot = "indexer-spot", e.Transaction = "indexer-transaction", e.Trading = "indexer-trading", e.ChronosDerivative = "indexer-chronos-derivative", e.ChronosSpot = "indexer-chronos-spot", e.ChronosMarkets = "indexer-chronos-markets", e.Campaign = "indexer-campaign";
})(Pa || (Pa = {}));
var nu;
(function(e) {
  e.SignTransaction = "sign-transaction", e.SignEthereumTransaction = "sign-ethereum-transaction", e.SendTransaction = "send-transaction", e.SendEthereumTransaction = "send-ethereum-transaction", e.SignArbitrary = "sign-arbitrary", e.GetAccounts = "get-accounts", e.GetNetworkId = "get-network-id", e.GetChainId = "get-chain-id", e.GetEthereumTransactionReceipt = "get-ethereum-transaction-receipt";
})(nu || (nu = {}));
var ru;
(function(e) {
  e.Auction = "auction", e.CosmosSdk = "sdk", e.Staking = "staking", e.Bank = "bank", e.Distribution = "distribution", e.Gov = "gov", e.Exchange = "exchange", e.Insurance = "insurance", e.Ocr = "ocr", e.Oracle = "oracle", e.Peggy = "peggy", e.TokenFactory = "tokenfactory", e.Wasmx = "wasmx", e.Wasm = "wasm", e.AuthZ = "authz";
})(ru || (ru = {}));
var su;
(function(e) {
  e[e.ErrTxDecode = 2] = "ErrTxDecode", e[e.ErrInvalidSequence = 3] = "ErrInvalidSequence", e[e.ErrUnauthorized = 4] = "ErrUnauthorized", e[e.ErrInsufficientFunds = 5] = "ErrInsufficientFunds", e[e.ErrUnknownRequest = 6] = "ErrUnknownRequest", e[e.ErrInvalidAddress = 7] = "ErrInvalidAddress", e[e.ErrInvalidPubKey = 8] = "ErrInvalidPubKey", e[e.ErrUnknownAddress = 9] = "ErrUnknownAddress", e[e.ErrInvalidCoins = 10] = "ErrInvalidCoins", e[e.ErrOutOfGas = 11] = "ErrOutOfGas", e[e.ErrMemoTooLarge = 12] = "ErrMemoTooLarge", e[e.ErrInsufficientFee = 13] = "ErrInsufficientFee", e[e.ErrTooManySignatures = 14] = "ErrTooManySignatures", e[e.ErrNoSignatures = 15] = "ErrNoSignatures", e[e.ErrJSONMarshal = 16] = "ErrJSONMarshal", e[e.ErrJSONUnmarshal = 17] = "ErrJSONUnmarshal", e[e.ErrInvalidRequest = 18] = "ErrInvalidRequest", e[e.ErrTxInMempoolCache = 19] = "ErrTxInMempoolCache", e[e.ErrMempoolIsFull = 20] = "ErrMempoolIsFull", e[e.ErrTxTooLarge = 21] = "ErrTxTooLarge", e[e.ErrKeyNotFound = 22] = "ErrKeyNotFound", e[e.ErrWrongPassword = 23] = "ErrWrongPassword", e[e.ErrorInvalidSigner = 24] = "ErrorInvalidSigner", e[e.ErrorInvalidGasAdjustment = 25] = "ErrorInvalidGasAdjustment", e[e.ErrInvalidHeight = 26] = "ErrInvalidHeight", e[e.ErrInvalidVersion = 27] = "ErrInvalidVersion", e[e.ErrInvalidChainID = 28] = "ErrInvalidChainID", e[e.ErrInvalidType = 29] = "ErrInvalidType", e[e.ErrTxTimeoutHeight = 30] = "ErrTxTimeoutHeight", e[e.ErrUnknownExtensionOptions = 31] = "ErrUnknownExtensionOptions", e[e.ErrWrongSequence = 32] = "ErrWrongSequence", e[e.ErrPackAny = 33] = "ErrPackAny", e[e.ErrUnpackAny = 34] = "ErrUnpackAny", e[e.ErrLogic = 35] = "ErrLogic", e[e.ErrConflict = 36] = "ErrConflict", e[e.ErrNotSupported = 37] = "ErrNotSupported", e[e.ErrNotFound = 38] = "ErrNotFound", e[e.ErrIO = 39] = "ErrIO", e[e.ErrAppConfig = 40] = "ErrAppConfig", e[e.ErrInvalidGasLimit = 41] = "ErrInvalidGasLimit";
})(su || (su = {}));
var ou;
(function(e) {
  e[e.ErrOrderInvalid = 1] = "ErrOrderInvalid", e[e.ErrSpotMarketNotFound = 2] = "ErrSpotMarketNotFound", e[e.ErrSpotMarketExists = 3] = "ErrSpotMarketExists", e[e.ErrBadField = 4] = "ErrBadField", e[e.ErrMarketInvalid = 5] = "ErrMarketInvalid", e[e.ErrInsufficientDeposit = 6] = "ErrInsufficientDeposit", e[e.ErrUnrecognizedOrderType = 7] = "ErrUnrecognizedOrderType", e[e.ErrInsufficientPositionQuantity = 8] = "ErrInsufficientPositionQuantity", e[e.ErrOrderHashInvalid = 9] = "ErrOrderHashInvalid", e[e.ErrBadSubaccountID = 10] = "ErrBadSubaccountID", e[e.ErrInvalidTicker = 11] = "ErrInvalidTicker", e[e.ErrInvalidBaseDenom = 12] = "ErrInvalidBaseDenom", e[e.ErrInvalidQuoteDenom = 13] = "ErrInvalidQuoteDenom", e[e.ErrInvalidOracle = 14] = "ErrInvalidOracle", e[e.ErrInvalidExpiry = 15] = "ErrInvalidExpiry", e[e.ErrInvalidPrice = 16] = "ErrInvalidPrice", e[e.ErrInvalidQuantity = 17] = "ErrInvalidQuantity", e[e.ErrUnsupportedOracleType = 18] = "ErrUnsupportedOracleType", e[e.ErrOrderDoesntExist = 19] = "ErrOrderDoesntExist", e[e.ErrOrderbookFillInvalid = 20] = "ErrOrderbookFillInvalid", e[e.ErrPerpetualMarketExists = 21] = "ErrPerpetualMarketExists", e[e.ErrExpiryFuturesMarketExists = 22] = "ErrExpiryFuturesMarketExists", e[e.ErrExpiryFuturesMarketExpired = 23] = "ErrExpiryFuturesMarketExpired", e[e.ErrNoLiquidity = 24] = "ErrNoLiquidity", e[e.ErrSlippageExceedsWorstPrice = 25] = "ErrSlippageExceedsWorstPrice", e[e.ErrInsufficientOrderMargin = 26] = "ErrInsufficientOrderMargin", e[e.ErrDerivativeMarketNotFound = 27] = "ErrDerivativeMarketNotFound", e[e.ErrPositionNotFound = 28] = "ErrPositionNotFound", e[e.ErrInvalidReduceOnlyPositionDirection = 29] = "ErrInvalidReduceOnlyPositionDirection", e[e.ErrPriceSurpassesBankruptcyPrice = 30] = "ErrPriceSurpassesBankruptcyPrice", e[e.ErrPositionNotLiquidable = 31] = "ErrPositionNotLiquidable", e[e.ErrInvalidTriggerPrice = 32] = "ErrInvalidTriggerPrice", e[e.ErrInvalidOracleType = 33] = "ErrInvalidOracleType", e[e.ErrInvalidPriceTickSize = 34] = "ErrInvalidPriceTickSize", e[e.ErrInvalidQuantityTickSize = 35] = "ErrInvalidQuantityTickSize", e[e.ErrInvalidMargin = 36] = "ErrInvalidMargin", e[e.ErrExceedsOrderSideCount = 37] = "ErrExceedsOrderSideCount", e[e.ErrMarketOrderAlreadyExists = 38] = "ErrMarketOrderAlreadyExists", e[e.ErrConditionalMarketOrderAlreadyExists = 39] = "ErrConditionalMarketOrderAlreadyExists", e[e.ErrMarketLaunchProposalAlreadyExists = 40] = "ErrMarketLaunchProposalAlreadyExists", e[e.ErrInvalidMarketStatus = 41] = "ErrInvalidMarketStatus", e[e.ErrSameDenoms = 42] = "ErrSameDenoms", e[e.ErrSameOracles = 43] = "ErrSameOracles", e[e.ErrFeeRatesRelation = 44] = "ErrFeeRatesRelation", e[e.ErrMarginsRelation = 45] = "ErrMarginsRelation", e[e.ErrExceedsMaxOracleScaleFactor = 46] = "ErrExceedsMaxOracleScaleFactor", e[e.ErrSpotExchangeNotEnabled = 47] = "ErrSpotExchangeNotEnabled", e[e.ErrDerivativesExchangeNotEnabled = 48] = "ErrDerivativesExchangeNotEnabled", e[e.ErrOraclePriceDeltaExceedsThreshold = 49] = "ErrOraclePriceDeltaExceedsThreshold", e[e.ErrInvalidHourlyInterestRate = 50] = "ErrInvalidHourlyInterestRate", e[e.ErrInvalidHourlyFundingRateCap = 51] = "ErrInvalidHourlyFundingRateCap", e[e.ErrInvalidMarketFundingParamUpdate = 52] = "ErrInvalidMarketFundingParamUpdate", e[e.ErrInvalidTradingRewardCampaign = 53] = "ErrInvalidTradingRewardCampaign", e[e.ErrInvalidFeeDiscountSchedule = 54] = "ErrInvalidFeeDiscountSchedule", e[e.ErrInvalidLiquidationOrder = 55] = "ErrInvalidLiquidationOrder", e[e.ErrTradingRewardCampaignDistributionError = 56] = "ErrTradingRewardCampaignDistributionError", e[e.ErrInvalidTradingRewardsPendingPointsUpdate = 57] = "ErrInvalidTradingRewardsPendingPointsUpdate", e[e.ErrInvalidBatchMsgUpdate = 58] = "ErrInvalidBatchMsgUpdate", e[e.ErrExceedsTopOfBookPrice = 59] = "ErrExceedsTopOfBookPrice", e[e.ErrInvalidOrderTypeForMessage = 60] = "ErrInvalidOrderTypeForMessage", e[e.ErrInvalidDMMSender = 61] = "ErrInvalidDMMSender", e[e.ErrAlreadyOptedOutOfRewards = 62] = "ErrAlreadyOptedOutOfRewards", e[e.ErrInvalidMarginRatio = 63] = "ErrInvalidMarginRatio", e[e.ErrBelowMinimalContribution = 64] = "ErrBelowMinimalContribution", e[e.ErrLowPositionMargin = 65] = "ErrLowPositionMargin", e[e.ErrInvalidTotalSupply = 66] = "ErrInvalidTotalSupply", e[e.ErrInvalidLpTokenBurnAmount = 67] = "ErrInvalidLpTokenBurnAmount", e[e.ErrUnsupportedAction = 68] = "ErrUnsupportedAction", e[e.ErrNegativePositionQuantity = 69] = "ErrNegativePositionQuantity", e[e.ErrBinaryOptionsMarketExists = 70] = "ErrBinaryOptionsMarketExists", e[e.ErrBinaryOptionsMarketNotFound = 71] = "ErrBinaryOptionsMarketNotFound", e[e.ErrInvalidSettlement = 72] = "ErrInvalidSettlement", e[e.ErrAccountDoesntExist = 73] = "ErrAccountDoesntExist", e[e.ErrSenderIsNotAnAdmin = 74] = "ErrSenderIsNotAnAdmin", e[e.ErrMarketAlreadyScheduledToSettle = 75] = "ErrMarketAlreadyScheduledToSettle", e[e.ErrGenericMarketNotFound = 76] = "ErrGenericMarketNotFound", e[e.ErrInvalidDenomDecimal = 77] = "ErrInvalidDenomDecimal", e[e.ErrInvalidState = 78] = "ErrInvalidState", e[e.ErrTransientOrdersUpToCancelNotSupported = 79] = "ErrTransientOrdersUpToCancelNotSupported", e[e.ErrInvalidTrade = 80] = "ErrInvalidTrade", e[e.ErrNoMarginLocked = 81] = "ErrNoMarginLocked", e[e.ErrInvalidAccessLevel = 82] = "ErrInvalidAccessLevel", e[e.ErrInvalidAddress = 83] = "ErrInvalidAddress", e[e.ErrInvalidArgument = 84] = "ErrInvalidArgument", e[e.ErrInvalidFundsDirection = 85] = "ErrInvalidFundsDirection", e[e.ErrNoFundsProvided = 86] = "ErrNoFundsProvided", e[e.ErrInvalidSignature = 87] = "ErrInvalidSignature", e[e.ErrNoFundsToUnlock = 88] = "ErrNoFundsToUnlock", e[e.ErrNoMsgsProvided = 89] = "ErrNoMsgsProvided", e[e.ErrNoMsgProvided = 90] = "ErrNoMsgProvided", e[e.ErrInvalidAmount = 91] = "ErrInvalidAmount", e[e.ErrFeatureDisabled = 92] = "ErrFeatureDisabled", e[e.ErrTooMuchOrderMargin = 93] = "ErrTooMuchOrderMargin", e[e.ErrBadSubaccountNonce = 94] = "ErrBadSubaccountNonce", e[e.ErrInsufficientFunds = 95] = "ErrInsufficientFunds", e[e.ErrPostOnlyMode = 96] = "ErrPostOnlyMode", e[e.ErrClientOrderIdAlreadyExists = 97] = "ErrClientOrderIdAlreadyExists", e[e.ErrInvalidCid = 98] = "ErrInvalidCid";
})(ou || (ou = {}));
var iu;
(function(e) {
  e[e.ErrBidInvalid = 1] = "ErrBidInvalid", e[e.ErrBidRound = 2] = "ErrBidRound";
})(iu || (iu = {}));
var au;
(function(e) {
  e[e.ErrNoAuthorizationFound = 2] = "ErrNoAuthorizationFound", e[e.ErrInvalidExpirationTime = 3] = "ErrInvalidExpirationTime", e[e.ErrUnknownAuthorizationType = 4] = "ErrUnknownAuthorizationType", e[e.ErrNoGrantKeyFound = 5] = "ErrNoGrantKeyFound", e[e.ErrAuthorizationExpired = 6] = "ErrAuthorizationExpired", e[e.ErrGranteeIsGranter = 7] = "ErrGranteeIsGranter", e[e.ErrAuthorizationNumOfSigners = 9] = "ErrAuthorizationNumOfSigners", e[e.ErrNegativeMaxTokens = 12] = "ErrNegativeMaxTokens";
})(au || (au = {}));
var cu;
(function(e) {
  e[e.ErrInsuranceFundAlreadyExists = 1] = "ErrInsuranceFundAlreadyExists", e[e.ErrInsuranceFundNotFound = 2] = "ErrInsuranceFundNotFound", e[e.ErrRedemptionAlreadyExists = 3] = "ErrRedemptionAlreadyExists", e[e.ErrInvalidDepositAmount = 4] = "ErrInvalidDepositAmount", e[e.ErrInvalidDepositDenom = 5] = "ErrInvalidDepositDenom", e[e.ErrPayoutTooLarge = 6] = "ErrPayoutTooLarge", e[e.ErrInvalidTicker = 7] = "ErrInvalidTicker", e[e.ErrInvalidQuoteDenom = 8] = "ErrInvalidQuoteDenom", e[e.ErrInvalidOracle = 9] = "ErrInvalidOracle", e[e.ErrInvalidExpirationTime = 10] = "ErrInvalidExpirationTime", e[e.ErrInvalidMarketID = 11] = "ErrInvalidMarketID", e[e.ErrInvalidShareDenom = 12] = "ErrInvalidShareDenom";
})(cu || (cu = {}));
var uu;
(function(e) {
  e[e.ErrStaleReport = 1] = "ErrStaleReport", e[e.ErrIncompleteProposal = 2] = "ErrIncompleteProposal", e[e.ErrRepeatedAddress = 3] = "ErrRepeatedAddress", e[e.ErrTooManySigners = 4] = "ErrTooManySigners", e[e.ErrIncorrectConfig = 5] = "ErrIncorrectConfig", e[e.ErrConfigDigestNotMatch = 6] = "ErrConfigDigestNotMatch", e[e.ErrWrongNumberOfSignatures = 7] = "ErrWrongNumberOfSignatures", e[e.ErrIncorrectSignature = 8] = "ErrIncorrectSignature", e[e.ErrNoTransmitter = 9] = "ErrNoTransmitter", e[e.ErrIncorrectTransmissionData = 10] = "ErrIncorrectTransmissionData", e[e.ErrNoTransmissionsFound = 11] = "ErrNoTransmissionsFound", e[e.ErrMedianValueOutOfBounds = 12] = "ErrMedianValueOutOfBounds", e[e.ErrIncorrectRewardPoolDenom = 13] = "ErrIncorrectRewardPoolDenom", e[e.ErrNoRewardPool = 14] = "ErrNoRewardPool", e[e.ErrInvalidPayees = 15] = "ErrInvalidPayees", e[e.ErrModuleAdminRestricted = 16] = "ErrModuleAdminRestricted", e[e.ErrFeedAlreadyExists = 17] = "ErrFeedAlreadyExists", e[e.ErrFeedDoesntExists = 19] = "ErrFeedDoesntExists", e[e.ErrAdminRestricted = 20] = "ErrAdminRestricted", e[e.ErrInsufficientRewardPool = 21] = "ErrInsufficientRewardPool", e[e.ErrPayeeAlreadySet = 22] = "ErrPayeeAlreadySet", e[e.ErrPayeeRestricted = 23] = "ErrPayeeRestricted", e[e.ErrFeedConfigNotFound = 24] = "ErrFeedConfigNotFound";
})(uu || (uu = {}));
var lu;
(function(e) {
  e[e.ErrEmptyRelayerAddr = 1] = "ErrEmptyRelayerAddr", e[e.ErrBadRatesCount = 2] = "ErrBadRatesCount", e[e.ErrBadResolveTimesCount = 3] = "ErrBadResolveTimesCount", e[e.ErrBadRequestIDsCount = 4] = "ErrBadRequestIDsCount", e[e.ErrRelayerNotAuthorized = 5] = "ErrRelayerNotAuthorized", e[e.ErrBadPriceFeedBaseCount = 6] = "ErrBadPriceFeedBaseCount", e[e.ErrBadPriceFeedQuoteCount = 7] = "ErrBadPriceFeedQuoteCount", e[e.ErrUnsupportedOracleType = 8] = "ErrUnsupportedOracleType", e[e.ErrBadMessagesCount = 9] = "ErrBadMessagesCount", e[e.ErrBadCoinbaseMessage = 10] = "ErrBadCoinbaseMessage", e[e.ErrInvalidEthereumSignature = 11] = "ErrInvalidEthereumSignature", e[e.ErrBadCoinbaseMessageTimestamp = 12] = "ErrBadCoinbaseMessageTimestamp", e[e.ErrCoinbasePriceNotFound = 13] = "ErrCoinbasePriceNotFound", e[e.ErrBadPrice = 14] = "ErrBadPrice", e[e.ErrPriceTooLarge = 15] = "ErrPriceTooLarge", e[e.ErrInvalidBandIBCRequest = 16] = "ErrInvalidBandIBCRequest", e[e.ErrSample = 17] = "ErrSample", e[e.ErrInvalidPacketTimeout = 18] = "ErrInvalidPacketTimeout", e[e.ErrBadSymbolsCount = 19] = "ErrBadSymbolsCount", e[e.ErrBadIBCPortBind = 20] = "ErrBadIBCPortBind", e[e.ErrInvalidPortID = 21] = "ErrInvalidPortID", e[e.ErrInvalidChannelID = 22] = "ErrInvalidChannelID", e[e.ErrBadRequestInterval = 23] = "ErrBadRequestInterval", e[e.ErrInvalidBandIBCUpdateRequest = 24] = "ErrInvalidBandIBCUpdateRequest", e[e.ErrBandIBCRequestNotFound = 25] = "ErrBandIBCRequestNotFound", e[e.ErrEmptyBaseInfo = 26] = "ErrEmptyBaseInfo", e[e.ErrEmptyProvider = 27] = "ErrEmptyProvider", e[e.ErrInvalidProvider = 28] = "ErrInvalidProvider", e[e.ErrInvalidSymbol = 29] = "ErrInvalidSymbol", e[e.ErrRelayerAlreadyExists = 30] = "ErrRelayerAlreadyExists", e[e.ErrProviderPriceNotFound = 31] = "ErrProviderPriceNotFound", e[e.ErrInvalidOracleRequest = 32] = "ErrInvalidOracleRequest", e[e.ErrOraclePriceNotFound = 33] = "ErrOraclePriceNotFound";
})(lu || (lu = {}));
var du;
(function(e) {
  e[e.ErrInternal = 1] = "ErrInternal", e[e.ErrDuplicate = 2] = "ErrDuplicate", e[e.ErrInvalid = 3] = "ErrInvalid", e[e.ErrTimeout = 4] = "ErrTimeout", e[e.ErrUnknown = 5] = "ErrUnknown", e[e.ErrEmpty = 6] = "ErrEmpty", e[e.ErrOutdated = 7] = "ErrOutdated", e[e.ErrUnsupported = 8] = "ErrUnsupported", e[e.ErrNonContiguousEventNonce = 9] = "ErrNonContiguousEventNonce", e[e.ErrNoUnbatchedTxsFound = 10] = "ErrNoUnbatchedTxsFound", e[e.ErrResetDelegateKeys = 11] = "ErrResetDelegateKeys", e[e.ErrSupplyOverflow = 12] = "ErrSupplyOverflow", e[e.ErrInvalidEthSender = 13] = "ErrInvalidEthSender", e[e.ErrInvalidEthDestination = 14] = "ErrInvalidEthDestination";
})(du || (du = {}));
var mu;
(function(e) {
  e[e.ErrDenomExists = 2] = "ErrDenomExists", e[e.ErrUnauthorized = 3] = "ErrUnauthorized", e[e.ErrInvalidDenom = 4] = "ErrInvalidDenom", e[e.ErrInvalidCreator = 5] = "ErrInvalidCreator", e[e.ErrInvalidAuthorityMetadata = 6] = "ErrInvalidAuthorityMetadata", e[e.ErrInvalidGenesis = 7] = "ErrInvalidGenesis", e[e.ErrSubdenomTooLong = 8] = "ErrSubdenomTooLong", e[e.ErrSubdenomTooShort = 9] = "ErrSubdenomTooShort", e[e.ErrSubdenomNestedTooShort = 10] = "ErrSubdenomNestedTooShort", e[e.ErrCreatorTooLong = 11] = "ErrCreatorTooLong", e[e.ErrDenomDoesNotExist = 12] = "ErrDenomDoesNotExist", e[e.ErrAmountNotPositive = 13] = "ErrAmountNotPositive";
})(mu || (mu = {}));
var fu;
(function(e) {
  e[e.ErrInvalidGasLimit = 1] = "ErrInvalidGasLimit", e[e.ErrInvalidGasPrice = 2] = "ErrInvalidGasPrice", e[e.ErrInvalidContractAddress = 3] = "ErrInvalidContractAddress", e[e.ErrAlreadyRegistered = 4] = "ErrAlreadyRegistered", e[e.ErrDuplicateContract = 5] = "ErrDuplicateContract", e[e.ErrNoContractAddresses = 6] = "ErrNoContractAddresses", e[e.ErrInvalidCodeId = 7] = "ErrInvalidCodeId";
})(fu || (fu = {}));
var pu;
(function(e) {
  e[e.ErrEmptyValidatorAddr = 2] = "ErrEmptyValidatorAddr", e[e.ErrNoValidatorFound = 3] = "ErrNoValidatorFound", e[e.ErrValidatorOwnerExists = 4] = "ErrValidatorOwnerExists", e[e.ErrValidatorPubKeyExists = 5] = "ErrValidatorPubKeyExists", e[e.ErrValidatorPubKeyTypeNotSupported = 6] = "ErrValidatorPubKeyTypeNotSupported", e[e.ErrValidatorJailed = 7] = "ErrValidatorJailed", e[e.ErrBadRemoveValidator = 8] = "ErrBadRemoveValidator", e[e.ErrCommissionNegative = 9] = "ErrCommissionNegative", e[e.ErrCommissionHuge = 10] = "ErrCommissionHuge", e[e.ErrCommissionGTMaxRate = 11] = "ErrCommissionGTMaxRate", e[e.ErrCommissionUpdateTime = 12] = "ErrCommissionUpdateTime", e[e.ErrCommissionChangeRateNegative = 13] = "ErrCommissionChangeRateNegative", e[e.ErrCommissionChangeRateGTMaxRate = 14] = "ErrCommissionChangeRateGTMaxRate", e[e.ErrCommissionGTMaxChangeRate = 15] = "ErrCommissionGTMaxChangeRate", e[e.ErrSelfDelegationBelowMinimum = 16] = "ErrSelfDelegationBelowMinimum", e[e.ErrMinSelfDelegationDecreased = 17] = "ErrMinSelfDelegationDecreased", e[e.ErrEmptyDelegatorAddr = 18] = "ErrEmptyDelegatorAddr", e[e.ErrNoDelegation = 19] = "ErrNoDelegation", e[e.ErrBadDelegatorAddr = 20] = "ErrBadDelegatorAddr", e[e.ErrNoDelegatorForAddress = 21] = "ErrNoDelegatorForAddress", e[e.ErrInsufficientShares = 22] = "ErrInsufficientShares", e[e.ErrDelegationValidatorEmpty = 23] = "ErrDelegationValidatorEmpty", e[e.ErrNotEnoughDelegationShares = 24] = "ErrNotEnoughDelegationShares", e[e.ErrNotMature = 25] = "ErrNotMature", e[e.ErrNoUnbondingDelegation = 26] = "ErrNoUnbondingDelegation", e[e.ErrMaxUnbondingDelegationEntries = 27] = "ErrMaxUnbondingDelegationEntries", e[e.ErrNoRedelegation = 28] = "ErrNoRedelegation", e[e.ErrSelfRedelegation = 29] = "ErrSelfRedelegation", e[e.ErrTinyRedelegationAmount = 30] = "ErrTinyRedelegationAmount", e[e.ErrBadRedelegationDst = 31] = "ErrBadRedelegationDst", e[e.ErrTransitiveRedelegation = 32] = "ErrTransitiveRedelegation", e[e.ErrMaxRedelegationEntries = 33] = "ErrMaxRedelegationEntries", e[e.ErrDelegatorShareExRateInvalid = 34] = "ErrDelegatorShareExRateInvalid", e[e.ErrBothShareMsgsGiven = 35] = "ErrBothShareMsgsGiven", e[e.ErrNeitherShareMsgsGiven = 36] = "ErrNeitherShareMsgsGiven", e[e.ErrInvalidHistoricalInfo = 37] = "ErrInvalidHistoricalInfo", e[e.ErrNoHistoricalInfo = 38] = "ErrNoHistoricalInfo", e[e.ErrEmptyValidatorPubKey = 39] = "ErrEmptyValidatorPubKey", e[e.ErrCommissionLTMinRate = 40] = "ErrCommissionLTMinRate", e[e.ErrUnbondingNotFound = 41] = "ErrUnbondingNotFound", e[e.ErrUnbondingOnHoldRefCountNegative = 42] = "ErrUnbondingOnHoldRefCountNegative";
})(pu || (pu = {}));
var gu;
(function(e) {
  e[e.ErrUnknownProposal = 2] = "ErrUnknownProposal", e[e.ErrInactiveProposal = 3] = "ErrInactiveProposal", e[e.ErrAlreadyActiveProposal = 4] = "ErrAlreadyActiveProposal", e[e.ErrInvalidProposalContent = 5] = "ErrInvalidProposalContent", e[e.ErrInvalidProposalType = 6] = "ErrInvalidProposalType", e[e.ErrInvalidVote = 7] = "ErrInvalidVote", e[e.ErrInvalidGenesis = 8] = "ErrInvalidGenesis", e[e.ErrNoProposalHandlerExists = 9] = "ErrNoProposalHandlerExists", e[e.ErrUnroutableProposalMsg = 10] = "ErrUnroutableProposalMsg", e[e.ErrNoProposalMsgs = 11] = "ErrNoProposalMsgs", e[e.ErrInvalidProposalMsg = 12] = "ErrInvalidProposalMsg", e[e.ErrInvalidSigner = 13] = "ErrInvalidSigner", e[e.ErrInvalidSignalMsg = 14] = "ErrInvalidSignalMsg", e[e.ErrMetadataTooLong = 15] = "ErrMetadataTooLong", e[e.ErrMinDepositTooSmall = 16] = "ErrMinDepositTooSmall", e[e.ErrProposalNotFound = 17] = "ErrProposalNotFound", e[e.ErrInvalidProposer = 18] = "ErrInvalidProposer", e[e.ErrNoDeposits = 19] = "ErrNoDeposits", e[e.ErrVotingPeriodEnded = 20] = "ErrVotingPeriodEnded", e[e.ErrInvalidProposal = 21] = "ErrInvalidProposal";
})(gu || (gu = {}));
var yu;
(function(e) {
  e[e.ErrEmptyDelegatorAddr = 2] = "ErrEmptyDelegatorAddr", e[e.ErrEmptyWithdrawAddr = 3] = "ErrEmptyWithdrawAddr", e[e.ErrEmptyValidatorAddr = 4] = "ErrEmptyValidatorAddr", e[e.ErrEmptyDelegationDistInfo = 5] = "ErrEmptyDelegationDistInfo", e[e.ErrNoValidatorDistInfo = 6] = "ErrNoValidatorDistInfo", e[e.ErrNoValidatorCommission = 7] = "ErrNoValidatorCommission", e[e.ErrSetWithdrawAddrDisabled = 8] = "ErrSetWithdrawAddrDisabled", e[e.ErrBadDistribution = 9] = "ErrBadDistribution", e[e.ErrInvalidProposalAmount = 10] = "ErrInvalidProposalAmount", e[e.ErrEmptyProposalRecipient = 11] = "ErrEmptyProposalRecipient", e[e.ErrNoValidatorExists = 12] = "ErrNoValidatorExists", e[e.ErrNoDelegationExists = 13] = "ErrNoDelegationExists";
})(yu || (yu = {}));
var hu;
(function(e) {
  e[e.ErrNoInputs = 2] = "ErrNoInputs", e[e.ErrNoOutputs = 3] = "ErrNoOutputs", e[e.ErrInputOutputMismatch = 4] = "ErrInputOutputMismatch", e[e.ErrSendDisabled = 5] = "ErrSendDisabled", e[e.ErrDenomMetadataNotFound = 6] = "ErrDenomMetadataNotFound", e[e.ErrInvalidKey = 7] = "ErrInvalidKey", e[e.ErrDuplicateEntry = 8] = "ErrDuplicateEntry", e[e.ErrMultipleSenders = 9] = "ErrMultipleSenders";
})(hu || (hu = {}));
var bu;
(function(e) {
  e[e.ErrCreateFailed = 2] = "ErrCreateFailed", e[e.ErrAccountExists = 3] = "ErrAccountExists", e[e.ErrInstantiateFailed = 4] = "ErrInstantiateFailed", e[e.ErrExecuteFailed = 5] = "ErrExecuteFailed", e[e.ErrGasLimit = 6] = "ErrGasLimit", e[e.ErrInvalidGenesis = 7] = "ErrInvalidGenesis", e[e.ErrNotFound = 8] = "ErrNotFound", e[e.ErrQueryFailed = 9] = "ErrQueryFailed", e[e.ErrInvalidMsg = 10] = "ErrInvalidMsg", e[e.ErrMigrationFailed = 11] = "ErrMigrationFailed", e[e.ErrEmpty = 12] = "ErrEmpty", e[e.ErrLimit = 13] = "ErrLimit", e[e.ErrInvalid = 14] = "ErrInvalid", e[e.ErrDuplicate = 15] = "ErrDuplicate", e[e.ErrMaxIBCChannels = 16] = "ErrMaxIBCChannels", e[e.ErrUnsupportedForContract = 17] = "ErrUnsupportedForContract", e[e.ErrPinContractFailed = 18] = "ErrPinContractFailed", e[e.ErrUnpinContractFailed = 19] = "ErrUnpinContractFailed", e[e.ErrUnknownMsg = 20] = "ErrUnknownMsg", e[e.ErrInvalidEvent = 21] = "ErrInvalidEvent";
})(bu || (bu = {}));
const gn = -1;
rg.grpc.Code.Unavailable;
var ct;
(function(e) {
  e.Get = "GET", e.Post = "POST", e.Options = "OPTIONS";
})(ct || (ct = {}));
var yn;
(function(e) {
  e.Unspecified = "unspecified", e.ChainError = "chain-error", e.ExecutionError = "execution-error", e.NotFoundError = "not-found-error", e.ValidationError = "validation-error", e.WalletError = "wallet-error", e.WalletNotInstalledError = "wallet-not-installed-error", e.GrpcUnaryRequest = "grpc-unary-request", e.HttpRequest = "http-request", e.Web3 = "web3";
})(yn || (yn = {}));
const qi = (e) => `${e}`.toLowerCase().replace(new RegExp(/[-_]+/, "g"), " ").replace(new RegExp(/[^\w\s]/, "g"), "").replace(new RegExp(/\s+(.)(\w*)/, "g"), (t, n, r) => `${n.toUpperCase() + r}`).replace(new RegExp(/\w/), (t) => t.toUpperCase());
class ac extends Error {
  constructor(n, r) {
    super(n.message);
    /**
     * The type of the Error
     */
    E(this, "type", yn.Unspecified);
    /**
     * Error specific code (HttpStatus, GrpcStatus, etc)
     */
    E(this, "code", gn);
    /**
     * The name of the error (the name of the instance of the Exception)
     */
    E(this, "name");
    /**
     * The name of the error (the name of the instance of the Exception)
     * Needed for reporting reasons, ex: bugsnag
     */
    E(this, "errorClass");
    /**
     * Providing more context
     * (ex: endpoint on http request)
     */
    E(this, "context");
    /**
     * Providing more context as to where the exception was thrown
     * (ex: on-chain module, etc)
     */
    E(this, "contextModule");
    /**
     * Providing more context as to why the exception was thrown
     * (ex: on-chain error code, etc)
     */
    E(this, "contextCode");
    /**
     * Parsed message of the exception
     */
    E(this, "message", "");
    /**
     * The original stack of the error
     */
    E(this, "stack", "");
    /**
     * The original message of the error
     */
    E(this, "originalMessage", "");
    this.parseError(n), this.parseContext(r), this.parse();
  }
  parse() {
  }
  parseError(n) {
    this.setName(this.errorClass || this.constructor.name), this.setStack(n.stack || ""), this.setMessage(n.message), this.originalMessage = n.message;
  }
  parseContext(n) {
    const { contextModule: r, type: s, code: o, context: i } = n || {
      contextModule: "",
      context: "",
      code: gn,
      type: yn.Unspecified
    };
    this.context = i, this.contextModule = r, this.type = s || yn.Unspecified, this.code = o || gn;
  }
  setType(n) {
    this.type = n;
  }
  setCode(n) {
    this.code = n;
  }
  setContext(n) {
    this.context = n;
  }
  setOriginalMessage(n) {
    this.originalMessage = n;
  }
  setStack(n) {
    try {
      this.stack = n;
    } catch {
    }
  }
  setName(n) {
    super.name = n, this.name = n, this.errorClass = n;
  }
  setMessage(n) {
    super.message = n, this.message = n;
  }
  setContextModule(n) {
    this.contextModule = n;
  }
  setContextCode(n) {
    this.contextCode = n;
  }
  toOriginalError() {
    const n = new Error(this.originalMessage);
    return n.stack = this.stack, n.name = this.name || "", n;
  }
  toError() {
    const n = new Error(this.message);
    return n.stack = this.stack, n.name = this.name || "", n;
  }
  toCompactError() {
    const n = this.name || qi(this.type), r = new Error(`${this.message} | ${JSON.stringify({
      originalMessage: this.originalMessage,
      message: this.message,
      errorClass: n,
      code: this.code,
      type: this.type,
      context: this.context,
      contextModule: this.contextModule,
      contextCode: this.contextCode,
      stack: (this.stack || "").split(`
`).map((s) => s.trim())
    })}`);
    return r.stack = this.stack, r.name = this.name || qi(this.type), r;
  }
  toJson() {
    return JSON.stringify({ error: this.message, stack: this.stack });
  }
  toObject() {
    const n = this.name || qi(this.type);
    return {
      message: this.message,
      originalMessage: this.originalMessage,
      errorClass: n,
      code: this.code,
      type: this.type,
      context: this.context,
      contextModule: this.contextModule,
      contextCode: this.contextCode,
      stack: (this.stack || "").split(`
`).map((r) => r.trim())
    };
  }
  toString() {
    return this.message;
  }
}
/**
 * The name of the error class as it the constructor.name might
 * give a minified class name when we bundle using webpack
 */
E(ac, "errorClass", "");
class ut extends ac {
  constructor(n, r) {
    super(n, r);
    E(this, "errorClass", "HttpRequestException");
    E(this, "method", ct.Get);
    this.type = yn.HttpRequest, this.method = r && r.method || ct.Get;
  }
}
class Vr extends ac {
  constructor() {
    super(...arguments);
    E(this, "errorClass", "GeneralException");
  }
}
var fn;
(function(e) {
  e[e.CONTINUE = 100] = "CONTINUE", e[e.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", e[e.PROCESSING = 102] = "PROCESSING", e[e.EARLY_HINTS = 103] = "EARLY_HINTS", e[e.OK = 200] = "OK", e[e.CREATED = 201] = "CREATED", e[e.ACCEPTED = 202] = "ACCEPTED", e[e.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.RESET_CONTENT = 205] = "RESET_CONTENT", e[e.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", e[e.MULTI_STATUS = 207] = "MULTI_STATUS", e[e.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", e[e.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", e[e.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", e[e.SEE_OTHER = 303] = "SEE_OTHER", e[e.NOT_MODIFIED = 304] = "NOT_MODIFIED", e[e.USE_PROXY = 305] = "USE_PROXY", e[e.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", e[e.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", e[e.FORBIDDEN = 403] = "FORBIDDEN", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", e[e.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", e[e.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", e[e.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", e[e.CONFLICT = 409] = "CONFLICT", e[e.GONE = 410] = "GONE", e[e.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", e[e.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", e[e.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", e[e.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", e[e.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", e[e.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", e[e.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", e[e.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", e[e.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", e[e.METHOD_FAILURE = 420] = "METHOD_FAILURE", e[e.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", e[e.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", e[e.LOCKED = 423] = "LOCKED", e[e.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", e[e.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", e[e.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", e[e.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", e[e.BAD_GATEWAY = 502] = "BAD_GATEWAY", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", e[e.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", e[e.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", e[e.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(fn || (fn = {}));
const Zr = "Cosmwasm";
function vu(e) {
  try {
    const t = Fr.decodeToBytes(e);
    return { data: t.bytes, prefix: t.prefix };
  } catch {
  }
  try {
    return { data: tc.decode(e) };
  } catch {
  }
  try {
    return { data: nc.decode(e) };
  } catch {
  }
  throw new Error(`Cannot decode: ${e}`);
}
const ve = class ve {
  constructor(t) {
    E(this, "platform", Zr);
    // the actual bytes of the address
    E(this, "address");
    // The domain is the prefix for the address, like "cosmos" or "ibc"
    E(this, "domain");
    // The denom is the token name, like "uatom" or "usdc"
    E(this, "denom");
    // The denomType is "native", "ibc", or "factory"
    E(this, "denomType");
    if (ve.instanceof(t)) {
      const n = t;
      this.address = n.address, this.domain = n.domain, this.denom = n.denom, this.denomType = n.denomType;
      return;
    }
    if (typeof t == "string") {
      if (t.length <= 8) {
        this.address = new Uint8Array(0), this.denom = t, this.denomType = "native";
        return;
      }
      if (t.indexOf("/") !== -1) {
        const n = t.split("/");
        if (n.length >= 3) {
          const { data: r, prefix: s } = vu(n[n.length - 2]);
          this.address = r, this.domain = s, this.denom = n[n.length - 1], this.denomType = n.slice(0, n.length - 2).join("/");
        } else {
          const { data: r } = vu(n[1]);
          this.address = r, this.denomType = n[0];
        }
      } else {
        if (!ve.isValidAddress(t))
          throw new Error(`Invalid Cosmwasm address:  ${t}`);
        const { bytes: n, prefix: r } = Fr.decodeToBytes(t);
        this.address = n, this.domain = r;
      }
    } else if (t instanceof Uint8Array)
      this.address = t;
    else if (Ps.instanceof(t))
      this.address = t.toUint8Array();
    else
      throw new Error(`Invalid Cosmwasm address ${t}`);
    if (!ve.validAddressLength(this.address))
      throw new Error("Expected 20 or 32 bytes address");
  }
  unwrap() {
    return this.toString();
  }
  toString() {
    return this.denomType !== void 0 ? this.denomType === "native" ? this.denom : this.denomType === "ibc" ? `${this.denomType.toLowerCase()}/${tc.encode(this.address).toUpperCase()}` : `${this.denomType}/${ve.encode(this.domain, this.address)}/${this.denom}` : ve.encode(this.domain, this.address);
  }
  toNative() {
    return this;
  }
  toUint8Array() {
    return this.address;
  }
  toUniversalAddress() {
    const t = new Uint8Array(Ps.byteSize);
    return t.set(this.address, Ps.byteSize - this.address.length), new Ps(t);
  }
  static isValidAddress(t) {
    try {
      const n = Fr.decodeToBytes(t);
      return ve.validAddressLength(n.bytes);
    } catch {
    }
    return !1;
  }
  static encode(t, n) {
    return Fr.encode(t, Fr.toWords(n));
  }
  static validAddressLength(t) {
    if (t.length !== ve.contractAddressByteSize && t.length !== ve.accountAddressByteSize)
      throw new Error(`Invalid Cosmwasm address, expected ${ve.contractAddressByteSize} or ${ve.accountAddressByteSize} bytes but got ${t.length}`);
    return !0;
  }
  static instanceof(t) {
    return t.platform === Zr;
  }
  equals(t) {
    return ve.instanceof(t) ? this.toString() === t.toString() : t.equals(this.toUniversalAddress());
  }
};
E(ve, "contractAddressByteSize", 32), E(ve, "accountAddressByteSize", 20);
let Te = ve;
Kf(Zr, Te);
const dE = 1e6, mE = "/cosmwasm.wasm.v1.MsgExecuteContract", fE = "/ibc.applications.transfer.v1.MsgTransfer", kd = "transfer", pE = "send_packet", gE = "recv_packet", yE = "packet_dst_channel", hE = "packet_src_channel", bE = "packet_src_port", vE = "packet_dst_port", wE = "packet_sequence", _E = "packet_data", SE = 60 * 60 * 1e3, Ed = [
  ["Cosmoshub", "cosmos"],
  ["Evmos", "evmos"],
  ["Injective", "inj"],
  ["Kujira", "kuji"],
  ["Osmosis", "osmo"],
  ["Sei", "sei"],
  ["Terra", "terra"],
  ["Terra2", "terra"],
  ["Wormchain", "wormhole"],
  ["Xpla", "xpla"],
  ["Celestia", "celestia"],
  ["Stargaze", "stars"],
  ["Dymension", "dym"],
  ["Neutron", "neutron"],
  ["Seda", "seda"],
  ["Provenance", "pb"]
], Td = _n(Ed);
_n(Ed, [1, [0]]);
const Od = [
  [
    "Mainnet",
    [
      ["Cosmoshub", "uatom"],
      ["Evmos", "aevmos"],
      ["Injective", "inj"],
      ["Kujira", "kuji"],
      ["Osmosis", "uosmo"],
      ["Sei", "usei"],
      ["Terra", "luna"],
      ["Terra2", "uluna"],
      ["Wormchain", "uworm"],
      ["Xpla", "uxpla"],
      ["Celestia", "utia"],
      ["Dymension", "adym"],
      ["Stargaze", "ustars"],
      ["Neutron", "untrn"],
      ["Provenance", "nhash"]
    ]
  ],
  [
    "Testnet",
    [
      ["Cosmoshub", "uatom"],
      ["Evmos", "atevmos"],
      ["Injective", "inj"],
      ["Kujira", "kuji"],
      ["Osmosis", "uosmo"],
      ["Sei", "usei"],
      ["Terra", "luna"],
      ["Terra2", "uluna"],
      ["Wormchain", "uworm"],
      ["Xpla", "uxpla"],
      ["Seda", "aseda"]
    ]
  ],
  [
    "Devnet",
    [
      ["Cosmoshub", "uatom"],
      ["Evmos", "atevmos"],
      ["Injective", "inj"],
      ["Kujira", "kuji"],
      ["Osmosis", "uosmo"],
      ["Sei", "usei"],
      ["Terra", "luna"],
      ["Terra2", "uluna"],
      ["Wormchain", "uworm"],
      ["Xpla", "uxpla"]
    ]
  ]
], sg = _n(Od);
_n(Od, [[0, 2], [1]]);
const og = [
  [
    "Mainnet",
    [
      [
        "Wormchain",
        {
          Osmosis: "channel-3",
          Evmos: "channel-5",
          Kujira: "channel-9",
          Stargaze: "channel-12",
          Injective: "channel-13",
          Dymension: "channel-15"
        }
      ],
      ["Osmosis", { Wormchain: "channel-2186" }],
      ["Evmos", { Wormchain: "channel-94" }],
      ["Kujira", { Wormchain: "channel-113" }],
      ["Injective", { Wormchain: "channel-183" }],
      ["Dymension", { Wormchain: "channel-36" }],
      ["Stargaze", { Wormchain: "channel-278" }]
    ]
  ],
  [
    "Testnet",
    [
      ["Wormchain", { Cosmoshub: "channel-5", Osmosis: "channel-9" }],
      ["Cosmoshub", { Wormchain: "channel-3086" }],
      ["Osmosis", { Wormchain: "channel-3906" }]
    ]
  ],
  [
    "Devnet",
    [
      ["Wormchain", { Cosmoshub: "channel-1", Osmosis: "channel-2" }],
      ["Cosmoshub", { Wormchain: "channel-1" }],
      ["Osmosis", { Wormchain: "channel-1" }]
    ]
  ]
], wu = _n(og), ig = ["Evmos", "Injective"], ag = [
  [
    "Mainnet",
    [
      ["Injective", "https://lcd.injective.network"],
      ["Evmos", "https://rest.bd.evmos.org:1317"]
    ]
  ],
  [
    "Testnet",
    [
      ["Injective", "https://k8s.testnet.lcd.injective.network"],
      ["Evmos", "https://rest.bd.evmos.dev:1317"]
    ]
  ],
  [
    "Devnet",
    [
      ["Injective", "https://localhost:1234"],
      ["Evmos", "https://localhost:1233"]
    ]
  ]
], cg = _n(ag), ug = [
  [
    "Mainnet",
    [
      ["Terra", "28.325"],
      ["Terra2", "0.015"],
      ["Osmosis", "0.025"],
      ["Sei", "0.02"],
      ["Cosmoshub", "0.025"],
      ["Kujira", "0.0051"],
      ["Neutron", "0.075"],
      ["Celestia", "0.02"],
      ["Stargaze", "1.1"],
      ["Injective", "700000000"],
      ["Xpla", "1147500000000"],
      ["Evmos", "25000000000"],
      ["Dymension", "5000000000"],
      ["Provenance", "2100"]
    ]
  ]
], AE = _n(ug);
var hn = {}, as = {}, se = {}, So = {}, lg = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(So, "__esModule", { value: !0 });
So.Decimal = void 0;
const it = lg(_o), _u = 100;
class ne {
  static fromUserInput(t, n) {
    ne.verifyFractionalDigits(n);
    const r = t.match(/[^0-9.]/);
    if (r)
      throw new Error(`Invalid character at position ${r.index + 1}`);
    let s, o;
    if (t === "")
      s = "0", o = "";
    else if (t.search(/\./) === -1)
      s = t, o = "";
    else {
      const a = t.split(".");
      switch (a.length) {
        case 0:
        case 1:
          throw new Error("Fewer than two elements in split result. This must not happen here.");
        case 2:
          if (!a[1])
            throw new Error("Fractional part missing");
          s = a[0], o = a[1].replace(/0+$/, "");
          break;
        default:
          throw new Error("More than one separator found");
      }
    }
    if (o.length > n)
      throw new Error("Got more fractional digits than supported");
    const i = `${s}${o.padEnd(n, "0")}`;
    return new ne(i, n);
  }
  static fromAtomics(t, n) {
    return ne.verifyFractionalDigits(n), new ne(t, n);
  }
  /**
   * Creates a Decimal with value 0.0 and the given number of fractial digits.
   *
   * Fractional digits are not relevant for the value but needed to be able
   * to perform arithmetic operations with other decimals.
   */
  static zero(t) {
    return ne.verifyFractionalDigits(t), new ne("0", t);
  }
  /**
   * Creates a Decimal with value 1.0 and the given number of fractial digits.
   *
   * Fractional digits are not relevant for the value but needed to be able
   * to perform arithmetic operations with other decimals.
   */
  static one(t) {
    return ne.verifyFractionalDigits(t), new ne("1" + "0".repeat(t), t);
  }
  static verifyFractionalDigits(t) {
    if (!Number.isInteger(t))
      throw new Error("Fractional digits is not an integer");
    if (t < 0)
      throw new Error("Fractional digits must not be negative");
    if (t > _u)
      throw new Error(`Fractional digits must not exceed ${_u}`);
  }
  static compare(t, n) {
    if (t.fractionalDigits !== n.fractionalDigits)
      throw new Error("Fractional digits do not match");
    return t.data.atomics.cmp(new it.default(n.atomics));
  }
  get atomics() {
    return this.data.atomics.toString();
  }
  get fractionalDigits() {
    return this.data.fractionalDigits;
  }
  constructor(t, n) {
    if (!t.match(/^[0-9]+$/))
      throw new Error("Invalid string format. Only non-negative integers in decimal representation supported.");
    this.data = {
      atomics: new it.default(t),
      fractionalDigits: n
    };
  }
  /** Creates a new instance with the same value */
  clone() {
    return new ne(this.atomics, this.fractionalDigits);
  }
  /** Returns the greatest decimal <= this which has no fractional part (rounding down) */
  floor() {
    const t = new it.default(10).pow(new it.default(this.data.fractionalDigits)), n = this.data.atomics.div(t);
    return this.data.atomics.mod(t).isZero() ? this.clone() : ne.fromAtomics(n.mul(t).toString(), this.fractionalDigits);
  }
  /** Returns the smallest decimal >= this which has no fractional part (rounding up) */
  ceil() {
    const t = new it.default(10).pow(new it.default(this.data.fractionalDigits)), n = this.data.atomics.div(t);
    return this.data.atomics.mod(t).isZero() ? this.clone() : ne.fromAtomics(n.addn(1).mul(t).toString(), this.fractionalDigits);
  }
  toString() {
    const t = new it.default(10).pow(new it.default(this.data.fractionalDigits)), n = this.data.atomics.div(t), r = this.data.atomics.mod(t);
    if (r.isZero())
      return n.toString();
    {
      const o = r.toString().padStart(this.data.fractionalDigits, "0").replace(/0+$/, "");
      return `${n.toString()}.${o}`;
    }
  }
  /**
   * Returns an approximation as a float type. Only use this if no
   * exact calculation is required.
   */
  toFloatApproximation() {
    const t = Number(this.toString());
    if (Number.isNaN(t))
      throw new Error("Conversion to number failed");
    return t;
  }
  /**
   * a.plus(b) returns a+b.
   *
   * Both values need to have the same fractional digits.
   */
  plus(t) {
    if (this.fractionalDigits !== t.fractionalDigits)
      throw new Error("Fractional digits do not match");
    const n = this.data.atomics.add(new it.default(t.atomics));
    return new ne(n.toString(), this.fractionalDigits);
  }
  /**
   * a.minus(b) returns a-b.
   *
   * Both values need to have the same fractional digits.
   * The resulting difference needs to be non-negative.
   */
  minus(t) {
    if (this.fractionalDigits !== t.fractionalDigits)
      throw new Error("Fractional digits do not match");
    const n = this.data.atomics.sub(new it.default(t.atomics));
    if (n.ltn(0))
      throw new Error("Difference must not be negative");
    return new ne(n.toString(), this.fractionalDigits);
  }
  /**
   * a.multiply(b) returns a*b.
   *
   * We only allow multiplication by unsigned integers to avoid rounding errors.
   */
  multiply(t) {
    const n = this.data.atomics.mul(new it.default(t.toString()));
    return new ne(n.toString(), this.fractionalDigits);
  }
  equals(t) {
    return ne.compare(this, t) === 0;
  }
  isLessThan(t) {
    return ne.compare(this, t) < 0;
  }
  isLessThanOrEqual(t) {
    return ne.compare(this, t) <= 0;
  }
  isGreaterThan(t) {
    return ne.compare(this, t) > 0;
  }
  isGreaterThanOrEqual(t) {
    return ne.compare(this, t) >= 0;
  }
}
So.Decimal = ne;
var bt = {}, dg = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.Uint64 = bt.Uint53 = bt.Int53 = bt.Uint32 = void 0;
const Cs = dg(_o), mg = new Cs.default("18446744073709551615", 10, "be");
class Gr {
  /** @deprecated use Uint32.fromBytes */
  static fromBigEndianBytes(t) {
    return Gr.fromBytes(t);
  }
  /**
   * Creates a Uint32 from a fixed length byte array.
   *
   * @param bytes a list of exactly 4 bytes
   * @param endianess defaults to big endian
   */
  static fromBytes(t, n = "be") {
    if (t.length !== 4)
      throw new Error("Invalid input length. Expected 4 bytes.");
    for (let s = 0; s < t.length; ++s)
      if (!Number.isInteger(t[s]) || t[s] > 255 || t[s] < 0)
        throw new Error("Invalid value in byte. Found: " + t[s]);
    const r = n === "be" ? t : Array.from(t).reverse();
    return new Gr(r[0] * 2 ** 24 + r[1] * 2 ** 16 + r[2] * 2 ** 8 + r[3]);
  }
  static fromString(t) {
    if (!t.match(/^[0-9]+$/))
      throw new Error("Invalid string format");
    return new Gr(Number.parseInt(t, 10));
  }
  constructor(t) {
    if (Number.isNaN(t))
      throw new Error("Input is not a number");
    if (!Number.isInteger(t))
      throw new Error("Input is not an integer");
    if (t < 0 || t > 4294967295)
      throw new Error("Input not in uint32 range: " + t.toString());
    this.data = t;
  }
  toBytesBigEndian() {
    return new Uint8Array([
      Math.floor(this.data / 2 ** 24) & 255,
      Math.floor(this.data / 2 ** 16) & 255,
      Math.floor(this.data / 2 ** 8) & 255,
      Math.floor(this.data / 2 ** 0) & 255
    ]);
  }
  toBytesLittleEndian() {
    return new Uint8Array([
      Math.floor(this.data / 2 ** 0) & 255,
      Math.floor(this.data / 2 ** 8) & 255,
      Math.floor(this.data / 2 ** 16) & 255,
      Math.floor(this.data / 2 ** 24) & 255
    ]);
  }
  toNumber() {
    return this.data;
  }
  toBigInt() {
    return BigInt(this.toNumber());
  }
  toString() {
    return this.data.toString();
  }
}
bt.Uint32 = Gr;
class es {
  static fromString(t) {
    if (!t.match(/^-?[0-9]+$/))
      throw new Error("Invalid string format");
    return new es(Number.parseInt(t, 10));
  }
  constructor(t) {
    if (Number.isNaN(t))
      throw new Error("Input is not a number");
    if (!Number.isInteger(t))
      throw new Error("Input is not an integer");
    if (t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER)
      throw new Error("Input not in int53 range: " + t.toString());
    this.data = t;
  }
  toNumber() {
    return this.data;
  }
  toBigInt() {
    return BigInt(this.toNumber());
  }
  toString() {
    return this.data.toString();
  }
}
bt.Int53 = es;
class cc {
  static fromString(t) {
    const n = es.fromString(t);
    return new cc(n.toNumber());
  }
  constructor(t) {
    const n = new es(t);
    if (n.toNumber() < 0)
      throw new Error("Input is negative");
    this.data = n;
  }
  toNumber() {
    return this.data.toNumber();
  }
  toBigInt() {
    return BigInt(this.toNumber());
  }
  toString() {
    return this.data.toString();
  }
}
bt.Uint53 = cc;
class xn {
  /** @deprecated use Uint64.fromBytes */
  static fromBytesBigEndian(t) {
    return xn.fromBytes(t);
  }
  /**
   * Creates a Uint64 from a fixed length byte array.
   *
   * @param bytes a list of exactly 8 bytes
   * @param endianess defaults to big endian
   */
  static fromBytes(t, n = "be") {
    if (t.length !== 8)
      throw new Error("Invalid input length. Expected 8 bytes.");
    for (let s = 0; s < t.length; ++s)
      if (!Number.isInteger(t[s]) || t[s] > 255 || t[s] < 0)
        throw new Error("Invalid value in byte. Found: " + t[s]);
    const r = n === "be" ? Array.from(t) : Array.from(t).reverse();
    return new xn(new Cs.default(r));
  }
  static fromString(t) {
    if (!t.match(/^[0-9]+$/))
      throw new Error("Invalid string format");
    return new xn(new Cs.default(t, 10, "be"));
  }
  static fromNumber(t) {
    if (Number.isNaN(t))
      throw new Error("Input is not a number");
    if (!Number.isInteger(t))
      throw new Error("Input is not an integer");
    let n;
    try {
      n = new Cs.default(t);
    } catch {
      throw new Error("Input is not a safe integer");
    }
    return new xn(n);
  }
  constructor(t) {
    if (t.isNeg())
      throw new Error("Input is negative");
    if (t.gt(mg))
      throw new Error("Input exceeds uint64 range");
    this.data = t;
  }
  toBytesBigEndian() {
    return Uint8Array.from(this.data.toArray("be", 8));
  }
  toBytesLittleEndian() {
    return Uint8Array.from(this.data.toArray("le", 8));
  }
  toString() {
    return this.data.toString(10);
  }
  toBigInt() {
    return BigInt(this.toString());
  }
  toNumber() {
    return this.data.toNumber();
  }
}
bt.Uint64 = xn;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Uint64 = e.Uint53 = e.Uint32 = e.Int53 = e.Decimal = void 0;
  var t = So;
  Object.defineProperty(e, "Decimal", { enumerable: !0, get: function() {
    return t.Decimal;
  } });
  var n = bt;
  Object.defineProperty(e, "Int53", { enumerable: !0, get: function() {
    return n.Int53;
  } }), Object.defineProperty(e, "Uint32", { enumerable: !0, get: function() {
    return n.Uint32;
  } }), Object.defineProperty(e, "Uint53", { enumerable: !0, get: function() {
    return n.Uint53;
  } }), Object.defineProperty(e, "Uint64", { enumerable: !0, get: function() {
    return n.Uint64;
  } });
})(se);
var Et = {}, Ao = {};
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.decodeTxRaw = void 0;
const Fi = Rt;
function fg(e) {
  const t = Fi.TxRaw.decode(e);
  return {
    authInfo: Fi.AuthInfo.decode(t.authInfoBytes),
    body: Fi.TxBody.decode(t.bodyBytes),
    signatures: t.signatures
  };
}
Ao.decodeTxRaw = fg;
var Wn = {}, gt = {}, qe = {}, be = {}, vt = {}, j = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.fromAscii = Jn.toAscii = void 0;
function pg(e) {
  const t = (n) => n.split("").map((r) => {
    const s = r.charCodeAt(0);
    if (s < 32 || s > 126)
      throw new Error("Cannot encode character that is out of printable ASCII range: " + s);
    return s;
  });
  return Uint8Array.from(t(e));
}
Jn.toAscii = pg;
function gg(e) {
  return ((n) => n.map((r) => {
    if (r < 32 || r > 126)
      throw new Error("Cannot decode character that is out of printable ASCII range: " + r);
    return String.fromCharCode(r);
  }))(Array.from(e)).join("");
}
Jn.fromAscii = gg;
var Gn = {}, yg = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), hg = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), bg = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && yg(t, e, n);
  return hg(t, e), t;
};
Object.defineProperty(Gn, "__esModule", { value: !0 });
Gn.fromBase64 = Gn.toBase64 = void 0;
const Id = bg(zf);
function vg(e) {
  return Id.fromByteArray(e);
}
Gn.toBase64 = vg;
function wg(e) {
  if (!e.match(/^[a-zA-Z0-9+/]*={0,2}$/))
    throw new Error("Invalid base64 string format");
  return Id.toByteArray(e);
}
Gn.fromBase64 = wg;
var Ht = {}, ro = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", ka = {};
for (var ks = 0; ks < ro.length; ks++) {
  var Vi = ro.charAt(ks);
  if (ka[Vi] !== void 0)
    throw new TypeError(Vi + " is ambiguous");
  ka[Vi] = ks;
}
function Ln(e) {
  var t = e >> 25;
  return (e & 33554431) << 5 ^ -(t >> 0 & 1) & 996825010 ^ -(t >> 1 & 1) & 642813549 ^ -(t >> 2 & 1) & 513874426 ^ -(t >> 3 & 1) & 1027748829 ^ -(t >> 4 & 1) & 705979059;
}
function Bd(e) {
  for (var t = 1, n = 0; n < e.length; ++n) {
    var r = e.charCodeAt(n);
    if (r < 33 || r > 126)
      return "Invalid prefix (" + e + ")";
    t = Ln(t) ^ r >> 5;
  }
  for (t = Ln(t), n = 0; n < e.length; ++n) {
    var s = e.charCodeAt(n);
    t = Ln(t) ^ s & 31;
  }
  return t;
}
function _g(e, t, n) {
  if (n = n || 90, e.length + 7 + t.length > n)
    throw new TypeError("Exceeds length limit");
  e = e.toLowerCase();
  var r = Bd(e);
  if (typeof r == "string")
    throw new Error(r);
  for (var s = e + "1", o = 0; o < t.length; ++o) {
    var i = t[o];
    if (i >> 5)
      throw new Error("Non 5-bit word");
    r = Ln(r) ^ i, s += ro.charAt(i);
  }
  for (o = 0; o < 6; ++o)
    r = Ln(r);
  for (r ^= 1, o = 0; o < 6; ++o) {
    var a = r >> (5 - o) * 5 & 31;
    s += ro.charAt(a);
  }
  return s;
}
function Nd(e, t) {
  if (t = t || 90, e.length < 8)
    return e + " too short";
  if (e.length > t)
    return "Exceeds length limit";
  var n = e.toLowerCase(), r = e.toUpperCase();
  if (e !== n && e !== r)
    return "Mixed-case string " + e;
  e = n;
  var s = e.lastIndexOf("1");
  if (s === -1)
    return "No separator character for " + e;
  if (s === 0)
    return "Missing prefix for " + e;
  var o = e.slice(0, s), i = e.slice(s + 1);
  if (i.length < 6)
    return "Data too short";
  var a = Bd(o);
  if (typeof a == "string")
    return a;
  for (var c = [], u = 0; u < i.length; ++u) {
    var l = i.charAt(u), d = ka[l];
    if (d === void 0)
      return "Unknown character " + l;
    a = Ln(a) ^ d, !(u + 6 >= i.length) && c.push(d);
  }
  return a !== 1 ? "Invalid checksum for " + e : { prefix: o, words: c };
}
function Sg() {
  var e = Nd.apply(null, arguments);
  if (typeof e == "object")
    return e;
}
function Ag(e) {
  var t = Nd.apply(null, arguments);
  if (typeof t == "object")
    return t;
  throw new Error(t);
}
function Po(e, t, n, r) {
  for (var s = 0, o = 0, i = (1 << n) - 1, a = [], c = 0; c < e.length; ++c)
    for (s = s << t | e[c], o += t; o >= n; )
      o -= n, a.push(s >> o & i);
  if (r)
    o > 0 && a.push(s << n - o & i);
  else {
    if (o >= t)
      return "Excess padding";
    if (s << n - o & i)
      return "Non-zero padding";
  }
  return a;
}
function Pg(e) {
  var t = Po(e, 8, 5, !0);
  if (Array.isArray(t))
    return t;
}
function kg(e) {
  var t = Po(e, 8, 5, !0);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
function Eg(e) {
  var t = Po(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
}
function Tg(e) {
  var t = Po(e, 5, 8, !1);
  if (Array.isArray(t))
    return t;
  throw new Error(t);
}
var Og = {
  decodeUnsafe: Sg,
  decode: Ag,
  encode: _g,
  toWordsUnsafe: Pg,
  toWords: kg,
  fromWordsUnsafe: Eg,
  fromWords: Tg
}, Ig = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Bg = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Ng = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Ig(t, e, n);
  return Bg(t, e), t;
};
Object.defineProperty(Ht, "__esModule", { value: !0 });
Ht.normalizeBech32 = Ht.fromBech32 = Ht.toBech32 = void 0;
const so = Ng(Og);
function Md(e, t, n) {
  return so.encode(e, so.toWords(t), n);
}
Ht.toBech32 = Md;
function Rd(e, t = 1 / 0) {
  const n = so.decode(e, t);
  return {
    prefix: n.prefix,
    data: new Uint8Array(so.fromWords(n.words))
  };
}
Ht.fromBech32 = Rd;
function Mg(e) {
  const { prefix: t, data: n } = Rd(e);
  return Md(t, n);
}
Ht.normalizeBech32 = Mg;
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.fromHex = Kn.toHex = void 0;
function Rg(e) {
  let t = "";
  for (const n of e)
    t += ("0" + n.toString(16)).slice(-2);
  return t;
}
Kn.toHex = Rg;
function jg(e) {
  if (e.length % 2 !== 0)
    throw new Error("hex string length must be a multiple of 2");
  const t = new Uint8Array(e.length / 2);
  for (let n = 0; n < t.length; n++) {
    const r = 2 * n, s = e.slice(r, r + 2);
    if (!s.match(/[0-9a-f]{2}/i))
      throw new Error("hex string contains invalid characters");
    t[n] = parseInt(s, 16);
  }
  return t;
}
Kn.fromHex = jg;
var zn = {};
Object.defineProperty(zn, "__esModule", { value: !0 });
zn.toRfc3339 = zn.fromRfc3339 = void 0;
const Dg = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?((?:[+-]\d{2}:\d{2})|Z)$/;
function Tn(e, t = 2) {
  return e.toString().padStart(t, "0");
}
function Ug(e) {
  const t = Dg.exec(e);
  if (!t)
    throw new Error("Date string is not in RFC3339 format");
  const n = +t[1], r = +t[2], s = +t[3], o = +t[4], i = +t[5], a = +t[6], c = t[7] ? Math.floor(+t[7] * 1e3) : 0;
  let u, l, d;
  t[8] === "Z" ? (u = 1, l = 0, d = 0) : (u = t[8].substring(0, 1) === "-" ? -1 : 1, l = +t[8].substring(1, 3), d = +t[8].substring(4, 6));
  const b = u * (l * 60 + d) * 60, y = /* @__PURE__ */ new Date();
  return y.setUTCFullYear(n, r - 1, s), y.setUTCHours(o, i, a, c), new Date(y.getTime() - b * 1e3);
}
zn.fromRfc3339 = Ug;
function $g(e) {
  const t = e.getUTCFullYear(), n = Tn(e.getUTCMonth() + 1), r = Tn(e.getUTCDate()), s = Tn(e.getUTCHours()), o = Tn(e.getUTCMinutes()), i = Tn(e.getUTCSeconds()), a = Tn(e.getUTCMilliseconds(), 3);
  return `${t}-${n}-${r}T${s}:${o}:${i}.${a}Z`;
}
zn.toRfc3339 = $g;
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
Qn.fromUtf8 = Qn.toUtf8 = void 0;
function xg(e) {
  return new TextEncoder().encode(e);
}
Qn.toUtf8 = xg;
function Hg(e, t = !1) {
  const n = !t;
  return new TextDecoder("utf-8", { fatal: n }).decode(e);
}
Qn.fromUtf8 = Hg;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.toUtf8 = e.fromUtf8 = e.toRfc3339 = e.fromRfc3339 = e.toHex = e.fromHex = e.toBech32 = e.normalizeBech32 = e.fromBech32 = e.toBase64 = e.fromBase64 = e.toAscii = e.fromAscii = void 0;
  var t = Jn;
  Object.defineProperty(e, "fromAscii", { enumerable: !0, get: function() {
    return t.fromAscii;
  } }), Object.defineProperty(e, "toAscii", { enumerable: !0, get: function() {
    return t.toAscii;
  } });
  var n = Gn;
  Object.defineProperty(e, "fromBase64", { enumerable: !0, get: function() {
    return n.fromBase64;
  } }), Object.defineProperty(e, "toBase64", { enumerable: !0, get: function() {
    return n.toBase64;
  } });
  var r = Ht;
  Object.defineProperty(e, "fromBech32", { enumerable: !0, get: function() {
    return r.fromBech32;
  } }), Object.defineProperty(e, "normalizeBech32", { enumerable: !0, get: function() {
    return r.normalizeBech32;
  } }), Object.defineProperty(e, "toBech32", { enumerable: !0, get: function() {
    return r.toBech32;
  } });
  var s = Kn;
  Object.defineProperty(e, "fromHex", { enumerable: !0, get: function() {
    return s.fromHex;
  } }), Object.defineProperty(e, "toHex", { enumerable: !0, get: function() {
    return s.toHex;
  } });
  var o = zn;
  Object.defineProperty(e, "fromRfc3339", { enumerable: !0, get: function() {
    return o.fromRfc3339;
  } }), Object.defineProperty(e, "toRfc3339", { enumerable: !0, get: function() {
    return o.toRfc3339;
  } });
  var i = Qn;
  Object.defineProperty(e, "fromUtf8", { enumerable: !0, get: function() {
    return i.fromUtf8;
  } }), Object.defineProperty(e, "toUtf8", { enumerable: !0, get: function() {
    return i.toUtf8;
  } });
})(j);
var Oe = {}, te = {}, Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.arrayContentStartsWith = Cn.arrayContentEquals = void 0;
function qg(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; ++n)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
Cn.arrayContentEquals = qg;
function Fg(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; ++n)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
Cn.arrayContentStartsWith = Fg;
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.assertDefinedAndNotNull = qt.assertDefined = qt.assert = void 0;
function Vg(e, t) {
  if (!e)
    throw new Error(t || "condition is not truthy");
}
qt.assert = Vg;
function Lg(e, t) {
  if (e === void 0)
    throw new Error(t ?? "value is undefined");
}
qt.assertDefined = Lg;
function Wg(e, t) {
  if (e == null)
    throw new Error(t ?? "value is undefined or null");
}
qt.assertDefinedAndNotNull = Wg;
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.sleep = void 0;
async function Jg(e) {
  return new Promise((t) => setTimeout(t, e));
}
ko.sleep = Jg;
var Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.isDefined = Ft.isUint8Array = Ft.isNonNullObject = void 0;
function jd(e) {
  return typeof e == "object" && e !== null;
}
Ft.isNonNullObject = jd;
function Gg(e) {
  return !(!jd(e) || Object.prototype.toString.call(e) !== "[object Uint8Array]" || typeof U.Buffer < "u" && typeof U.Buffer.isBuffer < "u" && U.Buffer.isBuffer(e));
}
Ft.isUint8Array = Gg;
function Kg(e) {
  return e !== void 0;
}
Ft.isDefined = Kg;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUint8Array = e.isNonNullObject = e.isDefined = e.sleep = e.assertDefinedAndNotNull = e.assertDefined = e.assert = e.arrayContentStartsWith = e.arrayContentEquals = void 0;
  var t = Cn;
  Object.defineProperty(e, "arrayContentEquals", { enumerable: !0, get: function() {
    return t.arrayContentEquals;
  } }), Object.defineProperty(e, "arrayContentStartsWith", { enumerable: !0, get: function() {
    return t.arrayContentStartsWith;
  } });
  var n = qt;
  Object.defineProperty(e, "assert", { enumerable: !0, get: function() {
    return n.assert;
  } }), Object.defineProperty(e, "assertDefined", { enumerable: !0, get: function() {
    return n.assertDefined;
  } }), Object.defineProperty(e, "assertDefinedAndNotNull", { enumerable: !0, get: function() {
    return n.assertDefinedAndNotNull;
  } });
  var r = ko;
  Object.defineProperty(e, "sleep", { enumerable: !0, get: function() {
    return r.sleep;
  } });
  var s = Ft;
  Object.defineProperty(e, "isDefined", { enumerable: !0, get: function() {
    return s.isDefined;
  } }), Object.defineProperty(e, "isNonNullObject", { enumerable: !0, get: function() {
    return s.isNonNullObject;
  } }), Object.defineProperty(e, "isUint8Array", { enumerable: !0, get: function() {
    return s.isUint8Array;
  } });
})(te);
var zg = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Qg = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Cg = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && zg(t, e, n);
  return Qg(t, e), t;
};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.pbkdf2Sha512 = Oe.pbkdf2Sha512Noble = Oe.pbkdf2Sha512NodeCrypto = Oe.pbkdf2Sha512Subtle = Oe.getSubtle = Oe.getNodeCrypto = void 0;
const pn = te, Yg = Qf, Xg = hd;
async function Dd() {
  try {
    const e = await Promise.resolve().then(() => Cg(yd()));
    return typeof e == "object" && Object.keys(e).length <= 1 ? void 0 : e;
  } catch {
    return;
  }
}
Oe.getNodeCrypto = Dd;
async function Ud() {
  var t, n, r;
  let e = (t = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : t.subtle;
  return e || (e = (r = (n = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : n.webcrypto) == null ? void 0 : r.subtle), e;
}
Oe.getSubtle = Ud;
async function $d(e, t, n, r, s) {
  return (0, pn.assert)(e, "Argument subtle is falsy"), (0, pn.assert)(typeof e == "object", "Argument subtle is not of type object"), (0, pn.assert)(typeof e.importKey == "function", "subtle.importKey is not a function"), (0, pn.assert)(typeof e.deriveBits == "function", "subtle.deriveBits is not a function"), e.importKey("raw", t, { name: "PBKDF2" }, !1, ["deriveBits"]).then((o) => e.deriveBits({
    name: "PBKDF2",
    salt: n,
    iterations: r,
    hash: { name: "SHA-512" }
  }, o, s * 8).then((i) => new Uint8Array(i)));
}
Oe.pbkdf2Sha512Subtle = $d;
async function xd(e, t, n, r, s) {
  return (0, pn.assert)(e, "Argument nodeCrypto is falsy"), (0, pn.assert)(typeof e == "object", "Argument nodeCrypto is not of type object"), (0, pn.assert)(typeof e.pbkdf2 == "function", "nodeCrypto.pbkdf2 is not a function"), new Promise((o, i) => {
    e.pbkdf2(t, n, r, s, "sha512", (a, c) => {
      a ? i(a) : o(Uint8Array.from(c));
    });
  });
}
Oe.pbkdf2Sha512NodeCrypto = xd;
async function Hd(e, t, n, r) {
  return (0, Yg.pbkdf2Async)(Xg.sha512, e, t, { c: n, dkLen: r });
}
Oe.pbkdf2Sha512Noble = Hd;
async function Zg(e, t, n, r) {
  const s = await Ud();
  if (s)
    return $d(s, e, t, n, r);
  {
    const o = await Dd();
    return o ? xd(o, e, t, n, r) : Hd(e, t, n, r);
  }
}
Oe.pbkdf2Sha512 = Zg;
var st = {}, Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.toRealUint8Array = void 0;
function ey(e) {
  return e instanceof Uint8Array ? e : Uint8Array.from(e);
}
Pr.toRealUint8Array = ey;
Object.defineProperty(st, "__esModule", { value: !0 });
st.sha512 = st.Sha512 = st.sha256 = st.Sha256 = void 0;
const ty = Cf, ny = hd, qd = Pr;
class Fd {
  constructor(t) {
    this.blockSize = 512 / 8, this.impl = ty.sha256.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, qd.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
st.Sha256 = Fd;
function ry(e) {
  return new Fd(e).digest();
}
st.sha256 = ry;
class Vd {
  constructor(t) {
    this.blockSize = 1024 / 8, this.impl = ny.sha512.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, qd.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
st.Sha512 = Vd;
function sy(e) {
  return new Vd(e).digest();
}
st.sha512 = sy;
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.Bip39 = vt.EnglishMnemonic = vt.mnemonicToEntropy = vt.entropyToMnemonic = void 0;
const Su = j, oy = Oe, iy = st, uc = [
  "abandon",
  "ability",
  "able",
  "about",
  "above",
  "absent",
  "absorb",
  "abstract",
  "absurd",
  "abuse",
  "access",
  "accident",
  "account",
  "accuse",
  "achieve",
  "acid",
  "acoustic",
  "acquire",
  "across",
  "act",
  "action",
  "actor",
  "actress",
  "actual",
  "adapt",
  "add",
  "addict",
  "address",
  "adjust",
  "admit",
  "adult",
  "advance",
  "advice",
  "aerobic",
  "affair",
  "afford",
  "afraid",
  "again",
  "age",
  "agent",
  "agree",
  "ahead",
  "aim",
  "air",
  "airport",
  "aisle",
  "alarm",
  "album",
  "alcohol",
  "alert",
  "alien",
  "all",
  "alley",
  "allow",
  "almost",
  "alone",
  "alpha",
  "already",
  "also",
  "alter",
  "always",
  "amateur",
  "amazing",
  "among",
  "amount",
  "amused",
  "analyst",
  "anchor",
  "ancient",
  "anger",
  "angle",
  "angry",
  "animal",
  "ankle",
  "announce",
  "annual",
  "another",
  "answer",
  "antenna",
  "antique",
  "anxiety",
  "any",
  "apart",
  "apology",
  "appear",
  "apple",
  "approve",
  "april",
  "arch",
  "arctic",
  "area",
  "arena",
  "argue",
  "arm",
  "armed",
  "armor",
  "army",
  "around",
  "arrange",
  "arrest",
  "arrive",
  "arrow",
  "art",
  "artefact",
  "artist",
  "artwork",
  "ask",
  "aspect",
  "assault",
  "asset",
  "assist",
  "assume",
  "asthma",
  "athlete",
  "atom",
  "attack",
  "attend",
  "attitude",
  "attract",
  "auction",
  "audit",
  "august",
  "aunt",
  "author",
  "auto",
  "autumn",
  "average",
  "avocado",
  "avoid",
  "awake",
  "aware",
  "away",
  "awesome",
  "awful",
  "awkward",
  "axis",
  "baby",
  "bachelor",
  "bacon",
  "badge",
  "bag",
  "balance",
  "balcony",
  "ball",
  "bamboo",
  "banana",
  "banner",
  "bar",
  "barely",
  "bargain",
  "barrel",
  "base",
  "basic",
  "basket",
  "battle",
  "beach",
  "bean",
  "beauty",
  "because",
  "become",
  "beef",
  "before",
  "begin",
  "behave",
  "behind",
  "believe",
  "below",
  "belt",
  "bench",
  "benefit",
  "best",
  "betray",
  "better",
  "between",
  "beyond",
  "bicycle",
  "bid",
  "bike",
  "bind",
  "biology",
  "bird",
  "birth",
  "bitter",
  "black",
  "blade",
  "blame",
  "blanket",
  "blast",
  "bleak",
  "bless",
  "blind",
  "blood",
  "blossom",
  "blouse",
  "blue",
  "blur",
  "blush",
  "board",
  "boat",
  "body",
  "boil",
  "bomb",
  "bone",
  "bonus",
  "book",
  "boost",
  "border",
  "boring",
  "borrow",
  "boss",
  "bottom",
  "bounce",
  "box",
  "boy",
  "bracket",
  "brain",
  "brand",
  "brass",
  "brave",
  "bread",
  "breeze",
  "brick",
  "bridge",
  "brief",
  "bright",
  "bring",
  "brisk",
  "broccoli",
  "broken",
  "bronze",
  "broom",
  "brother",
  "brown",
  "brush",
  "bubble",
  "buddy",
  "budget",
  "buffalo",
  "build",
  "bulb",
  "bulk",
  "bullet",
  "bundle",
  "bunker",
  "burden",
  "burger",
  "burst",
  "bus",
  "business",
  "busy",
  "butter",
  "buyer",
  "buzz",
  "cabbage",
  "cabin",
  "cable",
  "cactus",
  "cage",
  "cake",
  "call",
  "calm",
  "camera",
  "camp",
  "can",
  "canal",
  "cancel",
  "candy",
  "cannon",
  "canoe",
  "canvas",
  "canyon",
  "capable",
  "capital",
  "captain",
  "car",
  "carbon",
  "card",
  "cargo",
  "carpet",
  "carry",
  "cart",
  "case",
  "cash",
  "casino",
  "castle",
  "casual",
  "cat",
  "catalog",
  "catch",
  "category",
  "cattle",
  "caught",
  "cause",
  "caution",
  "cave",
  "ceiling",
  "celery",
  "cement",
  "census",
  "century",
  "cereal",
  "certain",
  "chair",
  "chalk",
  "champion",
  "change",
  "chaos",
  "chapter",
  "charge",
  "chase",
  "chat",
  "cheap",
  "check",
  "cheese",
  "chef",
  "cherry",
  "chest",
  "chicken",
  "chief",
  "child",
  "chimney",
  "choice",
  "choose",
  "chronic",
  "chuckle",
  "chunk",
  "churn",
  "cigar",
  "cinnamon",
  "circle",
  "citizen",
  "city",
  "civil",
  "claim",
  "clap",
  "clarify",
  "claw",
  "clay",
  "clean",
  "clerk",
  "clever",
  "click",
  "client",
  "cliff",
  "climb",
  "clinic",
  "clip",
  "clock",
  "clog",
  "close",
  "cloth",
  "cloud",
  "clown",
  "club",
  "clump",
  "cluster",
  "clutch",
  "coach",
  "coast",
  "coconut",
  "code",
  "coffee",
  "coil",
  "coin",
  "collect",
  "color",
  "column",
  "combine",
  "come",
  "comfort",
  "comic",
  "common",
  "company",
  "concert",
  "conduct",
  "confirm",
  "congress",
  "connect",
  "consider",
  "control",
  "convince",
  "cook",
  "cool",
  "copper",
  "copy",
  "coral",
  "core",
  "corn",
  "correct",
  "cost",
  "cotton",
  "couch",
  "country",
  "couple",
  "course",
  "cousin",
  "cover",
  "coyote",
  "crack",
  "cradle",
  "craft",
  "cram",
  "crane",
  "crash",
  "crater",
  "crawl",
  "crazy",
  "cream",
  "credit",
  "creek",
  "crew",
  "cricket",
  "crime",
  "crisp",
  "critic",
  "crop",
  "cross",
  "crouch",
  "crowd",
  "crucial",
  "cruel",
  "cruise",
  "crumble",
  "crunch",
  "crush",
  "cry",
  "crystal",
  "cube",
  "culture",
  "cup",
  "cupboard",
  "curious",
  "current",
  "curtain",
  "curve",
  "cushion",
  "custom",
  "cute",
  "cycle",
  "dad",
  "damage",
  "damp",
  "dance",
  "danger",
  "daring",
  "dash",
  "daughter",
  "dawn",
  "day",
  "deal",
  "debate",
  "debris",
  "decade",
  "december",
  "decide",
  "decline",
  "decorate",
  "decrease",
  "deer",
  "defense",
  "define",
  "defy",
  "degree",
  "delay",
  "deliver",
  "demand",
  "demise",
  "denial",
  "dentist",
  "deny",
  "depart",
  "depend",
  "deposit",
  "depth",
  "deputy",
  "derive",
  "describe",
  "desert",
  "design",
  "desk",
  "despair",
  "destroy",
  "detail",
  "detect",
  "develop",
  "device",
  "devote",
  "diagram",
  "dial",
  "diamond",
  "diary",
  "dice",
  "diesel",
  "diet",
  "differ",
  "digital",
  "dignity",
  "dilemma",
  "dinner",
  "dinosaur",
  "direct",
  "dirt",
  "disagree",
  "discover",
  "disease",
  "dish",
  "dismiss",
  "disorder",
  "display",
  "distance",
  "divert",
  "divide",
  "divorce",
  "dizzy",
  "doctor",
  "document",
  "dog",
  "doll",
  "dolphin",
  "domain",
  "donate",
  "donkey",
  "donor",
  "door",
  "dose",
  "double",
  "dove",
  "draft",
  "dragon",
  "drama",
  "drastic",
  "draw",
  "dream",
  "dress",
  "drift",
  "drill",
  "drink",
  "drip",
  "drive",
  "drop",
  "drum",
  "dry",
  "duck",
  "dumb",
  "dune",
  "during",
  "dust",
  "dutch",
  "duty",
  "dwarf",
  "dynamic",
  "eager",
  "eagle",
  "early",
  "earn",
  "earth",
  "easily",
  "east",
  "easy",
  "echo",
  "ecology",
  "economy",
  "edge",
  "edit",
  "educate",
  "effort",
  "egg",
  "eight",
  "either",
  "elbow",
  "elder",
  "electric",
  "elegant",
  "element",
  "elephant",
  "elevator",
  "elite",
  "else",
  "embark",
  "embody",
  "embrace",
  "emerge",
  "emotion",
  "employ",
  "empower",
  "empty",
  "enable",
  "enact",
  "end",
  "endless",
  "endorse",
  "enemy",
  "energy",
  "enforce",
  "engage",
  "engine",
  "enhance",
  "enjoy",
  "enlist",
  "enough",
  "enrich",
  "enroll",
  "ensure",
  "enter",
  "entire",
  "entry",
  "envelope",
  "episode",
  "equal",
  "equip",
  "era",
  "erase",
  "erode",
  "erosion",
  "error",
  "erupt",
  "escape",
  "essay",
  "essence",
  "estate",
  "eternal",
  "ethics",
  "evidence",
  "evil",
  "evoke",
  "evolve",
  "exact",
  "example",
  "excess",
  "exchange",
  "excite",
  "exclude",
  "excuse",
  "execute",
  "exercise",
  "exhaust",
  "exhibit",
  "exile",
  "exist",
  "exit",
  "exotic",
  "expand",
  "expect",
  "expire",
  "explain",
  "expose",
  "express",
  "extend",
  "extra",
  "eye",
  "eyebrow",
  "fabric",
  "face",
  "faculty",
  "fade",
  "faint",
  "faith",
  "fall",
  "false",
  "fame",
  "family",
  "famous",
  "fan",
  "fancy",
  "fantasy",
  "farm",
  "fashion",
  "fat",
  "fatal",
  "father",
  "fatigue",
  "fault",
  "favorite",
  "feature",
  "february",
  "federal",
  "fee",
  "feed",
  "feel",
  "female",
  "fence",
  "festival",
  "fetch",
  "fever",
  "few",
  "fiber",
  "fiction",
  "field",
  "figure",
  "file",
  "film",
  "filter",
  "final",
  "find",
  "fine",
  "finger",
  "finish",
  "fire",
  "firm",
  "first",
  "fiscal",
  "fish",
  "fit",
  "fitness",
  "fix",
  "flag",
  "flame",
  "flash",
  "flat",
  "flavor",
  "flee",
  "flight",
  "flip",
  "float",
  "flock",
  "floor",
  "flower",
  "fluid",
  "flush",
  "fly",
  "foam",
  "focus",
  "fog",
  "foil",
  "fold",
  "follow",
  "food",
  "foot",
  "force",
  "forest",
  "forget",
  "fork",
  "fortune",
  "forum",
  "forward",
  "fossil",
  "foster",
  "found",
  "fox",
  "fragile",
  "frame",
  "frequent",
  "fresh",
  "friend",
  "fringe",
  "frog",
  "front",
  "frost",
  "frown",
  "frozen",
  "fruit",
  "fuel",
  "fun",
  "funny",
  "furnace",
  "fury",
  "future",
  "gadget",
  "gain",
  "galaxy",
  "gallery",
  "game",
  "gap",
  "garage",
  "garbage",
  "garden",
  "garlic",
  "garment",
  "gas",
  "gasp",
  "gate",
  "gather",
  "gauge",
  "gaze",
  "general",
  "genius",
  "genre",
  "gentle",
  "genuine",
  "gesture",
  "ghost",
  "giant",
  "gift",
  "giggle",
  "ginger",
  "giraffe",
  "girl",
  "give",
  "glad",
  "glance",
  "glare",
  "glass",
  "glide",
  "glimpse",
  "globe",
  "gloom",
  "glory",
  "glove",
  "glow",
  "glue",
  "goat",
  "goddess",
  "gold",
  "good",
  "goose",
  "gorilla",
  "gospel",
  "gossip",
  "govern",
  "gown",
  "grab",
  "grace",
  "grain",
  "grant",
  "grape",
  "grass",
  "gravity",
  "great",
  "green",
  "grid",
  "grief",
  "grit",
  "grocery",
  "group",
  "grow",
  "grunt",
  "guard",
  "guess",
  "guide",
  "guilt",
  "guitar",
  "gun",
  "gym",
  "habit",
  "hair",
  "half",
  "hammer",
  "hamster",
  "hand",
  "happy",
  "harbor",
  "hard",
  "harsh",
  "harvest",
  "hat",
  "have",
  "hawk",
  "hazard",
  "head",
  "health",
  "heart",
  "heavy",
  "hedgehog",
  "height",
  "hello",
  "helmet",
  "help",
  "hen",
  "hero",
  "hidden",
  "high",
  "hill",
  "hint",
  "hip",
  "hire",
  "history",
  "hobby",
  "hockey",
  "hold",
  "hole",
  "holiday",
  "hollow",
  "home",
  "honey",
  "hood",
  "hope",
  "horn",
  "horror",
  "horse",
  "hospital",
  "host",
  "hotel",
  "hour",
  "hover",
  "hub",
  "huge",
  "human",
  "humble",
  "humor",
  "hundred",
  "hungry",
  "hunt",
  "hurdle",
  "hurry",
  "hurt",
  "husband",
  "hybrid",
  "ice",
  "icon",
  "idea",
  "identify",
  "idle",
  "ignore",
  "ill",
  "illegal",
  "illness",
  "image",
  "imitate",
  "immense",
  "immune",
  "impact",
  "impose",
  "improve",
  "impulse",
  "inch",
  "include",
  "income",
  "increase",
  "index",
  "indicate",
  "indoor",
  "industry",
  "infant",
  "inflict",
  "inform",
  "inhale",
  "inherit",
  "initial",
  "inject",
  "injury",
  "inmate",
  "inner",
  "innocent",
  "input",
  "inquiry",
  "insane",
  "insect",
  "inside",
  "inspire",
  "install",
  "intact",
  "interest",
  "into",
  "invest",
  "invite",
  "involve",
  "iron",
  "island",
  "isolate",
  "issue",
  "item",
  "ivory",
  "jacket",
  "jaguar",
  "jar",
  "jazz",
  "jealous",
  "jeans",
  "jelly",
  "jewel",
  "job",
  "join",
  "joke",
  "journey",
  "joy",
  "judge",
  "juice",
  "jump",
  "jungle",
  "junior",
  "junk",
  "just",
  "kangaroo",
  "keen",
  "keep",
  "ketchup",
  "key",
  "kick",
  "kid",
  "kidney",
  "kind",
  "kingdom",
  "kiss",
  "kit",
  "kitchen",
  "kite",
  "kitten",
  "kiwi",
  "knee",
  "knife",
  "knock",
  "know",
  "lab",
  "label",
  "labor",
  "ladder",
  "lady",
  "lake",
  "lamp",
  "language",
  "laptop",
  "large",
  "later",
  "latin",
  "laugh",
  "laundry",
  "lava",
  "law",
  "lawn",
  "lawsuit",
  "layer",
  "lazy",
  "leader",
  "leaf",
  "learn",
  "leave",
  "lecture",
  "left",
  "leg",
  "legal",
  "legend",
  "leisure",
  "lemon",
  "lend",
  "length",
  "lens",
  "leopard",
  "lesson",
  "letter",
  "level",
  "liar",
  "liberty",
  "library",
  "license",
  "life",
  "lift",
  "light",
  "like",
  "limb",
  "limit",
  "link",
  "lion",
  "liquid",
  "list",
  "little",
  "live",
  "lizard",
  "load",
  "loan",
  "lobster",
  "local",
  "lock",
  "logic",
  "lonely",
  "long",
  "loop",
  "lottery",
  "loud",
  "lounge",
  "love",
  "loyal",
  "lucky",
  "luggage",
  "lumber",
  "lunar",
  "lunch",
  "luxury",
  "lyrics",
  "machine",
  "mad",
  "magic",
  "magnet",
  "maid",
  "mail",
  "main",
  "major",
  "make",
  "mammal",
  "man",
  "manage",
  "mandate",
  "mango",
  "mansion",
  "manual",
  "maple",
  "marble",
  "march",
  "margin",
  "marine",
  "market",
  "marriage",
  "mask",
  "mass",
  "master",
  "match",
  "material",
  "math",
  "matrix",
  "matter",
  "maximum",
  "maze",
  "meadow",
  "mean",
  "measure",
  "meat",
  "mechanic",
  "medal",
  "media",
  "melody",
  "melt",
  "member",
  "memory",
  "mention",
  "menu",
  "mercy",
  "merge",
  "merit",
  "merry",
  "mesh",
  "message",
  "metal",
  "method",
  "middle",
  "midnight",
  "milk",
  "million",
  "mimic",
  "mind",
  "minimum",
  "minor",
  "minute",
  "miracle",
  "mirror",
  "misery",
  "miss",
  "mistake",
  "mix",
  "mixed",
  "mixture",
  "mobile",
  "model",
  "modify",
  "mom",
  "moment",
  "monitor",
  "monkey",
  "monster",
  "month",
  "moon",
  "moral",
  "more",
  "morning",
  "mosquito",
  "mother",
  "motion",
  "motor",
  "mountain",
  "mouse",
  "move",
  "movie",
  "much",
  "muffin",
  "mule",
  "multiply",
  "muscle",
  "museum",
  "mushroom",
  "music",
  "must",
  "mutual",
  "myself",
  "mystery",
  "myth",
  "naive",
  "name",
  "napkin",
  "narrow",
  "nasty",
  "nation",
  "nature",
  "near",
  "neck",
  "need",
  "negative",
  "neglect",
  "neither",
  "nephew",
  "nerve",
  "nest",
  "net",
  "network",
  "neutral",
  "never",
  "news",
  "next",
  "nice",
  "night",
  "noble",
  "noise",
  "nominee",
  "noodle",
  "normal",
  "north",
  "nose",
  "notable",
  "note",
  "nothing",
  "notice",
  "novel",
  "now",
  "nuclear",
  "number",
  "nurse",
  "nut",
  "oak",
  "obey",
  "object",
  "oblige",
  "obscure",
  "observe",
  "obtain",
  "obvious",
  "occur",
  "ocean",
  "october",
  "odor",
  "off",
  "offer",
  "office",
  "often",
  "oil",
  "okay",
  "old",
  "olive",
  "olympic",
  "omit",
  "once",
  "one",
  "onion",
  "online",
  "only",
  "open",
  "opera",
  "opinion",
  "oppose",
  "option",
  "orange",
  "orbit",
  "orchard",
  "order",
  "ordinary",
  "organ",
  "orient",
  "original",
  "orphan",
  "ostrich",
  "other",
  "outdoor",
  "outer",
  "output",
  "outside",
  "oval",
  "oven",
  "over",
  "own",
  "owner",
  "oxygen",
  "oyster",
  "ozone",
  "pact",
  "paddle",
  "page",
  "pair",
  "palace",
  "palm",
  "panda",
  "panel",
  "panic",
  "panther",
  "paper",
  "parade",
  "parent",
  "park",
  "parrot",
  "party",
  "pass",
  "patch",
  "path",
  "patient",
  "patrol",
  "pattern",
  "pause",
  "pave",
  "payment",
  "peace",
  "peanut",
  "pear",
  "peasant",
  "pelican",
  "pen",
  "penalty",
  "pencil",
  "people",
  "pepper",
  "perfect",
  "permit",
  "person",
  "pet",
  "phone",
  "photo",
  "phrase",
  "physical",
  "piano",
  "picnic",
  "picture",
  "piece",
  "pig",
  "pigeon",
  "pill",
  "pilot",
  "pink",
  "pioneer",
  "pipe",
  "pistol",
  "pitch",
  "pizza",
  "place",
  "planet",
  "plastic",
  "plate",
  "play",
  "please",
  "pledge",
  "pluck",
  "plug",
  "plunge",
  "poem",
  "poet",
  "point",
  "polar",
  "pole",
  "police",
  "pond",
  "pony",
  "pool",
  "popular",
  "portion",
  "position",
  "possible",
  "post",
  "potato",
  "pottery",
  "poverty",
  "powder",
  "power",
  "practice",
  "praise",
  "predict",
  "prefer",
  "prepare",
  "present",
  "pretty",
  "prevent",
  "price",
  "pride",
  "primary",
  "print",
  "priority",
  "prison",
  "private",
  "prize",
  "problem",
  "process",
  "produce",
  "profit",
  "program",
  "project",
  "promote",
  "proof",
  "property",
  "prosper",
  "protect",
  "proud",
  "provide",
  "public",
  "pudding",
  "pull",
  "pulp",
  "pulse",
  "pumpkin",
  "punch",
  "pupil",
  "puppy",
  "purchase",
  "purity",
  "purpose",
  "purse",
  "push",
  "put",
  "puzzle",
  "pyramid",
  "quality",
  "quantum",
  "quarter",
  "question",
  "quick",
  "quit",
  "quiz",
  "quote",
  "rabbit",
  "raccoon",
  "race",
  "rack",
  "radar",
  "radio",
  "rail",
  "rain",
  "raise",
  "rally",
  "ramp",
  "ranch",
  "random",
  "range",
  "rapid",
  "rare",
  "rate",
  "rather",
  "raven",
  "raw",
  "razor",
  "ready",
  "real",
  "reason",
  "rebel",
  "rebuild",
  "recall",
  "receive",
  "recipe",
  "record",
  "recycle",
  "reduce",
  "reflect",
  "reform",
  "refuse",
  "region",
  "regret",
  "regular",
  "reject",
  "relax",
  "release",
  "relief",
  "rely",
  "remain",
  "remember",
  "remind",
  "remove",
  "render",
  "renew",
  "rent",
  "reopen",
  "repair",
  "repeat",
  "replace",
  "report",
  "require",
  "rescue",
  "resemble",
  "resist",
  "resource",
  "response",
  "result",
  "retire",
  "retreat",
  "return",
  "reunion",
  "reveal",
  "review",
  "reward",
  "rhythm",
  "rib",
  "ribbon",
  "rice",
  "rich",
  "ride",
  "ridge",
  "rifle",
  "right",
  "rigid",
  "ring",
  "riot",
  "ripple",
  "risk",
  "ritual",
  "rival",
  "river",
  "road",
  "roast",
  "robot",
  "robust",
  "rocket",
  "romance",
  "roof",
  "rookie",
  "room",
  "rose",
  "rotate",
  "rough",
  "round",
  "route",
  "royal",
  "rubber",
  "rude",
  "rug",
  "rule",
  "run",
  "runway",
  "rural",
  "sad",
  "saddle",
  "sadness",
  "safe",
  "sail",
  "salad",
  "salmon",
  "salon",
  "salt",
  "salute",
  "same",
  "sample",
  "sand",
  "satisfy",
  "satoshi",
  "sauce",
  "sausage",
  "save",
  "say",
  "scale",
  "scan",
  "scare",
  "scatter",
  "scene",
  "scheme",
  "school",
  "science",
  "scissors",
  "scorpion",
  "scout",
  "scrap",
  "screen",
  "script",
  "scrub",
  "sea",
  "search",
  "season",
  "seat",
  "second",
  "secret",
  "section",
  "security",
  "seed",
  "seek",
  "segment",
  "select",
  "sell",
  "seminar",
  "senior",
  "sense",
  "sentence",
  "series",
  "service",
  "session",
  "settle",
  "setup",
  "seven",
  "shadow",
  "shaft",
  "shallow",
  "share",
  "shed",
  "shell",
  "sheriff",
  "shield",
  "shift",
  "shine",
  "ship",
  "shiver",
  "shock",
  "shoe",
  "shoot",
  "shop",
  "short",
  "shoulder",
  "shove",
  "shrimp",
  "shrug",
  "shuffle",
  "shy",
  "sibling",
  "sick",
  "side",
  "siege",
  "sight",
  "sign",
  "silent",
  "silk",
  "silly",
  "silver",
  "similar",
  "simple",
  "since",
  "sing",
  "siren",
  "sister",
  "situate",
  "six",
  "size",
  "skate",
  "sketch",
  "ski",
  "skill",
  "skin",
  "skirt",
  "skull",
  "slab",
  "slam",
  "sleep",
  "slender",
  "slice",
  "slide",
  "slight",
  "slim",
  "slogan",
  "slot",
  "slow",
  "slush",
  "small",
  "smart",
  "smile",
  "smoke",
  "smooth",
  "snack",
  "snake",
  "snap",
  "sniff",
  "snow",
  "soap",
  "soccer",
  "social",
  "sock",
  "soda",
  "soft",
  "solar",
  "soldier",
  "solid",
  "solution",
  "solve",
  "someone",
  "song",
  "soon",
  "sorry",
  "sort",
  "soul",
  "sound",
  "soup",
  "source",
  "south",
  "space",
  "spare",
  "spatial",
  "spawn",
  "speak",
  "special",
  "speed",
  "spell",
  "spend",
  "sphere",
  "spice",
  "spider",
  "spike",
  "spin",
  "spirit",
  "split",
  "spoil",
  "sponsor",
  "spoon",
  "sport",
  "spot",
  "spray",
  "spread",
  "spring",
  "spy",
  "square",
  "squeeze",
  "squirrel",
  "stable",
  "stadium",
  "staff",
  "stage",
  "stairs",
  "stamp",
  "stand",
  "start",
  "state",
  "stay",
  "steak",
  "steel",
  "stem",
  "step",
  "stereo",
  "stick",
  "still",
  "sting",
  "stock",
  "stomach",
  "stone",
  "stool",
  "story",
  "stove",
  "strategy",
  "street",
  "strike",
  "strong",
  "struggle",
  "student",
  "stuff",
  "stumble",
  "style",
  "subject",
  "submit",
  "subway",
  "success",
  "such",
  "sudden",
  "suffer",
  "sugar",
  "suggest",
  "suit",
  "summer",
  "sun",
  "sunny",
  "sunset",
  "super",
  "supply",
  "supreme",
  "sure",
  "surface",
  "surge",
  "surprise",
  "surround",
  "survey",
  "suspect",
  "sustain",
  "swallow",
  "swamp",
  "swap",
  "swarm",
  "swear",
  "sweet",
  "swift",
  "swim",
  "swing",
  "switch",
  "sword",
  "symbol",
  "symptom",
  "syrup",
  "system",
  "table",
  "tackle",
  "tag",
  "tail",
  "talent",
  "talk",
  "tank",
  "tape",
  "target",
  "task",
  "taste",
  "tattoo",
  "taxi",
  "teach",
  "team",
  "tell",
  "ten",
  "tenant",
  "tennis",
  "tent",
  "term",
  "test",
  "text",
  "thank",
  "that",
  "theme",
  "then",
  "theory",
  "there",
  "they",
  "thing",
  "this",
  "thought",
  "three",
  "thrive",
  "throw",
  "thumb",
  "thunder",
  "ticket",
  "tide",
  "tiger",
  "tilt",
  "timber",
  "time",
  "tiny",
  "tip",
  "tired",
  "tissue",
  "title",
  "toast",
  "tobacco",
  "today",
  "toddler",
  "toe",
  "together",
  "toilet",
  "token",
  "tomato",
  "tomorrow",
  "tone",
  "tongue",
  "tonight",
  "tool",
  "tooth",
  "top",
  "topic",
  "topple",
  "torch",
  "tornado",
  "tortoise",
  "toss",
  "total",
  "tourist",
  "toward",
  "tower",
  "town",
  "toy",
  "track",
  "trade",
  "traffic",
  "tragic",
  "train",
  "transfer",
  "trap",
  "trash",
  "travel",
  "tray",
  "treat",
  "tree",
  "trend",
  "trial",
  "tribe",
  "trick",
  "trigger",
  "trim",
  "trip",
  "trophy",
  "trouble",
  "truck",
  "true",
  "truly",
  "trumpet",
  "trust",
  "truth",
  "try",
  "tube",
  "tuition",
  "tumble",
  "tuna",
  "tunnel",
  "turkey",
  "turn",
  "turtle",
  "twelve",
  "twenty",
  "twice",
  "twin",
  "twist",
  "two",
  "type",
  "typical",
  "ugly",
  "umbrella",
  "unable",
  "unaware",
  "uncle",
  "uncover",
  "under",
  "undo",
  "unfair",
  "unfold",
  "unhappy",
  "uniform",
  "unique",
  "unit",
  "universe",
  "unknown",
  "unlock",
  "until",
  "unusual",
  "unveil",
  "update",
  "upgrade",
  "uphold",
  "upon",
  "upper",
  "upset",
  "urban",
  "urge",
  "usage",
  "use",
  "used",
  "useful",
  "useless",
  "usual",
  "utility",
  "vacant",
  "vacuum",
  "vague",
  "valid",
  "valley",
  "valve",
  "van",
  "vanish",
  "vapor",
  "various",
  "vast",
  "vault",
  "vehicle",
  "velvet",
  "vendor",
  "venture",
  "venue",
  "verb",
  "verify",
  "version",
  "very",
  "vessel",
  "veteran",
  "viable",
  "vibrant",
  "vicious",
  "victory",
  "video",
  "view",
  "village",
  "vintage",
  "violin",
  "virtual",
  "virus",
  "visa",
  "visit",
  "visual",
  "vital",
  "vivid",
  "vocal",
  "voice",
  "void",
  "volcano",
  "volume",
  "vote",
  "voyage",
  "wage",
  "wagon",
  "wait",
  "walk",
  "wall",
  "walnut",
  "want",
  "warfare",
  "warm",
  "warrior",
  "wash",
  "wasp",
  "waste",
  "water",
  "wave",
  "way",
  "wealth",
  "weapon",
  "wear",
  "weasel",
  "weather",
  "web",
  "wedding",
  "weekend",
  "weird",
  "welcome",
  "west",
  "wet",
  "whale",
  "what",
  "wheat",
  "wheel",
  "when",
  "where",
  "whip",
  "whisper",
  "wide",
  "width",
  "wife",
  "wild",
  "will",
  "win",
  "window",
  "wine",
  "wing",
  "wink",
  "winner",
  "winter",
  "wire",
  "wisdom",
  "wise",
  "wish",
  "witness",
  "wolf",
  "woman",
  "wonder",
  "wood",
  "wool",
  "word",
  "work",
  "world",
  "worry",
  "worth",
  "wrap",
  "wreck",
  "wrestle",
  "wrist",
  "write",
  "wrong",
  "yard",
  "year",
  "yellow",
  "you",
  "young",
  "youth",
  "zebra",
  "zero",
  "zone",
  "zoo"
];
function Ld(e) {
  return Array.from(e).map((t) => t.toString(2).padStart(8, "0")).join("");
}
function Wd(e) {
  const n = e.length * 8 / 32, r = (0, iy.sha256)(e);
  return Ld(r).slice(0, n);
}
function Jd(e) {
  return parseInt(e, 2);
}
const ay = [16, 20, 24, 28, 32], cy = [12, 15, 18, 21, 24];
function Gd(e) {
  if (ay.indexOf(e.length) === -1)
    throw new Error("invalid input length");
  const t = Ld(e), n = Wd(e);
  return (t + n).match(/(.{11})/g).map((i) => {
    const a = Jd(i);
    return uc[a];
  }).join(" ");
}
vt.entropyToMnemonic = Gd;
const uy = "Invalid number of words", ly = "Found word that is not in the wordlist", dy = "Invalid entropy", my = "Invalid mnemonic checksum";
function Ea(e) {
  return e.normalize("NFKD");
}
function lc(e) {
  const t = Ea(e).split(" ");
  if (!cy.includes(t.length))
    throw new Error(uy);
  const n = t.map((u) => {
    const l = uc.indexOf(u);
    if (l === -1)
      throw new Error(ly);
    return l.toString(2).padStart(11, "0");
  }).join(""), r = Math.floor(n.length / 33) * 32, s = n.slice(0, r), o = n.slice(r), i = s.match(/(.{1,8})/g).map(Jd);
  if (i.length < 16 || i.length > 32 || i.length % 4 !== 0)
    throw new Error(dy);
  const a = Uint8Array.from(i);
  if (Wd(a) !== o)
    throw new Error(my);
  return a;
}
vt.mnemonicToEntropy = lc;
class bn {
  constructor(t) {
    if (!bn.mnemonicMatcher.test(t))
      throw new Error("Invalid mnemonic format");
    const n = t.split(" "), r = [12, 15, 18, 21, 24];
    if (r.indexOf(n.length) === -1)
      throw new Error(`Invalid word count in mnemonic (allowed: ${r} got: ${n.length})`);
    for (const s of n)
      if (bn.wordlist.indexOf(s) === -1)
        throw new Error("Mnemonic contains invalid word");
    lc(t), this.data = t;
  }
  toString() {
    return this.data;
  }
}
vt.EnglishMnemonic = bn;
bn.wordlist = uc;
bn.mnemonicMatcher = /^[a-z]+( [a-z]+)*$/;
class fy {
  /**
   * Encodes raw entropy of length 16, 20, 24, 28 or 32 bytes as an English mnemonic between 12 and 24 words.
   *
   * | Entropy            | Words |
   * |--------------------|-------|
   * | 128 bit (16 bytes) |    12 |
   * | 160 bit (20 bytes) |    15 |
   * | 192 bit (24 bytes) |    18 |
   * | 224 bit (28 bytes) |    21 |
   * | 256 bit (32 bytes) |    24 |
   *
   *
   * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#generating-the-mnemonic
   * @param entropy The entropy to be encoded. This must be cryptographically secure.
   */
  static encode(t) {
    return new bn(Gd(t));
  }
  static decode(t) {
    return lc(t.toString());
  }
  static async mnemonicToSeed(t, n) {
    const r = (0, Su.toUtf8)(Ea(t.toString())), s = "mnemonic" + (n ? Ea(n) : ""), o = (0, Su.toUtf8)(s);
    return (0, oy.pbkdf2Sha512)(r, o, 2048, 64);
  }
}
vt.Bip39 = fy;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.Hmac = void 0;
class py {
  constructor(t, n) {
    const r = new t().blockSize;
    this.hash = (o) => new t().update(o).digest();
    let s = n;
    if (s.length > r && (s = this.hash(s)), s.length < r) {
      const o = new Uint8Array(r - s.length);
      s = new Uint8Array([...s, ...o]);
    }
    this.oKeyPad = s.map((o) => o ^ 92), this.iKeyPad = s.map((o) => o ^ 54), this.messageHasher = new t(), this.blockSize = r, this.update(this.iKeyPad);
  }
  update(t) {
    return this.messageHasher.update(t), this;
  }
  digest() {
    const t = this.messageHasher.digest();
    return this.hash(new Uint8Array([...this.oKeyPad, ...t]));
  }
}
cs.Hmac = py;
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.keccak256 = Yn.Keccak256 = void 0;
const gy = Yf, yy = Pr;
class Kd {
  constructor(t) {
    this.blockSize = 512 / 8, this.impl = gy.keccak_256.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, yy.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
Yn.Keccak256 = Kd;
function hy(e) {
  return new Kd(e).digest();
}
Yn.keccak256 = hy;
var Ie = {}, by = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.Xchacha20poly1305Ietf = Ie.xchacha20NonceLength = Ie.Ed25519 = Ie.Ed25519Keypair = Ie.Argon2id = Ie.isArgon2idOptions = void 0;
const vy = te, xe = by(Xf);
function wy(e) {
  return !(!(0, vy.isNonNullObject)(e) || typeof e.outputLength != "number" || typeof e.opsLimit != "number" || typeof e.memLimitKib != "number");
}
Ie.isArgon2idOptions = wy;
class _y {
  static async execute(t, n, r) {
    return await xe.default.ready, xe.default.crypto_pwhash(
      r.outputLength,
      t,
      n,
      // libsodium only supports 16 byte salts and will throw when you don't respect that
      r.opsLimit,
      r.memLimitKib * 1024,
      xe.default.crypto_pwhash_ALG_ARGON2ID13
    );
  }
}
Ie.Argon2id = _y;
class Eo {
  // a libsodium privkey has the format `<ed25519 privkey> + <ed25519 pubkey>`
  static fromLibsodiumPrivkey(t) {
    if (t.length !== 64)
      throw new Error(`Unexpected key length ${t.length}. Must be 64.`);
    return new Eo(t.slice(0, 32), t.slice(32, 64));
  }
  constructor(t, n) {
    this.privkey = t, this.pubkey = n;
  }
  toLibsodiumPrivkey() {
    return new Uint8Array([...this.privkey, ...this.pubkey]);
  }
}
Ie.Ed25519Keypair = Eo;
class Sy {
  /**
   * Generates a keypair deterministically from a given 32 bytes seed.
   *
   * This seed equals the Ed25519 private key.
   * For implementation details see crypto_sign_seed_keypair in
   * https://download.libsodium.org/doc/public-key_cryptography/public-key_signatures.html
   * and diagram on https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
   */
  static async makeKeypair(t) {
    await xe.default.ready;
    const n = xe.default.crypto_sign_seed_keypair(t);
    return Eo.fromLibsodiumPrivkey(n.privateKey);
  }
  static async createSignature(t, n) {
    return await xe.default.ready, xe.default.crypto_sign_detached(t, n.toLibsodiumPrivkey());
  }
  static async verifySignature(t, n, r) {
    return await xe.default.ready, xe.default.crypto_sign_verify_detached(t, n, r);
  }
}
Ie.Ed25519 = Sy;
Ie.xchacha20NonceLength = 24;
class Ay {
  static async encrypt(t, n, r) {
    return await xe.default.ready, xe.default.crypto_aead_xchacha20poly1305_ietf_encrypt(
      t,
      null,
      null,
      // secret nonce: unused and should be null (https://download.libsodium.org/doc/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction)
      r,
      n
    );
  }
  static async decrypt(t, n, r) {
    return await xe.default.ready, xe.default.crypto_aead_xchacha20poly1305_ietf_decrypt(
      null,
      // secret nonce: unused and should be null (https://download.libsodium.org/doc/secret-key_cryptography/aead/chacha20-poly1305/xchacha20-poly1305_construction)
      t,
      null,
      r,
      n
    );
  }
}
Ie.Xchacha20poly1305Ietf = Ay;
var To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.Random = void 0;
class Py {
  /**
   * Returns `count` cryptographically secure random bytes
   */
  static getBytes(t) {
    try {
      const n = typeof window == "object" ? window : self, r = typeof n.crypto < "u" ? n.crypto : n.msCrypto, s = new Uint8Array(t);
      return r.getRandomValues(s), s;
    } catch {
      try {
        const n = yd();
        return new Uint8Array([...n.randomBytes(t)]);
      } catch {
        throw new Error("No secure random number generator found");
      }
    }
  }
}
To.Random = Py;
var Xn = {};
Object.defineProperty(Xn, "__esModule", { value: !0 });
Xn.ripemd160 = Xn.Ripemd160 = void 0;
const ky = Zf, Ey = Pr;
class zd {
  constructor(t) {
    this.blockSize = 512 / 8, this.impl = ky.ripemd160.create(), t && this.update(t);
  }
  update(t) {
    return this.impl.update((0, Ey.toRealUint8Array)(t)), this;
  }
  digest() {
    return this.impl.digest();
  }
}
Xn.Ripemd160 = zd;
function Ty(e) {
  return new zd(e).digest();
}
Xn.ripemd160 = Ty;
var Oo = {}, vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.ExtendedSecp256k1Signature = vn.Secp256k1Signature = void 0;
function Hn(e) {
  let t = 0;
  for (const n of e)
    if (n === 0)
      t++;
    else
      break;
  return e.slice(t);
}
const Es = 2;
class ts {
  /**
   * Takes the pair of integers (r, s) as 2x32 byte of binary data.
   *
   * Note: This is the format Cosmos SDK uses natively.
   *
   * @param data a 64 byte value containing integers r and s.
   */
  static fromFixedLength(t) {
    if (t.length !== 64)
      throw new Error(`Got invalid data length: ${t.length}. Expected 2x 32 bytes for the pair (r, s)`);
    return new ts(Hn(t.slice(0, 32)), Hn(t.slice(32, 64)));
  }
  static fromDer(t) {
    let n = 0;
    if (t[n++] !== 48)
      throw new Error("Prefix 0x30 expected");
    const r = t[n++];
    if (t.length - n !== r)
      throw new Error("Data length mismatch detected");
    if (t[n++] !== Es)
      throw new Error("INTEGER tag expected");
    const o = t[n++];
    if (o >= 128)
      throw new Error("Decoding length values above 127 not supported");
    const i = t.slice(n, n + o);
    if (n += o, t[n++] !== Es)
      throw new Error("INTEGER tag expected");
    const c = t[n++];
    if (c >= 128)
      throw new Error("Decoding length values above 127 not supported");
    const u = t.slice(n, n + c);
    return n += c, new ts(
      // r/s data can contain leading 0 bytes to express integers being non-negative in DER
      Hn(i),
      Hn(u)
    );
  }
  constructor(t, n) {
    if (t.length > 32 || t.length === 0 || t[0] === 0)
      throw new Error("Unsigned integer r must be encoded as unpadded big endian.");
    if (n.length > 32 || n.length === 0 || n[0] === 0)
      throw new Error("Unsigned integer s must be encoded as unpadded big endian.");
    this.data = {
      r: t,
      s: n
    };
  }
  r(t) {
    if (t === void 0)
      return this.data.r;
    {
      const n = t - this.data.r.length;
      if (n < 0)
        throw new Error("Length too small to hold parameter r");
      const r = new Uint8Array(n);
      return new Uint8Array([...r, ...this.data.r]);
    }
  }
  s(t) {
    if (t === void 0)
      return this.data.s;
    {
      const n = t - this.data.s.length;
      if (n < 0)
        throw new Error("Length too small to hold parameter s");
      const r = new Uint8Array(n);
      return new Uint8Array([...r, ...this.data.s]);
    }
  }
  toFixedLength() {
    return new Uint8Array([...this.r(32), ...this.s(32)]);
  }
  toDer() {
    const t = this.data.r[0] >= 128 ? new Uint8Array([0, ...this.data.r]) : this.data.r, n = this.data.s[0] >= 128 ? new Uint8Array([0, ...this.data.s]) : this.data.s, r = t.length, s = n.length, o = new Uint8Array([Es, r, ...t, Es, s, ...n]);
    return new Uint8Array([48, o.length, ...o]);
  }
}
vn.Secp256k1Signature = ts;
class dc extends ts {
  /**
   * Decode extended signature from the simple fixed length encoding
   * described in toFixedLength().
   */
  static fromFixedLength(t) {
    if (t.length !== 65)
      throw new Error(`Got invalid data length ${t.length}. Expected 32 + 32 + 1`);
    return new dc(Hn(t.slice(0, 32)), Hn(t.slice(32, 64)), t[64]);
  }
  constructor(t, n, r) {
    if (super(t, n), !Number.isInteger(r))
      throw new Error("The recovery parameter must be an integer.");
    if (r < 0 || r > 4)
      throw new Error("The recovery parameter must be one of 0, 1, 2, 3.");
    this.recovery = r;
  }
  /**
   * A simple custom encoding that encodes the extended signature as
   * r (32 bytes) | s (32 bytes) | recovery param (1 byte)
   * where | denotes concatenation of bonary data.
   */
  toFixedLength() {
    return new Uint8Array([...this.r(32), ...this.s(32), this.recovery]);
  }
}
vn.ExtendedSecp256k1Signature = dc;
var Qd = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Oo, "__esModule", { value: !0 });
Oo.Secp256k1 = void 0;
const Ts = j, Cd = Qd(_o), Oy = Qd(bd()), Iy = vn, Qt = new Oy.default.ec("secp256k1"), By = new Cd.default("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "hex");
class Ny {
  /**
   * Takes a 32 byte private key and returns a privkey/pubkey pair.
   *
   * The resulting pubkey is uncompressed. For the use in Cosmos it should
   * be compressed first using `Secp256k1.compressPubkey`.
   */
  static async makeKeypair(t) {
    if (t.length !== 32)
      throw new Error("input data is not a valid secp256k1 private key");
    const n = Qt.keyFromPrivate(t);
    if (n.validate().result !== !0)
      throw new Error("input data is not a valid secp256k1 private key");
    if (new Cd.default(t).gte(By))
      throw new Error("input data is not a valid secp256k1 private key");
    return {
      privkey: (0, Ts.fromHex)(n.getPrivate("hex")),
      // encodes uncompressed as
      // - 1-byte prefix "04"
      // - 32-byte x coordinate
      // - 32-byte y coordinate
      pubkey: Uint8Array.from(n.getPublic("array"))
    };
  }
  /**
   * Creates a signature that is
   * - deterministic (RFC 6979)
   * - lowS signature
   * - DER encoded
   */
  static async createSignature(t, n) {
    if (t.length === 0)
      throw new Error("Message hash must not be empty");
    if (t.length > 32)
      throw new Error("Message hash length must not exceed 32 bytes");
    const r = Qt.keyFromPrivate(n), { r: s, s: o, recoveryParam: i } = r.sign(t, { canonical: !0 });
    if (typeof i != "number")
      throw new Error("Recovery param missing");
    return new Iy.ExtendedSecp256k1Signature(Uint8Array.from(s.toArray()), Uint8Array.from(o.toArray()), i);
  }
  static async verifySignature(t, n, r) {
    if (n.length === 0)
      throw new Error("Message hash must not be empty");
    if (n.length > 32)
      throw new Error("Message hash length must not exceed 32 bytes");
    const s = Qt.keyFromPublic(r);
    try {
      return s.verify(n, t.toDer());
    } catch {
      return !1;
    }
  }
  static recoverPubkey(t, n) {
    const r = { r: (0, Ts.toHex)(t.r()), s: (0, Ts.toHex)(t.s()) }, s = Qt.recoverPubKey(n, r, t.recovery), o = Qt.keyFromPublic(s);
    return (0, Ts.fromHex)(o.getPublic(!1, "hex"));
  }
  /**
   * Takes a compressed or uncompressed pubkey and return a compressed one.
   *
   * This function is idempotent.
   */
  static compressPubkey(t) {
    switch (t.length) {
      case 33:
        return t;
      case 65:
        return Uint8Array.from(Qt.keyFromPublic(t).getPublic(!0, "array"));
      default:
        throw new Error("Invalid pubkey length");
    }
  }
  /**
   * Takes a compressed or uncompressed pubkey and returns an uncompressed one.
   *
   * This function is idempotent.
   */
  static uncompressPubkey(t) {
    switch (t.length) {
      case 33:
        return Uint8Array.from(Qt.keyFromPublic(t).getPublic(!1, "array"));
      case 65:
        return t;
      default:
        throw new Error("Invalid pubkey length");
    }
  }
  static trimRecoveryByte(t) {
    switch (t.length) {
      case 64:
        return t;
      case 65:
        return t.slice(0, 64);
      default:
        throw new Error("Invalid signature length");
    }
  }
}
Oo.Secp256k1 = Ny;
var Yd = {};
(function(e) {
  var t = h && h.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.stringToPath = e.pathToString = e.Slip10 = e.Slip10RawIndex = e.slip10CurveFromString = e.Slip10Curve = void 0;
  const n = j, r = se, s = t(_o), o = t(bd()), i = cs, a = st;
  var c;
  (function(v) {
    v.Secp256k1 = "Bitcoin seed", v.Ed25519 = "ed25519 seed";
  })(c = e.Slip10Curve || (e.Slip10Curve = {}));
  function u(v) {
    switch (v) {
      case c.Ed25519:
        return c.Ed25519;
      case c.Secp256k1:
        return c.Secp256k1;
      default:
        throw new Error(`Unknown curve string: '${v}'`);
    }
  }
  e.slip10CurveFromString = u;
  class l extends r.Uint32 {
    static hardened(m) {
      return new l(m + 2 ** 31);
    }
    static normal(m) {
      return new l(m);
    }
    isHardened() {
      return this.data >= 2 ** 31;
    }
  }
  e.Slip10RawIndex = l;
  const d = new o.default.ec("secp256k1");
  class b {
    static derivePath(m, S, D) {
      let N = this.master(m, S);
      for (const Y of D)
        N = this.child(m, N.privkey, N.chainCode, Y);
      return N;
    }
    static master(m, S) {
      const D = new i.Hmac(a.Sha512, (0, n.toAscii)(m)).update(S).digest(), N = D.slice(0, 32), Y = D.slice(32, 64);
      return m !== c.Ed25519 && (this.isZero(N) || this.isGteN(m, N)) ? this.master(m, D) : {
        chainCode: Y,
        privkey: N
      };
    }
    static child(m, S, D, N) {
      let Y;
      if (N.isHardened()) {
        const _ = new Uint8Array([0, ...S, ...N.toBytesBigEndian()]);
        Y = new i.Hmac(a.Sha512, D).update(_).digest();
      } else {
        if (m === c.Ed25519)
          throw new Error("Normal keys are not allowed with ed25519");
        {
          const _ = new Uint8Array([
            ...b.serializedPoint(m, new s.default(S)),
            ...N.toBytesBigEndian()
          ]);
          Y = new i.Hmac(a.Sha512, D).update(_).digest();
        }
      }
      return this.childImpl(m, S, D, N, Y);
    }
    /**
     * Implementation of ser_P(point(k_par)) from BIP-0032
     *
     * @see https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
     */
    static serializedPoint(m, S) {
      switch (m) {
        case c.Secp256k1:
          return (0, n.fromHex)(d.g.mul(S).encodeCompressed("hex"));
        default:
          throw new Error("curve not supported");
      }
    }
    static childImpl(m, S, D, N, Y) {
      const _ = Y.slice(0, 32), k = Y.slice(32, 64), A = k;
      if (m === c.Ed25519)
        return {
          chainCode: A,
          privkey: _
        };
      const $ = this.n(m), W = new s.default(_).add(new s.default(S)).mod($), J = Uint8Array.from(W.toArray("be", 32));
      if (this.isGteN(m, _) || this.isZero(J)) {
        const G = new i.Hmac(a.Sha512, D).update(new Uint8Array([1, ...k, ...N.toBytesBigEndian()])).digest();
        return this.childImpl(m, S, D, N, G);
      }
      return {
        chainCode: A,
        privkey: J
      };
    }
    static isZero(m) {
      return m.every((S) => S === 0);
    }
    static isGteN(m, S) {
      return new s.default(S).gte(this.n(m));
    }
    static n(m) {
      switch (m) {
        case c.Secp256k1:
          return new s.default("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", 16);
        default:
          throw new Error("curve not supported");
      }
    }
  }
  e.Slip10 = b;
  function y(v) {
    return v.reduce((m, S) => {
      const D = S.isHardened() ? `${S.toNumber() - 2147483648}'` : S.toString();
      return m + "/" + D;
    }, "m");
  }
  e.pathToString = y;
  function P(v) {
    if (!v.startsWith("m"))
      throw new Error("Path string must start with 'm'");
    let m = v.slice(1);
    const S = new Array();
    for (; m; ) {
      const D = m.match(/^\/([0-9]+)('?)/);
      if (!D)
        throw new Error("Syntax error while reading path component");
      const [N, Y, _] = D, k = r.Uint53.fromString(Y).toNumber();
      if (k >= 2 ** 31)
        throw new Error("Component value too high. Must not exceed 2**31-1.");
      _ ? S.push(l.hardened(k)) : S.push(l.normal(k)), m = m.slice(N.length);
    }
    return S;
  }
  e.stringToPath = P;
})(Yd);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.stringToPath = e.Slip10RawIndex = e.slip10CurveFromString = e.Slip10Curve = e.Slip10 = e.pathToString = e.sha512 = e.Sha512 = e.sha256 = e.Sha256 = e.Secp256k1Signature = e.ExtendedSecp256k1Signature = e.Secp256k1 = e.ripemd160 = e.Ripemd160 = e.Random = e.Xchacha20poly1305Ietf = e.xchacha20NonceLength = e.isArgon2idOptions = e.Ed25519Keypair = e.Ed25519 = e.Argon2id = e.keccak256 = e.Keccak256 = e.Hmac = e.EnglishMnemonic = e.Bip39 = void 0;
  var t = vt;
  Object.defineProperty(e, "Bip39", { enumerable: !0, get: function() {
    return t.Bip39;
  } }), Object.defineProperty(e, "EnglishMnemonic", { enumerable: !0, get: function() {
    return t.EnglishMnemonic;
  } });
  var n = cs;
  Object.defineProperty(e, "Hmac", { enumerable: !0, get: function() {
    return n.Hmac;
  } });
  var r = Yn;
  Object.defineProperty(e, "Keccak256", { enumerable: !0, get: function() {
    return r.Keccak256;
  } }), Object.defineProperty(e, "keccak256", { enumerable: !0, get: function() {
    return r.keccak256;
  } });
  var s = Ie;
  Object.defineProperty(e, "Argon2id", { enumerable: !0, get: function() {
    return s.Argon2id;
  } }), Object.defineProperty(e, "Ed25519", { enumerable: !0, get: function() {
    return s.Ed25519;
  } }), Object.defineProperty(e, "Ed25519Keypair", { enumerable: !0, get: function() {
    return s.Ed25519Keypair;
  } }), Object.defineProperty(e, "isArgon2idOptions", { enumerable: !0, get: function() {
    return s.isArgon2idOptions;
  } }), Object.defineProperty(e, "xchacha20NonceLength", { enumerable: !0, get: function() {
    return s.xchacha20NonceLength;
  } }), Object.defineProperty(e, "Xchacha20poly1305Ietf", { enumerable: !0, get: function() {
    return s.Xchacha20poly1305Ietf;
  } });
  var o = To;
  Object.defineProperty(e, "Random", { enumerable: !0, get: function() {
    return o.Random;
  } });
  var i = Xn;
  Object.defineProperty(e, "Ripemd160", { enumerable: !0, get: function() {
    return i.Ripemd160;
  } }), Object.defineProperty(e, "ripemd160", { enumerable: !0, get: function() {
    return i.ripemd160;
  } });
  var a = Oo;
  Object.defineProperty(e, "Secp256k1", { enumerable: !0, get: function() {
    return a.Secp256k1;
  } });
  var c = vn;
  Object.defineProperty(e, "ExtendedSecp256k1Signature", { enumerable: !0, get: function() {
    return c.ExtendedSecp256k1Signature;
  } }), Object.defineProperty(e, "Secp256k1Signature", { enumerable: !0, get: function() {
    return c.Secp256k1Signature;
  } });
  var u = st;
  Object.defineProperty(e, "Sha256", { enumerable: !0, get: function() {
    return u.Sha256;
  } }), Object.defineProperty(e, "sha256", { enumerable: !0, get: function() {
    return u.sha256;
  } }), Object.defineProperty(e, "Sha512", { enumerable: !0, get: function() {
    return u.Sha512;
  } }), Object.defineProperty(e, "sha512", { enumerable: !0, get: function() {
    return u.sha512;
  } });
  var l = Yd;
  Object.defineProperty(e, "pathToString", { enumerable: !0, get: function() {
    return l.pathToString;
  } }), Object.defineProperty(e, "Slip10", { enumerable: !0, get: function() {
    return l.Slip10;
  } }), Object.defineProperty(e, "Slip10Curve", { enumerable: !0, get: function() {
    return l.Slip10Curve;
  } }), Object.defineProperty(e, "slip10CurveFromString", { enumerable: !0, get: function() {
    return l.slip10CurveFromString;
  } }), Object.defineProperty(e, "Slip10RawIndex", { enumerable: !0, get: function() {
    return l.Slip10RawIndex;
  } }), Object.defineProperty(e, "stringToPath", { enumerable: !0, get: function() {
    return l.stringToPath;
  } });
})(be);
var he = {}, us = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isMultisigThresholdPubkey = e.isSinglePubkey = e.pubkeyType = e.isSecp256k1Pubkey = e.isEd25519Pubkey = void 0;
  function t(o) {
    return o.type === "tendermint/PubKeyEd25519";
  }
  e.isEd25519Pubkey = t;
  function n(o) {
    return o.type === "tendermint/PubKeySecp256k1";
  }
  e.isSecp256k1Pubkey = n, e.pubkeyType = {
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/ed25519/ed25519.go#L22 */
    secp256k1: "tendermint/PubKeySecp256k1",
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/secp256k1/secp256k1.go#L23 */
    ed25519: "tendermint/PubKeyEd25519",
    /** @see https://github.com/tendermint/tendermint/blob/v0.33.0/crypto/sr25519/codec.go#L12 */
    sr25519: "tendermint/PubKeySr25519",
    multisigThreshold: "tendermint/PubKeyMultisigThreshold"
  };
  function r(o) {
    return [e.pubkeyType.ed25519, e.pubkeyType.secp256k1, e.pubkeyType.sr25519].includes(o.type);
  }
  e.isSinglePubkey = r;
  function s(o) {
    return o.type === "tendermint/PubKeyMultisigThreshold";
  }
  e.isMultisigThresholdPubkey = s;
})(us);
Object.defineProperty(he, "__esModule", { value: !0 });
he.encodeBech32Pubkey = he.encodeAminoPubkey = he.decodeBech32Pubkey = he.decodeAminoPubkey = he.encodeEd25519Pubkey = he.encodeSecp256k1Pubkey = void 0;
const Me = j, My = se, Lr = te, Bt = us;
function Ry(e) {
  if (e.length !== 33 || e[0] !== 2 && e[0] !== 3)
    throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");
  return {
    type: Bt.pubkeyType.secp256k1,
    value: (0, Me.toBase64)(e)
  };
}
he.encodeSecp256k1Pubkey = Ry;
function jy(e) {
  if (e.length !== 32)
    throw new Error("Ed25519 public key must be 32 bytes long");
  return {
    type: Bt.pubkeyType.ed25519,
    value: (0, Me.toBase64)(e)
  };
}
he.encodeEd25519Pubkey = jy;
const Ta = (0, Me.fromHex)(
  "eb5ae98721"
  /* fixed length */
), Oa = (0, Me.fromHex)(
  "1624de6420"
  /* fixed length */
), Au = (0, Me.fromHex)(
  "0dfb100520"
  /* fixed length */
), oo = (0, Me.fromHex)(
  "22c1f7e2"
  /* variable length not included */
);
function mc(e) {
  if ((0, Lr.arrayContentStartsWith)(e, Ta)) {
    const t = e.slice(Ta.length);
    if (t.length !== 33)
      throw new Error("Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).");
    return {
      type: Bt.pubkeyType.secp256k1,
      value: (0, Me.toBase64)(t)
    };
  } else if ((0, Lr.arrayContentStartsWith)(e, Oa)) {
    const t = e.slice(Oa.length);
    if (t.length !== 32)
      throw new Error("Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).");
    return {
      type: Bt.pubkeyType.ed25519,
      value: (0, Me.toBase64)(t)
    };
  } else if ((0, Lr.arrayContentStartsWith)(e, Au)) {
    const t = e.slice(Au.length);
    if (t.length !== 32)
      throw new Error("Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).");
    return {
      type: Bt.pubkeyType.sr25519,
      value: (0, Me.toBase64)(t)
    };
  } else {
    if ((0, Lr.arrayContentStartsWith)(e, oo))
      return Uy(e);
    throw new Error("Unsupported public key type. Amino data starts with: " + (0, Me.toHex)(e.slice(0, 5)));
  }
}
he.decodeAminoPubkey = mc;
function Dy(e) {
  const { data: t } = (0, Me.fromBech32)(e);
  return mc(t);
}
he.decodeBech32Pubkey = Dy;
function Pu(e) {
  if (e.length < 1)
    throw new Error("Can't decode varint. EOF");
  if (e[0] > 127)
    throw new Error("Decoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.Varint implementation from the Go standard library and write some tests.");
  return [e[0], 1];
}
function Uy(e) {
  const t = Array.from(e), n = t.splice(0, oo.length);
  if (!(0, Lr.arrayContentStartsWith)(n, oo))
    throw new Error("Invalid multisig prefix.");
  if (t.shift() != 8)
    throw new Error("Invalid multisig data. Expecting 0x08 prefix before threshold.");
  const [r, s] = Pu(t);
  t.splice(0, s);
  const o = [];
  for (; t.length > 0; ) {
    if (t.shift() != 18)
      throw new Error("Invalid multisig data. Expecting 0x12 prefix before participant pubkey length.");
    const [i, a] = Pu(t);
    if (t.splice(0, a), t.length < i)
      throw new Error("Invalid multisig data length.");
    const c = t.splice(0, i), u = mc(Uint8Array.from(c));
    o.push(u);
  }
  return {
    type: Bt.pubkeyType.multisigThreshold,
    value: {
      threshold: r.toString(),
      pubkeys: o
    }
  };
}
function ku(e) {
  const t = My.Uint53.fromString(e.toString()).toNumber();
  if (t > 127)
    throw new Error("Encoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.PutUvarint implementation from the Go standard library and write some tests.");
  return [t];
}
function fc(e) {
  if ((0, Bt.isMultisigThresholdPubkey)(e)) {
    const t = Array.from(oo);
    t.push(8), t.push(...ku(e.value.threshold));
    for (const n of e.value.pubkeys.map((r) => fc(r)))
      t.push(18), t.push(...ku(n.length)), t.push(...n);
    return new Uint8Array(t);
  } else {
    if ((0, Bt.isEd25519Pubkey)(e))
      return new Uint8Array([...Oa, ...(0, Me.fromBase64)(e.value)]);
    if ((0, Bt.isSecp256k1Pubkey)(e))
      return new Uint8Array([...Ta, ...(0, Me.fromBase64)(e.value)]);
    throw new Error("Unsupported pubkey type");
  }
}
he.encodeAminoPubkey = fc;
function $y(e, t) {
  return (0, Me.toBech32)(t, fc(e));
}
he.encodeBech32Pubkey = $y;
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.pubkeyToAddress = qe.pubkeyToRawAddress = qe.rawSecp256k1PubkeyToRawAddress = qe.rawEd25519PubkeyToRawAddress = void 0;
const io = be, Ia = j, xy = he, Li = us;
function Xd(e) {
  if (e.length !== 32)
    throw new Error(`Invalid Ed25519 pubkey length: ${e.length}`);
  return (0, io.sha256)(e).slice(0, 20);
}
qe.rawEd25519PubkeyToRawAddress = Xd;
function Zd(e) {
  if (e.length !== 33)
    throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${e.length}`);
  return (0, io.ripemd160)((0, io.sha256)(e));
}
qe.rawSecp256k1PubkeyToRawAddress = Zd;
function em(e) {
  if ((0, Li.isSecp256k1Pubkey)(e)) {
    const t = (0, Ia.fromBase64)(e.value);
    return Zd(t);
  } else if ((0, Li.isEd25519Pubkey)(e)) {
    const t = (0, Ia.fromBase64)(e.value);
    return Xd(t);
  } else if ((0, Li.isMultisigThresholdPubkey)(e)) {
    const t = (0, xy.encodeAminoPubkey)(e);
    return (0, io.sha256)(t).slice(0, 20);
  } else
    throw new Error("Unsupported public key type");
}
qe.pubkeyToRawAddress = em;
function Hy(e, t) {
  return (0, Ia.toBech32)(t, em(e));
}
qe.pubkeyToAddress = Hy;
var wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.addCoins = wt.parseCoins = wt.coins = wt.coin = void 0;
const Ba = se;
function tm(e, t) {
  let n;
  if (typeof e == "number")
    try {
      n = new Ba.Uint53(e).toString();
    } catch {
      throw new Error("Given amount is not a safe integer. Consider using a string instead to overcome the limitations of JS numbers.");
    }
  else {
    if (!e.match(/^[0-9]+$/))
      throw new Error("Invalid unsigned integer string format");
    n = e.replace(/^0*/, "") || "0";
  }
  return {
    amount: n,
    denom: t
  };
}
wt.coin = tm;
function qy(e, t) {
  return [tm(e, t)];
}
wt.coins = qy;
function Fy(e) {
  return e.replace(/\s/g, "").split(",").filter(Boolean).map((t) => {
    const n = t.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
    if (!n)
      throw new Error("Got an invalid coin string");
    return {
      amount: n[1].replace(/^0+/, "") || "0",
      denom: n[2]
    };
  });
}
wt.parseCoins = Fy;
function Vy(e, t) {
  if (e.denom !== t.denom)
    throw new Error("Trying to add two coins with different denoms");
  return {
    amount: Ba.Decimal.fromAtomics(e.amount, 0).plus(Ba.Decimal.fromAtomics(t.amount, 0)).atomics,
    denom: e.denom
  };
}
wt.addCoins = Vy;
var Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
Zn.createMultisigThresholdPubkey = Zn.compareArrays = void 0;
const Eu = j, Ly = se, Tu = qe;
function nm(e, t) {
  const n = (0, Eu.toHex)(e), r = (0, Eu.toHex)(t);
  return n === r ? 0 : n < r ? -1 : 1;
}
Zn.compareArrays = nm;
function Wy(e, t, n = !1) {
  const r = new Ly.Uint53(t);
  if (r.toNumber() > e.length)
    throw new Error(`Threshold k = ${r.toNumber()} exceeds number of keys n = ${e.length}`);
  const s = n ? e : Array.from(e).sort((o, i) => {
    const a = (0, Tu.pubkeyToRawAddress)(o), c = (0, Tu.pubkeyToRawAddress)(i);
    return nm(a, c);
  });
  return {
    type: "tendermint/PubKeyMultisigThreshold",
    value: {
      threshold: r.toString(),
      pubkeys: s
    }
  };
}
Zn.createMultisigThresholdPubkey = Wy;
var Io = {};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.omitDefault = void 0;
function Jy(e) {
  switch (typeof e) {
    case "string":
      return e === "" ? void 0 : e;
    case "number":
      return e === 0 ? void 0 : e;
    case "bigint":
      return e === BigInt(0) ? void 0 : e;
    case "boolean":
      return e || void 0;
    default:
      throw new Error(`Got unsupported type '${typeof e}'`);
  }
}
Io.omitDefault = Jy;
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
ls.makeCosmoshubPath = void 0;
const Tr = be;
function Gy(e) {
  return [
    Tr.Slip10RawIndex.hardened(44),
    Tr.Slip10RawIndex.hardened(118),
    Tr.Slip10RawIndex.hardened(0),
    Tr.Slip10RawIndex.normal(0),
    Tr.Slip10RawIndex.normal(e)
  ];
}
ls.makeCosmoshubPath = Gy;
var er = {}, zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.decodeSignature = zt.encodeSecp256k1Signature = void 0;
const Na = j, Ky = he, zy = us;
function Qy(e, t) {
  if (t.length !== 64)
    throw new Error("Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.");
  return {
    pub_key: (0, Ky.encodeSecp256k1Pubkey)(e),
    signature: (0, Na.toBase64)(t)
  };
}
zt.encodeSecp256k1Signature = Qy;
function Cy(e) {
  switch (e.pub_key.type) {
    case zy.pubkeyType.secp256k1:
      return {
        pubkey: (0, Na.fromBase64)(e.pub_key.value),
        signature: (0, Na.fromBase64)(e.signature)
      };
    default:
      throw new Error("Unsupported pubkey type");
  }
}
zt.decodeSignature = Cy;
var ot = {};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.serializeSignDoc = ot.escapeCharacters = ot.makeSignDoc = ot.sortedJsonStringify = void 0;
const Yy = j, Ou = se;
function Ma(e) {
  if (typeof e != "object" || e === null)
    return e;
  if (Array.isArray(e))
    return e.map(Ma);
  const t = Object.keys(e).sort(), n = {};
  return t.forEach((r) => {
    n[r] = Ma(e[r]);
  }), n;
}
function rm(e) {
  return JSON.stringify(Ma(e));
}
ot.sortedJsonStringify = rm;
function Xy(e, t, n, r, s, o, i) {
  return {
    chain_id: n,
    account_number: Ou.Uint53.fromString(s.toString()).toString(),
    sequence: Ou.Uint53.fromString(o.toString()).toString(),
    fee: t,
    msgs: e,
    memo: r || "",
    ...i && { timeout_height: i.toString() }
  };
}
ot.makeSignDoc = Xy;
function sm(e) {
  const t = /&/g, n = /</g, r = />/g;
  return e.replace(t, "\\u0026").replace(n, "\\u003c").replace(r, "\\u003e");
}
ot.escapeCharacters = sm;
function Zy(e) {
  const t = sm(rm(e));
  return (0, Yy.toUtf8)(t);
}
ot.serializeSignDoc = Zy;
var pc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decrypt = e.encrypt = e.supportedAlgorithms = e.executeKdf = e.cosmjsSalt = void 0;
  const t = be, n = j;
  e.cosmjsSalt = (0, n.toAscii)("The CosmJS salt.");
  async function r(i, a) {
    switch (a.algorithm) {
      case "argon2id": {
        const c = a.params;
        if (!(0, t.isArgon2idOptions)(c))
          throw new Error("Invalid format of argon2id params");
        return t.Argon2id.execute(i, e.cosmjsSalt, c);
      }
      default:
        throw new Error("Unsupported KDF algorithm");
    }
  }
  e.executeKdf = r, e.supportedAlgorithms = {
    xchacha20poly1305Ietf: "xchacha20poly1305-ietf"
  };
  async function s(i, a, c) {
    switch (c.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = t.Random.getBytes(t.xchacha20NonceLength);
        return new Uint8Array([
          ...u,
          ...await t.Xchacha20poly1305Ietf.encrypt(i, a, u)
        ]);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${c.algorithm}'`);
    }
  }
  e.encrypt = s;
  async function o(i, a, c) {
    switch (c.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = i.slice(0, t.xchacha20NonceLength);
        return t.Xchacha20poly1305Ietf.decrypt(i.slice(t.xchacha20NonceLength), a, u);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${c.algorithm}'`);
    }
  }
  e.decrypt = o;
})(pc);
Object.defineProperty(er, "__esModule", { value: !0 });
er.Secp256k1HdWallet = er.extractKdfConfiguration = void 0;
const Le = be, Or = j, qn = te, eh = qe, th = ls, nh = zt, rh = ot, Ir = pc, Ys = "secp256k1wallet-v1", sh = {
  algorithm: "argon2id",
  params: {
    outputLength: 32,
    opsLimit: 24,
    memLimitKib: 12 * 1024
  }
};
function oh(e) {
  return !(!(0, qn.isNonNullObject)(e) || typeof e.hdPath != "string" || typeof e.prefix != "string");
}
function ih(e) {
  return e.kdf;
}
function ah(e) {
  const t = JSON.parse(e);
  if (!(0, qn.isNonNullObject)(t))
    throw new Error("Root document is not an object.");
  switch (t.type) {
    case Ys:
      return ih(t);
    default:
      throw new Error("Unsupported serialization type");
  }
}
er.extractKdfConfiguration = ah;
const Iu = {
  bip39Password: "",
  hdPaths: [(0, th.makeCosmoshubPath)(0)],
  prefix: "cosmos"
};
class on {
  /**
   * Restores a wallet from the given BIP39 mnemonic.
   *
   * @param mnemonic Any valid English mnemonic.
   * @param options An optional `Secp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async fromMnemonic(t, n = {}) {
    const r = new Le.EnglishMnemonic(t), s = await Le.Bip39.mnemonicToSeed(r, n.bip39Password);
    return new on(r, {
      ...n,
      seed: s
    });
  }
  /**
   * Generates a new wallet with a BIP39 mnemonic of the given length.
   *
   * @param length The number of words in the mnemonic (12, 15, 18, 21 or 24).
   * @param options An optional `Secp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async generate(t = 12, n = {}) {
    const r = 4 * Math.floor(11 * t / 33), s = Le.Random.getBytes(r), o = Le.Bip39.encode(s);
    return on.fromMnemonic(o.toString(), n);
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  static async deserialize(t, n) {
    const r = JSON.parse(t);
    if (!(0, qn.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    switch (r.type) {
      case Ys:
        return on.deserializeTypeV1(t, n);
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * This is an advanced alternative to calling `deserialize(serialization, password)` directly, which allows
   * you to offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF configuration. This can be
   * done using `extractKdfConfiguration(serialization)` and `executeKdf(password, kdfConfiguration)` from this package.
   */
  static async deserializeWithEncryptionKey(t, n) {
    const r = JSON.parse(t);
    if (!(0, qn.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const s = r;
    switch (s.type) {
      case Ys: {
        const o = await (0, Ir.decrypt)((0, Or.fromBase64)(s.data), n, s.encryption), i = JSON.parse((0, Or.fromUtf8)(o)), { mnemonic: a, accounts: c } = i;
        if ((0, qn.assert)(typeof a == "string"), !Array.isArray(c))
          throw new Error("Property 'accounts' is not an array");
        if (!c.every((d) => oh(d)))
          throw new Error("Account is not in the correct format.");
        const u = c[0].prefix;
        if (!c.every(({ prefix: d }) => d === u))
          throw new Error("Accounts do not all have the same prefix");
        const l = c.map(({ hdPath: d }) => (0, Le.stringToPath)(d));
        return on.fromMnemonic(a, {
          hdPaths: l,
          prefix: u
        });
      }
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  static async deserializeTypeV1(t, n) {
    const r = JSON.parse(t);
    if (!(0, qn.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const s = await (0, Ir.executeKdf)(n, r.kdf);
    return on.deserializeWithEncryptionKey(t, s);
  }
  constructor(t, n) {
    const r = n.hdPaths ?? Iu.hdPaths, s = n.prefix ?? Iu.prefix;
    this.secret = t, this.seed = n.seed, this.accounts = r.map((o) => ({
      hdPath: o,
      prefix: s
    }));
  }
  get mnemonic() {
    return this.secret.toString();
  }
  async getAccounts() {
    return (await this.getAccountsWithPrivkeys()).map(({ algo: n, pubkey: r, address: s }) => ({
      algo: n,
      pubkey: r,
      address: s
    }));
  }
  async signAmino(t, n) {
    const s = (await this.getAccountsWithPrivkeys()).find(({ address: l }) => l === t);
    if (s === void 0)
      throw new Error(`Address ${t} not found in wallet`);
    const { privkey: o, pubkey: i } = s, a = (0, Le.sha256)((0, rh.serializeSignDoc)(n)), c = await Le.Secp256k1.createSignature(a, o), u = new Uint8Array([...c.r(32), ...c.s(32)]);
    return {
      signed: n,
      signature: (0, nh.encodeSecp256k1Signature)(i, u)
    };
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  async serialize(t) {
    const n = sh, r = await (0, Ir.executeKdf)(t, n);
    return this.serializeWithEncryptionKey(r, n);
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * This is an advanced alternative to calling `serialize(password)` directly, which allows you to
   * offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF options. If this
   * is not the case, the wallet cannot be restored with the original password.
   */
  async serializeWithEncryptionKey(t, n) {
    const r = {
      mnemonic: this.mnemonic,
      accounts: this.accounts.map(({ hdPath: c, prefix: u }) => ({
        hdPath: (0, Le.pathToString)(c),
        prefix: u
      }))
    }, s = (0, Or.toUtf8)(JSON.stringify(r)), o = {
      algorithm: Ir.supportedAlgorithms.xchacha20poly1305Ietf
    }, i = await (0, Ir.encrypt)(s, t, o), a = {
      type: Ys,
      kdf: n,
      encryption: o,
      data: (0, Or.toBase64)(i)
    };
    return JSON.stringify(a);
  }
  async getKeyPair(t) {
    const { privkey: n } = Le.Slip10.derivePath(Le.Slip10Curve.Secp256k1, this.seed, t), { pubkey: r } = await Le.Secp256k1.makeKeypair(n);
    return {
      privkey: n,
      pubkey: Le.Secp256k1.compressPubkey(r)
    };
  }
  async getAccountsWithPrivkeys() {
    return Promise.all(this.accounts.map(async ({ hdPath: t, prefix: n }) => {
      const { privkey: r, pubkey: s } = await this.getKeyPair(t), o = (0, Or.toBech32)(n, (0, eh.rawSecp256k1PubkeyToRawAddress)(s));
      return {
        algo: "secp256k1",
        privkey: r,
        pubkey: s,
        address: o
      };
    }));
  }
}
er.Secp256k1HdWallet = on;
var Bo = {};
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.Secp256k1Wallet = void 0;
const Os = be, ch = j, uh = qe, lh = zt, dh = ot;
class gc {
  /**
   * Creates a Secp256k1Wallet from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  static async fromKey(t, n = "cosmos") {
    const r = (await Os.Secp256k1.makeKeypair(t)).pubkey;
    return new gc(t, Os.Secp256k1.compressPubkey(r), n);
  }
  constructor(t, n, r) {
    this.privkey = t, this.pubkey = n, this.prefix = r;
  }
  get address() {
    return (0, ch.toBech32)(this.prefix, (0, uh.rawSecp256k1PubkeyToRawAddress)(this.pubkey));
  }
  async getAccounts() {
    return [
      {
        algo: "secp256k1",
        address: this.address,
        pubkey: this.pubkey
      }
    ];
  }
  async signAmino(t, n) {
    if (t !== this.address)
      throw new Error(`Address ${t} not found in wallet`);
    const r = new Os.Sha256((0, dh.serializeSignDoc)(n)).digest(), s = await Os.Secp256k1.createSignature(r, this.privkey), o = new Uint8Array([...s.r(32), ...s.s(32)]);
    return {
      signed: n,
      signature: (0, lh.encodeSecp256k1Signature)(this.pubkey, o)
    };
  }
}
Bo.Secp256k1Wallet = gc;
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.makeStdTx = tr.isStdTx = void 0;
function mh(e) {
  const { memo: t, msg: n, fee: r, signatures: s } = e;
  return typeof t == "string" && Array.isArray(n) && typeof r == "object" && Array.isArray(s);
}
tr.isStdTx = mh;
function fh(e, t) {
  return {
    msg: e.msgs,
    fee: e.fee,
    memo: e.memo,
    signatures: Array.isArray(t) ? t : [t]
  };
}
tr.makeStdTx = fh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.executeKdf = e.makeStdTx = e.isStdTx = e.serializeSignDoc = e.makeSignDoc = e.encodeSecp256k1Signature = e.decodeSignature = e.Secp256k1Wallet = e.Secp256k1HdWallet = e.extractKdfConfiguration = e.pubkeyType = e.isSinglePubkey = e.isSecp256k1Pubkey = e.isMultisigThresholdPubkey = e.isEd25519Pubkey = e.makeCosmoshubPath = e.omitDefault = e.createMultisigThresholdPubkey = e.encodeSecp256k1Pubkey = e.encodeEd25519Pubkey = e.encodeBech32Pubkey = e.encodeAminoPubkey = e.decodeBech32Pubkey = e.decodeAminoPubkey = e.parseCoins = e.coins = e.coin = e.addCoins = e.rawSecp256k1PubkeyToRawAddress = e.rawEd25519PubkeyToRawAddress = e.pubkeyToRawAddress = e.pubkeyToAddress = void 0;
  var t = qe;
  Object.defineProperty(e, "pubkeyToAddress", { enumerable: !0, get: function() {
    return t.pubkeyToAddress;
  } }), Object.defineProperty(e, "pubkeyToRawAddress", { enumerable: !0, get: function() {
    return t.pubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawEd25519PubkeyToRawAddress", { enumerable: !0, get: function() {
    return t.rawEd25519PubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawSecp256k1PubkeyToRawAddress", { enumerable: !0, get: function() {
    return t.rawSecp256k1PubkeyToRawAddress;
  } });
  var n = wt;
  Object.defineProperty(e, "addCoins", { enumerable: !0, get: function() {
    return n.addCoins;
  } }), Object.defineProperty(e, "coin", { enumerable: !0, get: function() {
    return n.coin;
  } }), Object.defineProperty(e, "coins", { enumerable: !0, get: function() {
    return n.coins;
  } }), Object.defineProperty(e, "parseCoins", { enumerable: !0, get: function() {
    return n.parseCoins;
  } });
  var r = he;
  Object.defineProperty(e, "decodeAminoPubkey", { enumerable: !0, get: function() {
    return r.decodeAminoPubkey;
  } }), Object.defineProperty(e, "decodeBech32Pubkey", { enumerable: !0, get: function() {
    return r.decodeBech32Pubkey;
  } }), Object.defineProperty(e, "encodeAminoPubkey", { enumerable: !0, get: function() {
    return r.encodeAminoPubkey;
  } }), Object.defineProperty(e, "encodeBech32Pubkey", { enumerable: !0, get: function() {
    return r.encodeBech32Pubkey;
  } }), Object.defineProperty(e, "encodeEd25519Pubkey", { enumerable: !0, get: function() {
    return r.encodeEd25519Pubkey;
  } }), Object.defineProperty(e, "encodeSecp256k1Pubkey", { enumerable: !0, get: function() {
    return r.encodeSecp256k1Pubkey;
  } });
  var s = Zn;
  Object.defineProperty(e, "createMultisigThresholdPubkey", { enumerable: !0, get: function() {
    return s.createMultisigThresholdPubkey;
  } });
  var o = Io;
  Object.defineProperty(e, "omitDefault", { enumerable: !0, get: function() {
    return o.omitDefault;
  } });
  var i = ls;
  Object.defineProperty(e, "makeCosmoshubPath", { enumerable: !0, get: function() {
    return i.makeCosmoshubPath;
  } });
  var a = us;
  Object.defineProperty(e, "isEd25519Pubkey", { enumerable: !0, get: function() {
    return a.isEd25519Pubkey;
  } }), Object.defineProperty(e, "isMultisigThresholdPubkey", { enumerable: !0, get: function() {
    return a.isMultisigThresholdPubkey;
  } }), Object.defineProperty(e, "isSecp256k1Pubkey", { enumerable: !0, get: function() {
    return a.isSecp256k1Pubkey;
  } }), Object.defineProperty(e, "isSinglePubkey", { enumerable: !0, get: function() {
    return a.isSinglePubkey;
  } }), Object.defineProperty(e, "pubkeyType", { enumerable: !0, get: function() {
    return a.pubkeyType;
  } });
  var c = er;
  Object.defineProperty(e, "extractKdfConfiguration", { enumerable: !0, get: function() {
    return c.extractKdfConfiguration;
  } }), Object.defineProperty(e, "Secp256k1HdWallet", { enumerable: !0, get: function() {
    return c.Secp256k1HdWallet;
  } });
  var u = Bo;
  Object.defineProperty(e, "Secp256k1Wallet", { enumerable: !0, get: function() {
    return u.Secp256k1Wallet;
  } });
  var l = zt;
  Object.defineProperty(e, "decodeSignature", { enumerable: !0, get: function() {
    return l.decodeSignature;
  } }), Object.defineProperty(e, "encodeSecp256k1Signature", { enumerable: !0, get: function() {
    return l.encodeSecp256k1Signature;
  } });
  var d = ot;
  Object.defineProperty(e, "makeSignDoc", { enumerable: !0, get: function() {
    return d.makeSignDoc;
  } }), Object.defineProperty(e, "serializeSignDoc", { enumerable: !0, get: function() {
    return d.serializeSignDoc;
  } });
  var b = tr;
  Object.defineProperty(e, "isStdTx", { enumerable: !0, get: function() {
    return b.isStdTx;
  } }), Object.defineProperty(e, "makeStdTx", { enumerable: !0, get: function() {
    return b.makeStdTx;
  } });
  var y = pc;
  Object.defineProperty(e, "executeKdf", { enumerable: !0, get: function() {
    return y.executeKdf;
  } });
})(gt);
var kt = {};
Object.defineProperty(kt, "__esModule", { value: !0 });
kt.makeSignBytes = kt.makeSignDoc = kt.makeAuthInfoBytes = void 0;
const Bu = te, ph = is, ao = Rt;
function gh(e, t) {
  return e.map(({ pubkey: n, sequence: r }) => ({
    publicKey: n,
    modeInfo: {
      single: { mode: t }
    },
    sequence: BigInt(r)
  }));
}
function yh(e, t, n, r, s, o = ph.SignMode.SIGN_MODE_DIRECT) {
  (0, Bu.assert)(r === void 0 || typeof r == "string", "feeGranter must be undefined or string"), (0, Bu.assert)(s === void 0 || typeof s == "string", "feePayer must be undefined or string");
  const i = ao.AuthInfo.fromPartial({
    signerInfos: gh(e, o),
    fee: {
      amount: [...t],
      gasLimit: BigInt(n),
      granter: r,
      payer: s
    }
  });
  return ao.AuthInfo.encode(i).finish();
}
kt.makeAuthInfoBytes = yh;
function hh(e, t, n, r) {
  return {
    bodyBytes: e,
    authInfoBytes: t,
    chainId: n,
    accountNumber: BigInt(r)
  };
}
kt.makeSignDoc = hh;
function bh({ accountNumber: e, authInfoBytes: t, bodyBytes: n, chainId: r }) {
  const s = ao.SignDoc.fromPartial({
    accountNumber: e,
    authInfoBytes: t,
    bodyBytes: n,
    chainId: r
  });
  return ao.SignDoc.encode(s).finish();
}
kt.makeSignBytes = bh;
var yc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decrypt = e.encrypt = e.supportedAlgorithms = e.executeKdf = e.cosmjsSalt = void 0;
  const t = be, n = j;
  e.cosmjsSalt = (0, n.toAscii)("The CosmJS salt.");
  async function r(i, a) {
    switch (a.algorithm) {
      case "argon2id": {
        const c = a.params;
        if (!(0, t.isArgon2idOptions)(c))
          throw new Error("Invalid format of argon2id params");
        return t.Argon2id.execute(i, e.cosmjsSalt, c);
      }
      default:
        throw new Error("Unsupported KDF algorithm");
    }
  }
  e.executeKdf = r, e.supportedAlgorithms = {
    xchacha20poly1305Ietf: "xchacha20poly1305-ietf"
  };
  async function s(i, a, c) {
    switch (c.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = t.Random.getBytes(t.xchacha20NonceLength);
        return new Uint8Array([
          ...u,
          ...await t.Xchacha20poly1305Ietf.encrypt(i, a, u)
        ]);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${c.algorithm}'`);
    }
  }
  e.encrypt = s;
  async function o(i, a, c) {
    switch (c.algorithm) {
      case e.supportedAlgorithms.xchacha20poly1305Ietf: {
        const u = i.slice(0, t.xchacha20NonceLength);
        return t.Xchacha20poly1305Ietf.decrypt(i.slice(t.xchacha20NonceLength), a, u);
      }
      default:
        throw new Error(`Unsupported encryption algorithm: '${c.algorithm}'`);
    }
  }
  e.decrypt = o;
})(yc);
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.DirectSecp256k1HdWallet = Wn.extractKdfConfiguration = void 0;
const Ra = gt, We = be, Br = j, Fn = te, vh = kt, Nr = yc, Xs = "directsecp256k1hdwallet-v1", wh = {
  algorithm: "argon2id",
  params: {
    outputLength: 32,
    opsLimit: 24,
    memLimitKib: 12 * 1024
  }
};
function _h(e) {
  return !(!(0, Fn.isNonNullObject)(e) || typeof e.hdPath != "string" || typeof e.prefix != "string");
}
function Sh(e) {
  return e.kdf;
}
function Ah(e) {
  const t = JSON.parse(e);
  if (!(0, Fn.isNonNullObject)(t))
    throw new Error("Root document is not an object.");
  switch (t.type) {
    case Xs:
      return Sh(t);
    default:
      throw new Error("Unsupported serialization type");
  }
}
Wn.extractKdfConfiguration = Ah;
const Nu = {
  bip39Password: "",
  hdPaths: [(0, Ra.makeCosmoshubPath)(0)],
  prefix: "cosmos"
};
class an {
  /**
   * Restores a wallet from the given BIP39 mnemonic.
   *
   * @param mnemonic Any valid English mnemonic.
   * @param options An optional `DirectSecp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async fromMnemonic(t, n = {}) {
    const r = new We.EnglishMnemonic(t), s = await We.Bip39.mnemonicToSeed(r, n.bip39Password);
    return new an(r, {
      ...n,
      seed: s
    });
  }
  /**
   * Generates a new wallet with a BIP39 mnemonic of the given length.
   *
   * @param length The number of words in the mnemonic (12, 15, 18, 21 or 24).
   * @param options An optional `DirectSecp256k1HdWalletOptions` object optionally containing a bip39Password, hdPaths, and prefix.
   */
  static async generate(t = 12, n = {}) {
    const r = 4 * Math.floor(11 * t / 33), s = We.Random.getBytes(r), o = We.Bip39.encode(s);
    return an.fromMnemonic(o.toString(), n);
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  static async deserialize(t, n) {
    const r = JSON.parse(t);
    if (!(0, Fn.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    switch (r.type) {
      case Xs:
        return an.deserializeTypeV1(t, n);
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  /**
   * Restores a wallet from an encrypted serialization.
   *
   * This is an advanced alternative to calling `deserialize(serialization, password)` directly, which allows
   * you to offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF configuration. This can be
   * done using `extractKdfConfiguration(serialization)` and `executeKdf(password, kdfConfiguration)` from this package.
   */
  static async deserializeWithEncryptionKey(t, n) {
    const r = JSON.parse(t);
    if (!(0, Fn.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const s = r;
    switch (s.type) {
      case Xs: {
        const o = await (0, Nr.decrypt)((0, Br.fromBase64)(s.data), n, s.encryption), i = JSON.parse((0, Br.fromUtf8)(o)), { mnemonic: a, accounts: c } = i;
        if ((0, Fn.assert)(typeof a == "string"), !Array.isArray(c))
          throw new Error("Property 'accounts' is not an array");
        if (!c.every((d) => _h(d)))
          throw new Error("Account is not in the correct format.");
        const u = c[0].prefix;
        if (!c.every(({ prefix: d }) => d === u))
          throw new Error("Accounts do not all have the same prefix");
        const l = c.map(({ hdPath: d }) => (0, We.stringToPath)(d));
        return an.fromMnemonic(a, {
          hdPaths: l,
          prefix: u
        });
      }
      default:
        throw new Error("Unsupported serialization type");
    }
  }
  static async deserializeTypeV1(t, n) {
    const r = JSON.parse(t);
    if (!(0, Fn.isNonNullObject)(r))
      throw new Error("Root document is not an object.");
    const s = await (0, Nr.executeKdf)(n, r.kdf);
    return an.deserializeWithEncryptionKey(t, s);
  }
  constructor(t, n) {
    const r = n.prefix ?? Nu.prefix, s = n.hdPaths ?? Nu.hdPaths;
    this.secret = t, this.seed = n.seed, this.accounts = s.map((o) => ({
      hdPath: o,
      prefix: r
    }));
  }
  get mnemonic() {
    return this.secret.toString();
  }
  async getAccounts() {
    return (await this.getAccountsWithPrivkeys()).map(({ algo: n, pubkey: r, address: s }) => ({
      algo: n,
      pubkey: r,
      address: s
    }));
  }
  async signDirect(t, n) {
    const s = (await this.getAccountsWithPrivkeys()).find(({ address: b }) => b === t);
    if (s === void 0)
      throw new Error(`Address ${t} not found in wallet`);
    const { privkey: o, pubkey: i } = s, a = (0, vh.makeSignBytes)(n), c = (0, We.sha256)(a), u = await We.Secp256k1.createSignature(c, o), l = new Uint8Array([...u.r(32), ...u.s(32)]), d = (0, Ra.encodeSecp256k1Signature)(i, l);
    return {
      signed: n,
      signature: d
    };
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * @param password The user provided password used to generate an encryption key via a KDF.
   *                 This is not normalized internally (see "Unicode normalization" to learn more).
   */
  async serialize(t) {
    const n = wh, r = await (0, Nr.executeKdf)(t, n);
    return this.serializeWithEncryptionKey(r, n);
  }
  /**
   * Generates an encrypted serialization of this wallet.
   *
   * This is an advanced alternative to calling `serialize(password)` directly, which allows you to
   * offload the KDF execution to a non-UI thread (e.g. in a WebWorker).
   *
   * The caller is responsible for ensuring the key was derived with the given KDF options. If this
   * is not the case, the wallet cannot be restored with the original password.
   */
  async serializeWithEncryptionKey(t, n) {
    const r = {
      mnemonic: this.mnemonic,
      accounts: this.accounts.map(({ hdPath: c, prefix: u }) => ({
        hdPath: (0, We.pathToString)(c),
        prefix: u
      }))
    }, s = (0, Br.toUtf8)(JSON.stringify(r)), o = {
      algorithm: Nr.supportedAlgorithms.xchacha20poly1305Ietf
    }, i = await (0, Nr.encrypt)(s, t, o), a = {
      type: Xs,
      kdf: n,
      encryption: o,
      data: (0, Br.toBase64)(i)
    };
    return JSON.stringify(a);
  }
  async getKeyPair(t) {
    const { privkey: n } = We.Slip10.derivePath(We.Slip10Curve.Secp256k1, this.seed, t), { pubkey: r } = await We.Secp256k1.makeKeypair(n);
    return {
      privkey: n,
      pubkey: We.Secp256k1.compressPubkey(r)
    };
  }
  async getAccountsWithPrivkeys() {
    return Promise.all(this.accounts.map(async ({ hdPath: t, prefix: n }) => {
      const { privkey: r, pubkey: s } = await this.getKeyPair(t), o = (0, Br.toBech32)(n, (0, Ra.rawSecp256k1PubkeyToRawAddress)(s));
      return {
        algo: "secp256k1",
        privkey: r,
        pubkey: s,
        address: o
      };
    }));
  }
}
Wn.DirectSecp256k1HdWallet = an;
var No = {};
Object.defineProperty(No, "__esModule", { value: !0 });
No.DirectSecp256k1Wallet = void 0;
const Mu = gt, Is = be, Ph = j, kh = kt;
class hc {
  /**
   * Creates a DirectSecp256k1Wallet from the given private key
   *
   * @param privkey The private key.
   * @param prefix The bech32 address prefix (human readable part). Defaults to "cosmos".
   */
  static async fromKey(t, n = "cosmos") {
    const r = (await Is.Secp256k1.makeKeypair(t)).pubkey;
    return new hc(t, Is.Secp256k1.compressPubkey(r), n);
  }
  constructor(t, n, r) {
    this.privkey = t, this.pubkey = n, this.prefix = r;
  }
  get address() {
    return (0, Ph.toBech32)(this.prefix, (0, Mu.rawSecp256k1PubkeyToRawAddress)(this.pubkey));
  }
  async getAccounts() {
    return [
      {
        algo: "secp256k1",
        address: this.address,
        pubkey: this.pubkey
      }
    ];
  }
  async signDirect(t, n) {
    const r = (0, kh.makeSignBytes)(n);
    if (t !== this.address)
      throw new Error(`Address ${t} not found in wallet`);
    const s = (0, Is.sha256)(r), o = await Is.Secp256k1.createSignature(s, this.privkey), i = new Uint8Array([...o.r(32), ...o.s(32)]), a = (0, Mu.encodeSecp256k1Signature)(this.pubkey, i);
    return {
      signed: n,
      signature: a
    };
  }
}
No.DirectSecp256k1Wallet = hc;
var Mo = {};
Object.defineProperty(Mo, "__esModule", { value: !0 });
Mo.makeCosmoshubPath = void 0;
const Mr = be;
function Eh(e) {
  return [
    Mr.Slip10RawIndex.hardened(44),
    Mr.Slip10RawIndex.hardened(118),
    Mr.Slip10RawIndex.hardened(0),
    Mr.Slip10RawIndex.normal(0),
    Mr.Slip10RawIndex.normal(e)
  ];
}
Mo.makeCosmoshubPath = Eh;
var _t = {};
Object.defineProperty(_t, "__esModule", { value: !0 });
_t.decodeOptionalPubkey = _t.decodePubkey = _t.anyToSinglePubkey = _t.encodePubkey = void 0;
const Kr = gt, Ru = j, Th = se, ja = ep, Da = tp, Ua = np, Wi = rc;
function om(e) {
  if ((0, Kr.isSecp256k1Pubkey)(e)) {
    const t = Ua.PubKey.fromPartial({
      key: (0, Ru.fromBase64)(e.value)
    });
    return Wi.Any.fromPartial({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: Uint8Array.from(Ua.PubKey.encode(t).finish())
    });
  } else if ((0, Kr.isEd25519Pubkey)(e)) {
    const t = ja.PubKey.fromPartial({
      key: (0, Ru.fromBase64)(e.value)
    });
    return Wi.Any.fromPartial({
      typeUrl: "/cosmos.crypto.ed25519.PubKey",
      value: Uint8Array.from(ja.PubKey.encode(t).finish())
    });
  } else if ((0, Kr.isMultisigThresholdPubkey)(e)) {
    const t = Da.LegacyAminoPubKey.fromPartial({
      threshold: Th.Uint53.fromString(e.value.threshold).toNumber(),
      publicKeys: e.value.pubkeys.map(om)
    });
    return Wi.Any.fromPartial({
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: Uint8Array.from(Da.LegacyAminoPubKey.encode(t).finish())
    });
  } else
    throw new Error(`Pubkey type ${e.type} not recognized`);
}
_t.encodePubkey = om;
function $a(e) {
  switch (e.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey": {
      const { key: t } = Ua.PubKey.decode(e.value);
      return (0, Kr.encodeSecp256k1Pubkey)(t);
    }
    case "/cosmos.crypto.ed25519.PubKey": {
      const { key: t } = ja.PubKey.decode(e.value);
      return (0, Kr.encodeEd25519Pubkey)(t);
    }
    default:
      throw new Error(`Pubkey type_url ${e.typeUrl} not recognized as single public key type`);
  }
}
_t.anyToSinglePubkey = $a;
function im(e) {
  switch (e.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey":
    case "/cosmos.crypto.ed25519.PubKey":
      return $a(e);
    case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
      const { threshold: t, publicKeys: n } = Da.LegacyAminoPubKey.decode(e.value);
      return {
        type: "tendermint/PubKeyMultisigThreshold",
        value: {
          threshold: t.toString(),
          pubkeys: n.map($a)
        }
      };
    }
    default:
      throw new Error(`Pubkey type URL '${e.typeUrl}' not recognized`);
  }
}
_t.decodePubkey = im;
function Oh(e) {
  if (!e)
    return null;
  if (e.typeUrl) {
    if (e.value.length)
      return im(e);
    throw new Error(`Pubkey is an Any with type URL '${e.typeUrl}' but an empty value`);
  } else {
    if (e.value.length)
      throw new Error("Pubkey is an Any with an empty type URL but a value set");
    return null;
  }
}
_t.decodeOptionalPubkey = Oh;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.Registry = ze.isTxBodyEncodeObject = ze.isPbjsGeneratedType = ze.isTsProtoGeneratedType = ze.isTelescopeGeneratedType = void 0;
const Ih = vd, Bh = wd, Ji = Rt, Nh = rc;
function am(e) {
  const t = e;
  return typeof t.fromPartial == "function" && typeof t.typeUrl == "string";
}
ze.isTelescopeGeneratedType = am;
function bc(e) {
  return typeof e.fromPartial == "function";
}
ze.isTsProtoGeneratedType = bc;
function Mh(e) {
  return !bc(e);
}
ze.isPbjsGeneratedType = Mh;
const ju = {
  cosmosCoin: "/cosmos.base.v1beta1.Coin",
  cosmosMsgSend: "/cosmos.bank.v1beta1.MsgSend",
  cosmosTxBody: "/cosmos.tx.v1beta1.TxBody",
  googleAny: "/google.protobuf.Any"
};
function cm(e) {
  return e.typeUrl === "/cosmos.tx.v1beta1.TxBody";
}
ze.isTxBodyEncodeObject = cm;
class Rh {
  /**
   * Creates a new Registry for mapping protobuf type identifiers/type URLs to
   * actual implementations. Those implementations are typically generated with ts-proto
   * but we also support protobuf.js as a type generator.
   *
   * If there is no parameter given, a `new Registry()` adds the types `Coin` and `MsgSend`
   * for historic reasons. Those can be overriden by customTypes.
   *
   * There are currently two methods for adding new types:
   * 1. Passing types to the constructor.
   * 2. Using the `register()` method
   */
  constructor(t) {
    const { cosmosCoin: n, cosmosMsgSend: r } = ju;
    this.types = t ? new Map([...t]) : /* @__PURE__ */ new Map([
      [n, Bh.Coin],
      [r, Ih.MsgSend]
    ]);
  }
  register(t, n) {
    this.types.set(t, n);
  }
  /**
   * Looks up a type that was previously added to the registry.
   *
   * The generator information (ts-proto or pbjs) gets lost along the way.
   * If you need to work with the result type in TypeScript, you can use:
   *
   * ```
   * import { assert } from "@cosmjs/utils";
   *
   * const Coin = registry.lookupType("/cosmos.base.v1beta1.Coin");
   * assert(Coin); // Ensures not unset
   * assert(isTsProtoGeneratedType(Coin)); // Ensures this is the type we expect
   *
   * // Coin is typed TsProtoGeneratedType now.
   * ```
   */
  lookupType(t) {
    return this.types.get(t);
  }
  lookupTypeWithError(t) {
    const n = this.lookupType(t);
    if (!n)
      throw new Error(`Unregistered type url: ${t}`);
    return n;
  }
  /**
   * Takes a typeUrl/value pair and encodes the value to protobuf if
   * the given type was previously registered.
   *
   * If the value has to be wrapped in an Any, this needs to be done
   * manually after this call. Or use `encodeAsAny` instead.
   */
  encode(t) {
    const { value: n, typeUrl: r } = t;
    if (cm(t))
      return this.encodeTxBody(n);
    const s = this.lookupTypeWithError(r), o = am(s) || bc(s) ? s.fromPartial(n) : s.create(n);
    return s.encode(o).finish();
  }
  /**
   * Takes a typeUrl/value pair and encodes the value to an Any if
   * the given type was previously registered.
   */
  encodeAsAny(t) {
    const n = this.encode(t);
    return Nh.Any.fromPartial({
      typeUrl: t.typeUrl,
      value: n
    });
  }
  encodeTxBody(t) {
    var s;
    const n = t.messages.map((o) => this.encodeAsAny(o)), r = Ji.TxBody.fromPartial({
      ...t,
      timeoutHeight: BigInt(((s = t.timeoutHeight) == null ? void 0 : s.toString()) ?? "0"),
      messages: n
    });
    return Ji.TxBody.encode(r).finish();
  }
  decode({ typeUrl: t, value: n }) {
    if (t === ju.cosmosTxBody)
      return this.decodeTxBody(n);
    const s = this.lookupTypeWithError(t).decode(n);
    return Object.entries(s).forEach(([o, i]) => {
      typeof U.Buffer < "u" && typeof U.Buffer.isBuffer < "u" && U.Buffer.isBuffer(i) && (s[o] = Uint8Array.from(i));
    }), s;
  }
  decodeTxBody(t) {
    const n = Ji.TxBody.decode(t);
    return {
      ...n,
      messages: n.messages.map(({ typeUrl: r, value: s }) => {
        if (!r)
          throw new Error("Missing type_url in Any");
        if (!s)
          throw new Error("Missing value in Any");
        return this.decode({ typeUrl: r, value: s });
      })
    };
  }
}
ze.Registry = Rh;
var Ro = {};
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.isOfflineDirectSigner = void 0;
function jh(e) {
  return e.signDirect !== void 0;
}
Ro.isOfflineDirectSigner = jh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.parseCoins = e.coins = e.coin = e.executeKdf = e.makeSignDoc = e.makeSignBytes = e.makeAuthInfoBytes = e.isOfflineDirectSigner = e.Registry = e.isTxBodyEncodeObject = e.isTsProtoGeneratedType = e.isPbjsGeneratedType = e.encodePubkey = e.decodePubkey = e.decodeOptionalPubkey = e.anyToSinglePubkey = e.makeCosmoshubPath = e.DirectSecp256k1Wallet = e.extractKdfConfiguration = e.DirectSecp256k1HdWallet = e.decodeTxRaw = void 0;
  var t = Ao;
  Object.defineProperty(e, "decodeTxRaw", { enumerable: !0, get: function() {
    return t.decodeTxRaw;
  } });
  var n = Wn;
  Object.defineProperty(e, "DirectSecp256k1HdWallet", { enumerable: !0, get: function() {
    return n.DirectSecp256k1HdWallet;
  } }), Object.defineProperty(e, "extractKdfConfiguration", { enumerable: !0, get: function() {
    return n.extractKdfConfiguration;
  } });
  var r = No;
  Object.defineProperty(e, "DirectSecp256k1Wallet", { enumerable: !0, get: function() {
    return r.DirectSecp256k1Wallet;
  } });
  var s = Mo;
  Object.defineProperty(e, "makeCosmoshubPath", { enumerable: !0, get: function() {
    return s.makeCosmoshubPath;
  } });
  var o = _t;
  Object.defineProperty(e, "anyToSinglePubkey", { enumerable: !0, get: function() {
    return o.anyToSinglePubkey;
  } }), Object.defineProperty(e, "decodeOptionalPubkey", { enumerable: !0, get: function() {
    return o.decodeOptionalPubkey;
  } }), Object.defineProperty(e, "decodePubkey", { enumerable: !0, get: function() {
    return o.decodePubkey;
  } }), Object.defineProperty(e, "encodePubkey", { enumerable: !0, get: function() {
    return o.encodePubkey;
  } });
  var i = ze;
  Object.defineProperty(e, "isPbjsGeneratedType", { enumerable: !0, get: function() {
    return i.isPbjsGeneratedType;
  } }), Object.defineProperty(e, "isTsProtoGeneratedType", { enumerable: !0, get: function() {
    return i.isTsProtoGeneratedType;
  } }), Object.defineProperty(e, "isTxBodyEncodeObject", { enumerable: !0, get: function() {
    return i.isTxBodyEncodeObject;
  } }), Object.defineProperty(e, "Registry", { enumerable: !0, get: function() {
    return i.Registry;
  } });
  var a = Ro;
  Object.defineProperty(e, "isOfflineDirectSigner", { enumerable: !0, get: function() {
    return a.isOfflineDirectSigner;
  } });
  var c = kt;
  Object.defineProperty(e, "makeAuthInfoBytes", { enumerable: !0, get: function() {
    return c.makeAuthInfoBytes;
  } }), Object.defineProperty(e, "makeSignBytes", { enumerable: !0, get: function() {
    return c.makeSignBytes;
  } }), Object.defineProperty(e, "makeSignDoc", { enumerable: !0, get: function() {
    return c.makeSignDoc;
  } });
  var u = yc;
  Object.defineProperty(e, "executeKdf", { enumerable: !0, get: function() {
    return u.executeKdf;
  } });
  var l = gt;
  Object.defineProperty(e, "coin", { enumerable: !0, get: function() {
    return l.coin;
  } }), Object.defineProperty(e, "coins", { enumerable: !0, get: function() {
    return l.coins;
  } }), Object.defineProperty(e, "parseCoins", { enumerable: !0, get: function() {
    return l.parseCoins;
  } });
})(Et);
Object.defineProperty(as, "__esModule", { value: !0 });
as.accountFromAny = void 0;
const Dh = se, Uh = Et, Rr = te, Du = rp, Bs = sp;
function Uu(e) {
  return Dh.Uint64.fromString(e.toString());
}
function On(e) {
  const { address: t, pubKey: n, accountNumber: r, sequence: s } = e, o = (0, Uh.decodeOptionalPubkey)(n);
  return {
    address: t,
    pubkey: o,
    accountNumber: Uu(r).toNumber(),
    sequence: Uu(s).toNumber()
  };
}
function $h(e) {
  var r, s, o, i, a, c, u;
  const { typeUrl: t, value: n } = e;
  switch (t) {
    case "/cosmos.auth.v1beta1.BaseAccount":
      return On(Du.BaseAccount.decode(n));
    case "/cosmos.auth.v1beta1.ModuleAccount": {
      const l = Du.ModuleAccount.decode(n).baseAccount;
      return (0, Rr.assert)(l), On(l);
    }
    case "/cosmos.vesting.v1beta1.BaseVestingAccount": {
      const l = (r = Bs.BaseVestingAccount.decode(n)) == null ? void 0 : r.baseAccount;
      return (0, Rr.assert)(l), On(l);
    }
    case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
      const l = (o = (s = Bs.ContinuousVestingAccount.decode(n)) == null ? void 0 : s.baseVestingAccount) == null ? void 0 : o.baseAccount;
      return (0, Rr.assert)(l), On(l);
    }
    case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
      const l = (a = (i = Bs.DelayedVestingAccount.decode(n)) == null ? void 0 : i.baseVestingAccount) == null ? void 0 : a.baseAccount;
      return (0, Rr.assert)(l), On(l);
    }
    case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
      const l = (u = (c = Bs.PeriodicVestingAccount.decode(n)) == null ? void 0 : c.baseVestingAccount) == null ? void 0 : u.baseAccount;
      return (0, Rr.assert)(l), On(l);
    }
    default:
      throw new Error(`Unsupported type: '${t}'`);
  }
}
as.accountFromAny = $h;
var ds = {};
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.AminoTypes = void 0;
class xh {
  constructor(t) {
    this.register = t;
  }
  toAmino({ typeUrl: t, value: n }) {
    const r = this.register[t];
    if (!r)
      throw new Error(`Type URL '${t}' does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.`);
    return {
      type: r.aminoType,
      value: r.toAmino(n)
    };
  }
  fromAmino({ type: t, value: n }) {
    const r = Object.entries(this.register).filter(([s, { aminoType: o }]) => o === t);
    switch (r.length) {
      case 0:
        throw new Error(`Amino type identifier '${t}' does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.`);
      case 1: {
        const [s, o] = r[0];
        return {
          typeUrl: s,
          value: o.fromAmino(n)
        };
      }
      default:
        throw new Error(`Multiple types are registered with Amino type identifier '${t}': '` + r.map(([s, o]) => s).sort().join("', '") + "'. Thus fromAmino cannot be performed.");
    }
  }
}
ds.AminoTypes = xh;
var ms = {};
Object.defineProperty(ms, "__esModule", { value: !0 });
ms.fromTendermintEvent = void 0;
const $u = j;
function Hh(e) {
  return {
    type: e.type,
    attributes: e.attributes.map((t) => ({
      key: typeof t.key == "string" ? t.key : (0, $u.fromUtf8)(t.key, !0),
      value: typeof t.value == "string" ? t.value : (0, $u.fromUtf8)(t.value, !0)
    }))
  };
}
ms.fromTendermintEvent = Hh;
var wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.calculateFee = wn.GasPrice = void 0;
const um = se, qh = Et;
function Fh(e) {
  if (e.length < 3 || e.length > 128)
    throw new Error("Denom must be between 3 and 128 characters");
}
class jo {
  constructor(t, n) {
    this.amount = t, this.denom = n;
  }
  /**
   * Parses a gas price formatted as `<amount><denom>`, e.g. `GasPrice.fromString("0.012utoken")`.
   *
   * The denom must match the Cosmos SDK 0.42 pattern (https://github.com/cosmos/cosmos-sdk/blob/v0.42.4/types/coin.go#L599-L601).
   * See `GasPrice` in @cosmjs/stargate for a more generic matcher.
   *
   * Separators are not yet supported.
   */
  static fromString(t) {
    const n = t.match(/^([0-9.]+)([a-zA-Z][a-zA-Z0-9/:._-]*)$/);
    if (!n)
      throw new Error("Invalid gas price string");
    const [r, s, o] = n;
    Fh(o);
    const a = um.Decimal.fromUserInput(s, 18);
    return new jo(a, o);
  }
  /**
   * Returns a string representation of this gas price, e.g. "0.025uatom".
   * This can be used as an input to `GasPrice.fromString`.
   */
  toString() {
    return this.amount.toString() + this.denom;
  }
}
wn.GasPrice = jo;
function Vh(e, t) {
  const n = typeof t == "string" ? jo.fromString(t) : t, { denom: r, amount: s } = n, o = s.multiply(new um.Uint53(e)).ceil().toString();
  return {
    amount: (0, qh.coins)(o, r),
    gas: e.toString()
  };
}
wn.calculateFee = Vh;
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.findAttribute = Be.parseRawLog = Be.parseLogs = Be.parseLog = Be.parseEvent = Be.parseAttribute = void 0;
const vc = te;
function lm(e) {
  if (!(0, vc.isNonNullObject)(e))
    throw new Error("Attribute must be a non-null object");
  const { key: t, value: n } = e;
  if (typeof t != "string" || !t)
    throw new Error("Attribute's key must be a non-empty string");
  if (typeof n != "string" && typeof n < "u")
    throw new Error("Attribute's value must be a string or unset");
  return {
    key: t,
    value: n || ""
  };
}
Be.parseAttribute = lm;
function dm(e) {
  if (!(0, vc.isNonNullObject)(e))
    throw new Error("Event must be a non-null object");
  const { type: t, attributes: n } = e;
  if (typeof t != "string" || t === "")
    throw new Error("Event type must be a non-empty string");
  if (!Array.isArray(n))
    throw new Error("Event's attributes must be an array");
  return {
    type: t,
    attributes: n.map(lm)
  };
}
Be.parseEvent = dm;
function mm(e) {
  if (!(0, vc.isNonNullObject)(e))
    throw new Error("Log must be a non-null object");
  const { msg_index: t, log: n, events: r } = e;
  if (typeof t != "number")
    throw new Error("Log's msg_index must be a number");
  if (typeof n != "string")
    throw new Error("Log's log must be a string");
  if (!Array.isArray(r))
    throw new Error("Log's events must be an array");
  return {
    msg_index: t,
    log: n,
    events: r.map(dm)
  };
}
Be.parseLog = mm;
function fm(e) {
  if (!Array.isArray(e))
    throw new Error("Logs must be an array");
  return e.map(mm);
}
Be.parseLogs = fm;
function Lh(e) {
  if (!e)
    return [];
  const t = JSON.parse(e).map(({ events: n }, r) => ({
    msg_index: r,
    events: n,
    log: ""
  }));
  return fm(t);
}
Be.parseRawLog = Lh;
function Wh(e, t, n) {
  var o;
  const r = e.find(() => !0), s = (o = r == null ? void 0 : r.events.find((i) => i.type === t)) == null ? void 0 : o.attributes.find((i) => i.key === n);
  if (!s)
    throw new Error(`Could not find attribute '${n}' in first event of type '${t}' in first log.`);
  return s;
}
Be.findAttribute = Wh;
var ns = {}, Do = {}, _e = {}, Uo = {}, fs = {}, $o = {};
Object.defineProperty($o, "__esModule", { value: !0 });
$o.concat = void 0;
const Jh = Sn;
function Gh(...e) {
  const t = new Array(), n = new Array(), r = /* @__PURE__ */ new Set();
  let s = 0;
  function o() {
    for (; t.length > 0; )
      t.shift().unsubscribe();
    n.length = 0, r.clear(), s = 0;
  }
  const i = {
    start: (a) => {
      e.forEach((l) => n.push([]));
      function c(l) {
        for (; ; ) {
          const d = n[l].shift();
          if (d === void 0)
            return;
          a.next(d);
        }
      }
      function u() {
        return s >= e.length;
      }
      if (u()) {
        a.complete();
        return;
      }
      e.forEach((l, d) => {
        t.push(l.subscribe({
          next: (b) => {
            d === s ? a.next(b) : n[d].push(b);
          },
          complete: () => {
            for (r.add(d); r.has(s); )
              c(s), s++;
            u() ? a.complete() : c(s);
          },
          error: (b) => {
            a.error(b), o();
          }
        }));
      });
    },
    stop: () => {
      o();
    }
  };
  return Jh.Stream.create(i);
}
$o.concat = Gh;
var xo = {};
Object.defineProperty(xo, "__esModule", { value: !0 });
xo.DefaultValueProducer = void 0;
class Kh {
  get value() {
    return this.internalValue;
  }
  constructor(t, n) {
    this.callbacks = n, this.internalValue = t;
  }
  /**
   * Update the current value.
   *
   * If producer is active (i.e. someone is listening), this emits an event.
   * If not, just the current value is updated.
   */
  update(t) {
    this.internalValue = t, this.listener && this.listener.next(t);
  }
  /**
   * Produce an error
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  error(t) {
    this.listener && this.listener.error(t);
  }
  /**
   * Called by the stream. Do not call this directly.
   */
  start(t) {
    this.listener = t, t.next(this.internalValue), this.callbacks && this.callbacks.onStarted();
  }
  /**
   * Called by the stream. Do not call this directly.
   */
  stop() {
    this.callbacks && this.callbacks.onStop(), this.listener = void 0;
  }
}
xo.DefaultValueProducer = Kh;
var Ho = {};
Object.defineProperty(Ho, "__esModule", { value: !0 });
Ho.dropDuplicates = void 0;
function zh(e) {
  return (n) => {
    const r = /* @__PURE__ */ new Set();
    return n.filter((o) => !r.has(e(o))).debug((o) => r.add(e(o)));
  };
}
Ho.dropDuplicates = zh;
var Vt = {};
Object.defineProperty(Vt, "__esModule", { value: !0 });
Vt.firstEvent = Vt.toListPromise = Vt.fromListPromise = void 0;
const Qh = Sn;
function Ch(e) {
  const t = {
    start: (n) => {
      e.then((r) => {
        for (const s of r)
          n.next(s);
        n.complete();
      }).catch((r) => n.error(r));
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    stop: () => {
    }
  };
  return Qh.Stream.create(t);
}
Vt.fromListPromise = Ch;
async function pm(e, t) {
  return new Promise((n, r) => {
    if (t === 0) {
      n([]);
      return;
    }
    const s = new Array();
    e.take(t).subscribe({
      next: (o) => {
        s.push(o), s.length === t && n(s);
      },
      complete: () => {
        r(`Stream completed before all events could be collected. Collected ${s.length}, expected ${t}`);
      },
      error: (o) => r(o)
    });
  });
}
Vt.toListPromise = pm;
async function Yh(e) {
  return (await pm(e, 1))[0];
}
Vt.firstEvent = Yh;
var St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.lastValue = St.asArray = St.countStream = St.Reducer = void 0;
class qo {
  constructor(t, n, r) {
    this.stream = t, this.reducer = n, this.state = r, this.completed = new Promise((s, o) => {
      const i = this.stream.subscribe({
        next: (a) => {
          this.state = this.reducer(this.state, a);
        },
        complete: () => {
          s(), i.unsubscribe();
        },
        error: (a) => {
          o(a), i.unsubscribe();
        }
      });
    });
  }
  // value returns current materialized state
  value() {
    return this.state;
  }
  // finished resolves on completed stream, rejects on stream error
  async finished() {
    return this.completed;
  }
}
St.Reducer = qo;
function Xh(e, t) {
  return e + 1;
}
function Zh(e) {
  return new qo(e, Xh, 0);
}
St.countStream = Zh;
function eb(e, t) {
  return [...e, t];
}
function tb(e) {
  return new qo(e, eb, []);
}
St.asArray = tb;
function nb(e, t) {
  return t;
}
function rb(e) {
  return new qo(e, nb, void 0);
}
St.lastValue = rb;
var Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.ValueAndUpdates = void 0;
const sb = Sn;
class ob {
  get value() {
    return this.producer.value;
  }
  constructor(t) {
    this.producer = t, this.updates = sb.MemoryStream.createWithMemory(this.producer);
  }
  /**
   * Resolves as soon as search value is found.
   *
   * @param search either a value or a function that must return true when found
   * @returns the value of the update that caused the search match
   */
  async waitFor(t) {
    const n = typeof t == "function" ? t : (r) => r === t;
    return new Promise((r, s) => {
      const o = this.updates.subscribe({
        next: (i) => {
          n(i) && (r(i), setTimeout(() => o.unsubscribe(), 0));
        },
        complete: () => {
          o.unsubscribe(), s("Update stream completed without expected value");
        },
        error: (i) => {
          s(i);
        }
      });
    });
  }
}
Fo.ValueAndUpdates = ob;
(function(e) {
  var t = h && h.__createBinding || (Object.create ? function(c, u, l, d) {
    d === void 0 && (d = l);
    var b = Object.getOwnPropertyDescriptor(u, l);
    (!b || ("get" in b ? !u.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
      return u[l];
    } }), Object.defineProperty(c, d, b);
  } : function(c, u, l, d) {
    d === void 0 && (d = l), c[d] = u[l];
  }), n = h && h.__exportStar || function(c, u) {
    for (var l in c)
      l !== "default" && !Object.prototype.hasOwnProperty.call(u, l) && t(u, c, l);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueAndUpdates = e.toListPromise = e.fromListPromise = e.firstEvent = e.dropDuplicates = e.DefaultValueProducer = e.concat = void 0;
  var r = $o;
  Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
    return r.concat;
  } });
  var s = xo;
  Object.defineProperty(e, "DefaultValueProducer", { enumerable: !0, get: function() {
    return s.DefaultValueProducer;
  } });
  var o = Ho;
  Object.defineProperty(e, "dropDuplicates", { enumerable: !0, get: function() {
    return o.dropDuplicates;
  } });
  var i = Vt;
  Object.defineProperty(e, "firstEvent", { enumerable: !0, get: function() {
    return i.firstEvent;
  } }), Object.defineProperty(e, "fromListPromise", { enumerable: !0, get: function() {
    return i.fromListPromise;
  } }), Object.defineProperty(e, "toListPromise", { enumerable: !0, get: function() {
    return i.toListPromise;
  } }), n(St, e);
  var a = Fo;
  Object.defineProperty(e, "ValueAndUpdates", { enumerable: !0, get: function() {
    return a.ValueAndUpdates;
  } });
})(fs);
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.QueryClient = void 0;
const rn = op, cn = j, ib = fs, Ee = te;
function Ns(e, t, n) {
  if (e.type !== t)
    throw new Error(`Op expected to be ${t}, got "${e.type}`);
  if (!(0, Ee.arrayContentEquals)(n, e.key))
    throw new Error(`Proven key different than queried key.
Query: ${(0, cn.toHex)(n)}
Proven: ${(0, cn.toHex)(e.key)}`);
  return rn.ics23.CommitmentProof.decode(e.data);
}
class wc {
  static withExtensions(t, ...n) {
    const r = new wc(t), s = n.map((o) => o(r));
    for (const o of s) {
      (0, Ee.assert)((0, Ee.isNonNullObject)(o), "Extension must be a non-null object");
      for (const [i, a] of Object.entries(o)) {
        (0, Ee.assert)((0, Ee.isNonNullObject)(a), `Module must be a non-null object. Found type ${typeof a} for module "${i}".`);
        const c = r[i] || {};
        r[i] = {
          ...c,
          ...a
        };
      }
    }
    return r;
  }
  constructor(t) {
    this.cometClient = t;
  }
  /**
   * Queries the database store with a proof, which is then verified.
   *
   * Please note: the current implementation trusts block headers it gets from the PRC endpoint.
   */
  async queryStoreVerified(t, n, r) {
    const { height: s, proof: o, key: i, value: a } = await this.queryRawProof(t, n, r), c = Ns(o.ops[0], "ics23:iavl", n), u = Ns(o.ops[1], "ics23:simple", (0, cn.toAscii)(t));
    (0, Ee.assert)(u.exist), (0, Ee.assert)(u.exist.value), !a || a.length === 0 ? ((0, Ee.assert)(c.nonexist), (0, rn.verifyNonExistence)(c.nonexist, rn.iavlSpec, u.exist.value, n)) : ((0, Ee.assert)(c.exist), (0, Ee.assert)(c.exist.value), (0, rn.verifyExistence)(c.exist, rn.iavlSpec, u.exist.value, n, a));
    const l = await this.getNextHeader(s);
    return (0, rn.verifyExistence)(u.exist, rn.tendermintSpec, l.appHash, (0, cn.toAscii)(t), u.exist.value), { key: i, value: a, height: s };
  }
  async queryRawProof(t, n, r) {
    const { key: s, value: o, height: i, proof: a, code: c, log: u } = await this.cometClient.abciQuery({
      // we need the StoreKey for the module, not the module name
      // https://github.com/cosmos/cosmos-sdk/blob/8cab43c8120fec5200c3459cbf4a92017bb6f287/x/auth/types/keys.go#L12
      path: `/store/${t}/key`,
      data: n,
      prove: !0,
      height: r
    });
    if (c)
      throw new Error(`Query failed with (${c}): ${u}`);
    if (!(0, Ee.arrayContentEquals)(n, s))
      throw new Error(`Response key ${(0, cn.toHex)(s)} doesn't match query key ${(0, cn.toHex)(n)}`);
    if (!i)
      throw new Error("No query height returned");
    if (!a || a.ops.length !== 2)
      throw new Error(`Expected 2 proof ops, got ${(a == null ? void 0 : a.ops.length) ?? 0}. Are you using stargate?`);
    return Ns(a.ops[0], "ics23:iavl", s), Ns(a.ops[1], "ics23:simple", (0, cn.toAscii)(t)), {
      key: s,
      value: o,
      height: i,
      // need to clone this: readonly input / writeable output
      proof: {
        ops: [...a.ops]
      }
    };
  }
  /**
   * Performs an ABCI query to Tendermint without requesting a proof.
   *
   * If the `desiredHeight` is set, a particular height is requested. Otherwise
   * the latest height is requested. The response contains the actual height of
   * the query.
   */
  async queryAbci(t, n, r) {
    const s = await this.cometClient.abciQuery({
      path: t,
      data: n,
      prove: !1,
      height: r
    });
    if (s.code)
      throw new Error(`Query failed with (${s.code}): ${s.log}`);
    if (!s.height)
      throw new Error("No query height returned");
    return {
      value: s.value,
      height: s.height
    };
  }
  // this must return the header for height+1
  // throws an error if height is 0 or undefined
  async getNextHeader(t) {
    if ((0, Ee.assertDefined)(t), t === 0)
      throw new Error("Query returned height 0, cannot prove it");
    const n = t + 1;
    let r, s;
    try {
      s = this.cometClient.subscribeNewBlockHeader();
    } catch {
    }
    if (s) {
      const o = await (0, ib.firstEvent)(s);
      o.height === n && (r = o);
    }
    for (; !r; ) {
      const o = (await this.cometClient.blockchain(t, n)).blockMetas.map((i) => i.header).find((i) => i.height === n);
      o ? r = o : await (0, Ee.sleep)(1e3);
    }
    return (0, Ee.assert)(r.height === n, "Got wrong header. This is a bug in the logic above."), r;
  }
}
Uo.QueryClient = wc;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.decodeCosmosSdkDecFromProto = Qe.longify = Qe.createProtobufRpcClient = Qe.createPagination = Qe.toAccAddress = void 0;
const gm = j, ym = se, xu = ip;
function ab(e) {
  return (0, gm.fromBech32)(e).data;
}
Qe.toAccAddress = ab;
function cb(e) {
  return e ? xu.PageRequest.fromPartial({ key: e }) : xu.PageRequest.fromPartial({});
}
Qe.createPagination = cb;
function ub(e) {
  return {
    request: async (t, n, r) => {
      const s = `/${t}/${n}`;
      return (await e.queryAbci(s, r, void 0)).value;
    }
  };
}
Qe.createProtobufRpcClient = ub;
function lb(e) {
  const t = ym.Uint64.fromString(e.toString());
  return BigInt(t.toString());
}
Qe.longify = lb;
function db(e) {
  const t = typeof e == "string" ? e : (0, gm.fromAscii)(e);
  return ym.Decimal.fromAtomics(t, 18);
}
Qe.decodeCosmosSdkDecFromProto = db;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.longify = e.decodeCosmosSdkDecFromProto = e.createProtobufRpcClient = e.createPagination = e.QueryClient = void 0;
  var t = Uo;
  Object.defineProperty(e, "QueryClient", { enumerable: !0, get: function() {
    return t.QueryClient;
  } });
  var n = Qe;
  Object.defineProperty(e, "createPagination", { enumerable: !0, get: function() {
    return n.createPagination;
  } }), Object.defineProperty(e, "createProtobufRpcClient", { enumerable: !0, get: function() {
    return n.createProtobufRpcClient;
  } }), Object.defineProperty(e, "decodeCosmosSdkDecFromProto", { enumerable: !0, get: function() {
    return n.decodeCosmosSdkDecFromProto;
  } }), Object.defineProperty(e, "longify", { enumerable: !0, get: function() {
    return n.longify;
  } });
})(_e);
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.setupAuthExtension = void 0;
const mb = ap, fb = _e;
function pb(e) {
  const t = (0, fb.createProtobufRpcClient)(e), n = new mb.QueryClientImpl(t);
  return {
    auth: {
      account: async (r) => {
        const { account: s } = await n.Account({ address: r });
        return s ?? null;
      }
    }
  };
}
Do.setupAuthExtension = pb;
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
Vo.createAuthzAminoConverters = void 0;
function gb() {
  return {
    // For Cosmos SDK < 0.46 the Amino JSON codec was broken on chain and thus inaccessible.
    // Now this can be implemented for 0.46+ chains, see
    // https://github.com/cosmos/cosmjs/issues/1092
    //
    // "/cosmos.authz.v1beta1.MsgGrant": IMPLEMENT ME,
    // "/cosmos.authz.v1beta1.MsgExec": IMPLEMENT ME,
    // "/cosmos.authz.v1beta1.MsgRevoke": IMPLEMENT ME,
  };
}
Vo.createAuthzAminoConverters = gb;
var Lo = {};
Object.defineProperty(Lo, "__esModule", { value: !0 });
Lo.authzTypes = void 0;
const Gi = cp;
Lo.authzTypes = [
  ["/cosmos.authz.v1beta1.MsgExec", Gi.MsgExec],
  ["/cosmos.authz.v1beta1.MsgGrant", Gi.MsgGrant],
  ["/cosmos.authz.v1beta1.MsgRevoke", Gi.MsgRevoke]
];
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.setupAuthzExtension = void 0;
const yb = up, Ms = _e;
function hb(e) {
  const t = (0, Ms.createProtobufRpcClient)(e), n = new yb.QueryClientImpl(t);
  return {
    authz: {
      grants: async (r, s, o, i) => await n.Grants({
        granter: r,
        grantee: s,
        msgTypeUrl: o,
        pagination: (0, Ms.createPagination)(i)
      }),
      granteeGrants: async (r, s) => await n.GranteeGrants({
        grantee: r,
        pagination: (0, Ms.createPagination)(s)
      }),
      granterGrants: async (r, s) => await n.GranterGrants({
        granter: r,
        pagination: (0, Ms.createPagination)(s)
      })
    }
  };
}
Wo.setupAuthzExtension = hb;
var Lt = {};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.createBankAminoConverters = Lt.isAminoMsgMultiSend = Lt.isAminoMsgSend = void 0;
function bb(e) {
  return e.type === "cosmos-sdk/MsgSend";
}
Lt.isAminoMsgSend = bb;
function vb(e) {
  return e.type === "cosmos-sdk/MsgMultiSend";
}
Lt.isAminoMsgMultiSend = vb;
function wb() {
  return {
    "/cosmos.bank.v1beta1.MsgSend": {
      aminoType: "cosmos-sdk/MsgSend",
      toAmino: ({ fromAddress: e, toAddress: t, amount: n }) => ({
        from_address: e,
        to_address: t,
        amount: [...n]
      }),
      fromAmino: ({ from_address: e, to_address: t, amount: n }) => ({
        fromAddress: e,
        toAddress: t,
        amount: [...n]
      })
    },
    "/cosmos.bank.v1beta1.MsgMultiSend": {
      aminoType: "cosmos-sdk/MsgMultiSend",
      toAmino: ({ inputs: e, outputs: t }) => ({
        inputs: e.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        })),
        outputs: t.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        }))
      }),
      fromAmino: ({ inputs: e, outputs: t }) => ({
        inputs: e.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        })),
        outputs: t.map((n) => ({
          address: n.address,
          coins: [...n.coins]
        }))
      })
    }
  };
}
Lt.createBankAminoConverters = wb;
var nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.isMsgSendEncodeObject = nr.bankTypes = void 0;
const Hu = vd;
nr.bankTypes = [
  ["/cosmos.bank.v1beta1.MsgMultiSend", Hu.MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgSend", Hu.MsgSend]
];
function _b(e) {
  return e.typeUrl === "/cosmos.bank.v1beta1.MsgSend";
}
nr.isMsgSendEncodeObject = _b;
var Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.setupBankExtension = void 0;
const Ki = te, zi = lp, qu = _e;
function Sb(e) {
  const t = (0, qu.createProtobufRpcClient)(e), n = new zi.QueryClientImpl(t);
  return {
    bank: {
      balance: async (r, s) => {
        const { balance: o } = await n.Balance({ address: r, denom: s });
        return (0, Ki.assert)(o), o;
      },
      allBalances: async (r) => {
        const { balances: s } = await n.AllBalances(zi.QueryAllBalancesRequest.fromPartial({ address: r }));
        return s;
      },
      totalSupply: async (r) => await n.TotalSupply({
        pagination: (0, qu.createPagination)(r)
      }),
      supplyOf: async (r) => {
        const { amount: s } = await n.SupplyOf({ denom: r });
        return (0, Ki.assert)(s), s;
      },
      denomMetadata: async (r) => {
        const { metadata: s } = await n.DenomMetadata({ denom: r });
        return (0, Ki.assert)(s), s;
      },
      denomsMetadata: async () => {
        const { metadatas: r } = await n.DenomsMetadata(zi.QueryDenomsMetadataRequest.fromPartial({
          pagination: void 0
          // Not implemented
        }));
        return r;
      }
    }
  };
}
Jo.setupBankExtension = Sb;
var rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.createCrysisAminoConverters = rr.isAminoMsgVerifyInvariant = void 0;
function Ab(e) {
  return e.type === "cosmos-sdk/MsgVerifyInvariant";
}
rr.isAminoMsgVerifyInvariant = Ab;
function Pb() {
  throw new Error("Not implemented");
}
rr.createCrysisAminoConverters = Pb;
var Ce = {};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.createDistributionAminoConverters = Ce.isAminoMsgFundCommunityPool = Ce.isAminoMsgWithdrawValidatorCommission = Ce.isAminoMsgWithdrawDelegatorReward = Ce.isAminoMsgSetWithdrawAddress = void 0;
function kb(e) {
  return e.type === "cosmos-sdk/MsgModifyWithdrawAddress";
}
Ce.isAminoMsgSetWithdrawAddress = kb;
function Eb(e) {
  return e.type === "cosmos-sdk/MsgWithdrawDelegationReward";
}
Ce.isAminoMsgWithdrawDelegatorReward = Eb;
function Tb(e) {
  return e.type === "cosmos-sdk/MsgWithdrawValidatorCommission";
}
Ce.isAminoMsgWithdrawValidatorCommission = Tb;
function Ob(e) {
  return e.type === "cosmos-sdk/MsgFundCommunityPool";
}
Ce.isAminoMsgFundCommunityPool = Ob;
function Ib() {
  return {
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
      aminoType: "cosmos-sdk/MsgFundCommunityPool",
      toAmino: ({ amount: e, depositor: t }) => ({
        amount: [...e],
        depositor: t
      }),
      fromAmino: ({ amount: e, depositor: t }) => ({
        amount: [...e],
        depositor: t
      })
    },
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
      aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
      toAmino: ({ delegatorAddress: e, withdrawAddress: t }) => ({
        delegator_address: e,
        withdraw_address: t
      }),
      fromAmino: ({ delegator_address: e, withdraw_address: t }) => ({
        delegatorAddress: e,
        withdrawAddress: t
      })
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
      aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
      toAmino: ({ delegatorAddress: e, validatorAddress: t }) => ({
        delegator_address: e,
        validator_address: t
      }),
      fromAmino: ({ delegator_address: e, validator_address: t }) => ({
        delegatorAddress: e,
        validatorAddress: t
      })
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
      aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
      toAmino: ({ validatorAddress: e }) => ({
        validator_address: e
      }),
      fromAmino: ({ validator_address: e }) => ({
        validatorAddress: e
      })
    }
  };
}
Ce.createDistributionAminoConverters = Ib;
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.isMsgWithdrawDelegatorRewardEncodeObject = sr.distributionTypes = void 0;
const Rs = sc;
sr.distributionTypes = [
  ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", Rs.MsgFundCommunityPool],
  ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", Rs.MsgSetWithdrawAddress],
  ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", Rs.MsgWithdrawDelegatorReward],
  ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", Rs.MsgWithdrawValidatorCommission]
];
function Bb(e) {
  return e.typeUrl === "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
}
sr.isMsgWithdrawDelegatorRewardEncodeObject = Bb;
var Go = {};
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.setupDistributionExtension = void 0;
const Nb = dp, Fu = _e;
function Mb(e) {
  const t = (0, Fu.createProtobufRpcClient)(e), n = new Nb.QueryClientImpl(t);
  return {
    distribution: {
      communityPool: async () => await n.CommunityPool({}),
      delegationRewards: async (r, s) => await n.DelegationRewards({
        delegatorAddress: r,
        validatorAddress: s
      }),
      delegationTotalRewards: async (r) => await n.DelegationTotalRewards({
        delegatorAddress: r
      }),
      delegatorValidators: async (r) => await n.DelegatorValidators({
        delegatorAddress: r
      }),
      delegatorWithdrawAddress: async (r) => await n.DelegatorWithdrawAddress({
        delegatorAddress: r
      }),
      params: async () => await n.Params({}),
      validatorCommission: async (r) => await n.ValidatorCommission({
        validatorAddress: r
      }),
      validatorOutstandingRewards: async (r) => await n.ValidatorOutstandingRewards({
        validatorAddress: r
      }),
      validatorSlashes: async (r, s, o, i) => await n.ValidatorSlashes({
        validatorAddress: r,
        startingHeight: BigInt(s),
        endingHeight: BigInt(o),
        pagination: (0, Fu.createPagination)(i)
      })
    }
  };
}
Go.setupDistributionExtension = Mb;
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.createEvidenceAminoConverters = or.isAminoMsgSubmitEvidence = void 0;
function Rb(e) {
  return e.type === "cosmos-sdk/MsgSubmitEvidence";
}
or.isAminoMsgSubmitEvidence = Rb;
function jb() {
  throw new Error("Not implemented");
}
or.createEvidenceAminoConverters = jb;
var Ko = {};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.createFeegrantAminoConverters = void 0;
function Db() {
  return {
    // For Cosmos SDK < 0.46 the Amino JSON codec was broken on chain and thus inaccessible.
    // Now this can be implemented for 0.46+ chains, see
    // https://github.com/cosmos/cosmjs/issues/1092
    //
    // "/cosmos.feegrant.v1beta1.MsgGrantAllowance": IMPLEMENT_ME,
    // "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": IMPLEMENT_ME,
  };
}
Ko.createFeegrantAminoConverters = Db;
var zo = {};
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.feegrantTypes = void 0;
const Vu = mp;
zo.feegrantTypes = [
  ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", Vu.MsgGrantAllowance],
  ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", Vu.MsgRevokeAllowance]
];
var Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.setupFeegrantExtension = void 0;
const Ub = fp, Lu = _e;
function $b(e) {
  const t = (0, Lu.createProtobufRpcClient)(e), n = new Ub.QueryClientImpl(t);
  return {
    feegrant: {
      allowance: async (r, s) => await n.Allowance({
        granter: r,
        grantee: s
      }),
      allowances: async (r, s) => await n.Allowances({
        grantee: r,
        pagination: (0, Lu.createPagination)(s)
      })
    }
  };
}
Qo.setupFeegrantExtension = $b;
var Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.createGovAminoConverters = Ye.isAminoMsgDeposit = Ye.isAminoMsgVoteWeighted = Ye.isAminoMsgVote = Ye.isAminoMsgSubmitProposal = void 0;
const xb = se, jr = te, Dr = pp, Hb = rc, qb = _e;
function Fb(e) {
  return e.type === "cosmos-sdk/MsgSubmitProposal";
}
Ye.isAminoMsgSubmitProposal = Fb;
function Vb(e) {
  return e.type === "cosmos-sdk/MsgVote";
}
Ye.isAminoMsgVote = Vb;
function Lb(e) {
  return e.type === "cosmos-sdk/MsgVoteWeighted";
}
Ye.isAminoMsgVoteWeighted = Lb;
function Wb(e) {
  return e.type === "cosmos-sdk/MsgDeposit";
}
Ye.isAminoMsgDeposit = Wb;
function Jb() {
  return {
    "/cosmos.gov.v1beta1.MsgDeposit": {
      aminoType: "cosmos-sdk/MsgDeposit",
      toAmino: ({ amount: e, depositor: t, proposalId: n }) => ({
        amount: e,
        depositor: t,
        proposal_id: n.toString()
      }),
      fromAmino: ({ amount: e, depositor: t, proposal_id: n }) => ({
        amount: Array.from(e),
        depositor: t,
        proposalId: BigInt(n)
      })
    },
    "/cosmos.gov.v1beta1.MsgVote": {
      aminoType: "cosmos-sdk/MsgVote",
      toAmino: ({ option: e, proposalId: t, voter: n }) => ({
        option: e,
        proposal_id: t.toString(),
        voter: n
      }),
      fromAmino: ({ option: e, proposal_id: t, voter: n }) => ({
        option: (0, Dr.voteOptionFromJSON)(e),
        proposalId: BigInt(t),
        voter: n
      })
    },
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
      aminoType: "cosmos-sdk/MsgVoteWeighted",
      toAmino: ({ options: e, proposalId: t, voter: n }) => ({
        options: e.map((r) => ({
          option: r.option,
          // Weight is between 0 and 1, so we always have 20 characters when printing all trailing
          // zeros (e.g. "0.700000000000000000" or "1.000000000000000000")
          weight: (0, qb.decodeCosmosSdkDecFromProto)(r.weight).toString().padEnd(20, "0")
        })),
        proposal_id: t.toString(),
        voter: n
      }),
      fromAmino: ({ options: e, proposal_id: t, voter: n }) => ({
        proposalId: BigInt(t),
        voter: n,
        options: e.map((r) => ({
          option: (0, Dr.voteOptionFromJSON)(r.option),
          weight: xb.Decimal.fromUserInput(r.weight, 18).atomics
        }))
      })
    },
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
      aminoType: "cosmos-sdk/MsgSubmitProposal",
      toAmino: ({ initialDeposit: e, proposer: t, content: n }) => {
        (0, jr.assertDefinedAndNotNull)(n);
        let r;
        switch (n.typeUrl) {
          case "/cosmos.gov.v1beta1.TextProposal": {
            const s = Dr.TextProposal.decode(n.value);
            r = {
              type: "cosmos-sdk/TextProposal",
              value: {
                description: s.description,
                title: s.title
              }
            };
            break;
          }
          default:
            throw new Error(`Unsupported proposal type: '${n.typeUrl}'`);
        }
        return {
          initial_deposit: e,
          proposer: t,
          content: r
        };
      },
      fromAmino: ({ initial_deposit: e, proposer: t, content: n }) => {
        let r;
        switch (n.type) {
          case "cosmos-sdk/TextProposal": {
            const { value: s } = n;
            (0, jr.assert)((0, jr.isNonNullObject)(s));
            const { title: o, description: i } = s;
            (0, jr.assert)(typeof o == "string"), (0, jr.assert)(typeof i == "string"), r = Hb.Any.fromPartial({
              typeUrl: "/cosmos.gov.v1beta1.TextProposal",
              value: Dr.TextProposal.encode(Dr.TextProposal.fromPartial({
                title: o,
                description: i
              })).finish()
            });
            break;
          }
          default:
            throw new Error(`Unsupported proposal type: '${n.type}'`);
        }
        return {
          initialDeposit: Array.from(e),
          proposer: t,
          content: r
        };
      }
    }
  };
}
Ye.createGovAminoConverters = Jb;
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.isMsgVoteWeightedEncodeObject = Xe.isMsgVoteEncodeObject = Xe.isMsgSubmitProposalEncodeObject = Xe.isMsgDepositEncodeObject = Xe.govTypes = void 0;
const Ur = gp, js = yp;
Xe.govTypes = [
  ["/cosmos.gov.v1.MsgDeposit", Ur.MsgDeposit],
  ["/cosmos.gov.v1.MsgSubmitProposal", Ur.MsgSubmitProposal],
  ["/cosmos.gov.v1.MsgUpdateParams", Ur.MsgUpdateParams],
  ["/cosmos.gov.v1.MsgVote", Ur.MsgVote],
  ["/cosmos.gov.v1.MsgVoteWeighted", Ur.MsgVoteWeighted],
  ["/cosmos.gov.v1beta1.MsgDeposit", js.MsgDeposit],
  ["/cosmos.gov.v1beta1.MsgSubmitProposal", js.MsgSubmitProposal],
  ["/cosmos.gov.v1beta1.MsgVote", js.MsgVote],
  ["/cosmos.gov.v1beta1.MsgVoteWeighted", js.MsgVoteWeighted]
];
function Gb(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgDeposit";
}
Xe.isMsgDepositEncodeObject = Gb;
function Kb(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgSubmitProposal";
}
Xe.isMsgSubmitProposalEncodeObject = Kb;
function zb(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgVote";
}
Xe.isMsgVoteEncodeObject = zb;
function Qb(e) {
  return e.typeUrl === "/cosmos.gov.v1beta1.MsgVoteWeighted";
}
Xe.isMsgVoteWeightedEncodeObject = Qb;
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
Co.setupGovExtension = void 0;
const Cb = hp, yt = _e;
function Yb(e) {
  const t = (0, yt.createProtobufRpcClient)(e), n = new Cb.QueryClientImpl(t);
  return {
    gov: {
      params: async (r) => await n.Params({ paramsType: r }),
      proposals: async (r, s, o, i) => await n.Proposals({
        proposalStatus: r,
        depositor: s,
        voter: o,
        pagination: (0, yt.createPagination)(i)
      }),
      proposal: async (r) => await n.Proposal({ proposalId: (0, yt.longify)(r) }),
      deposits: async (r, s) => await n.Deposits({
        proposalId: (0, yt.longify)(r),
        pagination: (0, yt.createPagination)(s)
      }),
      deposit: async (r, s) => await n.Deposit({
        proposalId: (0, yt.longify)(r),
        depositor: s
      }),
      tally: async (r) => await n.TallyResult({
        proposalId: (0, yt.longify)(r)
      }),
      votes: async (r, s) => await n.Votes({
        proposalId: (0, yt.longify)(r),
        pagination: (0, yt.createPagination)(s)
      }),
      vote: async (r, s) => await n.Vote({
        proposalId: (0, yt.longify)(r),
        voter: s
      })
    }
  };
}
Co.setupGovExtension = Yb;
var Yo = {};
Object.defineProperty(Yo, "__esModule", { value: !0 });
Yo.createGroupAminoConverters = void 0;
function Xb() {
  return {};
}
Yo.createGroupAminoConverters = Xb;
var Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.groupTypes = void 0;
const Se = bp;
Xo.groupTypes = [
  ["/cosmos.group.v1.MsgCreateGroup", Se.MsgCreateGroup],
  ["/cosmos.group.v1.MsgCreateGroupPolicy", Se.MsgCreateGroupPolicy],
  ["/cosmos.group.v1.MsgCreateGroupWithPolicy", Se.MsgCreateGroupWithPolicy],
  ["/cosmos.group.v1.MsgExec", Se.MsgExec],
  ["/cosmos.group.v1.MsgLeaveGroup", Se.MsgLeaveGroup],
  ["/cosmos.group.v1.MsgSubmitProposal", Se.MsgSubmitProposal],
  ["/cosmos.group.v1.MsgUpdateGroupAdmin", Se.MsgUpdateGroupAdmin],
  ["/cosmos.group.v1.MsgUpdateGroupMembers", Se.MsgUpdateGroupMembers],
  ["/cosmos.group.v1.MsgUpdateGroupMetadata", Se.MsgUpdateGroupMetadata],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", Se.MsgUpdateGroupPolicyAdmin],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", Se.MsgUpdateGroupPolicyDecisionPolicy],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", Se.MsgUpdateGroupPolicyMetadata],
  ["/cosmos.group.v1.MsgVote", Se.MsgVote],
  ["/cosmos.group.v1.MsgWithdrawProposal", Se.MsgWithdrawProposal]
];
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.createIbcAminoConverters = ir.isAminoMsgTransfer = void 0;
const Ds = gt, Zb = oc;
function ev(e) {
  return e.type === "cosmos-sdk/MsgTransfer";
}
ir.isAminoMsgTransfer = ev;
function tv() {
  return {
    "/ibc.applications.transfer.v1.MsgTransfer": {
      aminoType: "cosmos-sdk/MsgTransfer",
      toAmino: ({ sourcePort: e, sourceChannel: t, token: n, sender: r, receiver: s, timeoutHeight: o, timeoutTimestamp: i, memo: a }) => {
        var c, u, l;
        return {
          source_port: e,
          source_channel: t,
          token: n,
          sender: r,
          receiver: s,
          timeout_height: o ? {
            revision_height: (c = (0, Ds.omitDefault)(o.revisionHeight)) == null ? void 0 : c.toString(),
            revision_number: (u = (0, Ds.omitDefault)(o.revisionNumber)) == null ? void 0 : u.toString()
          } : {},
          timeout_timestamp: (l = (0, Ds.omitDefault)(i)) == null ? void 0 : l.toString(),
          memo: (0, Ds.omitDefault)(a)
        };
      },
      fromAmino: ({ source_port: e, source_channel: t, token: n, sender: r, receiver: s, timeout_height: o, timeout_timestamp: i, memo: a }) => Zb.MsgTransfer.fromPartial({
        sourcePort: e,
        sourceChannel: t,
        token: n,
        sender: r,
        receiver: s,
        timeoutHeight: o ? {
          revisionHeight: BigInt(o.revision_height || "0"),
          revisionNumber: BigInt(o.revision_number || "0")
        } : void 0,
        timeoutTimestamp: BigInt(i || "0"),
        memo: a ?? ""
      })
    }
  };
}
ir.createIbcAminoConverters = tv;
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.isMsgTransferEncodeObject = ar.ibcTypes = void 0;
const nv = oc, ht = vp, Us = wp, $s = _p;
ar.ibcTypes = [
  ["/ibc.applications.transfer.v1.MsgTransfer", nv.MsgTransfer],
  ["/ibc.core.channel.v1.MsgAcknowledgement", ht.MsgAcknowledgement],
  ["/ibc.core.channel.v1.MsgChannelCloseConfirm", ht.MsgChannelCloseConfirm],
  ["/ibc.core.channel.v1.MsgChannelCloseInit", ht.MsgChannelCloseInit],
  ["/ibc.core.channel.v1.MsgChannelOpenAck", ht.MsgChannelOpenAck],
  ["/ibc.core.channel.v1.MsgChannelOpenConfirm", ht.MsgChannelOpenConfirm],
  ["/ibc.core.channel.v1.MsgChannelOpenInit", ht.MsgChannelOpenInit],
  ["/ibc.core.channel.v1.MsgChannelOpenTry", ht.MsgChannelOpenTry],
  ["/ibc.core.channel.v1.MsgRecvPacket", ht.MsgRecvPacket],
  ["/ibc.core.channel.v1.MsgTimeout", ht.MsgTimeout],
  ["/ibc.core.channel.v1.MsgTimeoutOnClose", ht.MsgTimeoutOnClose],
  ["/ibc.core.client.v1.MsgCreateClient", Us.MsgCreateClient],
  ["/ibc.core.client.v1.MsgSubmitMisbehaviour", Us.MsgSubmitMisbehaviour],
  ["/ibc.core.client.v1.MsgUpdateClient", Us.MsgUpdateClient],
  ["/ibc.core.client.v1.MsgUpgradeClient", Us.MsgUpgradeClient],
  ["/ibc.core.connection.v1.MsgConnectionOpenAck", $s.MsgConnectionOpenAck],
  ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", $s.MsgConnectionOpenConfirm],
  ["/ibc.core.connection.v1.MsgConnectionOpenInit", $s.MsgConnectionOpenInit],
  ["/ibc.core.connection.v1.MsgConnectionOpenTry", $s.MsgConnectionOpenTry]
];
function rv(e) {
  return e.typeUrl === "/ibc.applications.transfer.v1.MsgTransfer";
}
ar.isMsgTransferEncodeObject = rv;
var Zo = {};
Object.defineProperty(Zo, "__esModule", { value: !0 });
Zo.setupIbcExtension = void 0;
const xs = j, sv = se, Wu = Sp, ov = Ap, Ct = Pp, $r = kp, Qi = Ep, hm = Tp, Z = _e;
function Ci(e) {
  if ((e == null ? void 0 : e.typeUrl) !== "/ibc.lightclients.tendermint.v1.ClientState")
    throw new Error(`Unexpected client state type: ${e == null ? void 0 : e.typeUrl}`);
  return hm.ClientState.decode(e.value);
}
function iv(e) {
  if ((e == null ? void 0 : e.typeUrl) !== "/ibc.lightclients.tendermint.v1.ConsensusState")
    throw new Error(`Unexpected client state type: ${e == null ? void 0 : e.typeUrl}`);
  return hm.ConsensusState.decode(e.value);
}
function av(e) {
  const t = (0, Z.createProtobufRpcClient)(e), n = new Ct.QueryClientImpl(t), r = new $r.QueryClientImpl(t), s = new Qi.QueryClientImpl(t), o = new Wu.QueryClientImpl(t);
  return {
    ibc: {
      channel: {
        channel: async (i, a) => n.Channel({
          portId: i,
          channelId: a
        }),
        channels: async (i) => n.Channels({
          pagination: (0, Z.createPagination)(i)
        }),
        allChannels: async () => {
          var u;
          const i = [];
          let a, c;
          do
            a = await n.Channels({
              pagination: (0, Z.createPagination)(c)
            }), i.push(...a.channels), c = (u = a.pagination) == null ? void 0 : u.nextKey;
          while (c && c.length);
          return Ct.QueryChannelsResponse.fromPartial({
            channels: i,
            height: a.height
          });
        },
        connectionChannels: async (i, a) => n.ConnectionChannels({
          connection: i,
          pagination: (0, Z.createPagination)(a)
        }),
        allConnectionChannels: async (i) => {
          var l;
          const a = [];
          let c, u;
          do
            c = await n.ConnectionChannels({
              connection: i,
              pagination: (0, Z.createPagination)(u)
            }), a.push(...c.channels), u = (l = c.pagination) == null ? void 0 : l.nextKey;
          while (u && u.length);
          return Ct.QueryConnectionChannelsResponse.fromPartial({
            channels: a,
            height: c.height
          });
        },
        clientState: async (i, a) => n.ChannelClientState({
          portId: i,
          channelId: a
        }),
        consensusState: async (i, a, c, u) => n.ChannelConsensusState({
          portId: i,
          channelId: a,
          revisionNumber: BigInt(c),
          revisionHeight: BigInt(u)
        }),
        packetCommitment: async (i, a, c) => n.PacketCommitment({
          portId: i,
          channelId: a,
          sequence: (0, Z.longify)(c)
        }),
        packetCommitments: async (i, a, c) => n.PacketCommitments({
          channelId: a,
          portId: i,
          pagination: (0, Z.createPagination)(c)
        }),
        allPacketCommitments: async (i, a) => {
          var d;
          const c = [];
          let u, l;
          do
            u = await n.PacketCommitments({
              channelId: a,
              portId: i,
              pagination: (0, Z.createPagination)(l)
            }), c.push(...u.commitments), l = (d = u.pagination) == null ? void 0 : d.nextKey;
          while (l && l.length);
          return Ct.QueryPacketCommitmentsResponse.fromPartial({
            commitments: c,
            height: u.height
          });
        },
        packetReceipt: async (i, a, c) => n.PacketReceipt({
          portId: i,
          channelId: a,
          sequence: (0, Z.longify)(c)
        }),
        packetAcknowledgement: async (i, a, c) => n.PacketAcknowledgement({
          portId: i,
          channelId: a,
          sequence: (0, Z.longify)(c)
        }),
        packetAcknowledgements: async (i, a, c) => {
          const u = Ct.QueryPacketAcknowledgementsRequest.fromPartial({
            portId: i,
            channelId: a,
            pagination: (0, Z.createPagination)(c)
          });
          return n.PacketAcknowledgements(u);
        },
        allPacketAcknowledgements: async (i, a) => {
          var d;
          const c = [];
          let u, l;
          do {
            const b = Ct.QueryPacketAcknowledgementsRequest.fromPartial({
              channelId: a,
              portId: i,
              pagination: (0, Z.createPagination)(l)
            });
            u = await n.PacketAcknowledgements(b), c.push(...u.acknowledgements), l = (d = u.pagination) == null ? void 0 : d.nextKey;
          } while (l && l.length);
          return Ct.QueryPacketAcknowledgementsResponse.fromPartial({
            acknowledgements: c,
            height: u.height
          });
        },
        unreceivedPackets: async (i, a, c) => n.UnreceivedPackets({
          portId: i,
          channelId: a,
          packetCommitmentSequences: c.map((u) => BigInt(u))
        }),
        unreceivedAcks: async (i, a, c) => n.UnreceivedAcks({
          portId: i,
          channelId: a,
          packetAckSequences: c.map((u) => BigInt(u))
        }),
        nextSequenceReceive: async (i, a) => n.NextSequenceReceive({
          portId: i,
          channelId: a
        })
      },
      client: {
        state: async (i) => r.ClientState({ clientId: i }),
        states: async (i) => r.ClientStates({
          pagination: (0, Z.createPagination)(i)
        }),
        allStates: async () => {
          var u;
          const i = [];
          let a, c;
          do
            a = await r.ClientStates({
              pagination: (0, Z.createPagination)(c)
            }), i.push(...a.clientStates), c = (u = a.pagination) == null ? void 0 : u.nextKey;
          while (c && c.length);
          return $r.QueryClientStatesResponse.fromPartial({
            clientStates: i
          });
        },
        consensusState: async (i, a) => r.ConsensusState($r.QueryConsensusStateRequest.fromPartial({
          clientId: i,
          revisionHeight: a !== void 0 ? BigInt(a) : void 0,
          latestHeight: a === void 0
        })),
        consensusStates: async (i, a) => r.ConsensusStates({
          clientId: i,
          pagination: (0, Z.createPagination)(a)
        }),
        allConsensusStates: async (i) => {
          var l;
          const a = [];
          let c, u;
          do
            c = await r.ConsensusStates({
              clientId: i,
              pagination: (0, Z.createPagination)(u)
            }), a.push(...c.consensusStates), u = (l = c.pagination) == null ? void 0 : l.nextKey;
          while (u && u.length);
          return $r.QueryConsensusStatesResponse.fromPartial({
            consensusStates: a
          });
        },
        params: async () => r.ClientParams({}),
        stateTm: async (i) => {
          const a = await r.ClientState({ clientId: i });
          return Ci(a.clientState);
        },
        statesTm: async (i) => {
          const { clientStates: a } = await r.ClientStates({
            pagination: (0, Z.createPagination)(i)
          });
          return a.map(({ clientState: c }) => Ci(c));
        },
        allStatesTm: async () => {
          var u;
          const i = [];
          let a, c;
          do
            a = await r.ClientStates({
              pagination: (0, Z.createPagination)(c)
            }), i.push(...a.clientStates), c = (u = a.pagination) == null ? void 0 : u.nextKey;
          while (c && c.length);
          return i.map(({ clientState: l }) => Ci(l));
        },
        consensusStateTm: async (i, a) => {
          const c = await r.ConsensusState($r.QueryConsensusStateRequest.fromPartial({
            clientId: i,
            revisionHeight: a == null ? void 0 : a.revisionHeight,
            revisionNumber: a == null ? void 0 : a.revisionNumber,
            latestHeight: a === void 0
          }));
          return iv(c.consensusState);
        }
      },
      connection: {
        connection: async (i) => s.Connection({
          connectionId: i
        }),
        connections: async (i) => s.Connections({
          pagination: (0, Z.createPagination)(i)
        }),
        allConnections: async () => {
          var u;
          const i = [];
          let a, c;
          do
            a = await s.Connections({
              pagination: (0, Z.createPagination)(c)
            }), i.push(...a.connections), c = (u = a.pagination) == null ? void 0 : u.nextKey;
          while (c && c.length);
          return Qi.QueryConnectionsResponse.fromPartial({
            connections: i,
            height: a.height
          });
        },
        clientConnections: async (i) => s.ClientConnections({
          clientId: i
        }),
        clientState: async (i) => s.ConnectionClientState({
          connectionId: i
        }),
        consensusState: async (i, a) => s.ConnectionConsensusState(Qi.QueryConnectionConsensusStateRequest.fromPartial({
          connectionId: i,
          revisionHeight: BigInt(a)
        }))
      },
      transfer: {
        denomTrace: async (i) => o.DenomTrace({ hash: i }),
        denomTraces: async (i) => o.DenomTraces({
          pagination: (0, Z.createPagination)(i)
        }),
        allDenomTraces: async () => {
          var u;
          const i = [];
          let a, c;
          do
            a = await o.DenomTraces({
              pagination: (0, Z.createPagination)(c)
            }), i.push(...a.denomTraces), c = (u = a.pagination) == null ? void 0 : u.nextKey;
          while (c && c.length);
          return Wu.QueryDenomTracesResponse.fromPartial({
            denomTraces: i
          });
        },
        params: async () => o.Params({})
      },
      verified: {
        channel: {
          channel: async (i, a) => {
            const c = (0, xs.toAscii)(`channelEnds/ports/${i}/channels/${a}`), { value: u } = await e.queryStoreVerified("ibc", c);
            return u.length ? ov.Channel.decode(u) : null;
          },
          packetCommitment: async (i, a, c) => {
            const u = (0, xs.toAscii)(`commitments/ports/${i}/channels/${a}/packets/${c}`), { value: l } = await e.queryStoreVerified("ibc", u);
            return l;
          },
          packetAcknowledgement: async (i, a, c) => {
            const u = (0, xs.toAscii)(`acks/ports/${i}/channels/${a}/acknowledgements/${c}`), { value: l } = await e.queryStoreVerified("ibc", u);
            return l;
          },
          nextSequenceReceive: async (i, a) => {
            const c = (0, xs.toAscii)(`seqAcks/ports/${i}/channels/${a}/nextSequenceAck`), { value: u } = await e.queryStoreVerified("ibc", c);
            return u.length ? sv.Uint64.fromBytes(u).toNumber() : null;
          }
        }
      }
    }
  };
}
Zo.setupIbcExtension = av;
var ei = {};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.setupMintExtension = void 0;
const cv = te, uv = Op, Yt = _e;
function lv(e) {
  const t = (0, Yt.createProtobufRpcClient)(e), n = new uv.QueryClientImpl(t);
  return {
    mint: {
      params: async () => {
        const { params: r } = await n.Params({});
        return (0, cv.assert)(r), {
          blocksPerYear: r.blocksPerYear,
          goalBonded: (0, Yt.decodeCosmosSdkDecFromProto)(r.goalBonded),
          inflationMin: (0, Yt.decodeCosmosSdkDecFromProto)(r.inflationMin),
          inflationMax: (0, Yt.decodeCosmosSdkDecFromProto)(r.inflationMax),
          inflationRateChange: (0, Yt.decodeCosmosSdkDecFromProto)(r.inflationRateChange),
          mintDenom: r.mintDenom
        };
      },
      inflation: async () => {
        const { inflation: r } = await n.Inflation({});
        return (0, Yt.decodeCosmosSdkDecFromProto)(r);
      },
      annualProvisions: async () => {
        const { annualProvisions: r } = await n.AnnualProvisions({});
        return (0, Yt.decodeCosmosSdkDecFromProto)(r);
      }
    }
  };
}
ei.setupMintExtension = lv;
var cr = {};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.createSlashingAminoConverters = cr.isAminoMsgUnjail = void 0;
function dv(e) {
  return e.type === "cosmos-sdk/MsgUnjail";
}
cr.isAminoMsgUnjail = dv;
function mv() {
  throw new Error("Not implemented");
}
cr.createSlashingAminoConverters = mv;
var ti = {};
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.setupSlashingExtension = void 0;
const fv = Ip, Ju = _e;
function pv(e) {
  const t = (0, Ju.createProtobufRpcClient)(e), n = new fv.QueryClientImpl(t);
  return {
    slashing: {
      signingInfo: async (r) => await n.SigningInfo({
        consAddress: r
      }),
      signingInfos: async (r) => await n.SigningInfos({
        pagination: (0, Ju.createPagination)(r)
      }),
      params: async () => await n.Params({})
    }
  };
}
ti.setupSlashingExtension = pv;
var ye = {};
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.createStakingAminoConverters = ye.isAminoMsgUndelegate = ye.isAminoMsgBeginRedelegate = ye.isAminoMsgDelegate = ye.isAminoMsgEditValidator = ye.isAminoMsgCreateValidator = ye.protoDecimalToJson = void 0;
const bm = se, Gu = Et, Ut = te;
function Wr(e) {
  const t = bm.Decimal.fromAtomics(e, 18), [n, r] = t.toString().split(".");
  return `${n}.${(r ?? "").padEnd(18, "0")}`;
}
ye.protoDecimalToJson = Wr;
function Hs(e) {
  return bm.Decimal.fromUserInput(e, 18).atomics;
}
function gv(e) {
  return e.type === "cosmos-sdk/MsgCreateValidator";
}
ye.isAminoMsgCreateValidator = gv;
function yv(e) {
  return e.type === "cosmos-sdk/MsgEditValidator";
}
ye.isAminoMsgEditValidator = yv;
function hv(e) {
  return e.type === "cosmos-sdk/MsgDelegate";
}
ye.isAminoMsgDelegate = hv;
function bv(e) {
  return e.type === "cosmos-sdk/MsgBeginRedelegate";
}
ye.isAminoMsgBeginRedelegate = bv;
function vv(e) {
  return e.type === "cosmos-sdk/MsgUndelegate";
}
ye.isAminoMsgUndelegate = vv;
function wv() {
  return {
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
      aminoType: "cosmos-sdk/MsgBeginRedelegate",
      toAmino: ({ delegatorAddress: e, validatorSrcAddress: t, validatorDstAddress: n, amount: r }) => ((0, Ut.assertDefinedAndNotNull)(r, "missing amount"), {
        delegator_address: e,
        validator_src_address: t,
        validator_dst_address: n,
        amount: r
      }),
      fromAmino: ({ delegator_address: e, validator_src_address: t, validator_dst_address: n, amount: r }) => ({
        delegatorAddress: e,
        validatorSrcAddress: t,
        validatorDstAddress: n,
        amount: r
      })
    },
    "/cosmos.staking.v1beta1.MsgCreateValidator": {
      aminoType: "cosmos-sdk/MsgCreateValidator",
      toAmino: ({ description: e, commission: t, minSelfDelegation: n, delegatorAddress: r, validatorAddress: s, pubkey: o, value: i }) => ((0, Ut.assertDefinedAndNotNull)(e, "missing description"), (0, Ut.assertDefinedAndNotNull)(t, "missing commission"), (0, Ut.assertDefinedAndNotNull)(o, "missing pubkey"), (0, Ut.assertDefinedAndNotNull)(i, "missing value"), {
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          security_contact: e.securityContact,
          details: e.details
        },
        commission: {
          rate: Wr(t.rate),
          max_rate: Wr(t.maxRate),
          max_change_rate: Wr(t.maxChangeRate)
        },
        min_self_delegation: n,
        delegator_address: r,
        validator_address: s,
        pubkey: (0, Gu.decodePubkey)(o),
        value: i
      }),
      fromAmino: ({ description: e, commission: t, min_self_delegation: n, delegator_address: r, validator_address: s, pubkey: o, value: i }) => ({
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          securityContact: e.security_contact,
          details: e.details
        },
        commission: {
          rate: Hs(t.rate),
          maxRate: Hs(t.max_rate),
          maxChangeRate: Hs(t.max_change_rate)
        },
        minSelfDelegation: n,
        delegatorAddress: r,
        validatorAddress: s,
        pubkey: (0, Gu.encodePubkey)(o),
        value: i
      })
    },
    "/cosmos.staking.v1beta1.MsgDelegate": {
      aminoType: "cosmos-sdk/MsgDelegate",
      toAmino: ({ delegatorAddress: e, validatorAddress: t, amount: n }) => ((0, Ut.assertDefinedAndNotNull)(n, "missing amount"), {
        delegator_address: e,
        validator_address: t,
        amount: n
      }),
      fromAmino: ({ delegator_address: e, validator_address: t, amount: n }) => ({
        delegatorAddress: e,
        validatorAddress: t,
        amount: n
      })
    },
    "/cosmos.staking.v1beta1.MsgEditValidator": {
      aminoType: "cosmos-sdk/MsgEditValidator",
      toAmino: ({ description: e, commissionRate: t, minSelfDelegation: n, validatorAddress: r }) => ((0, Ut.assertDefinedAndNotNull)(e, "missing description"), {
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          security_contact: e.securityContact,
          details: e.details
        },
        // empty string in the protobuf document means "do not change"
        commission_rate: t ? Wr(t) : void 0,
        // empty string in the protobuf document means "do not change"
        min_self_delegation: n || void 0,
        validator_address: r
      }),
      fromAmino: ({ description: e, commission_rate: t, min_self_delegation: n, validator_address: r }) => ({
        description: {
          moniker: e.moniker,
          identity: e.identity,
          website: e.website,
          securityContact: e.security_contact,
          details: e.details
        },
        // empty string in the protobuf document means "do not change"
        commissionRate: t ? Hs(t) : "",
        // empty string in the protobuf document means "do not change"
        minSelfDelegation: n ?? "",
        validatorAddress: r
      })
    },
    "/cosmos.staking.v1beta1.MsgUndelegate": {
      aminoType: "cosmos-sdk/MsgUndelegate",
      toAmino: ({ delegatorAddress: e, validatorAddress: t, amount: n }) => ((0, Ut.assertDefinedAndNotNull)(n, "missing amount"), {
        delegator_address: e,
        validator_address: t,
        amount: n
      }),
      fromAmino: ({ delegator_address: e, validator_address: t, amount: n }) => ({
        delegatorAddress: e,
        validatorAddress: t,
        amount: n
      })
    }
  };
}
ye.createStakingAminoConverters = wv;
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
Ne.isMsgUndelegateEncodeObject = Ne.isMsgEditValidatorEncodeObject = Ne.isMsgDelegateEncodeObject = Ne.isMsgCreateValidatorEncodeObject = Ne.isMsgBeginRedelegateEncodeObject = Ne.stakingTypes = void 0;
const xr = ic;
Ne.stakingTypes = [
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", xr.MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgCreateValidator", xr.MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", xr.MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgEditValidator", xr.MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgUndelegate", xr.MsgUndelegate]
];
function _v(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgBeginRedelegate";
}
Ne.isMsgBeginRedelegateEncodeObject = _v;
function Sv(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgCreateValidator";
}
Ne.isMsgCreateValidatorEncodeObject = Sv;
function Av(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgDelegate";
}
Ne.isMsgDelegateEncodeObject = Av;
function Pv(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgEditValidator";
}
Ne.isMsgEditValidatorEncodeObject = Pv;
function kv(e) {
  return e.typeUrl === "/cosmos.staking.v1beta1.MsgUndelegate";
}
Ne.isMsgUndelegateEncodeObject = kv;
var ni = {};
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.setupStakingExtension = void 0;
const Ev = Bp, $t = _e;
function Tv(e) {
  const t = (0, $t.createProtobufRpcClient)(e), n = new Ev.QueryClientImpl(t);
  return {
    staking: {
      delegation: async (r, s) => await n.Delegation({
        delegatorAddr: r,
        validatorAddr: s
      }),
      delegatorDelegations: async (r, s) => await n.DelegatorDelegations({
        delegatorAddr: r,
        pagination: (0, $t.createPagination)(s)
      }),
      delegatorUnbondingDelegations: async (r, s) => await n.DelegatorUnbondingDelegations({
        delegatorAddr: r,
        pagination: (0, $t.createPagination)(s)
      }),
      delegatorValidator: async (r, s) => await n.DelegatorValidator({
        delegatorAddr: r,
        validatorAddr: s
      }),
      delegatorValidators: async (r, s) => await n.DelegatorValidators({
        delegatorAddr: r,
        pagination: (0, $t.createPagination)(s)
      }),
      historicalInfo: async (r) => await n.HistoricalInfo({
        height: BigInt(r)
      }),
      params: async () => await n.Params({}),
      pool: async () => await n.Pool({}),
      redelegations: async (r, s, o, i) => await n.Redelegations({
        delegatorAddr: r,
        srcValidatorAddr: s,
        dstValidatorAddr: o,
        pagination: (0, $t.createPagination)(i)
      }),
      unbondingDelegation: async (r, s) => await n.UnbondingDelegation({
        delegatorAddr: r,
        validatorAddr: s
      }),
      validator: async (r) => await n.Validator({ validatorAddr: r }),
      validatorDelegations: async (r, s) => await n.ValidatorDelegations({
        validatorAddr: r,
        pagination: (0, $t.createPagination)(s)
      }),
      validators: async (r, s) => await n.Validators({
        status: r,
        pagination: (0, $t.createPagination)(s)
      }),
      validatorUnbondingDelegations: async (r, s) => await n.ValidatorUnbondingDelegations({
        validatorAddr: r,
        pagination: (0, $t.createPagination)(s)
      })
    }
  };
}
ni.setupStakingExtension = Tv;
var ri = {};
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.setupTxExtension = void 0;
const Ov = Et, Iv = is, Ku = Np, Hr = Rt, Bv = _e;
function Nv(e) {
  const t = (0, Bv.createProtobufRpcClient)(e), n = new Ku.ServiceClientImpl(t);
  return {
    tx: {
      getTx: async (r) => {
        const s = {
          hash: r
        };
        return await n.GetTx(s);
      },
      simulate: async (r, s, o, i) => {
        const a = Hr.Tx.fromPartial({
          authInfo: Hr.AuthInfo.fromPartial({
            fee: Hr.Fee.fromPartial({}),
            signerInfos: [
              {
                publicKey: (0, Ov.encodePubkey)(o),
                sequence: BigInt(i),
                modeInfo: { single: { mode: Iv.SignMode.SIGN_MODE_UNSPECIFIED } }
              }
            ]
          }),
          body: Hr.TxBody.fromPartial({
            messages: Array.from(r),
            memo: s
          }),
          signatures: [new Uint8Array()]
        }), c = Ku.SimulateRequest.fromPartial({
          txBytes: Hr.Tx.encode(a).finish()
        });
        return await n.Simulate(c);
      }
    }
  };
}
ri.setupTxExtension = Nv;
var ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.createVestingAminoConverters = ur.isAminoMsgCreateVestingAccount = void 0;
function Mv(e) {
  return e.type === "cosmos-sdk/MsgCreateVestingAccount";
}
ur.isAminoMsgCreateVestingAccount = Mv;
function Rv() {
  return {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
      aminoType: "cosmos-sdk/MsgCreateVestingAccount",
      toAmino: ({ fromAddress: e, toAddress: t, amount: n, endTime: r, delayed: s }) => ({
        from_address: e,
        to_address: t,
        amount: [...n],
        end_time: r.toString(),
        delayed: s
      }),
      fromAmino: ({ from_address: e, to_address: t, amount: n, end_time: r, delayed: s }) => ({
        fromAddress: e,
        toAddress: t,
        amount: [...n],
        endTime: BigInt(r),
        delayed: s
      })
    }
  };
}
ur.createVestingAminoConverters = Rv;
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.vestingTypes = void 0;
const jv = Mp;
si.vestingTypes = [
  ["/cosmos.vesting.v1beta1.MsgCreateVestingAccount", jv.MsgCreateVestingAccount]
];
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isAminoMsgCreateValidator = e.isAminoMsgBeginRedelegate = e.createStakingAminoConverters = e.setupSlashingExtension = e.isAminoMsgUnjail = e.createSlashingAminoConverters = e.setupMintExtension = e.setupIbcExtension = e.isMsgTransferEncodeObject = e.ibcTypes = e.isAminoMsgTransfer = e.createIbcAminoConverters = e.groupTypes = e.createGroupAminoConverters = e.setupGovExtension = e.isMsgVoteWeightedEncodeObject = e.isMsgVoteEncodeObject = e.isMsgSubmitProposalEncodeObject = e.isMsgDepositEncodeObject = e.govTypes = e.isAminoMsgVoteWeighted = e.isAminoMsgVote = e.isAminoMsgSubmitProposal = e.isAminoMsgDeposit = e.createGovAminoConverters = e.setupFeegrantExtension = e.feegrantTypes = e.createFeegrantAminoConverters = e.isAminoMsgSubmitEvidence = e.createEvidenceAminoConverters = e.setupDistributionExtension = e.isMsgWithdrawDelegatorRewardEncodeObject = e.distributionTypes = e.isAminoMsgWithdrawValidatorCommission = e.isAminoMsgWithdrawDelegatorReward = e.isAminoMsgSetWithdrawAddress = e.isAminoMsgFundCommunityPool = e.createDistributionAminoConverters = e.isAminoMsgVerifyInvariant = e.createCrysisAminoConverters = e.setupBankExtension = e.isMsgSendEncodeObject = e.bankTypes = e.isAminoMsgSend = e.isAminoMsgMultiSend = e.createBankAminoConverters = e.setupAuthzExtension = e.authzTypes = e.createAuthzAminoConverters = e.setupAuthExtension = void 0, e.vestingTypes = e.isAminoMsgCreateVestingAccount = e.createVestingAminoConverters = e.setupTxExtension = e.setupStakingExtension = e.stakingTypes = e.isMsgUndelegateEncodeObject = e.isMsgEditValidatorEncodeObject = e.isMsgDelegateEncodeObject = e.isMsgCreateValidatorEncodeObject = e.isMsgBeginRedelegateEncodeObject = e.isAminoMsgUndelegate = e.isAminoMsgEditValidator = e.isAminoMsgDelegate = void 0;
  var t = Do;
  Object.defineProperty(e, "setupAuthExtension", { enumerable: !0, get: function() {
    return t.setupAuthExtension;
  } });
  var n = Vo;
  Object.defineProperty(e, "createAuthzAminoConverters", { enumerable: !0, get: function() {
    return n.createAuthzAminoConverters;
  } });
  var r = Lo;
  Object.defineProperty(e, "authzTypes", { enumerable: !0, get: function() {
    return r.authzTypes;
  } });
  var s = Wo;
  Object.defineProperty(e, "setupAuthzExtension", { enumerable: !0, get: function() {
    return s.setupAuthzExtension;
  } });
  var o = Lt;
  Object.defineProperty(e, "createBankAminoConverters", { enumerable: !0, get: function() {
    return o.createBankAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgMultiSend", { enumerable: !0, get: function() {
    return o.isAminoMsgMultiSend;
  } }), Object.defineProperty(e, "isAminoMsgSend", { enumerable: !0, get: function() {
    return o.isAminoMsgSend;
  } });
  var i = nr;
  Object.defineProperty(e, "bankTypes", { enumerable: !0, get: function() {
    return i.bankTypes;
  } }), Object.defineProperty(e, "isMsgSendEncodeObject", { enumerable: !0, get: function() {
    return i.isMsgSendEncodeObject;
  } });
  var a = Jo;
  Object.defineProperty(e, "setupBankExtension", { enumerable: !0, get: function() {
    return a.setupBankExtension;
  } });
  var c = rr;
  Object.defineProperty(e, "createCrysisAminoConverters", { enumerable: !0, get: function() {
    return c.createCrysisAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgVerifyInvariant", { enumerable: !0, get: function() {
    return c.isAminoMsgVerifyInvariant;
  } });
  var u = Ce;
  Object.defineProperty(e, "createDistributionAminoConverters", { enumerable: !0, get: function() {
    return u.createDistributionAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgFundCommunityPool", { enumerable: !0, get: function() {
    return u.isAminoMsgFundCommunityPool;
  } }), Object.defineProperty(e, "isAminoMsgSetWithdrawAddress", { enumerable: !0, get: function() {
    return u.isAminoMsgSetWithdrawAddress;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawDelegatorReward", { enumerable: !0, get: function() {
    return u.isAminoMsgWithdrawDelegatorReward;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawValidatorCommission", { enumerable: !0, get: function() {
    return u.isAminoMsgWithdrawValidatorCommission;
  } });
  var l = sr;
  Object.defineProperty(e, "distributionTypes", { enumerable: !0, get: function() {
    return l.distributionTypes;
  } }), Object.defineProperty(e, "isMsgWithdrawDelegatorRewardEncodeObject", { enumerable: !0, get: function() {
    return l.isMsgWithdrawDelegatorRewardEncodeObject;
  } });
  var d = Go;
  Object.defineProperty(e, "setupDistributionExtension", { enumerable: !0, get: function() {
    return d.setupDistributionExtension;
  } });
  var b = or;
  Object.defineProperty(e, "createEvidenceAminoConverters", { enumerable: !0, get: function() {
    return b.createEvidenceAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgSubmitEvidence", { enumerable: !0, get: function() {
    return b.isAminoMsgSubmitEvidence;
  } });
  var y = Ko;
  Object.defineProperty(e, "createFeegrantAminoConverters", { enumerable: !0, get: function() {
    return y.createFeegrantAminoConverters;
  } });
  var P = zo;
  Object.defineProperty(e, "feegrantTypes", { enumerable: !0, get: function() {
    return P.feegrantTypes;
  } });
  var v = Qo;
  Object.defineProperty(e, "setupFeegrantExtension", { enumerable: !0, get: function() {
    return v.setupFeegrantExtension;
  } });
  var m = Ye;
  Object.defineProperty(e, "createGovAminoConverters", { enumerable: !0, get: function() {
    return m.createGovAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgDeposit", { enumerable: !0, get: function() {
    return m.isAminoMsgDeposit;
  } }), Object.defineProperty(e, "isAminoMsgSubmitProposal", { enumerable: !0, get: function() {
    return m.isAminoMsgSubmitProposal;
  } }), Object.defineProperty(e, "isAminoMsgVote", { enumerable: !0, get: function() {
    return m.isAminoMsgVote;
  } }), Object.defineProperty(e, "isAminoMsgVoteWeighted", { enumerable: !0, get: function() {
    return m.isAminoMsgVoteWeighted;
  } });
  var S = Xe;
  Object.defineProperty(e, "govTypes", { enumerable: !0, get: function() {
    return S.govTypes;
  } }), Object.defineProperty(e, "isMsgDepositEncodeObject", { enumerable: !0, get: function() {
    return S.isMsgDepositEncodeObject;
  } }), Object.defineProperty(e, "isMsgSubmitProposalEncodeObject", { enumerable: !0, get: function() {
    return S.isMsgSubmitProposalEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteEncodeObject", { enumerable: !0, get: function() {
    return S.isMsgVoteEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteWeightedEncodeObject", { enumerable: !0, get: function() {
    return S.isMsgVoteWeightedEncodeObject;
  } });
  var D = Co;
  Object.defineProperty(e, "setupGovExtension", { enumerable: !0, get: function() {
    return D.setupGovExtension;
  } });
  var N = Yo;
  Object.defineProperty(e, "createGroupAminoConverters", { enumerable: !0, get: function() {
    return N.createGroupAminoConverters;
  } });
  var Y = Xo;
  Object.defineProperty(e, "groupTypes", { enumerable: !0, get: function() {
    return Y.groupTypes;
  } });
  var _ = ir;
  Object.defineProperty(e, "createIbcAminoConverters", { enumerable: !0, get: function() {
    return _.createIbcAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgTransfer", { enumerable: !0, get: function() {
    return _.isAminoMsgTransfer;
  } });
  var k = ar;
  Object.defineProperty(e, "ibcTypes", { enumerable: !0, get: function() {
    return k.ibcTypes;
  } }), Object.defineProperty(e, "isMsgTransferEncodeObject", { enumerable: !0, get: function() {
    return k.isMsgTransferEncodeObject;
  } });
  var A = Zo;
  Object.defineProperty(e, "setupIbcExtension", { enumerable: !0, get: function() {
    return A.setupIbcExtension;
  } });
  var $ = ei;
  Object.defineProperty(e, "setupMintExtension", { enumerable: !0, get: function() {
    return $.setupMintExtension;
  } });
  var W = cr;
  Object.defineProperty(e, "createSlashingAminoConverters", { enumerable: !0, get: function() {
    return W.createSlashingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgUnjail", { enumerable: !0, get: function() {
    return W.isAminoMsgUnjail;
  } });
  var J = ti;
  Object.defineProperty(e, "setupSlashingExtension", { enumerable: !0, get: function() {
    return J.setupSlashingExtension;
  } });
  var G = ye;
  Object.defineProperty(e, "createStakingAminoConverters", { enumerable: !0, get: function() {
    return G.createStakingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgBeginRedelegate", { enumerable: !0, get: function() {
    return G.isAminoMsgBeginRedelegate;
  } }), Object.defineProperty(e, "isAminoMsgCreateValidator", { enumerable: !0, get: function() {
    return G.isAminoMsgCreateValidator;
  } }), Object.defineProperty(e, "isAminoMsgDelegate", { enumerable: !0, get: function() {
    return G.isAminoMsgDelegate;
  } }), Object.defineProperty(e, "isAminoMsgEditValidator", { enumerable: !0, get: function() {
    return G.isAminoMsgEditValidator;
  } }), Object.defineProperty(e, "isAminoMsgUndelegate", { enumerable: !0, get: function() {
    return G.isAminoMsgUndelegate;
  } });
  var X = Ne;
  Object.defineProperty(e, "isMsgBeginRedelegateEncodeObject", { enumerable: !0, get: function() {
    return X.isMsgBeginRedelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgCreateValidatorEncodeObject", { enumerable: !0, get: function() {
    return X.isMsgCreateValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgDelegateEncodeObject", { enumerable: !0, get: function() {
    return X.isMsgDelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgEditValidatorEncodeObject", { enumerable: !0, get: function() {
    return X.isMsgEditValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgUndelegateEncodeObject", { enumerable: !0, get: function() {
    return X.isMsgUndelegateEncodeObject;
  } }), Object.defineProperty(e, "stakingTypes", { enumerable: !0, get: function() {
    return X.stakingTypes;
  } });
  var oe = ni;
  Object.defineProperty(e, "setupStakingExtension", { enumerable: !0, get: function() {
    return oe.setupStakingExtension;
  } });
  var Ue = ri;
  Object.defineProperty(e, "setupTxExtension", { enumerable: !0, get: function() {
    return Ue.setupTxExtension;
  } });
  var Dt = ur;
  Object.defineProperty(e, "createVestingAminoConverters", { enumerable: !0, get: function() {
    return Dt.createVestingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgCreateVestingAccount", { enumerable: !0, get: function() {
    return Dt.isAminoMsgCreateVestingAccount;
  } });
  var kr = si;
  Object.defineProperty(e, "vestingTypes", { enumerable: !0, get: function() {
    return kr.vestingTypes;
  } });
})(ns);
var Wt = {};
Object.defineProperty(Wt, "__esModule", { value: !0 });
Wt.makeMultisignedTxBytes = Wt.makeMultisignedTx = Wt.makeCompactBitArray = void 0;
const Dv = gt, Uv = j, $v = Et, xa = Rp, xv = is, zu = Rt, vm = Rt;
function wm(e) {
  const t = Math.ceil(e.length / 8), n = e.length - Math.floor(e.length / 8) * 8, r = new Uint8Array(t);
  return e.forEach((s, o) => {
    const i = Math.floor(o / 8), a = o % 8;
    s && (r[i] |= 1 << 7 - a);
  }), xa.CompactBitArray.fromPartial({ elems: r, extraBitsStored: n });
}
Wt.makeCompactBitArray = wm;
function _m(e, t, n, r, s) {
  const o = Array.from(s.keys()), i = (0, Uv.fromBech32)(o[0]).prefix, a = Array(e.value.pubkeys.length).fill(!1), c = new Array();
  for (let y = 0; y < e.value.pubkeys.length; y++) {
    const P = (0, Dv.pubkeyToAddress)(e.value.pubkeys[y], i), v = s.get(P);
    v && (a[y] = !0, c.push(v));
  }
  const u = {
    publicKey: (0, $v.encodePubkey)(e),
    modeInfo: {
      multi: {
        bitarray: wm(a),
        modeInfos: c.map((y) => ({ single: { mode: xv.SignMode.SIGN_MODE_LEGACY_AMINO_JSON } }))
      }
    },
    sequence: BigInt(t)
  }, l = zu.AuthInfo.fromPartial({
    signerInfos: [u],
    fee: {
      amount: [...n.amount],
      gasLimit: BigInt(n.gas)
    }
  }), d = zu.AuthInfo.encode(l).finish();
  return vm.TxRaw.fromPartial({
    bodyBytes: r,
    authInfoBytes: d,
    signatures: [xa.MultiSignature.encode(xa.MultiSignature.fromPartial({ signatures: c })).finish()]
  });
}
Wt.makeMultisignedTx = _m;
function Hv(e, t, n, r, s) {
  const o = _m(e, t, n, r, s);
  return Uint8Array.from(vm.TxRaw.encode(o).finish());
}
Wt.makeMultisignedTxBytes = Hv;
var ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.isSearchTxQueryArray = void 0;
function qv(e) {
  return Array.isArray(e);
}
ps.isSearchTxQueryArray = qv;
var Sm = {}, gs = {}, At = {};
Object.defineProperty(At, "__esModule", { value: !0 });
At.pubkeyToAddress = At.pubkeyToRawAddress = At.rawSecp256k1PubkeyToRawAddress = At.rawEd25519PubkeyToRawAddress = void 0;
const Ha = be, Fv = j;
function Am(e) {
  if (e.length !== 32)
    throw new Error(`Invalid Ed25519 pubkey length: ${e.length}`);
  return (0, Ha.sha256)(e).slice(0, 20);
}
At.rawEd25519PubkeyToRawAddress = Am;
function Pm(e) {
  if (e.length !== 33)
    throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${e.length}`);
  return (0, Ha.ripemd160)((0, Ha.sha256)(e));
}
At.rawSecp256k1PubkeyToRawAddress = Pm;
function km(e, t) {
  switch (e) {
    case "ed25519":
      return Am(t);
    case "secp256k1":
      return Pm(t);
    default:
      throw new Error(`Pubkey type ${e} not supported`);
  }
}
At.pubkeyToRawAddress = km;
function Vv(e, t) {
  return (0, Fv.toHex)(km(e, t)).toUpperCase();
}
At.pubkeyToAddress = Vv;
var we = {};
Object.defineProperty(we, "__esModule", { value: !0 });
we.DateTime = we.toSeconds = we.fromSeconds = we.toRfc3339WithNanoseconds = we.fromRfc3339WithNanoseconds = void 0;
const Lv = j, Wv = se;
function Em(e) {
  const t = (0, Lv.fromRfc3339)(e), n = e.match(/\.(\d+)Z$/), r = n ? n[1].slice(3) : "";
  return t.nanoseconds = parseInt(r.padEnd(6, "0"), 10), t;
}
we.fromRfc3339WithNanoseconds = Em;
function Tm(e) {
  var r;
  const t = e.toISOString(), n = ((r = e.nanoseconds) == null ? void 0 : r.toString()) ?? "";
  return `${t.slice(0, -1)}${n.padStart(6, "0")}Z`;
}
we.toRfc3339WithNanoseconds = Tm;
function Jv(e, t = 0) {
  const n = new Wv.Uint32(t).toNumber();
  if (n > 999999999)
    throw new Error("Nano seconds must not exceed 999999999");
  const r = new Date(e * 1e3 + Math.floor(n / 1e6));
  return r.nanoseconds = n % 1e6, r;
}
we.fromSeconds = Jv;
function Gv(e) {
  return {
    seconds: Math.floor(e.getTime() / 1e3),
    nanos: e.getTime() % 1e3 * 1e6 + (e.nanoseconds ?? 0)
  };
}
we.toSeconds = Gv;
class Kv {
  /** @deprecated Use fromRfc3339WithNanoseconds instead */
  static decode(t) {
    return Em(t);
  }
  /** @deprecated Use toRfc3339WithNanoseconds instead */
  static encode(t) {
    return Tm(t);
  }
}
we.DateTime = Kv;
var co = {}, oi = {}, jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.createJsonRpcRequest = void 0;
const Qu = "123456789";
function zv() {
  return Qu[Math.floor(Math.random() * Qu.length)];
}
function Qv() {
  return parseInt(Array.from({ length: 12 }).map(() => zv()).join(""), 10);
}
function Cv(e, t) {
  const n = t ? { ...t } : {};
  return {
    jsonrpc: "2.0",
    id: Qv(),
    method: e,
    params: n
  };
}
jt.createJsonRpcRequest = Cv;
var ys = {}, ii = {}, ai = {}, ci = {};
Object.defineProperty(ci, "__esModule", { value: !0 });
ci.makeJsonRpcId = void 0;
let Yv = 1e4;
function Xv() {
  return Yv += 1;
}
ci.makeJsonRpcId = Xv;
var ui = {}, Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.jsonRpcCode = Nt.isJsonRpcSuccessResponse = Nt.isJsonRpcErrorResponse = void 0;
function Om(e) {
  return typeof e.error == "object";
}
Nt.isJsonRpcErrorResponse = Om;
function Zv(e) {
  return !Om(e);
}
Nt.isJsonRpcSuccessResponse = Zv;
Nt.jsonRpcCode = {
  parseError: -32700,
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
  internalError: -32603,
  // server error (Reserved for implementation-defined server-errors.):
  // -32000 to -32099
  serverError: {
    default: -32e3
  }
};
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.JsonRpcClient = void 0;
const e0 = fs, t0 = Nt;
class n0 {
  constructor(t) {
    this.connection = t;
  }
  async run(t) {
    const n = this.connection.responseStream.filter((o) => o.id === t.id), r = (0, e0.firstEvent)(n);
    this.connection.sendRequest(t);
    const s = await r;
    if ((0, t0.isJsonRpcErrorResponse)(s)) {
      const o = s.error;
      throw new Error(`JSON RPC error: code=${o.code}; message='${o.message}'`);
    }
    return s;
  }
}
ui.JsonRpcClient = n0;
var Ze = {}, Jt = {};
Object.defineProperty(Jt, "__esModule", { value: !0 });
Jt.isJsonCompatibleDictionary = Jt.isJsonCompatibleArray = Jt.isJsonCompatibleValue = void 0;
function _c(e) {
  return !!(typeof e == "string" || typeof e == "number" || typeof e == "boolean" || e === null || // eslint-disable-next-line @typescript-eslint/no-use-before-define
  Im(e) || // eslint-disable-next-line @typescript-eslint/no-use-before-define
  Bm(e));
}
Jt.isJsonCompatibleValue = _c;
function Im(e) {
  if (!Array.isArray(e))
    return !1;
  for (const t of e)
    if (!_c(t))
      return !1;
  return !0;
}
Jt.isJsonCompatibleArray = Im;
function Bm(e) {
  return typeof e != "object" || e === null || Object.prototype.toString.call(e) !== "[object Object]" ? !1 : Object.values(e).every(_c);
}
Jt.isJsonCompatibleDictionary = Bm;
Object.defineProperty(Ze, "__esModule", { value: !0 });
Ze.parseJsonRpcResponse = Ze.parseJsonRpcSuccessResponse = Ze.parseJsonRpcErrorResponse = Ze.parseJsonRpcRequest = Ze.parseJsonRpcId = void 0;
const Gt = Jt;
function Nm(e) {
  if (!(0, Gt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  const t = e.id;
  return typeof t != "number" && typeof t != "string" ? null : t;
}
Ze.parseJsonRpcId = Nm;
function r0(e) {
  if (!(0, Gt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  if (e.jsonrpc !== "2.0")
    throw new Error(`Got unexpected jsonrpc version: ${e.jsonrpc}`);
  const t = Nm(e);
  if (t === null)
    throw new Error("Invalid id field");
  const n = e.method;
  if (typeof n != "string")
    throw new Error("Invalid method field");
  if (!(0, Gt.isJsonCompatibleArray)(e.params) && !(0, Gt.isJsonCompatibleDictionary)(e.params))
    throw new Error("Invalid params field");
  return {
    jsonrpc: "2.0",
    id: t,
    method: n,
    params: e.params
  };
}
Ze.parseJsonRpcRequest = r0;
function s0(e) {
  if (typeof e.code != "number")
    throw new Error("Error property 'code' is not a number");
  if (typeof e.message != "string")
    throw new Error("Error property 'message' is not a string");
  let t;
  if (e.data === void 0)
    t = void 0;
  else if ((0, Gt.isJsonCompatibleValue)(e.data))
    t = e.data;
  else
    throw new Error("Error property 'data' is defined but not a JSON compatible value.");
  return {
    code: e.code,
    message: e.message,
    ...t !== void 0 ? { data: t } : {}
  };
}
function Mm(e) {
  if (!(0, Gt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  if (e.jsonrpc !== "2.0")
    throw new Error(`Got unexpected jsonrpc version: ${JSON.stringify(e)}`);
  const t = e.id;
  if (typeof t != "number" && typeof t != "string" && t !== null)
    throw new Error("Invalid id field");
  if (typeof e.error > "u" || !(0, Gt.isJsonCompatibleDictionary)(e.error))
    throw new Error("Invalid error field");
  return {
    jsonrpc: "2.0",
    id: t,
    error: s0(e.error)
  };
}
Ze.parseJsonRpcErrorResponse = Mm;
function Rm(e) {
  if (!(0, Gt.isJsonCompatibleDictionary)(e))
    throw new Error("Data must be JSON compatible dictionary");
  if (e.jsonrpc !== "2.0")
    throw new Error(`Got unexpected jsonrpc version: ${JSON.stringify(e)}`);
  const t = e.id;
  if (typeof t != "number" && typeof t != "string")
    throw new Error("Invalid id field");
  if (typeof e.result > "u")
    throw new Error("Invalid result field");
  const n = e.result;
  return {
    jsonrpc: "2.0",
    id: t,
    result: n
  };
}
Ze.parseJsonRpcSuccessResponse = Rm;
function o0(e) {
  let t;
  try {
    t = Mm(e);
  } catch {
    t = Rm(e);
  }
  return t;
}
Ze.parseJsonRpcResponse = o0;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.jsonRpcCode = e.isJsonRpcSuccessResponse = e.isJsonRpcErrorResponse = e.parseJsonRpcSuccessResponse = e.parseJsonRpcResponse = e.parseJsonRpcRequest = e.parseJsonRpcId = e.parseJsonRpcErrorResponse = e.JsonRpcClient = e.makeJsonRpcId = void 0;
  var t = ci;
  Object.defineProperty(e, "makeJsonRpcId", { enumerable: !0, get: function() {
    return t.makeJsonRpcId;
  } });
  var n = ui;
  Object.defineProperty(e, "JsonRpcClient", { enumerable: !0, get: function() {
    return n.JsonRpcClient;
  } });
  var r = Ze;
  Object.defineProperty(e, "parseJsonRpcErrorResponse", { enumerable: !0, get: function() {
    return r.parseJsonRpcErrorResponse;
  } }), Object.defineProperty(e, "parseJsonRpcId", { enumerable: !0, get: function() {
    return r.parseJsonRpcId;
  } }), Object.defineProperty(e, "parseJsonRpcRequest", { enumerable: !0, get: function() {
    return r.parseJsonRpcRequest;
  } }), Object.defineProperty(e, "parseJsonRpcResponse", { enumerable: !0, get: function() {
    return r.parseJsonRpcResponse;
  } }), Object.defineProperty(e, "parseJsonRpcSuccessResponse", { enumerable: !0, get: function() {
    return r.parseJsonRpcSuccessResponse;
  } });
  var s = Nt;
  Object.defineProperty(e, "isJsonRpcErrorResponse", { enumerable: !0, get: function() {
    return s.isJsonRpcErrorResponse;
  } }), Object.defineProperty(e, "isJsonRpcSuccessResponse", { enumerable: !0, get: function() {
    return s.isJsonRpcSuccessResponse;
  } }), Object.defineProperty(e, "jsonRpcCode", { enumerable: !0, get: function() {
    return s.jsonRpcCode;
  } });
})(ai);
var hs = {}, i0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.http = void 0;
const a0 = i0(jp);
function c0(e) {
  if (e.status >= 400)
    throw new Error(`Bad status on response: ${e.status}`);
  return e;
}
function u0(e) {
  return e.toString().includes("emitExperimentalWarning");
}
async function l0(e, t, n, r) {
  if (typeof fetch == "function" && !u0(fetch)) {
    const s = {
      method: e,
      body: r ? JSON.stringify(r) : void 0,
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": "application/json",
        ...n
      }
    };
    return fetch(t, s).then(c0).then((o) => o.json());
  } else
    return a0.default.request({ url: t, method: e, data: r, headers: n }).then((s) => s.data);
}
hs.http = l0;
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.hasProtocol = Mt.instanceOfRpcStreamingClient = void 0;
function d0(e) {
  return typeof e.listen == "function";
}
Mt.instanceOfRpcStreamingClient = d0;
function m0(e) {
  return e.search("://") !== -1;
}
Mt.hasProtocol = m0;
Object.defineProperty(ii, "__esModule", { value: !0 });
ii.HttpBatchClient = void 0;
const Cu = ai, f0 = hs, p0 = Mt, Yu = {
  dispatchInterval: 20,
  batchSizeLimit: 20
};
class g0 {
  constructor(t, n = {}) {
    if (this.queue = [], this.options = {
      batchSizeLimit: n.batchSizeLimit ?? Yu.batchSizeLimit,
      dispatchInterval: n.dispatchInterval ?? Yu.dispatchInterval
    }, typeof t == "string") {
      if (!(0, p0.hasProtocol)(t))
        throw new Error("Endpoint URL is missing a protocol. Expected 'https://' or 'http://'.");
      this.url = t;
    } else
      this.url = t.url, this.headers = t.headers;
    this.timer = setInterval(() => this.tick(), n.dispatchInterval), this.validate();
  }
  disconnect() {
    this.timer && clearInterval(this.timer), this.timer = void 0;
  }
  async execute(t) {
    return new Promise((n, r) => {
      this.queue.push({ request: t, resolve: n, reject: r }), this.queue.length >= this.options.batchSizeLimit && this.tick();
    });
  }
  validate() {
    if (!this.options.batchSizeLimit || !Number.isSafeInteger(this.options.batchSizeLimit) || this.options.batchSizeLimit < 1)
      throw new Error("batchSizeLimit must be a safe integer >= 1");
  }
  /**
   * This is called in an interval where promise rejections cannot be handled.
   * So this is not async and HTTP errors need to be handled by the queued promises.
   */
  tick() {
    const t = this.queue.splice(0, this.options.batchSizeLimit);
    if (!t.length)
      return;
    const n = t.map((s) => s.request), r = n.map((s) => s.id);
    (0, f0.http)("POST", this.url, this.headers, n).then((s) => {
      (Array.isArray(s) ? s : [s]).forEach((i) => {
        const a = t.find((d) => d.request.id === i.id);
        if (!a)
          return;
        const { reject: c, resolve: u } = a, l = (0, Cu.parseJsonRpcResponse)(i);
        (0, Cu.isJsonRpcErrorResponse)(l) ? c(new Error(JSON.stringify(l.error))) : u(l);
      });
    }, (s) => {
      for (const o of r) {
        const i = t.find((a) => a.request.id === o);
        if (!i)
          return;
        i.reject(s);
      }
    });
  }
}
ii.HttpBatchClient = g0;
var li = {};
Object.defineProperty(li, "__esModule", { value: !0 });
li.HttpClient = void 0;
const Xu = ai, y0 = hs, h0 = Mt;
let b0 = class {
  constructor(t) {
    if (typeof t == "string") {
      if (!(0, h0.hasProtocol)(t))
        throw new Error("Endpoint URL is missing a protocol. Expected 'https://' or 'http://'.");
      this.url = t;
    } else
      this.url = t.url, this.headers = t.headers;
  }
  disconnect() {
  }
  async execute(t) {
    const n = (0, Xu.parseJsonRpcResponse)(await (0, y0.http)("POST", this.url, this.headers, t));
    if ((0, Xu.isJsonRpcErrorResponse)(n))
      throw new Error(JSON.stringify(n.error));
    return n;
  }
};
li.HttpClient = b0;
var di = {}, jm = {}, Sc = {}, bs = {}, vs = {}, v0 = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.SocketWrapper = void 0;
const In = v0(Dp);
function w0() {
  return typeof U.process < "u" && typeof U.process.versions < "u" && typeof U.process.versions.node < "u";
}
class _0 {
  constructor(t, n, r, s, o, i = 1e4) {
    this.closed = !1, this.connected = new Promise((a, c) => {
      this.connectedResolver = a, this.connectedRejecter = c;
    }), this.url = t, this.messageHandler = n, this.errorHandler = r, this.openHandler = s, this.closeHandler = o, this.timeout = i;
  }
  /**
   * returns a promise that resolves when connection is open
   */
  connect() {
    const t = new In.default(this.url);
    t.onerror = (r) => {
      this.clearTimeout(), this.errorHandler && this.errorHandler(r);
    }, t.onmessage = (r) => {
      this.messageHandler({
        type: r.type,
        data: r.data
      });
    }, t.onopen = (r) => {
      this.clearTimeout(), this.connectedResolver(), this.openHandler && this.openHandler();
    }, t.onclose = (r) => {
      this.closed = !0, this.closeHandler && this.closeHandler(r);
    };
    const n = Date.now();
    this.timeoutId = setTimeout(() => {
      t.onmessage = () => 0, t.onerror = () => 0, t.onopen = () => 0, t.onclose = () => 0, t.close(), this.socket = void 0;
      const r = Math.floor(Date.now() - n);
      this.connectedRejecter(`Connection attempt timed out after ${r} ms`);
    }, this.timeout), this.socket = t;
  }
  /**
   * Closes an established connection and aborts other connection states
   */
  disconnect() {
    if (!this.socket)
      throw new Error("Socket undefined. This must be called after connecting.");
    switch (this.clearTimeout(), this.socket.readyState) {
      case In.default.OPEN:
        this.socket.close(
          1e3
          /* Normal Closure */
        );
        break;
      case In.default.CLOSED:
        break;
      case In.default.CONNECTING:
        this.socket.onopen = () => 0, this.socket.onclose = () => 0, this.socket.onerror = () => 0, this.socket.onmessage = () => 0, this.socket = void 0, this.closeHandler && this.closeHandler({ wasClean: !1, code: 4001 });
        break;
      case In.default.CLOSING:
        break;
      default:
        throw new Error(`Unknown readyState: ${this.socket.readyState}`);
    }
  }
  async send(t) {
    return new Promise((n, r) => {
      if (!this.socket)
        throw new Error("Socket undefined. This must be called after connecting.");
      if (this.closed)
        throw new Error("Socket was closed, so no data can be sent anymore.");
      if (this.socket.readyState !== In.default.OPEN)
        throw new Error("Websocket is not open");
      w0() ? this.socket.send(t, (s) => s ? r(s) : n()) : (this.socket.send(t), n());
    });
  }
  /**
   * Clears the timeout function, such that no timeout error will be raised anymore. This should be
   * called when the connection is established, a connection error occurred or the socket is disconnected.
   *
   * This method must not be called before `connect()`.
   * This method is idempotent.
   */
  clearTimeout() {
    if (!this.timeoutId)
      throw new Error("Timeout ID not set. This should not happen and usually means connect() was not called.");
    clearTimeout(this.timeoutId);
  }
}
vs.SocketWrapper = _0;
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.StreamingSocket = void 0;
const S0 = Sn, A0 = vs;
class P0 {
  constructor(t, n = 1e4) {
    this.socket = new A0.SocketWrapper(t, (s) => {
      this.eventProducerListener && this.eventProducerListener.next(s);
    }, (s) => {
      this.eventProducerListener && this.eventProducerListener.error(s);
    }, () => {
    }, (s) => {
      this.eventProducerListener && (s.wasClean ? this.eventProducerListener.complete() : this.eventProducerListener.error("Socket was closed unclean"));
    }, n), this.connected = this.socket.connected;
    const r = {
      start: (s) => this.eventProducerListener = s,
      stop: () => this.eventProducerListener = void 0
    };
    this.events = S0.Stream.create(r);
  }
  connect() {
    this.socket.connect();
  }
  disconnect() {
    this.socket.disconnect();
  }
  async send(t) {
    return this.socket.send(t);
  }
}
bs.StreamingSocket = P0;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.QueueingStreamingSocket = e.ConnectionStatus = void 0;
  const t = fs, n = Sn, r = bs;
  var s;
  (function(i) {
    i[i.Unconnected = 0] = "Unconnected", i[i.Connecting = 1] = "Connecting", i[i.Connected = 2] = "Connected", i[i.Disconnected = 3] = "Disconnected";
  })(s = e.ConnectionStatus || (e.ConnectionStatus = {}));
  class o {
    constructor(a, c = 1e4, u) {
      this.queue = [], this.isProcessingQueue = !1, this.url = a, this.timeout = c, this.reconnectedHandler = u;
      const l = {
        start: (d) => this.eventProducerListener = d,
        stop: () => this.eventProducerListener = void 0
      };
      this.events = n.Stream.create(l), this.connectionStatusProducer = new t.DefaultValueProducer(s.Unconnected), this.connectionStatus = new t.ValueAndUpdates(this.connectionStatusProducer), this.socket = new r.StreamingSocket(this.url, this.timeout), this.socket.events.subscribe({
        next: (d) => {
          if (!this.eventProducerListener)
            throw new Error("No event producer listener set");
          this.eventProducerListener.next(d);
        },
        error: () => this.connectionStatusProducer.update(s.Disconnected)
      });
    }
    connect() {
      this.connectionStatusProducer.update(s.Connecting), this.socket.connected.then(async () => (this.connectionStatusProducer.update(s.Connected), this.processQueue()), () => this.connectionStatusProducer.update(s.Disconnected)), this.socket.connect();
    }
    disconnect() {
      this.connectionStatusProducer.update(s.Disconnected), this.socket.disconnect();
    }
    reconnect() {
      this.socket = new r.StreamingSocket(this.url, this.timeout), this.socket.events.subscribe({
        next: (a) => {
          if (!this.eventProducerListener)
            throw new Error("No event producer listener set");
          this.eventProducerListener.next(a);
        },
        error: () => this.connectionStatusProducer.update(s.Disconnected)
      }), this.socket.connected.then(() => {
        this.reconnectedHandler && this.reconnectedHandler();
      }), this.connect();
    }
    getQueueLength() {
      return this.queue.length;
    }
    queueRequest(a) {
      this.queue.push(a), this.processQueue();
    }
    async processQueue() {
      if (this.isProcessingQueue || this.connectionStatus.value !== s.Connected)
        return;
      this.isProcessingQueue = !0;
      let a;
      for (; a = this.queue.shift(); )
        try {
          await this.socket.send(a), this.isProcessingQueue = !1;
        } catch {
          this.queue.unshift(a), this.isProcessingQueue = !1;
          return;
        }
    }
  }
  e.QueueingStreamingSocket = o;
})(Sc);
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.ReconnectingSocket = void 0;
const k0 = Sn, Yi = Sc;
class Ac {
  /** Starts with a 0.1 second timeout, then doubles every attempt with a maximum timeout of 5 seconds. */
  static calculateTimeout(t) {
    return Math.min(2 ** t * 100, 5e3);
  }
  constructor(t, n = 1e4, r) {
    this.unconnected = !0, this.disconnected = !1, this.timeoutIndex = 0, this.reconnectTimeout = null;
    const s = {
      start: (o) => this.eventProducerListener = o,
      stop: () => this.eventProducerListener = void 0
    };
    this.events = k0.Stream.create(s), this.socket = new Yi.QueueingStreamingSocket(t, n, r), this.socket.events.subscribe({
      next: (o) => {
        this.eventProducerListener && this.eventProducerListener.next(o);
      },
      error: (o) => {
        this.eventProducerListener && this.eventProducerListener.error(o);
      }
    }), this.connectionStatus = this.socket.connectionStatus, this.connectionStatus.updates.subscribe({
      next: (o) => {
        o === Yi.ConnectionStatus.Connected && (this.timeoutIndex = 0), o === Yi.ConnectionStatus.Disconnected && (this.reconnectTimeout && (clearTimeout(this.reconnectTimeout), this.reconnectTimeout = null), this.reconnectTimeout = setTimeout(() => this.socket.reconnect(), Ac.calculateTimeout(this.timeoutIndex++)));
      }
    });
  }
  connect() {
    if (!this.unconnected)
      throw new Error("Cannot connect: socket has already connected");
    this.socket.connect(), this.unconnected = !1;
  }
  disconnect() {
    if (this.unconnected)
      throw new Error("Cannot disconnect: socket has not yet connected");
    this.socket.disconnect(), this.eventProducerListener && this.eventProducerListener.complete(), this.disconnected = !0;
  }
  queueRequest(t) {
    if (this.disconnected)
      throw new Error("Cannot queue request: socket has disconnected");
    this.socket.queueRequest(t);
  }
}
mi.ReconnectingSocket = Ac;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.StreamingSocket = e.SocketWrapper = e.ReconnectingSocket = e.QueueingStreamingSocket = e.ConnectionStatus = void 0;
  var t = Sc;
  Object.defineProperty(e, "ConnectionStatus", { enumerable: !0, get: function() {
    return t.ConnectionStatus;
  } }), Object.defineProperty(e, "QueueingStreamingSocket", { enumerable: !0, get: function() {
    return t.QueueingStreamingSocket;
  } });
  var n = mi;
  Object.defineProperty(e, "ReconnectingSocket", { enumerable: !0, get: function() {
    return n.ReconnectingSocket;
  } });
  var r = vs;
  Object.defineProperty(e, "SocketWrapper", { enumerable: !0, get: function() {
    return r.SocketWrapper;
  } });
  var s = bs;
  Object.defineProperty(e, "StreamingSocket", { enumerable: !0, get: function() {
    return s.StreamingSocket;
  } });
})(jm);
Object.defineProperty(di, "__esModule", { value: !0 });
di.WebsocketClient = void 0;
const uo = ai, Zu = jm, E0 = fs, T0 = Sn, O0 = Mt;
function I0(e) {
  throw e;
}
function Dm(e) {
  if (e.type !== "message")
    throw new Error(`Unexcepted message type on websocket: ${e.type}`);
  return (0, uo.parseJsonRpcResponse)(JSON.parse(e.data));
}
class B0 {
  constructor(t, n) {
    this.running = !1, this.subscriptions = [], this.request = t, this.socket = n;
  }
  /**
   * Implementation of Producer.start
   */
  start(t) {
    if (this.running)
      throw Error("Already started. Please stop first before restarting.");
    this.running = !0, this.connectToClient(t), this.socket.queueRequest(JSON.stringify(this.request));
  }
  /**
   * Implementation of Producer.stop
   *
   * Called by the stream when the stream's last listener stopped listening
   * or when the producer completed.
   */
  stop() {
    this.running = !1;
    const t = { ...this.request, method: "unsubscribe" };
    try {
      this.socket.queueRequest(JSON.stringify(t));
    } catch (n) {
      if (!(n instanceof Error && n.message.match(/socket has disconnected/i)))
        throw n;
    }
  }
  connectToClient(t) {
    const n = this.socket.events.map(Dm), r = n.filter((i) => i.id === this.request.id).subscribe({
      next: (i) => {
        (0, uo.isJsonRpcErrorResponse)(i) && (this.closeSubscriptions(), t.error(JSON.stringify(i.error))), r.unsubscribe();
      }
    }), s = n.filter((i) => i.id === this.request.id).subscribe({
      next: (i) => {
        (0, uo.isJsonRpcErrorResponse)(i) ? (this.closeSubscriptions(), t.error(JSON.stringify(i.error))) : t.next(i.result);
      }
    }), o = n.subscribe({
      error: (i) => {
        this.closeSubscriptions(), t.error(i);
      },
      complete: () => {
        this.closeSubscriptions(), t.complete();
      }
    });
    this.subscriptions.push(r, s, o);
  }
  closeSubscriptions() {
    for (const t of this.subscriptions)
      t.unsubscribe();
    this.subscriptions = [];
  }
}
class N0 {
  constructor(t, n = I0) {
    if (this.subscriptionStreams = /* @__PURE__ */ new Map(), !(0, O0.hasProtocol)(t))
      throw new Error("Base URL is missing a protocol. Expected 'ws://' or 'wss://'.");
    const r = t.endsWith("/") ? "websocket" : "/websocket";
    this.url = t + r, this.socket = new Zu.ReconnectingSocket(this.url);
    const s = this.socket.events.subscribe({
      error: (o) => {
        n(o), s.unsubscribe();
      }
    });
    this.jsonRpcResponseStream = this.socket.events.map(Dm), this.socket.connect();
  }
  async execute(t) {
    const n = this.responseForRequestId(t.id);
    this.socket.queueRequest(JSON.stringify(t));
    const r = await n;
    if ((0, uo.isJsonRpcErrorResponse)(r))
      throw new Error(JSON.stringify(r.error));
    return r;
  }
  listen(t) {
    if (t.method !== "subscribe")
      throw new Error('Request method must be "subscribe" to start event listening');
    const n = t.params.query;
    if (typeof n != "string")
      throw new Error("request.params.query must be a string");
    if (!this.subscriptionStreams.has(n)) {
      const r = new B0(t, this.socket), s = T0.Stream.create(r);
      this.subscriptionStreams.set(n, s);
    }
    return this.subscriptionStreams.get(n).filter((r) => r.query !== void 0);
  }
  /**
   * Resolves as soon as websocket is connected. execute() queues requests automatically,
   * so this should be required for testing purposes only.
   */
  async connected() {
    await this.socket.connectionStatus.waitFor(Zu.ConnectionStatus.Connected);
  }
  disconnect() {
    this.socket.disconnect();
  }
  async responseForRequestId(t) {
    return (0, E0.firstEvent)(this.jsonRpcResponseStream.filter((n) => n.id === t));
  }
}
di.WebsocketClient = N0;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.WebsocketClient = e.instanceOfRpcStreamingClient = e.HttpClient = e.HttpBatchClient = void 0;
  var t = ii;
  Object.defineProperty(e, "HttpBatchClient", { enumerable: !0, get: function() {
    return t.HttpBatchClient;
  } });
  var n = li;
  Object.defineProperty(e, "HttpClient", { enumerable: !0, get: function() {
    return n.HttpClient;
  } });
  var r = Mt;
  Object.defineProperty(e, "instanceOfRpcStreamingClient", { enumerable: !0, get: function() {
    return r.instanceOfRpcStreamingClient;
  } });
  var s = di;
  Object.defineProperty(e, "WebsocketClient", { enumerable: !0, get: function() {
    return s.WebsocketClient;
  } });
})(ys);
var Um = {}, fi = {}, Fe = {}, F = {};
Object.defineProperty(F, "__esModule", { value: !0 });
F.encodeBlockId = F.encodeVersion = F.encodeBytes = F.encodeTime = F.encodeUvarint = F.encodeString = F.dictionaryToStringMap = F.may = F.assertNotEmpty = F.assertObject = F.assertArray = F.assertNumber = F.assertString = F.assertBoolean = F.assertSet = void 0;
const M0 = j;
function An(e) {
  if (e === void 0)
    throw new Error("Value must not be undefined");
  if (e === null)
    throw new Error("Value must not be null");
  return e;
}
F.assertSet = An;
function R0(e) {
  if (An(e), typeof e != "boolean")
    throw new Error("Value must be a boolean");
  return e;
}
F.assertBoolean = R0;
function j0(e) {
  if (An(e), typeof e != "string")
    throw new Error("Value must be a string");
  return e;
}
F.assertString = j0;
function D0(e) {
  if (An(e), typeof e != "number")
    throw new Error("Value must be a number");
  return e;
}
F.assertNumber = D0;
function U0(e) {
  if (An(e), !Array.isArray(e))
    throw new Error("Value must be a an array");
  return e;
}
F.assertArray = U0;
function $0(e) {
  if (An(e), typeof e != "object")
    throw new Error("Value must be an object");
  if (Object.prototype.toString.call(e) !== "[object Object]")
    throw new Error("Value must be a simple object");
  return e;
}
F.assertObject = $0;
function x0(e) {
  if (An(e), typeof e == "number" && e === 0)
    throw new Error("must provide a non-zero value");
  if (e.length === 0)
    throw new Error("must provide a non-empty value");
  return e;
}
F.assertNotEmpty = x0;
function H0(e, t) {
  return t == null ? void 0 : e(t);
}
F.may = H0;
function q0(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (typeof r != "string")
      throw new Error("Found dictionary value of type other than string");
    t.set(n, r);
  }
  return t;
}
F.dictionaryToStringMap = q0;
function F0(e) {
  const t = (0, M0.toUtf8)(e);
  return Uint8Array.from([t.length, ...t]);
}
F.encodeString = F0;
function lr(e) {
  return e >= 128 ? (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255 | 128, ...lr(e >> 7)])
  ) : (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255])
  );
}
F.encodeUvarint = lr;
function V0(e) {
  const t = e.getTime(), n = Math.floor(t / 1e3), r = n ? [8, ...lr(n)] : new Uint8Array(), s = (e.nanoseconds || 0) + t % 1e3 * 1e6, o = s ? [16, ...lr(s)] : new Uint8Array();
  return Uint8Array.from([...r, ...o]);
}
F.encodeTime = V0;
function L0(e) {
  if (e.length >= 128)
    throw new Error("Not implemented for byte arrays of length 128 or more");
  return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
}
F.encodeBytes = L0;
function W0(e) {
  const t = e.block ? Uint8Array.from([8, ...lr(e.block)]) : new Uint8Array(), n = e.app ? Uint8Array.from([16, ...lr(e.app)]) : new Uint8Array();
  return Uint8Array.from([...t, ...n]);
}
F.encodeVersion = W0;
function J0(e) {
  return Uint8Array.from([
    10,
    e.hash.length,
    ...e.hash,
    18,
    e.parts.hash.length + 4,
    8,
    e.parts.total,
    18,
    e.parts.hash.length,
    ...e.parts.hash
  ]);
}
F.encodeBlockId = J0;
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.smallIntToApi = Fe.apiToBigInt = Fe.apiToSmallInt = void 0;
const qa = se, G0 = F;
function K0(e) {
  return (typeof e == "number" ? new qa.Int53(e) : qa.Int53.fromString(e)).toNumber();
}
Fe.apiToSmallInt = K0;
function z0(e) {
  if ((0, G0.assertString)(e), !e.match(/^-?[0-9]+$/))
    throw new Error("Invalid string format");
  return BigInt(e);
}
Fe.apiToBigInt = z0;
function Q0(e) {
  return new qa.Int53(e).toString();
}
Fe.smallIntToApi = Q0;
var V = {};
Object.defineProperty(V, "__esModule", { value: !0 });
V.encodeBlockId = V.encodeVersion = V.encodeBytes = V.encodeTime = V.encodeUvarint = V.encodeString = V.dictionaryToStringMap = V.may = V.assertNotEmpty = V.assertObject = V.assertArray = V.assertNumber = V.assertString = V.assertBoolean = V.assertSet = void 0;
const C0 = j;
function Pn(e) {
  if (e === void 0)
    throw new Error("Value must not be undefined");
  if (e === null)
    throw new Error("Value must not be null");
  return e;
}
V.assertSet = Pn;
function Y0(e) {
  if (Pn(e), typeof e != "boolean")
    throw new Error("Value must be a boolean");
  return e;
}
V.assertBoolean = Y0;
function X0(e) {
  if (Pn(e), typeof e != "string")
    throw new Error("Value must be a string");
  return e;
}
V.assertString = X0;
function Z0(e) {
  if (Pn(e), typeof e != "number")
    throw new Error("Value must be a number");
  return e;
}
V.assertNumber = Z0;
function ew(e) {
  if (Pn(e), !Array.isArray(e))
    throw new Error("Value must be a an array");
  return e;
}
V.assertArray = ew;
function tw(e) {
  if (Pn(e), typeof e != "object")
    throw new Error("Value must be an object");
  if (Object.prototype.toString.call(e) !== "[object Object]")
    throw new Error("Value must be a simple object");
  return e;
}
V.assertObject = tw;
function nw(e) {
  if (Pn(e), typeof e == "number" && e === 0)
    throw new Error("must provide a non-zero value");
  if (e.length === 0)
    throw new Error("must provide a non-empty value");
  return e;
}
V.assertNotEmpty = nw;
function rw(e, t) {
  return t == null ? void 0 : e(t);
}
V.may = rw;
function sw(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (typeof r != "string")
      throw new Error("Found dictionary value of type other than string");
    t.set(n, r);
  }
  return t;
}
V.dictionaryToStringMap = sw;
function ow(e) {
  const t = (0, C0.toUtf8)(e);
  return Uint8Array.from([t.length, ...t]);
}
V.encodeString = ow;
function dr(e) {
  return e >= 128 ? (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255 | 128, ...dr(e >> 7)])
  ) : (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255])
  );
}
V.encodeUvarint = dr;
function iw(e) {
  const t = e.getTime(), n = Math.floor(t / 1e3), r = n ? [8, ...dr(n)] : new Uint8Array(), s = (e.nanoseconds || 0) + t % 1e3 * 1e6, o = s ? [16, ...dr(s)] : new Uint8Array();
  return Uint8Array.from([...r, ...o]);
}
V.encodeTime = iw;
function aw(e) {
  if (e.length >= 128)
    throw new Error("Not implemented for byte arrays of length 128 or more");
  return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
}
V.encodeBytes = aw;
function cw(e) {
  const t = e.block ? Uint8Array.from([8, ...dr(e.block)]) : new Uint8Array(), n = e.app ? Uint8Array.from([16, ...dr(e.app)]) : new Uint8Array();
  return Uint8Array.from([...t, ...n]);
}
V.encodeVersion = cw;
function uw(e) {
  return Uint8Array.from([
    10,
    e.hash.length,
    ...e.hash,
    18,
    e.parts.hash.length + 4,
    8,
    e.parts.total,
    18,
    e.parts.hash.length,
    ...e.parts.hash
  ]);
}
V.encodeBlockId = uw;
var pi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildQuery = e.SubscriptionEventType = e.Method = void 0, function(n) {
    n.AbciInfo = "abci_info", n.AbciQuery = "abci_query", n.Block = "block", n.Blockchain = "blockchain", n.BlockResults = "block_results", n.BlockSearch = "block_search", n.BroadcastTxAsync = "broadcast_tx_async", n.BroadcastTxSync = "broadcast_tx_sync", n.BroadcastTxCommit = "broadcast_tx_commit", n.Commit = "commit", n.Genesis = "genesis", n.Health = "health", n.NumUnconfirmedTxs = "num_unconfirmed_txs", n.Status = "status", n.Subscribe = "subscribe", n.Tx = "tx", n.TxSearch = "tx_search", n.Validators = "validators", n.Unsubscribe = "unsubscribe";
  }(e.Method || (e.Method = {})), function(n) {
    n.NewBlock = "NewBlock", n.NewBlockHeader = "NewBlockHeader", n.Tx = "Tx";
  }(e.SubscriptionEventType || (e.SubscriptionEventType = {}));
  function t(n) {
    const s = (n.tags ? n.tags : []).map((i) => `${i.key}='${i.value}'`), o = n.raw ? [n.raw] : [];
    return [...s, ...o].join(" AND ");
  }
  e.buildQuery = t;
})(pi);
var lw = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), dw = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), mw = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && lw(t, e, n);
  return dw(t, e), t;
};
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.Params = void 0;
const Pc = j, dt = Fe, me = jt, Re = V, fw = mw(pi);
function Xi(e) {
  return {
    height: (0, Re.may)(dt.smallIntToApi, e.height)
  };
}
function pw(e) {
  return {
    minHeight: (0, Re.may)(dt.smallIntToApi, e.minHeight),
    maxHeight: (0, Re.may)(dt.smallIntToApi, e.maxHeight)
  };
}
function gw(e) {
  return {
    query: e.query,
    page: (0, Re.may)(dt.smallIntToApi, e.page),
    per_page: (0, Re.may)(dt.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function yw(e) {
  return {
    path: (0, Re.assertNotEmpty)(e.path),
    data: (0, Pc.toHex)(e.data),
    height: (0, Re.may)(dt.smallIntToApi, e.height),
    prove: e.prove
  };
}
function hw(e) {
  return {
    tx: (0, Pc.toBase64)((0, Re.assertNotEmpty)(e.tx))
  };
}
function bw(e) {
  return {
    hash: (0, Pc.toBase64)((0, Re.assertNotEmpty)(e.hash)),
    prove: e.prove
  };
}
function vw(e) {
  return {
    query: e.query,
    prove: e.prove,
    page: (0, Re.may)(dt.smallIntToApi, e.page),
    per_page: (0, Re.may)(dt.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function ww(e) {
  return {
    height: (0, Re.may)(dt.smallIntToApi, e.height),
    page: (0, Re.may)(dt.smallIntToApi, e.page),
    per_page: (0, Re.may)(dt.smallIntToApi, e.per_page)
  };
}
let _w = class {
  static encodeAbciInfo(t) {
    return (0, me.createJsonRpcRequest)(t.method);
  }
  static encodeAbciQuery(t) {
    return (0, me.createJsonRpcRequest)(t.method, yw(t.params));
  }
  static encodeBlock(t) {
    return (0, me.createJsonRpcRequest)(t.method, Xi(t.params));
  }
  static encodeBlockchain(t) {
    return (0, me.createJsonRpcRequest)(t.method, pw(t.params));
  }
  static encodeBlockResults(t) {
    return (0, me.createJsonRpcRequest)(t.method, Xi(t.params));
  }
  static encodeBlockSearch(t) {
    return (0, me.createJsonRpcRequest)(t.method, gw(t.params));
  }
  static encodeBroadcastTx(t) {
    return (0, me.createJsonRpcRequest)(t.method, hw(t.params));
  }
  static encodeCommit(t) {
    return (0, me.createJsonRpcRequest)(t.method, Xi(t.params));
  }
  static encodeGenesis(t) {
    return (0, me.createJsonRpcRequest)(t.method);
  }
  static encodeHealth(t) {
    return (0, me.createJsonRpcRequest)(t.method);
  }
  static encodeNumUnconfirmedTxs(t) {
    return (0, me.createJsonRpcRequest)(t.method);
  }
  static encodeStatus(t) {
    return (0, me.createJsonRpcRequest)(t.method);
  }
  static encodeSubscribe(t) {
    const n = { key: "tm.event", value: t.query.type }, r = fw.buildQuery({ tags: [n], raw: t.query.raw });
    return (0, me.createJsonRpcRequest)("subscribe", { query: r });
  }
  static encodeTx(t) {
    return (0, me.createJsonRpcRequest)(t.method, bw(t.params));
  }
  // TODO: encode params for query string???
  static encodeTxSearch(t) {
    return (0, me.createJsonRpcRequest)(t.method, vw(t.params));
  }
  static encodeValidators(t) {
    return (0, me.createJsonRpcRequest)(t.method, ww(t.params));
  }
};
fi.Params = _w;
var et = {}, ws = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.BlockIdFlag = void 0, function(t) {
    t[t.Unknown = 0] = "Unknown", t[t.Absent = 1] = "Absent", t[t.Commit = 2] = "Commit", t[t.Nil = 3] = "Nil", t[t.Unrecognized = -1] = "Unrecognized";
  }(e.BlockIdFlag || (e.BlockIdFlag = {}));
})(ws);
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.hashBlock = mr.hashTx = void 0;
const kc = be, Ae = V;
function Sw(e) {
  return (0, kc.sha256)(e);
}
mr.hashTx = Sw;
function Aw(e) {
  if (e < 1)
    throw new Error("Cannot split an empty tree");
  const t = 2 ** Math.floor(Math.log2(e));
  return t < e ? t : t / 2;
}
function Pw(e) {
  const t = new kc.Sha256(Uint8Array.from([0]));
  return t.update(e), t.digest();
}
function kw(e, t) {
  const n = new kc.Sha256(Uint8Array.from([1]));
  return n.update(e), n.update(t), n.digest();
}
function Fa(e) {
  switch (e.length) {
    case 0:
      throw new Error("Cannot hash empty tree");
    case 1:
      return Pw(e[0]);
    default: {
      const t = Aw(e.length), n = Fa(e.slice(0, t)), r = Fa(e.slice(t));
      return kw(n, r);
    }
  }
}
function Ew(e) {
  if (!e.lastBlockId)
    throw new Error("Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.");
  const t = [
    (0, Ae.encodeVersion)(e.version),
    (0, Ae.encodeString)(e.chainId),
    (0, Ae.encodeUvarint)(e.height),
    (0, Ae.encodeTime)(e.time),
    (0, Ae.encodeBlockId)(e.lastBlockId),
    (0, Ae.encodeBytes)(e.lastCommitHash),
    (0, Ae.encodeBytes)(e.dataHash),
    (0, Ae.encodeBytes)(e.validatorsHash),
    (0, Ae.encodeBytes)(e.nextValidatorsHash),
    (0, Ae.encodeBytes)(e.consensusHash),
    (0, Ae.encodeBytes)(e.appHash),
    (0, Ae.encodeBytes)(e.lastResultsHash),
    (0, Ae.encodeBytes)(e.evidenceHash),
    (0, Ae.encodeBytes)(e.proposerAddress)
  ];
  return Fa(t);
}
mr.hashBlock = Ew;
Object.defineProperty(et, "__esModule", { value: !0 });
et.Responses = et.decodeValidatorInfo = et.decodeValidatorGenesis = et.decodeValidatorUpdate = et.decodeEvent = void 0;
const M = j, $m = te, rs = we, O = Fe, Tw = ws, g = V, Ow = mr;
function Iw(e) {
  return {
    data: e.data,
    lastBlockHeight: (0, g.may)(O.apiToSmallInt, e.last_block_height),
    lastBlockAppHash: (0, g.may)(M.fromBase64, e.last_block_app_hash)
  };
}
function Bw(e) {
  return {
    ops: e.ops.map((t) => ({
      type: t.type,
      key: (0, M.fromBase64)(t.key),
      data: (0, M.fromBase64)(t.data)
    }))
  };
}
function Nw(e) {
  return {
    key: (0, M.fromBase64)((0, g.assertString)(e.key ?? "")),
    value: (0, M.fromBase64)((0, g.assertString)(e.value ?? "")),
    proof: (0, g.may)(Bw, e.proofOps),
    height: (0, g.may)(O.apiToSmallInt, e.height),
    code: (0, g.may)(O.apiToSmallInt, e.code),
    codespace: (0, g.assertString)(e.codespace ?? ""),
    index: (0, g.may)(O.apiToSmallInt, e.index),
    log: e.log,
    info: (0, g.assertString)(e.info ?? "")
  };
}
function Mw(e) {
  return {
    key: (0, g.assertNotEmpty)(e.key),
    value: e.value ?? ""
  };
}
function Rw(e) {
  return (0, g.assertArray)(e).map(Mw);
}
function xm(e) {
  return {
    type: e.type,
    attributes: e.attributes ? Rw(e.attributes) : []
  };
}
et.decodeEvent = xm;
function Va(e) {
  return (0, g.assertArray)(e).map(xm);
}
function fr(e) {
  return {
    code: (0, O.apiToSmallInt)((0, g.assertNumber)(e.code ?? 0)),
    codespace: e.codespace,
    log: e.log,
    data: (0, g.may)(M.fromBase64, e.data),
    events: e.events ? Va(e.events) : [],
    gasWanted: (0, O.apiToBigInt)(e.gas_wanted ?? "0"),
    gasUsed: (0, O.apiToBigInt)(e.gas_used ?? "0")
  };
}
function Ec(e) {
  if ("Sum" in e) {
    const [[t, n]] = Object.entries(e.Sum.value);
    return (0, $m.assert)(t === "ed25519" || t === "secp256k1", `unknown pubkey type: ${t}`), {
      algorithm: t,
      data: (0, M.fromBase64)((0, g.assertNotEmpty)(n))
    };
  } else
    switch (e.type) {
      case "tendermint/PubKeyEd25519":
        return {
          algorithm: "ed25519",
          data: (0, M.fromBase64)((0, g.assertNotEmpty)(e.value))
        };
      case "tendermint/PubKeySecp256k1":
        return {
          algorithm: "secp256k1",
          data: (0, M.fromBase64)((0, g.assertNotEmpty)(e.value))
        };
      default:
        throw new Error(`unknown pubkey type: ${e.type}`);
    }
}
function jw(e) {
  return {
    maxBytes: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.max_bytes)),
    maxGas: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.max_gas))
  };
}
function Dw(e) {
  return {
    maxAgeNumBlocks: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.max_age_num_blocks)),
    maxAgeDuration: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.max_age_duration))
  };
}
function Hm(e) {
  return {
    block: jw((0, g.assertObject)(e.block)),
    evidence: Dw((0, g.assertObject)(e.evidence))
  };
}
function qm(e) {
  return {
    pubkey: Ec((0, g.assertObject)(e.pub_key)),
    votingPower: (0, O.apiToBigInt)(e.power ?? "0")
  };
}
et.decodeValidatorUpdate = qm;
function Uw(e) {
  return {
    height: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.height)),
    results: (e.txs_results || []).map(fr),
    validatorUpdates: (e.validator_updates || []).map(qm),
    consensusUpdates: (0, g.may)(Hm, e.consensus_param_updates),
    beginBlockEvents: Va(e.begin_block_events || []),
    endBlockEvents: Va(e.end_block_events || [])
  };
}
function gi(e) {
  return {
    hash: (0, M.fromHex)((0, g.assertNotEmpty)(e.hash)),
    parts: {
      total: (0, g.assertNotEmpty)(e.parts.total),
      hash: (0, M.fromHex)((0, g.assertNotEmpty)(e.parts.hash))
    }
  };
}
function $w(e) {
  return {
    block: (0, O.apiToSmallInt)(e.block),
    app: (0, O.apiToSmallInt)(e.app ?? 0)
  };
}
function yi(e) {
  return {
    version: $w(e.version),
    chainId: (0, g.assertNotEmpty)(e.chain_id),
    height: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.height)),
    time: (0, rs.fromRfc3339WithNanoseconds)((0, g.assertNotEmpty)(e.time)),
    // When there is no last block ID (i.e. this block's height is 1), we get an empty structure like this:
    // { hash: '', parts: { total: 0, hash: '' } }
    lastBlockId: e.last_block_id.hash ? gi(e.last_block_id) : null,
    lastCommitHash: (0, M.fromHex)((0, g.assertSet)(e.last_commit_hash)),
    dataHash: (0, M.fromHex)((0, g.assertSet)(e.data_hash)),
    validatorsHash: (0, M.fromHex)((0, g.assertSet)(e.validators_hash)),
    nextValidatorsHash: (0, M.fromHex)((0, g.assertSet)(e.next_validators_hash)),
    consensusHash: (0, M.fromHex)((0, g.assertSet)(e.consensus_hash)),
    appHash: (0, M.fromHex)((0, g.assertSet)(e.app_hash)),
    lastResultsHash: (0, M.fromHex)((0, g.assertSet)(e.last_results_hash)),
    evidenceHash: (0, M.fromHex)((0, g.assertSet)(e.evidence_hash)),
    proposerAddress: (0, M.fromHex)((0, g.assertNotEmpty)(e.proposer_address))
  };
}
function xw(e) {
  return {
    blockId: gi(e.block_id),
    blockSize: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.block_size)),
    header: yi(e.header),
    numTxs: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.num_txs))
  };
}
function Hw(e) {
  return {
    lastHeight: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.last_height)),
    blockMetas: (0, g.assertArray)(e.block_metas).map(xw)
  };
}
function qw(e) {
  return {
    ...fr(e),
    hash: (0, M.fromHex)((0, g.assertNotEmpty)(e.hash))
  };
}
function Fw(e) {
  const t = e.tx_result ? fr(e.tx_result) : void 0;
  return {
    height: (0, O.apiToSmallInt)(e.height),
    hash: (0, M.fromHex)((0, g.assertNotEmpty)(e.hash)),
    checkTx: fr((0, g.assertObject)(e.check_tx)),
    deliverTx: t,
    txResult: t
  };
}
function Vw(e) {
  return (0, $m.assert)(e in Tw.BlockIdFlag), e;
}
function Lw(e) {
  return {
    blockIdFlag: Vw(e.block_id_flag),
    validatorAddress: e.validator_address ? (0, M.fromHex)(e.validator_address) : void 0,
    timestamp: e.timestamp ? (0, rs.fromRfc3339WithNanoseconds)(e.timestamp) : void 0,
    signature: e.signature ? (0, M.fromBase64)(e.signature) : void 0
  };
}
function Fm(e) {
  return {
    blockId: gi((0, g.assertObject)(e.block_id)),
    height: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.height)),
    round: (0, O.apiToSmallInt)(e.round),
    signatures: (0, g.assertArray)(e.signatures).map(Lw)
  };
}
function Ww(e) {
  return {
    canonical: (0, g.assertBoolean)(e.canonical),
    header: yi(e.signed_header.header),
    commit: Fm(e.signed_header.commit)
  };
}
function Vm(e) {
  return {
    address: (0, M.fromHex)((0, g.assertNotEmpty)(e.address)),
    pubkey: Ec((0, g.assertObject)(e.pub_key)),
    votingPower: (0, O.apiToBigInt)((0, g.assertNotEmpty)(e.power))
  };
}
et.decodeValidatorGenesis = Vm;
function Jw(e) {
  return {
    genesisTime: (0, rs.fromRfc3339WithNanoseconds)((0, g.assertNotEmpty)(e.genesis_time)),
    chainId: (0, g.assertNotEmpty)(e.chain_id),
    consensusParams: Hm(e.consensus_params),
    validators: e.validators ? (0, g.assertArray)(e.validators).map(Vm) : [],
    appHash: (0, M.fromHex)((0, g.assertSet)(e.app_hash)),
    appState: e.app_state
  };
}
function Tc(e) {
  return {
    pubkey: Ec((0, g.assertObject)(e.pub_key)),
    votingPower: (0, O.apiToBigInt)((0, g.assertNotEmpty)(e.voting_power)),
    address: (0, M.fromHex)((0, g.assertNotEmpty)(e.address)),
    proposerPriority: e.proposer_priority ? (0, O.apiToSmallInt)(e.proposer_priority) : void 0
  };
}
et.decodeValidatorInfo = Tc;
function Gw(e) {
  return {
    id: (0, M.fromHex)((0, g.assertNotEmpty)(e.id)),
    listenAddr: (0, g.assertNotEmpty)(e.listen_addr),
    network: (0, g.assertNotEmpty)(e.network),
    version: (0, g.assertString)(e.version),
    channels: (0, g.assertNotEmpty)(e.channels),
    moniker: (0, g.assertNotEmpty)(e.moniker),
    other: (0, g.dictionaryToStringMap)(e.other),
    protocolVersion: {
      app: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.protocol_version.app)),
      block: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.protocol_version.block)),
      p2p: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.protocol_version.p2p))
    }
  };
}
function Kw(e) {
  const t = e.earliest_block_height ? (0, O.apiToSmallInt)(e.earliest_block_height) : void 0, n = e.earliest_block_time ? (0, rs.fromRfc3339WithNanoseconds)(e.earliest_block_time) : void 0;
  return {
    earliestAppHash: e.earliest_app_hash ? (0, M.fromHex)(e.earliest_app_hash) : void 0,
    earliestBlockHash: e.earliest_block_hash ? (0, M.fromHex)(e.earliest_block_hash) : void 0,
    earliestBlockHeight: t || void 0,
    earliestBlockTime: n != null && n.getTime() ? n : void 0,
    latestBlockHash: (0, M.fromHex)((0, g.assertNotEmpty)(e.latest_block_hash)),
    latestAppHash: (0, M.fromHex)((0, g.assertNotEmpty)(e.latest_app_hash)),
    latestBlockTime: (0, rs.fromRfc3339WithNanoseconds)((0, g.assertNotEmpty)(e.latest_block_time)),
    latestBlockHeight: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.latest_block_height)),
    catchingUp: (0, g.assertBoolean)(e.catching_up)
  };
}
function zw(e) {
  return {
    nodeInfo: Gw(e.node_info),
    syncInfo: Kw(e.sync_info),
    validatorInfo: Tc(e.validator_info)
  };
}
function Qw(e) {
  return {
    data: (0, M.fromBase64)((0, g.assertNotEmpty)(e.data)),
    rootHash: (0, M.fromHex)((0, g.assertNotEmpty)(e.root_hash)),
    proof: {
      total: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.proof.total)),
      index: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.proof.index)),
      leafHash: (0, M.fromBase64)((0, g.assertNotEmpty)(e.proof.leaf_hash)),
      aunts: (0, g.assertArray)(e.proof.aunts).map(M.fromBase64)
    }
  };
}
function Lm(e) {
  return {
    tx: (0, M.fromBase64)((0, g.assertNotEmpty)(e.tx)),
    result: fr((0, g.assertObject)(e.tx_result)),
    height: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.height)),
    index: (0, O.apiToSmallInt)((0, g.assertNumber)(e.index)),
    hash: (0, M.fromHex)((0, g.assertNotEmpty)(e.hash)),
    proof: (0, g.may)(Qw, e.proof)
  };
}
function Cw(e) {
  return {
    totalCount: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.total_count)),
    txs: (0, g.assertArray)(e.txs).map(Lm)
  };
}
function Yw(e) {
  const t = (0, M.fromBase64)((0, g.assertNotEmpty)(e.tx));
  return {
    tx: t,
    hash: (0, Ow.hashTx)(t),
    result: fr(e.result),
    height: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.height))
  };
}
function Xw(e) {
  return {
    blockHeight: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.block_height)),
    validators: (0, g.assertArray)(e.validators).map(Tc),
    count: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.count)),
    total: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.total))
  };
}
function Wm(e) {
  var t;
  return {
    header: yi((0, g.assertObject)(e.header)),
    // For the block at height 1, last commit is not set. This is represented in an empty object like this:
    // { height: '0', round: 0, block_id: { hash: '', parts: [Object] }, signatures: [] }
    lastCommit: e.last_commit.block_id.hash ? Fm((0, g.assertObject)(e.last_commit)) : null,
    txs: e.data.txs ? (0, g.assertArray)(e.data.txs).map(M.fromBase64) : [],
    // Lift up .evidence.evidence to just .evidence
    // See https://github.com/tendermint/tendermint/issues/7697
    evidence: ((t = e.evidence) == null ? void 0 : t.evidence) ?? []
  };
}
function Jm(e) {
  return {
    blockId: gi(e.block_id),
    block: Wm(e.block)
  };
}
function Zw(e) {
  return {
    totalCount: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.total_count)),
    blocks: (0, g.assertArray)(e.blocks).map(Jm)
  };
}
function e_(e) {
  return {
    total: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.total)),
    totalBytes: (0, O.apiToSmallInt)((0, g.assertNotEmpty)(e.total_bytes))
  };
}
let t_ = class Gm {
  static decodeAbciInfo(t) {
    return Iw((0, g.assertObject)(t.result.response));
  }
  static decodeAbciQuery(t) {
    return Nw((0, g.assertObject)(t.result.response));
  }
  static decodeBlock(t) {
    return Jm(t.result);
  }
  static decodeBlockResults(t) {
    return Uw(t.result);
  }
  static decodeBlockSearch(t) {
    return Zw(t.result);
  }
  static decodeBlockchain(t) {
    return Hw(t.result);
  }
  static decodeBroadcastTxSync(t) {
    return qw(t.result);
  }
  static decodeBroadcastTxAsync(t) {
    return Gm.decodeBroadcastTxSync(t);
  }
  static decodeBroadcastTxCommit(t) {
    return Fw(t.result);
  }
  static decodeCommit(t) {
    return Ww(t.result);
  }
  static decodeGenesis(t) {
    return Jw((0, g.assertObject)(t.result.genesis));
  }
  static decodeHealth() {
    return null;
  }
  static decodeNumUnconfirmedTxs(t) {
    return e_(t.result);
  }
  static decodeStatus(t) {
    return zw(t.result);
  }
  static decodeNewBlockEvent(t) {
    return Wm(t.data.value.block);
  }
  static decodeNewBlockHeaderEvent(t) {
    return yi(t.data.value.header);
  }
  static decodeTxEvent(t) {
    return Yw(t.data.value.TxResult);
  }
  static decodeTx(t) {
    return Lm(t.result);
  }
  static decodeTxSearch(t) {
    return Cw(t.result);
  }
  static decodeValidators(t) {
    return Xw(t.result);
  }
};
et.Responses = t_;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Responses = e.Params = void 0;
  var t = fi;
  Object.defineProperty(e, "Params", { enumerable: !0, get: function() {
    return t.Params;
  } });
  var n = et;
  Object.defineProperty(e, "Responses", { enumerable: !0, get: function() {
    return n.Responses;
  } });
})(Um);
var n_ = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), r_ = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), s_ = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && n_(t, e, n);
  return r_(t, e), t;
};
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.Comet38Client = void 0;
const o_ = jt, qs = ys, x = Um, K = s_(pi);
class lo {
  /**
   * Creates a new Tendermint client for the given endpoint.
   *
   * Uses HTTP when the URL schema is http or https. Uses WebSockets otherwise.
   */
  static async connect(t) {
    let n;
    return typeof t == "object" ? n = new qs.HttpClient(t) : n = t.startsWith("http://") || t.startsWith("https://") ? new qs.HttpClient(t) : new qs.WebsocketClient(t), await this.detectVersion(n), lo.create(n);
  }
  /**
   * Creates a new Tendermint client given an RPC client.
   */
  static async create(t) {
    return new lo(t);
  }
  static async detectVersion(t) {
    const n = (0, o_.createJsonRpcRequest)(K.Method.Status), s = (await t.execute(n)).result;
    if (!s || !s.node_info)
      throw new Error("Unrecognized format for status response");
    const o = s.node_info.version;
    if (typeof o != "string")
      throw new Error("Unrecognized version format: must be string");
    return o;
  }
  /**
   * Use `Tendermint37Client.connect` or `Tendermint37Client.create` to create an instance.
   */
  constructor(t) {
    this.client = t;
  }
  disconnect() {
    this.client.disconnect();
  }
  async abciInfo() {
    const t = { method: K.Method.AbciInfo };
    return this.doCall(t, x.Params.encodeAbciInfo, x.Responses.decodeAbciInfo);
  }
  async abciQuery(t) {
    const n = { params: t, method: K.Method.AbciQuery };
    return this.doCall(n, x.Params.encodeAbciQuery, x.Responses.decodeAbciQuery);
  }
  async block(t) {
    const n = { method: K.Method.Block, params: { height: t } };
    return this.doCall(n, x.Params.encodeBlock, x.Responses.decodeBlock);
  }
  async blockResults(t) {
    const n = {
      method: K.Method.BlockResults,
      params: { height: t }
    };
    return this.doCall(n, x.Params.encodeBlockResults, x.Responses.decodeBlockResults);
  }
  /**
   * Search for events that are in a block.
   *
   * NOTE
   * This method will error on any node that is running a Tendermint version lower than 0.34.9.
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/block_search
   */
  async blockSearch(t) {
    const n = { params: t, method: K.Method.BlockSearch }, r = await this.doCall(n, x.Params.encodeBlockSearch, x.Responses.decodeBlockSearch);
    return {
      ...r,
      // make sure we sort by height, as tendermint may be sorting by string value of the height
      blocks: [...r.blocks].sort((s, o) => s.block.header.height - o.block.header.height)
    };
  }
  // this should paginate through all blockSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  //
  // NOTE
  // This method will error on any node that is running a Tendermint version lower than 0.34.9.
  async blockSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let s = !1;
    for (; !s; ) {
      const o = await this.blockSearch({ ...t, page: n });
      r.push(...o.blocks), r.length < o.totalCount ? n++ : s = !0;
    }
    return r.sort((o, i) => o.block.header.height - i.block.header.height), {
      totalCount: r.length,
      blocks: r
    };
  }
  /**
   * Queries block headers filtered by minHeight <= height <= maxHeight.
   *
   * @param minHeight The minimum height to be included in the result. Defaults to 0.
   * @param maxHeight The maximum height to be included in the result. Defaults to infinity.
   */
  async blockchain(t, n) {
    const r = {
      method: K.Method.Blockchain,
      params: {
        minHeight: t,
        maxHeight: n
      }
    };
    return this.doCall(r, x.Params.encodeBlockchain, x.Responses.decodeBlockchain);
  }
  /**
   * Broadcast transaction to mempool and wait for response
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
   */
  async broadcastTxSync(t) {
    const n = { params: t, method: K.Method.BroadcastTxSync };
    return this.doCall(n, x.Params.encodeBroadcastTx, x.Responses.decodeBroadcastTxSync);
  }
  /**
   * Broadcast transaction to mempool and do not wait for result
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
   */
  async broadcastTxAsync(t) {
    const n = { params: t, method: K.Method.BroadcastTxAsync };
    return this.doCall(n, x.Params.encodeBroadcastTx, x.Responses.decodeBroadcastTxAsync);
  }
  /**
   * Broadcast transaction to mempool and wait for block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
   */
  async broadcastTxCommit(t) {
    const n = { params: t, method: K.Method.BroadcastTxCommit };
    return this.doCall(n, x.Params.encodeBroadcastTx, x.Responses.decodeBroadcastTxCommit);
  }
  async commit(t) {
    const n = { method: K.Method.Commit, params: { height: t } };
    return this.doCall(n, x.Params.encodeCommit, x.Responses.decodeCommit);
  }
  async genesis() {
    const t = { method: K.Method.Genesis };
    return this.doCall(t, x.Params.encodeGenesis, x.Responses.decodeGenesis);
  }
  async health() {
    const t = { method: K.Method.Health };
    return this.doCall(t, x.Params.encodeHealth, x.Responses.decodeHealth);
  }
  async numUnconfirmedTxs() {
    const t = { method: K.Method.NumUnconfirmedTxs };
    return this.doCall(t, x.Params.encodeNumUnconfirmedTxs, x.Responses.decodeNumUnconfirmedTxs);
  }
  async status() {
    const t = { method: K.Method.Status };
    return this.doCall(t, x.Params.encodeStatus, x.Responses.decodeStatus);
  }
  subscribeNewBlock() {
    const t = {
      method: K.Method.Subscribe,
      query: { type: K.SubscriptionEventType.NewBlock }
    };
    return this.subscribe(t, x.Responses.decodeNewBlockEvent);
  }
  subscribeNewBlockHeader() {
    const t = {
      method: K.Method.Subscribe,
      query: { type: K.SubscriptionEventType.NewBlockHeader }
    };
    return this.subscribe(t, x.Responses.decodeNewBlockHeaderEvent);
  }
  subscribeTx(t) {
    const n = {
      method: K.Method.Subscribe,
      query: {
        type: K.SubscriptionEventType.Tx,
        raw: t
      }
    };
    return this.subscribe(n, x.Responses.decodeTxEvent);
  }
  /**
   * Get a single transaction by hash
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx
   */
  async tx(t) {
    const n = { params: t, method: K.Method.Tx };
    return this.doCall(n, x.Params.encodeTx, x.Responses.decodeTx);
  }
  /**
   * Search for transactions that are in a block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx_search
   */
  async txSearch(t) {
    const n = { params: t, method: K.Method.TxSearch };
    return this.doCall(n, x.Params.encodeTxSearch, x.Responses.decodeTxSearch);
  }
  // this should paginate through all txSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  async txSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let s = !1;
    for (; !s; ) {
      const o = await this.txSearch({ ...t, page: n });
      r.push(...o.txs), r.length < o.totalCount ? n++ : s = !0;
    }
    return {
      totalCount: r.length,
      txs: r
    };
  }
  async validators(t) {
    const n = {
      method: K.Method.Validators,
      params: t
    };
    return this.doCall(n, x.Params.encodeValidators, x.Responses.decodeValidators);
  }
  async validatorsAll(t) {
    const n = [];
    let r = 1, s = !1, o = t;
    for (; !s; ) {
      const i = await this.validators({
        per_page: 50,
        height: o,
        page: r
      });
      n.push(...i.validators), o = o || i.blockHeight, n.length < i.total ? r++ : s = !0;
    }
    return {
      // NOTE: Default value is for type safety but this should always be set
      blockHeight: o ?? 0,
      count: n.length,
      total: n.length,
      validators: n
    };
  }
  // doCall is a helper to handle the encode/call/decode logic
  async doCall(t, n, r) {
    const s = n(t), o = await this.client.execute(s);
    return r(o);
  }
  subscribe(t, n) {
    if (!(0, qs.instanceOfRpcStreamingClient)(this.client))
      throw new Error("This RPC client type cannot subscribe to events");
    const r = x.Params.encodeSubscribe(t);
    return this.client.listen(r).map((o) => n(o));
  }
}
oi.Comet38Client = lo;
var Km = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxCommitSuccess = e.broadcastTxSyncSuccess = void 0;
  function t(r) {
    return r.code === 0;
  }
  e.broadcastTxSyncSuccess = t;
  function n(r) {
    return r.checkTx.code === 0 && !!r.deliverTx && r.deliverTx.code === 0;
  }
  e.broadcastTxCommitSuccess = n, function(r) {
    r[r.PreVote = 1] = "PreVote", r[r.PreCommit = 2] = "PreCommit";
  }(e.VoteType || (e.VoteType = {}));
})(Km);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.SubscriptionEventType = e.Method = e.Comet38Client = void 0;
  var t = oi;
  Object.defineProperty(e, "Comet38Client", { enumerable: !0, get: function() {
    return t.Comet38Client;
  } });
  var n = pi;
  Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return n.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return n.SubscriptionEventType;
  } });
  var r = Km;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return r.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return r.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return r.VoteType;
  } });
})(co);
var zr = {}, hi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildQuery = e.SubscriptionEventType = e.Method = void 0, function(n) {
    n.AbciInfo = "abci_info", n.AbciQuery = "abci_query", n.Block = "block", n.Blockchain = "blockchain", n.BlockResults = "block_results", n.BlockSearch = "block_search", n.BroadcastTxAsync = "broadcast_tx_async", n.BroadcastTxSync = "broadcast_tx_sync", n.BroadcastTxCommit = "broadcast_tx_commit", n.Commit = "commit", n.Genesis = "genesis", n.Health = "health", n.NumUnconfirmedTxs = "num_unconfirmed_txs", n.Status = "status", n.Subscribe = "subscribe", n.Tx = "tx", n.TxSearch = "tx_search", n.Validators = "validators", n.Unsubscribe = "unsubscribe";
  }(e.Method || (e.Method = {})), function(n) {
    n.NewBlock = "NewBlock", n.NewBlockHeader = "NewBlockHeader", n.Tx = "Tx";
  }(e.SubscriptionEventType || (e.SubscriptionEventType = {}));
  function t(n) {
    const s = (n.tags ? n.tags : []).map((i) => `${i.key}='${i.value}'`), o = n.raw ? [n.raw] : [];
    return [...s, ...o].join(" AND ");
  }
  e.buildQuery = t;
})(hi);
var zm = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxCommitSuccess = e.broadcastTxSyncSuccess = void 0;
  function t(r) {
    return r.code === 0;
  }
  e.broadcastTxSyncSuccess = t;
  function n(r) {
    return r.checkTx.code === 0 && !!r.deliverTx && r.deliverTx.code === 0;
  }
  e.broadcastTxCommitSuccess = n, function(r) {
    r[r.PreVote = 1] = "PreVote", r[r.PreCommit = 2] = "PreCommit";
  }(e.VoteType || (e.VoteType = {}));
})(zm);
var bi = {}, Qm = {}, vi = {}, i_ = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), a_ = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), c_ = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && i_(t, e, n);
  return a_(t, e), t;
};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.Params = void 0;
const Oc = j, mt = Fe, fe = jt, je = F, u_ = c_(hi);
function Zi(e) {
  return {
    height: (0, je.may)(mt.smallIntToApi, e.height)
  };
}
function l_(e) {
  return {
    minHeight: (0, je.may)(mt.smallIntToApi, e.minHeight),
    maxHeight: (0, je.may)(mt.smallIntToApi, e.maxHeight)
  };
}
function d_(e) {
  return {
    query: e.query,
    page: (0, je.may)(mt.smallIntToApi, e.page),
    per_page: (0, je.may)(mt.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function m_(e) {
  return {
    path: (0, je.assertNotEmpty)(e.path),
    data: (0, Oc.toHex)(e.data),
    height: (0, je.may)(mt.smallIntToApi, e.height),
    prove: e.prove
  };
}
function f_(e) {
  return {
    tx: (0, Oc.toBase64)((0, je.assertNotEmpty)(e.tx))
  };
}
function p_(e) {
  return {
    hash: (0, Oc.toBase64)((0, je.assertNotEmpty)(e.hash)),
    prove: e.prove
  };
}
function g_(e) {
  return {
    query: e.query,
    prove: e.prove,
    page: (0, je.may)(mt.smallIntToApi, e.page),
    per_page: (0, je.may)(mt.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function y_(e) {
  return {
    height: (0, je.may)(mt.smallIntToApi, e.height),
    page: (0, je.may)(mt.smallIntToApi, e.page),
    per_page: (0, je.may)(mt.smallIntToApi, e.per_page)
  };
}
let h_ = class {
  static encodeAbciInfo(t) {
    return (0, fe.createJsonRpcRequest)(t.method);
  }
  static encodeAbciQuery(t) {
    return (0, fe.createJsonRpcRequest)(t.method, m_(t.params));
  }
  static encodeBlock(t) {
    return (0, fe.createJsonRpcRequest)(t.method, Zi(t.params));
  }
  static encodeBlockchain(t) {
    return (0, fe.createJsonRpcRequest)(t.method, l_(t.params));
  }
  static encodeBlockResults(t) {
    return (0, fe.createJsonRpcRequest)(t.method, Zi(t.params));
  }
  static encodeBlockSearch(t) {
    return (0, fe.createJsonRpcRequest)(t.method, d_(t.params));
  }
  static encodeBroadcastTx(t) {
    return (0, fe.createJsonRpcRequest)(t.method, f_(t.params));
  }
  static encodeCommit(t) {
    return (0, fe.createJsonRpcRequest)(t.method, Zi(t.params));
  }
  static encodeGenesis(t) {
    return (0, fe.createJsonRpcRequest)(t.method);
  }
  static encodeHealth(t) {
    return (0, fe.createJsonRpcRequest)(t.method);
  }
  static encodeNumUnconfirmedTxs(t) {
    return (0, fe.createJsonRpcRequest)(t.method);
  }
  static encodeStatus(t) {
    return (0, fe.createJsonRpcRequest)(t.method);
  }
  static encodeSubscribe(t) {
    const n = { key: "tm.event", value: t.query.type }, r = u_.buildQuery({ tags: [n], raw: t.query.raw });
    return (0, fe.createJsonRpcRequest)("subscribe", { query: r });
  }
  static encodeTx(t) {
    return (0, fe.createJsonRpcRequest)(t.method, p_(t.params));
  }
  // TODO: encode params for query string???
  static encodeTxSearch(t) {
    return (0, fe.createJsonRpcRequest)(t.method, g_(t.params));
  }
  static encodeValidators(t) {
    return (0, fe.createJsonRpcRequest)(t.method, y_(t.params));
  }
};
vi.Params = h_;
var tt = {}, pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.hashBlock = pr.hashTx = void 0;
const Ic = be, Pe = F;
function b_(e) {
  return (0, Ic.sha256)(e);
}
pr.hashTx = b_;
function v_(e) {
  if (e < 1)
    throw new Error("Cannot split an empty tree");
  const t = 2 ** Math.floor(Math.log2(e));
  return t < e ? t : t / 2;
}
function w_(e) {
  const t = new Ic.Sha256(Uint8Array.from([0]));
  return t.update(e), t.digest();
}
function __(e, t) {
  const n = new Ic.Sha256(Uint8Array.from([1]));
  return n.update(e), n.update(t), n.digest();
}
function La(e) {
  switch (e.length) {
    case 0:
      throw new Error("Cannot hash empty tree");
    case 1:
      return w_(e[0]);
    default: {
      const t = v_(e.length), n = La(e.slice(0, t)), r = La(e.slice(t));
      return __(n, r);
    }
  }
}
function S_(e) {
  if (!e.lastBlockId)
    throw new Error("Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.");
  const t = [
    (0, Pe.encodeVersion)(e.version),
    (0, Pe.encodeString)(e.chainId),
    (0, Pe.encodeUvarint)(e.height),
    (0, Pe.encodeTime)(e.time),
    (0, Pe.encodeBlockId)(e.lastBlockId),
    (0, Pe.encodeBytes)(e.lastCommitHash),
    (0, Pe.encodeBytes)(e.dataHash),
    (0, Pe.encodeBytes)(e.validatorsHash),
    (0, Pe.encodeBytes)(e.nextValidatorsHash),
    (0, Pe.encodeBytes)(e.consensusHash),
    (0, Pe.encodeBytes)(e.appHash),
    (0, Pe.encodeBytes)(e.lastResultsHash),
    (0, Pe.encodeBytes)(e.evidenceHash),
    (0, Pe.encodeBytes)(e.proposerAddress)
  ];
  return La(t);
}
pr.hashBlock = S_;
Object.defineProperty(tt, "__esModule", { value: !0 });
tt.Responses = tt.decodeValidatorInfo = tt.decodeValidatorGenesis = tt.decodeValidatorUpdate = tt.decodeEvent = void 0;
const T = j, Cm = te, ss = we, I = Fe, A_ = ws, f = F, P_ = pr;
function k_(e) {
  return {
    data: e.data,
    lastBlockHeight: (0, f.may)(I.apiToSmallInt, e.last_block_height),
    lastBlockAppHash: (0, f.may)(T.fromBase64, e.last_block_app_hash)
  };
}
function E_(e) {
  return {
    ops: e.ops.map((t) => ({
      type: t.type,
      key: (0, T.fromBase64)(t.key),
      data: (0, T.fromBase64)(t.data)
    }))
  };
}
function T_(e) {
  return {
    key: (0, T.fromBase64)((0, f.assertString)(e.key ?? "")),
    value: (0, T.fromBase64)((0, f.assertString)(e.value ?? "")),
    proof: (0, f.may)(E_, e.proofOps),
    height: (0, f.may)(I.apiToSmallInt, e.height),
    code: (0, f.may)(I.apiToSmallInt, e.code),
    codespace: (0, f.assertString)(e.codespace ?? ""),
    index: (0, f.may)(I.apiToSmallInt, e.index),
    log: e.log,
    info: (0, f.assertString)(e.info ?? "")
  };
}
function O_(e) {
  return {
    key: (0, T.fromBase64)((0, f.assertNotEmpty)(e.key)),
    value: (0, T.fromBase64)((0, f.assertString)(e.value ?? ""))
  };
}
function I_(e) {
  return (0, f.assertArray)(e).map(O_);
}
function Ym(e) {
  return {
    type: e.type,
    attributes: e.attributes ? I_(e.attributes) : []
  };
}
tt.decodeEvent = Ym;
function Wa(e) {
  return (0, f.assertArray)(e).map(Ym);
}
function gr(e) {
  return {
    code: (0, I.apiToSmallInt)((0, f.assertNumber)(e.code ?? 0)),
    codespace: e.codespace,
    log: e.log,
    data: (0, f.may)(T.fromBase64, e.data),
    events: e.events ? Wa(e.events) : [],
    gasWanted: (0, I.apiToBigInt)(e.gas_wanted ?? "0"),
    gasUsed: (0, I.apiToBigInt)(e.gas_used ?? "0")
  };
}
function Bc(e) {
  if ("Sum" in e) {
    const [[t, n]] = Object.entries(e.Sum.value);
    return (0, Cm.assert)(t === "ed25519" || t === "secp256k1", `unknown pubkey type: ${t}`), {
      algorithm: t,
      data: (0, T.fromBase64)((0, f.assertNotEmpty)(n))
    };
  } else
    switch (e.type) {
      case "tendermint/PubKeyEd25519":
        return {
          algorithm: "ed25519",
          data: (0, T.fromBase64)((0, f.assertNotEmpty)(e.value))
        };
      case "tendermint/PubKeySecp256k1":
        return {
          algorithm: "secp256k1",
          data: (0, T.fromBase64)((0, f.assertNotEmpty)(e.value))
        };
      default:
        throw new Error(`unknown pubkey type: ${e.type}`);
    }
}
function B_(e) {
  return {
    maxBytes: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.max_bytes)),
    maxGas: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.max_gas))
  };
}
function N_(e) {
  return {
    maxAgeNumBlocks: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.max_age_num_blocks)),
    maxAgeDuration: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.max_age_duration))
  };
}
function Xm(e) {
  return {
    block: B_((0, f.assertObject)(e.block)),
    evidence: N_((0, f.assertObject)(e.evidence))
  };
}
function Zm(e) {
  return {
    pubkey: Bc((0, f.assertObject)(e.pub_key)),
    votingPower: (0, I.apiToBigInt)(e.power ?? "0")
  };
}
tt.decodeValidatorUpdate = Zm;
function M_(e) {
  return {
    height: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    results: (e.txs_results || []).map(gr),
    validatorUpdates: (e.validator_updates || []).map(Zm),
    consensusUpdates: (0, f.may)(Xm, e.consensus_param_updates),
    beginBlockEvents: Wa(e.begin_block_events || []),
    endBlockEvents: Wa(e.end_block_events || [])
  };
}
function wi(e) {
  return {
    hash: (0, T.fromHex)((0, f.assertNotEmpty)(e.hash)),
    parts: {
      total: (0, f.assertNotEmpty)(e.parts.total),
      hash: (0, T.fromHex)((0, f.assertNotEmpty)(e.parts.hash))
    }
  };
}
function R_(e) {
  return {
    block: (0, I.apiToSmallInt)(e.block),
    app: (0, I.apiToSmallInt)(e.app ?? 0)
  };
}
function _i(e) {
  return {
    version: R_(e.version),
    chainId: (0, f.assertNotEmpty)(e.chain_id),
    height: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    time: (0, ss.fromRfc3339WithNanoseconds)((0, f.assertNotEmpty)(e.time)),
    // When there is no last block ID (i.e. this block's height is 1), we get an empty structure like this:
    // { hash: '', parts: { total: 0, hash: '' } }
    lastBlockId: e.last_block_id.hash ? wi(e.last_block_id) : null,
    lastCommitHash: (0, T.fromHex)((0, f.assertSet)(e.last_commit_hash)),
    dataHash: (0, T.fromHex)((0, f.assertSet)(e.data_hash)),
    validatorsHash: (0, T.fromHex)((0, f.assertSet)(e.validators_hash)),
    nextValidatorsHash: (0, T.fromHex)((0, f.assertSet)(e.next_validators_hash)),
    consensusHash: (0, T.fromHex)((0, f.assertSet)(e.consensus_hash)),
    appHash: (0, T.fromHex)((0, f.assertSet)(e.app_hash)),
    lastResultsHash: (0, T.fromHex)((0, f.assertSet)(e.last_results_hash)),
    evidenceHash: (0, T.fromHex)((0, f.assertSet)(e.evidence_hash)),
    proposerAddress: (0, T.fromHex)((0, f.assertNotEmpty)(e.proposer_address))
  };
}
function j_(e) {
  return {
    blockId: wi(e.block_id),
    blockSize: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.block_size)),
    header: _i(e.header),
    numTxs: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.num_txs))
  };
}
function D_(e) {
  return {
    lastHeight: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.last_height)),
    blockMetas: (0, f.assertArray)(e.block_metas).map(j_)
  };
}
function U_(e) {
  return {
    ...gr(e),
    hash: (0, T.fromHex)((0, f.assertNotEmpty)(e.hash))
  };
}
function $_(e) {
  return {
    height: (0, I.apiToSmallInt)(e.height),
    hash: (0, T.fromHex)((0, f.assertNotEmpty)(e.hash)),
    checkTx: gr((0, f.assertObject)(e.check_tx)),
    deliverTx: (0, f.may)(gr, e.deliver_tx)
  };
}
function x_(e) {
  return (0, Cm.assert)(e in A_.BlockIdFlag), e;
}
function H_(e) {
  return {
    blockIdFlag: x_(e.block_id_flag),
    validatorAddress: e.validator_address ? (0, T.fromHex)(e.validator_address) : void 0,
    timestamp: e.timestamp ? (0, ss.fromRfc3339WithNanoseconds)(e.timestamp) : void 0,
    signature: e.signature ? (0, T.fromBase64)(e.signature) : void 0
  };
}
function ef(e) {
  return {
    blockId: wi((0, f.assertObject)(e.block_id)),
    height: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    round: (0, I.apiToSmallInt)(e.round),
    signatures: (0, f.assertArray)(e.signatures).map(H_)
  };
}
function q_(e) {
  return {
    canonical: (0, f.assertBoolean)(e.canonical),
    header: _i(e.signed_header.header),
    commit: ef(e.signed_header.commit)
  };
}
function tf(e) {
  return {
    address: (0, T.fromHex)((0, f.assertNotEmpty)(e.address)),
    pubkey: Bc((0, f.assertObject)(e.pub_key)),
    votingPower: (0, I.apiToBigInt)((0, f.assertNotEmpty)(e.power))
  };
}
tt.decodeValidatorGenesis = tf;
function F_(e) {
  return {
    genesisTime: (0, ss.fromRfc3339WithNanoseconds)((0, f.assertNotEmpty)(e.genesis_time)),
    chainId: (0, f.assertNotEmpty)(e.chain_id),
    consensusParams: Xm(e.consensus_params),
    validators: e.validators ? (0, f.assertArray)(e.validators).map(tf) : [],
    appHash: (0, T.fromHex)((0, f.assertSet)(e.app_hash)),
    appState: e.app_state
  };
}
function Nc(e) {
  return {
    pubkey: Bc((0, f.assertObject)(e.pub_key)),
    votingPower: (0, I.apiToBigInt)((0, f.assertNotEmpty)(e.voting_power)),
    address: (0, T.fromHex)((0, f.assertNotEmpty)(e.address)),
    proposerPriority: e.proposer_priority ? (0, I.apiToSmallInt)(e.proposer_priority) : void 0
  };
}
tt.decodeValidatorInfo = Nc;
function V_(e) {
  return {
    id: (0, T.fromHex)((0, f.assertNotEmpty)(e.id)),
    listenAddr: (0, f.assertNotEmpty)(e.listen_addr),
    network: (0, f.assertNotEmpty)(e.network),
    version: (0, f.assertString)(e.version),
    channels: (0, f.assertNotEmpty)(e.channels),
    moniker: (0, f.assertNotEmpty)(e.moniker),
    other: (0, f.dictionaryToStringMap)(e.other),
    protocolVersion: {
      app: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.protocol_version.app)),
      block: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.protocol_version.block)),
      p2p: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.protocol_version.p2p))
    }
  };
}
function L_(e) {
  const t = e.earliest_block_height ? (0, I.apiToSmallInt)(e.earliest_block_height) : void 0, n = e.earliest_block_time ? (0, ss.fromRfc3339WithNanoseconds)(e.earliest_block_time) : void 0;
  return {
    earliestAppHash: e.earliest_app_hash ? (0, T.fromHex)(e.earliest_app_hash) : void 0,
    earliestBlockHash: e.earliest_block_hash ? (0, T.fromHex)(e.earliest_block_hash) : void 0,
    earliestBlockHeight: t || void 0,
    earliestBlockTime: n != null && n.getTime() ? n : void 0,
    latestBlockHash: (0, T.fromHex)((0, f.assertNotEmpty)(e.latest_block_hash)),
    latestAppHash: (0, T.fromHex)((0, f.assertNotEmpty)(e.latest_app_hash)),
    latestBlockTime: (0, ss.fromRfc3339WithNanoseconds)((0, f.assertNotEmpty)(e.latest_block_time)),
    latestBlockHeight: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.latest_block_height)),
    catchingUp: (0, f.assertBoolean)(e.catching_up)
  };
}
function W_(e) {
  return {
    nodeInfo: V_(e.node_info),
    syncInfo: L_(e.sync_info),
    validatorInfo: Nc(e.validator_info)
  };
}
function J_(e) {
  return {
    data: (0, T.fromBase64)((0, f.assertNotEmpty)(e.data)),
    rootHash: (0, T.fromHex)((0, f.assertNotEmpty)(e.root_hash)),
    proof: {
      total: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.proof.total)),
      index: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.proof.index)),
      leafHash: (0, T.fromBase64)((0, f.assertNotEmpty)(e.proof.leaf_hash)),
      aunts: (0, f.assertArray)(e.proof.aunts).map(T.fromBase64)
    }
  };
}
function nf(e) {
  return {
    tx: (0, T.fromBase64)((0, f.assertNotEmpty)(e.tx)),
    result: gr((0, f.assertObject)(e.tx_result)),
    height: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.height)),
    index: (0, I.apiToSmallInt)((0, f.assertNumber)(e.index)),
    hash: (0, T.fromHex)((0, f.assertNotEmpty)(e.hash)),
    proof: (0, f.may)(J_, e.proof)
  };
}
function G_(e) {
  return {
    totalCount: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.total_count)),
    txs: (0, f.assertArray)(e.txs).map(nf)
  };
}
function K_(e) {
  const t = (0, T.fromBase64)((0, f.assertNotEmpty)(e.tx));
  return {
    tx: t,
    hash: (0, P_.hashTx)(t),
    result: gr(e.result),
    height: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.height))
  };
}
function z_(e) {
  return {
    blockHeight: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.block_height)),
    validators: (0, f.assertArray)(e.validators).map(Nc),
    count: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.count)),
    total: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.total))
  };
}
function rf(e) {
  var t;
  return {
    header: _i((0, f.assertObject)(e.header)),
    // For the block at height 1, last commit is not set. This is represented in an empty object like this:
    // { height: '0', round: 0, block_id: { hash: '', parts: [Object] }, signatures: [] }
    lastCommit: e.last_commit.block_id.hash ? ef((0, f.assertObject)(e.last_commit)) : null,
    txs: e.data.txs ? (0, f.assertArray)(e.data.txs).map(T.fromBase64) : [],
    // Lift up .evidence.evidence to just .evidence
    // See https://github.com/tendermint/tendermint/issues/7697
    evidence: ((t = e.evidence) == null ? void 0 : t.evidence) ?? []
  };
}
function sf(e) {
  return {
    blockId: wi(e.block_id),
    block: rf(e.block)
  };
}
function Q_(e) {
  return {
    totalCount: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.total_count)),
    blocks: (0, f.assertArray)(e.blocks).map(sf)
  };
}
function C_(e) {
  return {
    total: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.total)),
    totalBytes: (0, I.apiToSmallInt)((0, f.assertNotEmpty)(e.total_bytes))
  };
}
let Y_ = class of {
  static decodeAbciInfo(t) {
    return k_((0, f.assertObject)(t.result.response));
  }
  static decodeAbciQuery(t) {
    return T_((0, f.assertObject)(t.result.response));
  }
  static decodeBlock(t) {
    return sf(t.result);
  }
  static decodeBlockResults(t) {
    return M_(t.result);
  }
  static decodeBlockSearch(t) {
    return Q_(t.result);
  }
  static decodeBlockchain(t) {
    return D_(t.result);
  }
  static decodeBroadcastTxSync(t) {
    return U_(t.result);
  }
  static decodeBroadcastTxAsync(t) {
    return of.decodeBroadcastTxSync(t);
  }
  static decodeBroadcastTxCommit(t) {
    return $_(t.result);
  }
  static decodeCommit(t) {
    return q_(t.result);
  }
  static decodeGenesis(t) {
    return F_((0, f.assertObject)(t.result.genesis));
  }
  static decodeHealth() {
    return null;
  }
  static decodeNumUnconfirmedTxs(t) {
    return C_(t.result);
  }
  static decodeStatus(t) {
    return W_(t.result);
  }
  static decodeNewBlockEvent(t) {
    return rf(t.data.value.block);
  }
  static decodeNewBlockHeaderEvent(t) {
    return _i(t.data.value.header);
  }
  static decodeTxEvent(t) {
    return K_(t.data.value.TxResult);
  }
  static decodeTx(t) {
    return nf(t.result);
  }
  static decodeTxSearch(t) {
    return G_(t.result);
  }
  static decodeValidators(t) {
    return z_(t.result);
  }
};
tt.Responses = Y_;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Responses = e.Params = void 0;
  var t = vi;
  Object.defineProperty(e, "Params", { enumerable: !0, get: function() {
    return t.Params;
  } });
  var n = tt;
  Object.defineProperty(e, "Responses", { enumerable: !0, get: function() {
    return n.Responses;
  } });
})(Qm);
var X_ = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), Z_ = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), eS = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && X_(t, e, n);
  return Z_(t, e), t;
};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.Tendermint34Client = void 0;
const tS = jt, Fs = ys, H = Qm, z = eS(hi);
class mo {
  /**
   * Creates a new Tendermint client for the given endpoint.
   *
   * Uses HTTP when the URL schema is http or https. Uses WebSockets otherwise.
   */
  static async connect(t) {
    let n;
    return typeof t == "object" ? n = new Fs.HttpClient(t) : n = t.startsWith("http://") || t.startsWith("https://") ? new Fs.HttpClient(t) : new Fs.WebsocketClient(t), await this.detectVersion(n), mo.create(n);
  }
  /**
   * Creates a new Tendermint client given an RPC client.
   */
  static async create(t) {
    return new mo(t);
  }
  static async detectVersion(t) {
    const n = (0, tS.createJsonRpcRequest)(z.Method.Status), s = (await t.execute(n)).result;
    if (!s || !s.node_info)
      throw new Error("Unrecognized format for status response");
    const o = s.node_info.version;
    if (typeof o != "string")
      throw new Error("Unrecognized version format: must be string");
    return o;
  }
  /**
   * Use `Tendermint34Client.connect` or `Tendermint34Client.create` to create an instance.
   */
  constructor(t) {
    this.client = t;
  }
  disconnect() {
    this.client.disconnect();
  }
  async abciInfo() {
    const t = { method: z.Method.AbciInfo };
    return this.doCall(t, H.Params.encodeAbciInfo, H.Responses.decodeAbciInfo);
  }
  async abciQuery(t) {
    const n = { params: t, method: z.Method.AbciQuery };
    return this.doCall(n, H.Params.encodeAbciQuery, H.Responses.decodeAbciQuery);
  }
  async block(t) {
    const n = { method: z.Method.Block, params: { height: t } };
    return this.doCall(n, H.Params.encodeBlock, H.Responses.decodeBlock);
  }
  async blockResults(t) {
    const n = {
      method: z.Method.BlockResults,
      params: { height: t }
    };
    return this.doCall(n, H.Params.encodeBlockResults, H.Responses.decodeBlockResults);
  }
  /**
   * Search for events that are in a block.
   *
   * NOTE
   * This method will error on any node that is running a Tendermint version lower than 0.34.9.
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/block_search
   */
  async blockSearch(t) {
    const n = { params: t, method: z.Method.BlockSearch }, r = await this.doCall(n, H.Params.encodeBlockSearch, H.Responses.decodeBlockSearch);
    return {
      ...r,
      // make sure we sort by height, as tendermint may be sorting by string value of the height
      blocks: [...r.blocks].sort((s, o) => s.block.header.height - o.block.header.height)
    };
  }
  // this should paginate through all blockSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  //
  // NOTE
  // This method will error on any node that is running a Tendermint version lower than 0.34.9.
  async blockSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let s = !1;
    for (; !s; ) {
      const o = await this.blockSearch({ ...t, page: n });
      r.push(...o.blocks), r.length < o.totalCount ? n++ : s = !0;
    }
    return r.sort((o, i) => o.block.header.height - i.block.header.height), {
      totalCount: r.length,
      blocks: r
    };
  }
  /**
   * Queries block headers filtered by minHeight <= height <= maxHeight.
   *
   * @param minHeight The minimum height to be included in the result. Defaults to 0.
   * @param maxHeight The maximum height to be included in the result. Defaults to infinity.
   */
  async blockchain(t, n) {
    const r = {
      method: z.Method.Blockchain,
      params: {
        minHeight: t,
        maxHeight: n
      }
    };
    return this.doCall(r, H.Params.encodeBlockchain, H.Responses.decodeBlockchain);
  }
  /**
   * Broadcast transaction to mempool and wait for response
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
   */
  async broadcastTxSync(t) {
    const n = { params: t, method: z.Method.BroadcastTxSync };
    return this.doCall(n, H.Params.encodeBroadcastTx, H.Responses.decodeBroadcastTxSync);
  }
  /**
   * Broadcast transaction to mempool and do not wait for result
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
   */
  async broadcastTxAsync(t) {
    const n = { params: t, method: z.Method.BroadcastTxAsync };
    return this.doCall(n, H.Params.encodeBroadcastTx, H.Responses.decodeBroadcastTxAsync);
  }
  /**
   * Broadcast transaction to mempool and wait for block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
   */
  async broadcastTxCommit(t) {
    const n = { params: t, method: z.Method.BroadcastTxCommit };
    return this.doCall(n, H.Params.encodeBroadcastTx, H.Responses.decodeBroadcastTxCommit);
  }
  async commit(t) {
    const n = { method: z.Method.Commit, params: { height: t } };
    return this.doCall(n, H.Params.encodeCommit, H.Responses.decodeCommit);
  }
  async genesis() {
    const t = { method: z.Method.Genesis };
    return this.doCall(t, H.Params.encodeGenesis, H.Responses.decodeGenesis);
  }
  async health() {
    const t = { method: z.Method.Health };
    return this.doCall(t, H.Params.encodeHealth, H.Responses.decodeHealth);
  }
  async numUnconfirmedTxs() {
    const t = { method: z.Method.NumUnconfirmedTxs };
    return this.doCall(t, H.Params.encodeNumUnconfirmedTxs, H.Responses.decodeNumUnconfirmedTxs);
  }
  async status() {
    const t = { method: z.Method.Status };
    return this.doCall(t, H.Params.encodeStatus, H.Responses.decodeStatus);
  }
  subscribeNewBlock() {
    const t = {
      method: z.Method.Subscribe,
      query: { type: z.SubscriptionEventType.NewBlock }
    };
    return this.subscribe(t, H.Responses.decodeNewBlockEvent);
  }
  subscribeNewBlockHeader() {
    const t = {
      method: z.Method.Subscribe,
      query: { type: z.SubscriptionEventType.NewBlockHeader }
    };
    return this.subscribe(t, H.Responses.decodeNewBlockHeaderEvent);
  }
  subscribeTx(t) {
    const n = {
      method: z.Method.Subscribe,
      query: {
        type: z.SubscriptionEventType.Tx,
        raw: t
      }
    };
    return this.subscribe(n, H.Responses.decodeTxEvent);
  }
  /**
   * Get a single transaction by hash
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx
   */
  async tx(t) {
    const n = { params: t, method: z.Method.Tx };
    return this.doCall(n, H.Params.encodeTx, H.Responses.decodeTx);
  }
  /**
   * Search for transactions that are in a block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx_search
   */
  async txSearch(t) {
    const n = { params: t, method: z.Method.TxSearch };
    return this.doCall(n, H.Params.encodeTxSearch, H.Responses.decodeTxSearch);
  }
  // this should paginate through all txSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  async txSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let s = !1;
    for (; !s; ) {
      const o = await this.txSearch({ ...t, page: n });
      r.push(...o.txs), r.length < o.totalCount ? n++ : s = !0;
    }
    return {
      totalCount: r.length,
      txs: r
    };
  }
  async validators(t) {
    const n = {
      method: z.Method.Validators,
      params: t
    };
    return this.doCall(n, H.Params.encodeValidators, H.Responses.decodeValidators);
  }
  async validatorsAll(t) {
    const n = [];
    let r = 1, s = !1, o = t;
    for (; !s; ) {
      const i = await this.validators({
        per_page: 50,
        height: o,
        page: r
      });
      n.push(...i.validators), o = o || i.blockHeight, n.length < i.total ? r++ : s = !0;
    }
    return {
      // NOTE: Default value is for type safety but this should always be set
      blockHeight: o ?? 0,
      count: n.length,
      total: n.length,
      validators: n
    };
  }
  // doCall is a helper to handle the encode/call/decode logic
  async doCall(t, n, r) {
    const s = n(t), o = await this.client.execute(s);
    return r(o);
  }
  subscribe(t, n) {
    if (!(0, Fs.instanceOfRpcStreamingClient)(this.client))
      throw new Error("This RPC client type cannot subscribe to events");
    const r = H.Params.encodeSubscribe(t);
    return this.client.listen(r).map((o) => n(o));
  }
}
bi.Tendermint34Client = mo;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Tendermint34Client = e.VoteType = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.SubscriptionEventType = e.Method = void 0;
  var t = hi;
  Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return t.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return t.SubscriptionEventType;
  } });
  var n = zm;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return n.VoteType;
  } });
  var r = bi;
  Object.defineProperty(e, "Tendermint34Client", { enumerable: !0, get: function() {
    return r.Tendermint34Client;
  } });
})(zr);
var fo = {}, Si = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.buildQuery = e.SubscriptionEventType = e.Method = void 0, function(n) {
    n.AbciInfo = "abci_info", n.AbciQuery = "abci_query", n.Block = "block", n.Blockchain = "blockchain", n.BlockResults = "block_results", n.BlockSearch = "block_search", n.BroadcastTxAsync = "broadcast_tx_async", n.BroadcastTxSync = "broadcast_tx_sync", n.BroadcastTxCommit = "broadcast_tx_commit", n.Commit = "commit", n.Genesis = "genesis", n.Health = "health", n.NumUnconfirmedTxs = "num_unconfirmed_txs", n.Status = "status", n.Subscribe = "subscribe", n.Tx = "tx", n.TxSearch = "tx_search", n.Validators = "validators", n.Unsubscribe = "unsubscribe";
  }(e.Method || (e.Method = {})), function(n) {
    n.NewBlock = "NewBlock", n.NewBlockHeader = "NewBlockHeader", n.Tx = "Tx";
  }(e.SubscriptionEventType || (e.SubscriptionEventType = {}));
  function t(n) {
    const s = (n.tags ? n.tags : []).map((i) => `${i.key}='${i.value}'`), o = n.raw ? [n.raw] : [];
    return [...s, ...o].join(" AND ");
  }
  e.buildQuery = t;
})(Si);
var af = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.VoteType = e.broadcastTxCommitSuccess = e.broadcastTxSyncSuccess = void 0;
  function t(r) {
    return r.code === 0;
  }
  e.broadcastTxSyncSuccess = t;
  function n(r) {
    return r.checkTx.code === 0 && !!r.deliverTx && r.deliverTx.code === 0;
  }
  e.broadcastTxCommitSuccess = n, function(r) {
    r[r.PreVote = 1] = "PreVote", r[r.PreCommit = 2] = "PreCommit";
  }(e.VoteType || (e.VoteType = {}));
})(af);
var Ai = {}, cf = {}, Pi = {}, L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.encodeBlockId = L.encodeVersion = L.encodeBytes = L.encodeTime = L.encodeUvarint = L.encodeString = L.dictionaryToStringMap = L.may = L.assertNotEmpty = L.assertObject = L.assertArray = L.assertNumber = L.assertString = L.assertBoolean = L.assertSet = void 0;
const nS = j;
function kn(e) {
  if (e === void 0)
    throw new Error("Value must not be undefined");
  if (e === null)
    throw new Error("Value must not be null");
  return e;
}
L.assertSet = kn;
function rS(e) {
  if (kn(e), typeof e != "boolean")
    throw new Error("Value must be a boolean");
  return e;
}
L.assertBoolean = rS;
function sS(e) {
  if (kn(e), typeof e != "string")
    throw new Error("Value must be a string");
  return e;
}
L.assertString = sS;
function oS(e) {
  if (kn(e), typeof e != "number")
    throw new Error("Value must be a number");
  return e;
}
L.assertNumber = oS;
function iS(e) {
  if (kn(e), !Array.isArray(e))
    throw new Error("Value must be a an array");
  return e;
}
L.assertArray = iS;
function aS(e) {
  if (kn(e), typeof e != "object")
    throw new Error("Value must be an object");
  if (Object.prototype.toString.call(e) !== "[object Object]")
    throw new Error("Value must be a simple object");
  return e;
}
L.assertObject = aS;
function cS(e) {
  if (kn(e), typeof e == "number" && e === 0)
    throw new Error("must provide a non-zero value");
  if (e.length === 0)
    throw new Error("must provide a non-empty value");
  return e;
}
L.assertNotEmpty = cS;
function uS(e, t) {
  return t == null ? void 0 : e(t);
}
L.may = uS;
function lS(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of Object.keys(e)) {
    const r = e[n];
    if (typeof r != "string")
      throw new Error("Found dictionary value of type other than string");
    t.set(n, r);
  }
  return t;
}
L.dictionaryToStringMap = lS;
function dS(e) {
  const t = (0, nS.toUtf8)(e);
  return Uint8Array.from([t.length, ...t]);
}
L.encodeString = dS;
function yr(e) {
  return e >= 128 ? (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255 | 128, ...yr(e >> 7)])
  ) : (
    // eslint-disable-next-line no-bitwise
    Uint8Array.from([e & 255])
  );
}
L.encodeUvarint = yr;
function mS(e) {
  const t = e.getTime(), n = Math.floor(t / 1e3), r = n ? [8, ...yr(n)] : new Uint8Array(), s = (e.nanoseconds || 0) + t % 1e3 * 1e6, o = s ? [16, ...yr(s)] : new Uint8Array();
  return Uint8Array.from([...r, ...o]);
}
L.encodeTime = mS;
function fS(e) {
  if (e.length >= 128)
    throw new Error("Not implemented for byte arrays of length 128 or more");
  return e.length ? Uint8Array.from([e.length, ...e]) : new Uint8Array();
}
L.encodeBytes = fS;
function pS(e) {
  const t = e.block ? Uint8Array.from([8, ...yr(e.block)]) : new Uint8Array(), n = e.app ? Uint8Array.from([16, ...yr(e.app)]) : new Uint8Array();
  return Uint8Array.from([...t, ...n]);
}
L.encodeVersion = pS;
function gS(e) {
  return Uint8Array.from([
    10,
    e.hash.length,
    ...e.hash,
    18,
    e.parts.hash.length + 4,
    8,
    e.parts.total,
    18,
    e.parts.hash.length,
    ...e.parts.hash
  ]);
}
L.encodeBlockId = gS;
var yS = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), hS = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), bS = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && yS(t, e, n);
  return hS(t, e), t;
};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.Params = void 0;
const Mc = j, ft = Fe, pe = jt, De = L, vS = bS(Si);
function ea(e) {
  return {
    height: (0, De.may)(ft.smallIntToApi, e.height)
  };
}
function wS(e) {
  return {
    minHeight: (0, De.may)(ft.smallIntToApi, e.minHeight),
    maxHeight: (0, De.may)(ft.smallIntToApi, e.maxHeight)
  };
}
function _S(e) {
  return {
    query: e.query,
    page: (0, De.may)(ft.smallIntToApi, e.page),
    per_page: (0, De.may)(ft.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function SS(e) {
  return {
    path: (0, De.assertNotEmpty)(e.path),
    data: (0, Mc.toHex)(e.data),
    height: (0, De.may)(ft.smallIntToApi, e.height),
    prove: e.prove
  };
}
function AS(e) {
  return {
    tx: (0, Mc.toBase64)((0, De.assertNotEmpty)(e.tx))
  };
}
function PS(e) {
  return {
    hash: (0, Mc.toBase64)((0, De.assertNotEmpty)(e.hash)),
    prove: e.prove
  };
}
function kS(e) {
  return {
    query: e.query,
    prove: e.prove,
    page: (0, De.may)(ft.smallIntToApi, e.page),
    per_page: (0, De.may)(ft.smallIntToApi, e.per_page),
    order_by: e.order_by
  };
}
function ES(e) {
  return {
    height: (0, De.may)(ft.smallIntToApi, e.height),
    page: (0, De.may)(ft.smallIntToApi, e.page),
    per_page: (0, De.may)(ft.smallIntToApi, e.per_page)
  };
}
class TS {
  static encodeAbciInfo(t) {
    return (0, pe.createJsonRpcRequest)(t.method);
  }
  static encodeAbciQuery(t) {
    return (0, pe.createJsonRpcRequest)(t.method, SS(t.params));
  }
  static encodeBlock(t) {
    return (0, pe.createJsonRpcRequest)(t.method, ea(t.params));
  }
  static encodeBlockchain(t) {
    return (0, pe.createJsonRpcRequest)(t.method, wS(t.params));
  }
  static encodeBlockResults(t) {
    return (0, pe.createJsonRpcRequest)(t.method, ea(t.params));
  }
  static encodeBlockSearch(t) {
    return (0, pe.createJsonRpcRequest)(t.method, _S(t.params));
  }
  static encodeBroadcastTx(t) {
    return (0, pe.createJsonRpcRequest)(t.method, AS(t.params));
  }
  static encodeCommit(t) {
    return (0, pe.createJsonRpcRequest)(t.method, ea(t.params));
  }
  static encodeGenesis(t) {
    return (0, pe.createJsonRpcRequest)(t.method);
  }
  static encodeHealth(t) {
    return (0, pe.createJsonRpcRequest)(t.method);
  }
  static encodeNumUnconfirmedTxs(t) {
    return (0, pe.createJsonRpcRequest)(t.method);
  }
  static encodeStatus(t) {
    return (0, pe.createJsonRpcRequest)(t.method);
  }
  static encodeSubscribe(t) {
    const n = { key: "tm.event", value: t.query.type }, r = vS.buildQuery({ tags: [n], raw: t.query.raw });
    return (0, pe.createJsonRpcRequest)("subscribe", { query: r });
  }
  static encodeTx(t) {
    return (0, pe.createJsonRpcRequest)(t.method, PS(t.params));
  }
  // TODO: encode params for query string???
  static encodeTxSearch(t) {
    return (0, pe.createJsonRpcRequest)(t.method, kS(t.params));
  }
  static encodeValidators(t) {
    return (0, pe.createJsonRpcRequest)(t.method, ES(t.params));
  }
}
Pi.Params = TS;
var nt = {}, hr = {};
Object.defineProperty(hr, "__esModule", { value: !0 });
hr.hashBlock = hr.hashTx = void 0;
const Rc = be, ke = L;
function OS(e) {
  return (0, Rc.sha256)(e);
}
hr.hashTx = OS;
function IS(e) {
  if (e < 1)
    throw new Error("Cannot split an empty tree");
  const t = 2 ** Math.floor(Math.log2(e));
  return t < e ? t : t / 2;
}
function BS(e) {
  const t = new Rc.Sha256(Uint8Array.from([0]));
  return t.update(e), t.digest();
}
function NS(e, t) {
  const n = new Rc.Sha256(Uint8Array.from([1]));
  return n.update(e), n.update(t), n.digest();
}
function Ja(e) {
  switch (e.length) {
    case 0:
      throw new Error("Cannot hash empty tree");
    case 1:
      return BS(e[0]);
    default: {
      const t = IS(e.length), n = Ja(e.slice(0, t)), r = Ja(e.slice(t));
      return NS(n, r);
    }
  }
}
function MS(e) {
  if (!e.lastBlockId)
    throw new Error("Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.");
  const t = [
    (0, ke.encodeVersion)(e.version),
    (0, ke.encodeString)(e.chainId),
    (0, ke.encodeUvarint)(e.height),
    (0, ke.encodeTime)(e.time),
    (0, ke.encodeBlockId)(e.lastBlockId),
    (0, ke.encodeBytes)(e.lastCommitHash),
    (0, ke.encodeBytes)(e.dataHash),
    (0, ke.encodeBytes)(e.validatorsHash),
    (0, ke.encodeBytes)(e.nextValidatorsHash),
    (0, ke.encodeBytes)(e.consensusHash),
    (0, ke.encodeBytes)(e.appHash),
    (0, ke.encodeBytes)(e.lastResultsHash),
    (0, ke.encodeBytes)(e.evidenceHash),
    (0, ke.encodeBytes)(e.proposerAddress)
  ];
  return Ja(t);
}
hr.hashBlock = MS;
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.Responses = nt.decodeValidatorInfo = nt.decodeValidatorGenesis = nt.decodeValidatorUpdate = nt.decodeEvent = void 0;
const R = j, uf = te, os = we, B = Fe, RS = ws, p = L, jS = hr;
function DS(e) {
  return {
    data: e.data,
    lastBlockHeight: (0, p.may)(B.apiToSmallInt, e.last_block_height),
    lastBlockAppHash: (0, p.may)(R.fromBase64, e.last_block_app_hash)
  };
}
function US(e) {
  return {
    ops: e.ops.map((t) => ({
      type: t.type,
      key: (0, R.fromBase64)(t.key),
      data: (0, R.fromBase64)(t.data)
    }))
  };
}
function $S(e) {
  return {
    key: (0, R.fromBase64)((0, p.assertString)(e.key ?? "")),
    value: (0, R.fromBase64)((0, p.assertString)(e.value ?? "")),
    proof: (0, p.may)(US, e.proofOps),
    height: (0, p.may)(B.apiToSmallInt, e.height),
    code: (0, p.may)(B.apiToSmallInt, e.code),
    codespace: (0, p.assertString)(e.codespace ?? ""),
    index: (0, p.may)(B.apiToSmallInt, e.index),
    log: e.log,
    info: (0, p.assertString)(e.info ?? "")
  };
}
function xS(e) {
  return {
    key: (0, p.assertNotEmpty)(e.key),
    value: e.value ?? ""
  };
}
function HS(e) {
  return (0, p.assertArray)(e).map(xS);
}
function lf(e) {
  return {
    type: e.type,
    attributes: e.attributes ? HS(e.attributes) : []
  };
}
nt.decodeEvent = lf;
function Ga(e) {
  return (0, p.assertArray)(e).map(lf);
}
function br(e) {
  return {
    code: (0, B.apiToSmallInt)((0, p.assertNumber)(e.code ?? 0)),
    codespace: e.codespace,
    log: e.log,
    data: (0, p.may)(R.fromBase64, e.data),
    events: e.events ? Ga(e.events) : [],
    gasWanted: (0, B.apiToBigInt)(e.gas_wanted ?? "0"),
    gasUsed: (0, B.apiToBigInt)(e.gas_used ?? "0")
  };
}
function jc(e) {
  if ("Sum" in e) {
    const [[t, n]] = Object.entries(e.Sum.value);
    return (0, uf.assert)(t === "ed25519" || t === "secp256k1", `unknown pubkey type: ${t}`), {
      algorithm: t,
      data: (0, R.fromBase64)((0, p.assertNotEmpty)(n))
    };
  } else
    switch (e.type) {
      case "tendermint/PubKeyEd25519":
        return {
          algorithm: "ed25519",
          data: (0, R.fromBase64)((0, p.assertNotEmpty)(e.value))
        };
      case "tendermint/PubKeySecp256k1":
        return {
          algorithm: "secp256k1",
          data: (0, R.fromBase64)((0, p.assertNotEmpty)(e.value))
        };
      default:
        throw new Error(`unknown pubkey type: ${e.type}`);
    }
}
function qS(e) {
  return {
    maxBytes: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.max_bytes)),
    maxGas: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.max_gas))
  };
}
function FS(e) {
  return {
    maxAgeNumBlocks: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.max_age_num_blocks)),
    maxAgeDuration: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.max_age_duration))
  };
}
function df(e) {
  return {
    block: qS((0, p.assertObject)(e.block)),
    evidence: FS((0, p.assertObject)(e.evidence))
  };
}
function mf(e) {
  return {
    pubkey: jc((0, p.assertObject)(e.pub_key)),
    votingPower: (0, B.apiToBigInt)(e.power ?? "0")
  };
}
nt.decodeValidatorUpdate = mf;
function VS(e) {
  return {
    height: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.height)),
    results: (e.txs_results || []).map(br),
    validatorUpdates: (e.validator_updates || []).map(mf),
    consensusUpdates: (0, p.may)(df, e.consensus_param_updates),
    beginBlockEvents: Ga(e.begin_block_events || []),
    endBlockEvents: Ga(e.end_block_events || [])
  };
}
function ki(e) {
  return {
    hash: (0, R.fromHex)((0, p.assertNotEmpty)(e.hash)),
    parts: {
      total: (0, p.assertNotEmpty)(e.parts.total),
      hash: (0, R.fromHex)((0, p.assertNotEmpty)(e.parts.hash))
    }
  };
}
function LS(e) {
  return {
    block: (0, B.apiToSmallInt)(e.block),
    app: (0, B.apiToSmallInt)(e.app ?? 0)
  };
}
function Ei(e) {
  return {
    version: LS(e.version),
    chainId: (0, p.assertNotEmpty)(e.chain_id),
    height: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.height)),
    time: (0, os.fromRfc3339WithNanoseconds)((0, p.assertNotEmpty)(e.time)),
    // When there is no last block ID (i.e. this block's height is 1), we get an empty structure like this:
    // { hash: '', parts: { total: 0, hash: '' } }
    lastBlockId: e.last_block_id.hash ? ki(e.last_block_id) : null,
    lastCommitHash: (0, R.fromHex)((0, p.assertSet)(e.last_commit_hash)),
    dataHash: (0, R.fromHex)((0, p.assertSet)(e.data_hash)),
    validatorsHash: (0, R.fromHex)((0, p.assertSet)(e.validators_hash)),
    nextValidatorsHash: (0, R.fromHex)((0, p.assertSet)(e.next_validators_hash)),
    consensusHash: (0, R.fromHex)((0, p.assertSet)(e.consensus_hash)),
    appHash: (0, R.fromHex)((0, p.assertSet)(e.app_hash)),
    lastResultsHash: (0, R.fromHex)((0, p.assertSet)(e.last_results_hash)),
    evidenceHash: (0, R.fromHex)((0, p.assertSet)(e.evidence_hash)),
    proposerAddress: (0, R.fromHex)((0, p.assertNotEmpty)(e.proposer_address))
  };
}
function WS(e) {
  return {
    blockId: ki(e.block_id),
    blockSize: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.block_size)),
    header: Ei(e.header),
    numTxs: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.num_txs))
  };
}
function JS(e) {
  return {
    lastHeight: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.last_height)),
    blockMetas: (0, p.assertArray)(e.block_metas).map(WS)
  };
}
function GS(e) {
  return {
    ...br(e),
    hash: (0, R.fromHex)((0, p.assertNotEmpty)(e.hash))
  };
}
function KS(e) {
  return {
    height: (0, B.apiToSmallInt)(e.height),
    hash: (0, R.fromHex)((0, p.assertNotEmpty)(e.hash)),
    checkTx: br((0, p.assertObject)(e.check_tx)),
    deliverTx: (0, p.may)(br, e.deliver_tx)
  };
}
function zS(e) {
  return (0, uf.assert)(e in RS.BlockIdFlag), e;
}
function QS(e) {
  return {
    blockIdFlag: zS(e.block_id_flag),
    validatorAddress: e.validator_address ? (0, R.fromHex)(e.validator_address) : void 0,
    timestamp: e.timestamp ? (0, os.fromRfc3339WithNanoseconds)(e.timestamp) : void 0,
    signature: e.signature ? (0, R.fromBase64)(e.signature) : void 0
  };
}
function ff(e) {
  return {
    blockId: ki((0, p.assertObject)(e.block_id)),
    height: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.height)),
    round: (0, B.apiToSmallInt)(e.round),
    signatures: (0, p.assertArray)(e.signatures).map(QS)
  };
}
function CS(e) {
  return {
    canonical: (0, p.assertBoolean)(e.canonical),
    header: Ei(e.signed_header.header),
    commit: ff(e.signed_header.commit)
  };
}
function pf(e) {
  return {
    address: (0, R.fromHex)((0, p.assertNotEmpty)(e.address)),
    pubkey: jc((0, p.assertObject)(e.pub_key)),
    votingPower: (0, B.apiToBigInt)((0, p.assertNotEmpty)(e.power))
  };
}
nt.decodeValidatorGenesis = pf;
function YS(e) {
  return {
    genesisTime: (0, os.fromRfc3339WithNanoseconds)((0, p.assertNotEmpty)(e.genesis_time)),
    chainId: (0, p.assertNotEmpty)(e.chain_id),
    consensusParams: df(e.consensus_params),
    validators: e.validators ? (0, p.assertArray)(e.validators).map(pf) : [],
    appHash: (0, R.fromHex)((0, p.assertSet)(e.app_hash)),
    appState: e.app_state
  };
}
function Dc(e) {
  return {
    pubkey: jc((0, p.assertObject)(e.pub_key)),
    votingPower: (0, B.apiToBigInt)((0, p.assertNotEmpty)(e.voting_power)),
    address: (0, R.fromHex)((0, p.assertNotEmpty)(e.address)),
    proposerPriority: e.proposer_priority ? (0, B.apiToSmallInt)(e.proposer_priority) : void 0
  };
}
nt.decodeValidatorInfo = Dc;
function XS(e) {
  return {
    id: (0, R.fromHex)((0, p.assertNotEmpty)(e.id)),
    listenAddr: (0, p.assertNotEmpty)(e.listen_addr),
    network: (0, p.assertNotEmpty)(e.network),
    version: (0, p.assertString)(e.version),
    channels: (0, p.assertNotEmpty)(e.channels),
    moniker: (0, p.assertNotEmpty)(e.moniker),
    other: (0, p.dictionaryToStringMap)(e.other),
    protocolVersion: {
      app: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.protocol_version.app)),
      block: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.protocol_version.block)),
      p2p: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.protocol_version.p2p))
    }
  };
}
function ZS(e) {
  const t = e.earliest_block_height ? (0, B.apiToSmallInt)(e.earliest_block_height) : void 0, n = e.earliest_block_time ? (0, os.fromRfc3339WithNanoseconds)(e.earliest_block_time) : void 0;
  return {
    earliestAppHash: e.earliest_app_hash ? (0, R.fromHex)(e.earliest_app_hash) : void 0,
    earliestBlockHash: e.earliest_block_hash ? (0, R.fromHex)(e.earliest_block_hash) : void 0,
    earliestBlockHeight: t || void 0,
    earliestBlockTime: n != null && n.getTime() ? n : void 0,
    latestBlockHash: (0, R.fromHex)((0, p.assertNotEmpty)(e.latest_block_hash)),
    latestAppHash: (0, R.fromHex)((0, p.assertNotEmpty)(e.latest_app_hash)),
    latestBlockTime: (0, os.fromRfc3339WithNanoseconds)((0, p.assertNotEmpty)(e.latest_block_time)),
    latestBlockHeight: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.latest_block_height)),
    catchingUp: (0, p.assertBoolean)(e.catching_up)
  };
}
function eA(e) {
  return {
    nodeInfo: XS(e.node_info),
    syncInfo: ZS(e.sync_info),
    validatorInfo: Dc(e.validator_info)
  };
}
function tA(e) {
  return {
    data: (0, R.fromBase64)((0, p.assertNotEmpty)(e.data)),
    rootHash: (0, R.fromHex)((0, p.assertNotEmpty)(e.root_hash)),
    proof: {
      total: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.proof.total)),
      index: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.proof.index)),
      leafHash: (0, R.fromBase64)((0, p.assertNotEmpty)(e.proof.leaf_hash)),
      aunts: (0, p.assertArray)(e.proof.aunts).map(R.fromBase64)
    }
  };
}
function gf(e) {
  return {
    tx: (0, R.fromBase64)((0, p.assertNotEmpty)(e.tx)),
    result: br((0, p.assertObject)(e.tx_result)),
    height: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.height)),
    index: (0, B.apiToSmallInt)((0, p.assertNumber)(e.index)),
    hash: (0, R.fromHex)((0, p.assertNotEmpty)(e.hash)),
    proof: (0, p.may)(tA, e.proof)
  };
}
function nA(e) {
  return {
    totalCount: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.total_count)),
    txs: (0, p.assertArray)(e.txs).map(gf)
  };
}
function rA(e) {
  const t = (0, R.fromBase64)((0, p.assertNotEmpty)(e.tx));
  return {
    tx: t,
    hash: (0, jS.hashTx)(t),
    result: br(e.result),
    height: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.height))
  };
}
function sA(e) {
  return {
    blockHeight: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.block_height)),
    validators: (0, p.assertArray)(e.validators).map(Dc),
    count: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.count)),
    total: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.total))
  };
}
function yf(e) {
  var t;
  return {
    header: Ei((0, p.assertObject)(e.header)),
    // For the block at height 1, last commit is not set. This is represented in an empty object like this:
    // { height: '0', round: 0, block_id: { hash: '', parts: [Object] }, signatures: [] }
    lastCommit: e.last_commit.block_id.hash ? ff((0, p.assertObject)(e.last_commit)) : null,
    txs: e.data.txs ? (0, p.assertArray)(e.data.txs).map(R.fromBase64) : [],
    // Lift up .evidence.evidence to just .evidence
    // See https://github.com/tendermint/tendermint/issues/7697
    evidence: ((t = e.evidence) == null ? void 0 : t.evidence) ?? []
  };
}
function hf(e) {
  return {
    blockId: ki(e.block_id),
    block: yf(e.block)
  };
}
function oA(e) {
  return {
    totalCount: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.total_count)),
    blocks: (0, p.assertArray)(e.blocks).map(hf)
  };
}
function iA(e) {
  return {
    total: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.total)),
    totalBytes: (0, B.apiToSmallInt)((0, p.assertNotEmpty)(e.total_bytes))
  };
}
class Uc {
  static decodeAbciInfo(t) {
    return DS((0, p.assertObject)(t.result.response));
  }
  static decodeAbciQuery(t) {
    return $S((0, p.assertObject)(t.result.response));
  }
  static decodeBlock(t) {
    return hf(t.result);
  }
  static decodeBlockResults(t) {
    return VS(t.result);
  }
  static decodeBlockSearch(t) {
    return oA(t.result);
  }
  static decodeBlockchain(t) {
    return JS(t.result);
  }
  static decodeBroadcastTxSync(t) {
    return GS(t.result);
  }
  static decodeBroadcastTxAsync(t) {
    return Uc.decodeBroadcastTxSync(t);
  }
  static decodeBroadcastTxCommit(t) {
    return KS(t.result);
  }
  static decodeCommit(t) {
    return CS(t.result);
  }
  static decodeGenesis(t) {
    return YS((0, p.assertObject)(t.result.genesis));
  }
  static decodeHealth() {
    return null;
  }
  static decodeNumUnconfirmedTxs(t) {
    return iA(t.result);
  }
  static decodeStatus(t) {
    return eA(t.result);
  }
  static decodeNewBlockEvent(t) {
    return yf(t.data.value.block);
  }
  static decodeNewBlockHeaderEvent(t) {
    return Ei(t.data.value.header);
  }
  static decodeTxEvent(t) {
    return rA(t.data.value.TxResult);
  }
  static decodeTx(t) {
    return gf(t.result);
  }
  static decodeTxSearch(t) {
    return nA(t.result);
  }
  static decodeValidators(t) {
    return sA(t.result);
  }
}
nt.Responses = Uc;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Responses = e.Params = void 0;
  var t = Pi;
  Object.defineProperty(e, "Params", { enumerable: !0, get: function() {
    return t.Params;
  } });
  var n = nt;
  Object.defineProperty(e, "Responses", { enumerable: !0, get: function() {
    return n.Responses;
  } });
})(cf);
var aA = h && h.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var s = Object.getOwnPropertyDescriptor(t, n);
  (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, s);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), cA = h && h.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), uA = h && h.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && aA(t, e, n);
  return cA(t, e), t;
};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.Tendermint37Client = void 0;
const lA = jt, Vs = ys, q = cf, Q = uA(Si);
class po {
  /**
   * Creates a new Tendermint client for the given endpoint.
   *
   * Uses HTTP when the URL schema is http or https. Uses WebSockets otherwise.
   */
  static async connect(t) {
    let n;
    return typeof t == "object" ? n = new Vs.HttpClient(t) : n = t.startsWith("http://") || t.startsWith("https://") ? new Vs.HttpClient(t) : new Vs.WebsocketClient(t), await this.detectVersion(n), po.create(n);
  }
  /**
   * Creates a new Tendermint client given an RPC client.
   */
  static async create(t) {
    return new po(t);
  }
  static async detectVersion(t) {
    const n = (0, lA.createJsonRpcRequest)(Q.Method.Status), s = (await t.execute(n)).result;
    if (!s || !s.node_info)
      throw new Error("Unrecognized format for status response");
    const o = s.node_info.version;
    if (typeof o != "string")
      throw new Error("Unrecognized version format: must be string");
    return o;
  }
  /**
   * Use `Tendermint37Client.connect` or `Tendermint37Client.create` to create an instance.
   */
  constructor(t) {
    this.client = t;
  }
  disconnect() {
    this.client.disconnect();
  }
  async abciInfo() {
    const t = { method: Q.Method.AbciInfo };
    return this.doCall(t, q.Params.encodeAbciInfo, q.Responses.decodeAbciInfo);
  }
  async abciQuery(t) {
    const n = { params: t, method: Q.Method.AbciQuery };
    return this.doCall(n, q.Params.encodeAbciQuery, q.Responses.decodeAbciQuery);
  }
  async block(t) {
    const n = { method: Q.Method.Block, params: { height: t } };
    return this.doCall(n, q.Params.encodeBlock, q.Responses.decodeBlock);
  }
  async blockResults(t) {
    const n = {
      method: Q.Method.BlockResults,
      params: { height: t }
    };
    return this.doCall(n, q.Params.encodeBlockResults, q.Responses.decodeBlockResults);
  }
  /**
   * Search for events that are in a block.
   *
   * NOTE
   * This method will error on any node that is running a Tendermint version lower than 0.34.9.
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/block_search
   */
  async blockSearch(t) {
    const n = { params: t, method: Q.Method.BlockSearch }, r = await this.doCall(n, q.Params.encodeBlockSearch, q.Responses.decodeBlockSearch);
    return {
      ...r,
      // make sure we sort by height, as tendermint may be sorting by string value of the height
      blocks: [...r.blocks].sort((s, o) => s.block.header.height - o.block.header.height)
    };
  }
  // this should paginate through all blockSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  //
  // NOTE
  // This method will error on any node that is running a Tendermint version lower than 0.34.9.
  async blockSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let s = !1;
    for (; !s; ) {
      const o = await this.blockSearch({ ...t, page: n });
      r.push(...o.blocks), r.length < o.totalCount ? n++ : s = !0;
    }
    return r.sort((o, i) => o.block.header.height - i.block.header.height), {
      totalCount: r.length,
      blocks: r
    };
  }
  /**
   * Queries block headers filtered by minHeight <= height <= maxHeight.
   *
   * @param minHeight The minimum height to be included in the result. Defaults to 0.
   * @param maxHeight The maximum height to be included in the result. Defaults to infinity.
   */
  async blockchain(t, n) {
    const r = {
      method: Q.Method.Blockchain,
      params: {
        minHeight: t,
        maxHeight: n
      }
    };
    return this.doCall(r, q.Params.encodeBlockchain, q.Responses.decodeBlockchain);
  }
  /**
   * Broadcast transaction to mempool and wait for response
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
   */
  async broadcastTxSync(t) {
    const n = { params: t, method: Q.Method.BroadcastTxSync };
    return this.doCall(n, q.Params.encodeBroadcastTx, q.Responses.decodeBroadcastTxSync);
  }
  /**
   * Broadcast transaction to mempool and do not wait for result
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
   */
  async broadcastTxAsync(t) {
    const n = { params: t, method: Q.Method.BroadcastTxAsync };
    return this.doCall(n, q.Params.encodeBroadcastTx, q.Responses.decodeBroadcastTxAsync);
  }
  /**
   * Broadcast transaction to mempool and wait for block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
   */
  async broadcastTxCommit(t) {
    const n = { params: t, method: Q.Method.BroadcastTxCommit };
    return this.doCall(n, q.Params.encodeBroadcastTx, q.Responses.decodeBroadcastTxCommit);
  }
  async commit(t) {
    const n = { method: Q.Method.Commit, params: { height: t } };
    return this.doCall(n, q.Params.encodeCommit, q.Responses.decodeCommit);
  }
  async genesis() {
    const t = { method: Q.Method.Genesis };
    return this.doCall(t, q.Params.encodeGenesis, q.Responses.decodeGenesis);
  }
  async health() {
    const t = { method: Q.Method.Health };
    return this.doCall(t, q.Params.encodeHealth, q.Responses.decodeHealth);
  }
  async numUnconfirmedTxs() {
    const t = { method: Q.Method.NumUnconfirmedTxs };
    return this.doCall(t, q.Params.encodeNumUnconfirmedTxs, q.Responses.decodeNumUnconfirmedTxs);
  }
  async status() {
    const t = { method: Q.Method.Status };
    return this.doCall(t, q.Params.encodeStatus, q.Responses.decodeStatus);
  }
  subscribeNewBlock() {
    const t = {
      method: Q.Method.Subscribe,
      query: { type: Q.SubscriptionEventType.NewBlock }
    };
    return this.subscribe(t, q.Responses.decodeNewBlockEvent);
  }
  subscribeNewBlockHeader() {
    const t = {
      method: Q.Method.Subscribe,
      query: { type: Q.SubscriptionEventType.NewBlockHeader }
    };
    return this.subscribe(t, q.Responses.decodeNewBlockHeaderEvent);
  }
  subscribeTx(t) {
    const n = {
      method: Q.Method.Subscribe,
      query: {
        type: Q.SubscriptionEventType.Tx,
        raw: t
      }
    };
    return this.subscribe(n, q.Responses.decodeTxEvent);
  }
  /**
   * Get a single transaction by hash
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx
   */
  async tx(t) {
    const n = { params: t, method: Q.Method.Tx };
    return this.doCall(n, q.Params.encodeTx, q.Responses.decodeTx);
  }
  /**
   * Search for transactions that are in a block
   *
   * @see https://docs.tendermint.com/master/rpc/#/Info/tx_search
   */
  async txSearch(t) {
    const n = { params: t, method: Q.Method.TxSearch };
    return this.doCall(n, q.Params.encodeTxSearch, q.Responses.decodeTxSearch);
  }
  // this should paginate through all txSearch options to ensure it returns all results.
  // starts with page 1 or whatever was provided (eg. to start on page 7)
  async txSearchAll(t) {
    let n = t.page || 1;
    const r = [];
    let s = !1;
    for (; !s; ) {
      const o = await this.txSearch({ ...t, page: n });
      r.push(...o.txs), r.length < o.totalCount ? n++ : s = !0;
    }
    return {
      totalCount: r.length,
      txs: r
    };
  }
  async validators(t) {
    const n = {
      method: Q.Method.Validators,
      params: t
    };
    return this.doCall(n, q.Params.encodeValidators, q.Responses.decodeValidators);
  }
  async validatorsAll(t) {
    const n = [];
    let r = 1, s = !1, o = t;
    for (; !s; ) {
      const i = await this.validators({
        per_page: 50,
        height: o,
        page: r
      });
      n.push(...i.validators), o = o || i.blockHeight, n.length < i.total ? r++ : s = !0;
    }
    return {
      // NOTE: Default value is for type safety but this should always be set
      blockHeight: o ?? 0,
      count: n.length,
      total: n.length,
      validators: n
    };
  }
  // doCall is a helper to handle the encode/call/decode logic
  async doCall(t, n, r) {
    const s = n(t), o = await this.client.execute(s);
    return r(o);
  }
  subscribe(t, n) {
    if (!(0, Vs.instanceOfRpcStreamingClient)(this.client))
      throw new Error("This RPC client type cannot subscribe to events");
    const r = q.Params.encodeSubscribe(t);
    return this.client.listen(r).map((o) => n(o));
  }
}
Ai.Tendermint37Client = po;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Tendermint37Client = e.VoteType = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.SubscriptionEventType = e.Method = void 0;
  var t = Si;
  Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return t.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return t.SubscriptionEventType;
  } });
  var n = af;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return n.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return n.VoteType;
  } });
  var r = Ai;
  Object.defineProperty(e, "Tendermint37Client", { enumerable: !0, get: function() {
    return r.Tendermint37Client;
  } });
})(fo);
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.connectComet = Pt.isComet38Client = Pt.isTendermint37Client = Pt.isTendermint34Client = void 0;
const bf = co, vf = zr, wf = fo;
function dA(e) {
  return e instanceof vf.Tendermint34Client;
}
Pt.isTendermint34Client = dA;
function mA(e) {
  return e instanceof wf.Tendermint37Client;
}
Pt.isTendermint37Client = mA;
function fA(e) {
  return e instanceof bf.Comet38Client;
}
Pt.isComet38Client = fA;
async function pA(e) {
  let t;
  const n = await wf.Tendermint37Client.connect(e), r = (await n.status()).nodeInfo.version;
  return r.startsWith("0.37.") ? t = n : r.startsWith("0.38.") ? (n.disconnect(), t = await bf.Comet38Client.connect(e)) : (n.disconnect(), t = await vf.Tendermint34Client.connect(e)), t;
}
Pt.connectComet = pA;
(function(e) {
  var t = h && h.__createBinding || (Object.create ? function(y, P, v, m) {
    m === void 0 && (m = v);
    var S = Object.getOwnPropertyDescriptor(P, v);
    (!S || ("get" in S ? !P.__esModule : S.writable || S.configurable)) && (S = { enumerable: !0, get: function() {
      return P[v];
    } }), Object.defineProperty(y, m, S);
  } : function(y, P, v, m) {
    m === void 0 && (m = v), y[m] = P[v];
  }), n = h && h.__setModuleDefault || (Object.create ? function(y, P) {
    Object.defineProperty(y, "default", { enumerable: !0, value: P });
  } : function(y, P) {
    y.default = P;
  }), r = h && h.__importStar || function(y) {
    if (y && y.__esModule)
      return y;
    var P = {};
    if (y != null)
      for (var v in y)
        v !== "default" && Object.prototype.hasOwnProperty.call(y, v) && t(P, y, v);
    return n(P, y), P;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.BlockIdFlag = e.isTendermint37Client = e.isTendermint34Client = e.isComet38Client = e.connectComet = e.Tendermint37Client = e.tendermint37 = e.Tendermint34Client = e.tendermint34 = e.VoteType = e.SubscriptionEventType = e.Method = e.broadcastTxSyncSuccess = e.broadcastTxCommitSuccess = e.WebsocketClient = e.HttpClient = e.HttpBatchClient = e.Comet38Client = e.comet38 = e.toSeconds = e.toRfc3339WithNanoseconds = e.fromSeconds = e.fromRfc3339WithNanoseconds = e.DateTime = e.rawSecp256k1PubkeyToRawAddress = e.rawEd25519PubkeyToRawAddress = e.pubkeyToRawAddress = e.pubkeyToAddress = void 0;
  var s = At;
  Object.defineProperty(e, "pubkeyToAddress", { enumerable: !0, get: function() {
    return s.pubkeyToAddress;
  } }), Object.defineProperty(e, "pubkeyToRawAddress", { enumerable: !0, get: function() {
    return s.pubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawEd25519PubkeyToRawAddress", { enumerable: !0, get: function() {
    return s.rawEd25519PubkeyToRawAddress;
  } }), Object.defineProperty(e, "rawSecp256k1PubkeyToRawAddress", { enumerable: !0, get: function() {
    return s.rawSecp256k1PubkeyToRawAddress;
  } });
  var o = we;
  Object.defineProperty(e, "DateTime", { enumerable: !0, get: function() {
    return o.DateTime;
  } }), Object.defineProperty(e, "fromRfc3339WithNanoseconds", { enumerable: !0, get: function() {
    return o.fromRfc3339WithNanoseconds;
  } }), Object.defineProperty(e, "fromSeconds", { enumerable: !0, get: function() {
    return o.fromSeconds;
  } }), Object.defineProperty(e, "toRfc3339WithNanoseconds", { enumerable: !0, get: function() {
    return o.toRfc3339WithNanoseconds;
  } }), Object.defineProperty(e, "toSeconds", { enumerable: !0, get: function() {
    return o.toSeconds;
  } }), e.comet38 = r(co);
  var i = co;
  Object.defineProperty(e, "Comet38Client", { enumerable: !0, get: function() {
    return i.Comet38Client;
  } });
  var a = ys;
  Object.defineProperty(e, "HttpBatchClient", { enumerable: !0, get: function() {
    return a.HttpBatchClient;
  } }), Object.defineProperty(e, "HttpClient", { enumerable: !0, get: function() {
    return a.HttpClient;
  } }), Object.defineProperty(e, "WebsocketClient", { enumerable: !0, get: function() {
    return a.WebsocketClient;
  } });
  var c = zr;
  Object.defineProperty(e, "broadcastTxCommitSuccess", { enumerable: !0, get: function() {
    return c.broadcastTxCommitSuccess;
  } }), Object.defineProperty(e, "broadcastTxSyncSuccess", { enumerable: !0, get: function() {
    return c.broadcastTxSyncSuccess;
  } }), Object.defineProperty(e, "Method", { enumerable: !0, get: function() {
    return c.Method;
  } }), Object.defineProperty(e, "SubscriptionEventType", { enumerable: !0, get: function() {
    return c.SubscriptionEventType;
  } }), Object.defineProperty(e, "VoteType", { enumerable: !0, get: function() {
    return c.VoteType;
  } }), e.tendermint34 = r(zr);
  var u = zr;
  Object.defineProperty(e, "Tendermint34Client", { enumerable: !0, get: function() {
    return u.Tendermint34Client;
  } }), e.tendermint37 = r(fo);
  var l = fo;
  Object.defineProperty(e, "Tendermint37Client", { enumerable: !0, get: function() {
    return l.Tendermint37Client;
  } });
  var d = Pt;
  Object.defineProperty(e, "connectComet", { enumerable: !0, get: function() {
    return d.connectComet;
  } }), Object.defineProperty(e, "isComet38Client", { enumerable: !0, get: function() {
    return d.isComet38Client;
  } }), Object.defineProperty(e, "isTendermint34Client", { enumerable: !0, get: function() {
    return d.isTendermint34Client;
  } }), Object.defineProperty(e, "isTendermint37Client", { enumerable: !0, get: function() {
    return d.isTendermint37Client;
  } });
  var b = ws;
  Object.defineProperty(e, "BlockIdFlag", { enumerable: !0, get: function() {
    return b.BlockIdFlag;
  } });
})(gs);
var de = {};
Object.defineProperty(de, "__esModule", { value: !0 });
de.StargateClient = de.BroadcastTxError = de.assertIsDeliverTxFailure = de.assertIsDeliverTxSuccess = de.isDeliverTxSuccess = de.isDeliverTxFailure = de.TimeoutError = void 0;
const gA = gt, ta = j, el = se, tl = gs, nl = te, yA = _d, hA = as, bA = ms, Ls = ns, vA = _e, wA = ps;
class _f extends Error {
  constructor(t, n) {
    super(t), this.txId = n;
  }
}
de.TimeoutError = _f;
function $c(e) {
  return !!e.code;
}
de.isDeliverTxFailure = $c;
function Sf(e) {
  return !$c(e);
}
de.isDeliverTxSuccess = Sf;
function _A(e) {
  if ($c(e))
    throw new Error(`Error when broadcasting tx ${e.transactionHash} at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`);
}
de.assertIsDeliverTxSuccess = _A;
function SA(e) {
  if (Sf(e))
    throw new Error(`Transaction ${e.transactionHash} did not fail at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`);
}
de.assertIsDeliverTxFailure = SA;
class Af extends Error {
  constructor(t, n, r) {
    super(`Broadcasting transaction failed with code ${t} (codespace: ${n}). Log: ${r}`), this.code = t, this.codespace = n, this.log = r;
  }
}
de.BroadcastTxError = Af;
class go {
  /**
   * Creates an instance by connecting to the given CometBFT RPC endpoint.
   *
   * This uses auto-detection to decide between a CometBFT 0.38, Tendermint 0.37 and 0.34 client.
   * To set the Comet client explicitly, use `create`.
   */
  static async connect(t, n = {}) {
    const r = await (0, tl.connectComet)(t);
    return go.create(r, n);
  }
  /**
   * Creates an instance from a manually created Comet client.
   * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
   */
  static async create(t, n = {}) {
    return new go(t, n);
  }
  constructor(t, n) {
    t && (this.cometClient = t, this.queryClient = vA.QueryClient.withExtensions(t, Ls.setupAuthExtension, Ls.setupBankExtension, Ls.setupStakingExtension, Ls.setupTxExtension));
    const { accountParser: r = hA.accountFromAny } = n;
    this.accountParser = r;
  }
  getCometClient() {
    return this.cometClient;
  }
  forceGetCometClient() {
    if (!this.cometClient)
      throw new Error("Comet client not available. You cannot use online functionality in offline mode.");
    return this.cometClient;
  }
  getQueryClient() {
    return this.queryClient;
  }
  forceGetQueryClient() {
    if (!this.queryClient)
      throw new Error("Query client not available. You cannot use online functionality in offline mode.");
    return this.queryClient;
  }
  async getChainId() {
    if (!this.chainId) {
      const n = (await this.forceGetCometClient().status()).nodeInfo.network;
      if (!n)
        throw new Error("Chain ID must not be empty");
      this.chainId = n;
    }
    return this.chainId;
  }
  async getHeight() {
    return (await this.forceGetCometClient().status()).syncInfo.latestBlockHeight;
  }
  async getAccount(t) {
    try {
      const n = await this.forceGetQueryClient().auth.account(t);
      return n ? this.accountParser(n) : null;
    } catch (n) {
      if (/rpc error: code = NotFound/i.test(n.toString()))
        return null;
      throw n;
    }
  }
  async getSequence(t) {
    const n = await this.getAccount(t);
    if (!n)
      throw new Error(`Account '${t}' does not exist on chain. Send some tokens there before trying to query sequence.`);
    return {
      accountNumber: n.accountNumber,
      sequence: n.sequence
    };
  }
  async getBlock(t) {
    const n = await this.forceGetCometClient().block(t);
    return {
      id: (0, ta.toHex)(n.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new el.Uint53(n.block.header.version.block).toString(),
          app: new el.Uint53(n.block.header.version.app).toString()
        },
        height: n.block.header.height,
        chainId: n.block.header.chainId,
        time: (0, tl.toRfc3339WithNanoseconds)(n.block.header.time)
      },
      txs: n.block.txs
    };
  }
  async getBalance(t, n) {
    return this.forceGetQueryClient().bank.balance(t, n);
  }
  /**
   * Queries all balances for all denoms that belong to this address.
   *
   * Uses the grpc queries (which iterates over the store internally), and we cannot get
   * proofs from such a method.
   */
  async getAllBalances(t) {
    return this.forceGetQueryClient().bank.allBalances(t);
  }
  async getBalanceStaked(t) {
    const n = [];
    let r;
    do {
      const { delegationResponses: o, pagination: i } = await this.forceGetQueryClient().staking.delegatorDelegations(t, r), a = o || [];
      n.push(...a), r = i == null ? void 0 : i.nextKey;
    } while (r !== void 0 && r.length !== 0);
    return n.reduce((o, i) => ((0, nl.assert)(i.balance), o !== null ? (0, gA.addCoins)(o, i.balance) : i.balance), null);
  }
  async getDelegation(t, n) {
    var s;
    let r;
    try {
      r = (s = (await this.forceGetQueryClient().staking.delegation(t, n)).delegationResponse) == null ? void 0 : s.balance;
    } catch (o) {
      if (!o.toString().includes("key not found"))
        throw o;
    }
    return r || null;
  }
  async getTx(t) {
    return (await this.txsQuery(`tx.hash='${t}'`))[0] ?? null;
  }
  async searchTx(t) {
    let n;
    if (typeof t == "string")
      n = t;
    else if ((0, wA.isSearchTxQueryArray)(t))
      n = t.map((r) => typeof r.value == "string" ? `${r.key}='${r.value}'` : `${r.key}=${r.value}`).join(" AND ");
    else
      throw new Error("Got unsupported query type. See CosmJS 0.31 CHANGELOG for API breaking changes here.");
    return this.txsQuery(n);
  }
  disconnect() {
    this.cometClient && this.cometClient.disconnect();
  }
  /**
   * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
   *
   * If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
   * usually needs to check for execution success or failure.
   */
  async broadcastTx(t, n = 6e4, r = 3e3) {
    let s = !1;
    const o = setTimeout(() => {
      s = !0;
    }, n), i = async (c) => {
      if (s)
        throw new _f(`Transaction with ID ${c} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${n / 1e3} seconds.`, c);
      await (0, nl.sleep)(r);
      const u = await this.getTx(c);
      return u ? {
        code: u.code,
        height: u.height,
        txIndex: u.txIndex,
        events: u.events,
        rawLog: u.rawLog,
        transactionHash: c,
        msgResponses: u.msgResponses,
        gasUsed: u.gasUsed,
        gasWanted: u.gasWanted
      } : i(c);
    }, a = await this.broadcastTxSync(t);
    return new Promise((c, u) => i(a).then((l) => {
      clearTimeout(o), c(l);
    }, (l) => {
      clearTimeout(o), u(l);
    }));
  }
  /**
   * Broadcasts a signed transaction to the network without monitoring it.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is broadcasted, a `string` containing the hash of the transaction is returned. The caller then
   * usually needs to check if the transaction was included in a block and was successful.
   *
   * @returns Returns the hash of the transaction
   */
  async broadcastTxSync(t) {
    const n = await this.forceGetCometClient().broadcastTxSync({ tx: t });
    return n.code ? Promise.reject(new Af(n.code, n.codespace ?? "", n.log)) : (0, ta.toHex)(n.hash).toUpperCase();
  }
  async txsQuery(t) {
    return (await this.forceGetCometClient().txSearchAll({ query: t })).txs.map((r) => {
      const s = yA.TxMsgData.decode(r.result.data ?? new Uint8Array());
      return {
        height: r.height,
        txIndex: r.index,
        hash: (0, ta.toHex)(r.hash).toUpperCase(),
        code: r.result.code,
        events: r.result.events.map(bA.fromTendermintEvent),
        rawLog: r.result.log || "",
        tx: r.tx,
        msgResponses: s.msgResponses,
        gasUsed: r.result.gasUsed,
        gasWanted: r.result.gasWanted
      };
    });
  }
}
de.StargateClient = go;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.SigningStargateClient = e.createDefaultAminoConverters = e.defaultRegistryTypes = void 0;
  const t = gt, n = j, r = se, s = Et, o = gs, i = te, a = wd, c = sc, u = ic, l = is, d = Rt, b = oc, y = ds, P = wn, v = ns, m = ns, S = de;
  e.defaultRegistryTypes = [
    ["/cosmos.base.v1beta1.Coin", a.Coin],
    ...v.authzTypes,
    ...v.bankTypes,
    ...v.distributionTypes,
    ...v.feegrantTypes,
    ...v.govTypes,
    ...v.groupTypes,
    ...v.stakingTypes,
    ...v.ibcTypes,
    ...v.vestingTypes
  ];
  function D() {
    return {
      ...(0, m.createAuthzAminoConverters)(),
      ...(0, m.createBankAminoConverters)(),
      ...(0, m.createDistributionAminoConverters)(),
      ...(0, m.createGovAminoConverters)(),
      ...(0, m.createStakingAminoConverters)(),
      ...(0, m.createIbcAminoConverters)(),
      ...(0, m.createFeegrantAminoConverters)(),
      ...(0, m.createVestingAminoConverters)()
    };
  }
  e.createDefaultAminoConverters = D;
  class N extends S.StargateClient {
    /**
     * Creates an instance by connecting to the given CometBFT RPC endpoint.
     *
     * This uses auto-detection to decide between a CometBFT 0.38, Tendermint 0.37 and 0.34 client.
     * To set the Comet client explicitly, use `createWithSigner`.
     */
    static async connectWithSigner(_, k, A = {}) {
      const $ = await (0, o.connectComet)(_);
      return N.createWithSigner($, k, A);
    }
    /**
     * Creates an instance from a manually created Comet client.
     * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
     */
    static async createWithSigner(_, k, A = {}) {
      return new N(_, k, A);
    }
    /**
     * Creates a client in offline mode.
     *
     * This should only be used in niche cases where you know exactly what you're doing,
     * e.g. when building an offline signing application.
     *
     * When you try to use online functionality with such a signer, an
     * exception will be raised.
     */
    static async offline(_, k = {}) {
      return new N(void 0, _, k);
    }
    constructor(_, k, A) {
      super(_, A);
      const { registry: $ = new s.Registry(e.defaultRegistryTypes), aminoTypes: W = new y.AminoTypes(D()) } = A;
      this.registry = $, this.aminoTypes = W, this.signer = k, this.broadcastTimeoutMs = A.broadcastTimeoutMs, this.broadcastPollIntervalMs = A.broadcastPollIntervalMs, this.gasPrice = A.gasPrice;
    }
    async simulate(_, k, A) {
      const $ = k.map((oe) => this.registry.encodeAsAny(oe)), W = (await this.signer.getAccounts()).find((oe) => oe.address === _);
      if (!W)
        throw new Error("Failed to retrieve account from signer");
      const J = (0, t.encodeSecp256k1Pubkey)(W.pubkey), { sequence: G } = await this.getSequence(_), { gasInfo: X } = await this.forceGetQueryClient().tx.simulate($, A, J, G);
      return (0, i.assertDefined)(X), r.Uint53.fromString(X.gasUsed.toString()).toNumber();
    }
    async sendTokens(_, k, A, $, W = "") {
      const J = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: _,
          toAddress: k,
          amount: [...A]
        }
      };
      return this.signAndBroadcast(_, [J], $, W);
    }
    async delegateTokens(_, k, A, $, W = "") {
      const J = {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: u.MsgDelegate.fromPartial({
          delegatorAddress: _,
          validatorAddress: k,
          amount: A
        })
      };
      return this.signAndBroadcast(_, [J], $, W);
    }
    async undelegateTokens(_, k, A, $, W = "") {
      const J = {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: u.MsgUndelegate.fromPartial({
          delegatorAddress: _,
          validatorAddress: k,
          amount: A
        })
      };
      return this.signAndBroadcast(_, [J], $, W);
    }
    async withdrawRewards(_, k, A, $ = "") {
      const W = {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: c.MsgWithdrawDelegatorReward.fromPartial({
          delegatorAddress: _,
          validatorAddress: k
        })
      };
      return this.signAndBroadcast(_, [W], A, $);
    }
    /**
     * @deprecated This API does not support setting the memo field of `MsgTransfer` (only the transaction memo).
     * We'll remove this method at some point because trying to wrap the various message types is a losing strategy.
     * Please migrate to `signAndBroadcast` with an `MsgTransferEncodeObject` created in the caller code instead.
     * @see https://github.com/cosmos/cosmjs/issues/1493
     */
    async sendIbcTokens(_, k, A, $, W, J, G, X, oe = "") {
      const Ue = G ? BigInt(G) * BigInt(1e9) : void 0, Dt = {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: b.MsgTransfer.fromPartial({
          sourcePort: $,
          sourceChannel: W,
          sender: _,
          receiver: k,
          token: A,
          timeoutHeight: J,
          timeoutTimestamp: Ue
        })
      };
      return this.signAndBroadcast(_, [Dt], X, oe);
    }
    async signAndBroadcast(_, k, A, $ = "", W) {
      let J;
      if (A == "auto" || typeof A == "number") {
        (0, i.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
        const oe = await this.simulate(_, k, $), Ue = typeof A == "number" ? A : 1.4;
        J = (0, P.calculateFee)(Math.round(oe * Ue), this.gasPrice);
      } else
        J = A;
      const G = await this.sign(_, k, J, $, void 0, W), X = d.TxRaw.encode(G).finish();
      return this.broadcastTx(X, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
    }
    /**
     * This method is useful if you want to send a transaction in broadcast,
     * without waiting for it to be placed inside a block, because for example
     * I would like to receive the hash to later track the transaction with another tool.
     * @returns Returns the hash of the transaction
     */
    async signAndBroadcastSync(_, k, A, $ = "", W) {
      let J;
      if (A == "auto" || typeof A == "number") {
        (0, i.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
        const oe = await this.simulate(_, k, $), Ue = typeof A == "number" ? A : 1.3;
        J = (0, P.calculateFee)(Math.round(oe * Ue), this.gasPrice);
      } else
        J = A;
      const G = await this.sign(_, k, J, $, void 0, W), X = d.TxRaw.encode(G).finish();
      return this.broadcastTxSync(X);
    }
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
     * (See the SigningStargateClient.offline constructor).
     */
    async sign(_, k, A, $, W, J) {
      let G;
      if (W)
        G = W;
      else {
        const { accountNumber: X, sequence: oe } = await this.getSequence(_), Ue = await this.getChainId();
        G = {
          accountNumber: X,
          sequence: oe,
          chainId: Ue
        };
      }
      return (0, s.isOfflineDirectSigner)(this.signer) ? this.signDirect(_, k, A, $, G, J) : this.signAmino(_, k, A, $, G, J);
    }
    async signAmino(_, k, A, $, { accountNumber: W, sequence: J, chainId: G }, X) {
      (0, i.assert)(!(0, s.isOfflineDirectSigner)(this.signer));
      const oe = (await this.signer.getAccounts()).find((Er) => Er.address === _);
      if (!oe)
        throw new Error("Failed to retrieve account from signer");
      const Ue = (0, s.encodePubkey)((0, t.encodeSecp256k1Pubkey)(oe.pubkey)), Dt = l.SignMode.SIGN_MODE_LEGACY_AMINO_JSON, kr = k.map((Er) => this.aminoTypes.toAmino(Er)), Ri = (0, t.makeSignDoc)(kr, A, G, $, W, J, X), { signature: ji, signed: Tt } = await this.signer.signAmino(_, Ri), As = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
          messages: Tt.msgs.map((Er) => this.aminoTypes.fromAmino(Er)),
          memo: Tt.memo,
          timeoutHeight: X
        }
      }, Di = this.registry.encode(As), Vf = r.Int53.fromString(Tt.fee.gas).toNumber(), Lf = r.Int53.fromString(Tt.sequence).toNumber(), Wf = (0, s.makeAuthInfoBytes)([{ pubkey: Ue, sequence: Lf }], Tt.fee.amount, Vf, Tt.fee.granter, Tt.fee.payer, Dt);
      return d.TxRaw.fromPartial({
        bodyBytes: Di,
        authInfoBytes: Wf,
        signatures: [(0, n.fromBase64)(ji.signature)]
      });
    }
    async signDirect(_, k, A, $, { accountNumber: W, sequence: J, chainId: G }, X) {
      (0, i.assert)((0, s.isOfflineDirectSigner)(this.signer));
      const oe = (await this.signer.getAccounts()).find((Di) => Di.address === _);
      if (!oe)
        throw new Error("Failed to retrieve account from signer");
      const Ue = (0, s.encodePubkey)((0, t.encodeSecp256k1Pubkey)(oe.pubkey)), Dt = {
        typeUrl: "/cosmos.tx.v1beta1.TxBody",
        value: {
          messages: k,
          memo: $,
          timeoutHeight: X
        }
      }, kr = this.registry.encode(Dt), Ri = r.Int53.fromString(A.gas).toNumber(), ji = (0, s.makeAuthInfoBytes)([{ pubkey: Ue, sequence: J }], A.amount, Ri, A.granter, A.payer), Tt = (0, s.makeSignDoc)(kr, ji, G, W), { signature: Cc, signed: As } = await this.signer.signDirect(_, Tt);
      return d.TxRaw.fromPartial({
        bodyBytes: As.bodyBytes,
        authInfoBytes: As.authInfoBytes,
        signatures: [(0, n.fromBase64)(Cc.signature)]
      });
    }
  }
  e.SigningStargateClient = N;
})(Sm);
(function(e) {
  var t = h && h.__createBinding || (Object.create ? function(v, m, S, D) {
    D === void 0 && (D = S);
    var N = Object.getOwnPropertyDescriptor(m, S);
    (!N || ("get" in N ? !m.__esModule : N.writable || N.configurable)) && (N = { enumerable: !0, get: function() {
      return m[S];
    } }), Object.defineProperty(v, D, N);
  } : function(v, m, S, D) {
    D === void 0 && (D = S), v[D] = m[S];
  }), n = h && h.__setModuleDefault || (Object.create ? function(v, m) {
    Object.defineProperty(v, "default", { enumerable: !0, value: m });
  } : function(v, m) {
    v.default = m;
  }), r = h && h.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var m = {};
    if (v != null)
      for (var S in v)
        S !== "default" && Object.prototype.hasOwnProperty.call(v, S) && t(m, v, S);
    return n(m, v), m;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isMsgWithdrawDelegatorRewardEncodeObject = e.isMsgVoteWeightedEncodeObject = e.isMsgVoteEncodeObject = e.isMsgUndelegateEncodeObject = e.isMsgTransferEncodeObject = e.isMsgSubmitProposalEncodeObject = e.isMsgSendEncodeObject = e.isMsgEditValidatorEncodeObject = e.isMsgDepositEncodeObject = e.isMsgDelegateEncodeObject = e.isMsgCreateValidatorEncodeObject = e.isMsgBeginRedelegateEncodeObject = e.isAminoMsgWithdrawValidatorCommission = e.isAminoMsgWithdrawDelegatorReward = e.isAminoMsgVoteWeighted = e.isAminoMsgVote = e.isAminoMsgVerifyInvariant = e.isAminoMsgUnjail = e.isAminoMsgUndelegate = e.isAminoMsgTransfer = e.isAminoMsgSubmitProposal = e.isAminoMsgSubmitEvidence = e.isAminoMsgSetWithdrawAddress = e.isAminoMsgSend = e.isAminoMsgMultiSend = e.isAminoMsgFundCommunityPool = e.isAminoMsgEditValidator = e.isAminoMsgDeposit = e.isAminoMsgDelegate = e.isAminoMsgCreateVestingAccount = e.isAminoMsgCreateValidator = e.isAminoMsgBeginRedelegate = e.createVestingAminoConverters = e.createStakingAminoConverters = e.createSlashingAminoConverters = e.createIbcAminoConverters = e.createGroupAminoConverters = e.createGovAminoConverters = e.createFeegrantAminoConverters = e.createEvidenceAminoConverters = e.createDistributionAminoConverters = e.createCrysisAminoConverters = e.createBankAminoConverters = e.createAuthzAminoConverters = e.logs = e.GasPrice = e.calculateFee = e.fromTendermintEvent = e.AminoTypes = e.accountFromAny = void 0, e.parseCoins = e.makeCosmoshubPath = e.coins = e.coin = e.TimeoutError = e.StargateClient = e.isDeliverTxSuccess = e.isDeliverTxFailure = e.BroadcastTxError = e.assertIsDeliverTxSuccess = e.assertIsDeliverTxFailure = e.SigningStargateClient = e.defaultRegistryTypes = e.createDefaultAminoConverters = e.isSearchTxQueryArray = e.QueryClient = e.decodeCosmosSdkDecFromProto = e.createProtobufRpcClient = e.createPagination = e.makeMultisignedTxBytes = e.makeMultisignedTx = e.setupTxExtension = e.setupStakingExtension = e.setupSlashingExtension = e.setupMintExtension = e.setupIbcExtension = e.setupGovExtension = e.setupFeegrantExtension = e.setupDistributionExtension = e.setupBankExtension = e.setupAuthzExtension = e.setupAuthExtension = void 0;
  var s = as;
  Object.defineProperty(e, "accountFromAny", { enumerable: !0, get: function() {
    return s.accountFromAny;
  } });
  var o = ds;
  Object.defineProperty(e, "AminoTypes", { enumerable: !0, get: function() {
    return o.AminoTypes;
  } });
  var i = ms;
  Object.defineProperty(e, "fromTendermintEvent", { enumerable: !0, get: function() {
    return i.fromTendermintEvent;
  } });
  var a = wn;
  Object.defineProperty(e, "calculateFee", { enumerable: !0, get: function() {
    return a.calculateFee;
  } }), Object.defineProperty(e, "GasPrice", { enumerable: !0, get: function() {
    return a.GasPrice;
  } }), e.logs = r(Be);
  var c = ns;
  Object.defineProperty(e, "createAuthzAminoConverters", { enumerable: !0, get: function() {
    return c.createAuthzAminoConverters;
  } }), Object.defineProperty(e, "createBankAminoConverters", { enumerable: !0, get: function() {
    return c.createBankAminoConverters;
  } }), Object.defineProperty(e, "createCrysisAminoConverters", { enumerable: !0, get: function() {
    return c.createCrysisAminoConverters;
  } }), Object.defineProperty(e, "createDistributionAminoConverters", { enumerable: !0, get: function() {
    return c.createDistributionAminoConverters;
  } }), Object.defineProperty(e, "createEvidenceAminoConverters", { enumerable: !0, get: function() {
    return c.createEvidenceAminoConverters;
  } }), Object.defineProperty(e, "createFeegrantAminoConverters", { enumerable: !0, get: function() {
    return c.createFeegrantAminoConverters;
  } }), Object.defineProperty(e, "createGovAminoConverters", { enumerable: !0, get: function() {
    return c.createGovAminoConverters;
  } }), Object.defineProperty(e, "createGroupAminoConverters", { enumerable: !0, get: function() {
    return c.createGroupAminoConverters;
  } }), Object.defineProperty(e, "createIbcAminoConverters", { enumerable: !0, get: function() {
    return c.createIbcAminoConverters;
  } }), Object.defineProperty(e, "createSlashingAminoConverters", { enumerable: !0, get: function() {
    return c.createSlashingAminoConverters;
  } }), Object.defineProperty(e, "createStakingAminoConverters", { enumerable: !0, get: function() {
    return c.createStakingAminoConverters;
  } }), Object.defineProperty(e, "createVestingAminoConverters", { enumerable: !0, get: function() {
    return c.createVestingAminoConverters;
  } }), Object.defineProperty(e, "isAminoMsgBeginRedelegate", { enumerable: !0, get: function() {
    return c.isAminoMsgBeginRedelegate;
  } }), Object.defineProperty(e, "isAminoMsgCreateValidator", { enumerable: !0, get: function() {
    return c.isAminoMsgCreateValidator;
  } }), Object.defineProperty(e, "isAminoMsgCreateVestingAccount", { enumerable: !0, get: function() {
    return c.isAminoMsgCreateVestingAccount;
  } }), Object.defineProperty(e, "isAminoMsgDelegate", { enumerable: !0, get: function() {
    return c.isAminoMsgDelegate;
  } }), Object.defineProperty(e, "isAminoMsgDeposit", { enumerable: !0, get: function() {
    return c.isAminoMsgDeposit;
  } }), Object.defineProperty(e, "isAminoMsgEditValidator", { enumerable: !0, get: function() {
    return c.isAminoMsgEditValidator;
  } }), Object.defineProperty(e, "isAminoMsgFundCommunityPool", { enumerable: !0, get: function() {
    return c.isAminoMsgFundCommunityPool;
  } }), Object.defineProperty(e, "isAminoMsgMultiSend", { enumerable: !0, get: function() {
    return c.isAminoMsgMultiSend;
  } }), Object.defineProperty(e, "isAminoMsgSend", { enumerable: !0, get: function() {
    return c.isAminoMsgSend;
  } }), Object.defineProperty(e, "isAminoMsgSetWithdrawAddress", { enumerable: !0, get: function() {
    return c.isAminoMsgSetWithdrawAddress;
  } }), Object.defineProperty(e, "isAminoMsgSubmitEvidence", { enumerable: !0, get: function() {
    return c.isAminoMsgSubmitEvidence;
  } }), Object.defineProperty(e, "isAminoMsgSubmitProposal", { enumerable: !0, get: function() {
    return c.isAminoMsgSubmitProposal;
  } }), Object.defineProperty(e, "isAminoMsgTransfer", { enumerable: !0, get: function() {
    return c.isAminoMsgTransfer;
  } }), Object.defineProperty(e, "isAminoMsgUndelegate", { enumerable: !0, get: function() {
    return c.isAminoMsgUndelegate;
  } }), Object.defineProperty(e, "isAminoMsgUnjail", { enumerable: !0, get: function() {
    return c.isAminoMsgUnjail;
  } }), Object.defineProperty(e, "isAminoMsgVerifyInvariant", { enumerable: !0, get: function() {
    return c.isAminoMsgVerifyInvariant;
  } }), Object.defineProperty(e, "isAminoMsgVote", { enumerable: !0, get: function() {
    return c.isAminoMsgVote;
  } }), Object.defineProperty(e, "isAminoMsgVoteWeighted", { enumerable: !0, get: function() {
    return c.isAminoMsgVoteWeighted;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawDelegatorReward", { enumerable: !0, get: function() {
    return c.isAminoMsgWithdrawDelegatorReward;
  } }), Object.defineProperty(e, "isAminoMsgWithdrawValidatorCommission", { enumerable: !0, get: function() {
    return c.isAminoMsgWithdrawValidatorCommission;
  } }), Object.defineProperty(e, "isMsgBeginRedelegateEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgBeginRedelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgCreateValidatorEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgCreateValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgDelegateEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgDelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgDepositEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgDepositEncodeObject;
  } }), Object.defineProperty(e, "isMsgEditValidatorEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgEditValidatorEncodeObject;
  } }), Object.defineProperty(e, "isMsgSendEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgSendEncodeObject;
  } }), Object.defineProperty(e, "isMsgSubmitProposalEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgSubmitProposalEncodeObject;
  } }), Object.defineProperty(e, "isMsgTransferEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgTransferEncodeObject;
  } }), Object.defineProperty(e, "isMsgUndelegateEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgUndelegateEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgVoteEncodeObject;
  } }), Object.defineProperty(e, "isMsgVoteWeightedEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgVoteWeightedEncodeObject;
  } }), Object.defineProperty(e, "isMsgWithdrawDelegatorRewardEncodeObject", { enumerable: !0, get: function() {
    return c.isMsgWithdrawDelegatorRewardEncodeObject;
  } }), Object.defineProperty(e, "setupAuthExtension", { enumerable: !0, get: function() {
    return c.setupAuthExtension;
  } }), Object.defineProperty(e, "setupAuthzExtension", { enumerable: !0, get: function() {
    return c.setupAuthzExtension;
  } }), Object.defineProperty(e, "setupBankExtension", { enumerable: !0, get: function() {
    return c.setupBankExtension;
  } }), Object.defineProperty(e, "setupDistributionExtension", { enumerable: !0, get: function() {
    return c.setupDistributionExtension;
  } }), Object.defineProperty(e, "setupFeegrantExtension", { enumerable: !0, get: function() {
    return c.setupFeegrantExtension;
  } }), Object.defineProperty(e, "setupGovExtension", { enumerable: !0, get: function() {
    return c.setupGovExtension;
  } }), Object.defineProperty(e, "setupIbcExtension", { enumerable: !0, get: function() {
    return c.setupIbcExtension;
  } }), Object.defineProperty(e, "setupMintExtension", { enumerable: !0, get: function() {
    return c.setupMintExtension;
  } }), Object.defineProperty(e, "setupSlashingExtension", { enumerable: !0, get: function() {
    return c.setupSlashingExtension;
  } }), Object.defineProperty(e, "setupStakingExtension", { enumerable: !0, get: function() {
    return c.setupStakingExtension;
  } }), Object.defineProperty(e, "setupTxExtension", { enumerable: !0, get: function() {
    return c.setupTxExtension;
  } });
  var u = Wt;
  Object.defineProperty(e, "makeMultisignedTx", { enumerable: !0, get: function() {
    return u.makeMultisignedTx;
  } }), Object.defineProperty(e, "makeMultisignedTxBytes", { enumerable: !0, get: function() {
    return u.makeMultisignedTxBytes;
  } });
  var l = _e;
  Object.defineProperty(e, "createPagination", { enumerable: !0, get: function() {
    return l.createPagination;
  } }), Object.defineProperty(e, "createProtobufRpcClient", { enumerable: !0, get: function() {
    return l.createProtobufRpcClient;
  } }), Object.defineProperty(e, "decodeCosmosSdkDecFromProto", { enumerable: !0, get: function() {
    return l.decodeCosmosSdkDecFromProto;
  } }), Object.defineProperty(e, "QueryClient", { enumerable: !0, get: function() {
    return l.QueryClient;
  } });
  var d = ps;
  Object.defineProperty(e, "isSearchTxQueryArray", { enumerable: !0, get: function() {
    return d.isSearchTxQueryArray;
  } });
  var b = Sm;
  Object.defineProperty(e, "createDefaultAminoConverters", { enumerable: !0, get: function() {
    return b.createDefaultAminoConverters;
  } }), Object.defineProperty(e, "defaultRegistryTypes", { enumerable: !0, get: function() {
    return b.defaultRegistryTypes;
  } }), Object.defineProperty(e, "SigningStargateClient", { enumerable: !0, get: function() {
    return b.SigningStargateClient;
  } });
  var y = de;
  Object.defineProperty(e, "assertIsDeliverTxFailure", { enumerable: !0, get: function() {
    return y.assertIsDeliverTxFailure;
  } }), Object.defineProperty(e, "assertIsDeliverTxSuccess", { enumerable: !0, get: function() {
    return y.assertIsDeliverTxSuccess;
  } }), Object.defineProperty(e, "BroadcastTxError", { enumerable: !0, get: function() {
    return y.BroadcastTxError;
  } }), Object.defineProperty(e, "isDeliverTxFailure", { enumerable: !0, get: function() {
    return y.isDeliverTxFailure;
  } }), Object.defineProperty(e, "isDeliverTxSuccess", { enumerable: !0, get: function() {
    return y.isDeliverTxSuccess;
  } }), Object.defineProperty(e, "StargateClient", { enumerable: !0, get: function() {
    return y.StargateClient;
  } }), Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
    return y.TimeoutError;
  } });
  var P = Et;
  Object.defineProperty(e, "coin", { enumerable: !0, get: function() {
    return P.coin;
  } }), Object.defineProperty(e, "coins", { enumerable: !0, get: function() {
    return P.coins;
  } }), Object.defineProperty(e, "makeCosmoshubPath", { enumerable: !0, get: function() {
    return P.makeCosmoshubPath;
  } }), Object.defineProperty(e, "parseCoins", { enumerable: !0, get: function() {
    return P.parseCoins;
  } });
})(hn);
var xc = {}, _s = {}, Ti = {}, Kt = {};
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.createWasmAminoConverters = Kt.accessTypeToString = Kt.accessTypeFromString = void 0;
const na = gt, Je = j, He = Sd;
function Pf(e) {
  switch (e) {
    case "Unspecified":
      return He.AccessType.ACCESS_TYPE_UNSPECIFIED;
    case "Nobody":
      return He.AccessType.ACCESS_TYPE_NOBODY;
    case "OnlyAddress":
      return He.AccessType.ACCESS_TYPE_ONLY_ADDRESS;
    case "Everybody":
      return He.AccessType.ACCESS_TYPE_EVERYBODY;
    case "AnyOfAddresses":
      return He.AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES;
    default:
      return He.AccessType.UNRECOGNIZED;
  }
}
Kt.accessTypeFromString = Pf;
function kf(e) {
  switch (e) {
    case He.AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "Unspecified";
    case He.AccessType.ACCESS_TYPE_NOBODY:
      return "Nobody";
    case He.AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "OnlyAddress";
    case He.AccessType.ACCESS_TYPE_EVERYBODY:
      return "Everybody";
    case He.AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
      return "AnyOfAddresses";
    case He.AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
Kt.accessTypeToString = kf;
function AA() {
  return {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
      aminoType: "wasm/MsgStoreCode",
      toAmino: ({ sender: e, wasmByteCode: t, instantiatePermission: n }) => ({
        sender: e,
        wasm_byte_code: (0, Je.toBase64)(t),
        instantiate_permission: n ? {
          permission: kf(n.permission),
          address: n.address || void 0,
          addresses: n.addresses.length !== 0 ? n.addresses : void 0
        } : void 0
      }),
      fromAmino: ({ sender: e, wasm_byte_code: t, instantiate_permission: n }) => ({
        sender: e,
        wasmByteCode: (0, Je.fromBase64)(t),
        instantiatePermission: n ? He.AccessConfig.fromPartial({
          permission: Pf(n.permission),
          address: n.address ?? "",
          addresses: n.addresses ?? []
        }) : void 0
      })
    },
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
      aminoType: "wasm/MsgInstantiateContract",
      toAmino: ({ sender: e, codeId: t, label: n, msg: r, funds: s, admin: o }) => ({
        sender: e,
        code_id: t.toString(),
        label: n,
        msg: JSON.parse((0, Je.fromUtf8)(r)),
        funds: s,
        admin: (0, na.omitDefault)(o)
      }),
      fromAmino: ({ sender: e, code_id: t, label: n, msg: r, funds: s, admin: o }) => ({
        sender: e,
        codeId: BigInt(t),
        label: n,
        msg: (0, Je.toUtf8)(JSON.stringify(r)),
        funds: [...s],
        admin: o ?? ""
      })
    },
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
      aminoType: "wasm/MsgInstantiateContract2",
      toAmino: ({ sender: e, codeId: t, label: n, msg: r, funds: s, admin: o, salt: i, fixMsg: a }) => ({
        sender: e,
        code_id: t.toString(),
        label: n,
        msg: JSON.parse((0, Je.fromUtf8)(r)),
        funds: s,
        admin: (0, na.omitDefault)(o),
        salt: (0, Je.toBase64)(i),
        fix_msg: (0, na.omitDefault)(a)
      }),
      fromAmino: ({ sender: e, code_id: t, label: n, msg: r, funds: s, admin: o, salt: i, fix_msg: a }) => ({
        sender: e,
        codeId: BigInt(t),
        label: n,
        msg: (0, Je.toUtf8)(JSON.stringify(r)),
        funds: [...s],
        admin: o ?? "",
        salt: (0, Je.fromBase64)(i),
        fixMsg: a ?? !1
      })
    },
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
      aminoType: "wasm/MsgUpdateAdmin",
      toAmino: ({ sender: e, newAdmin: t, contract: n }) => ({
        sender: e,
        new_admin: t,
        contract: n
      }),
      fromAmino: ({ sender: e, new_admin: t, contract: n }) => ({
        sender: e,
        newAdmin: t,
        contract: n
      })
    },
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
      aminoType: "wasm/MsgClearAdmin",
      toAmino: ({ sender: e, contract: t }) => ({
        sender: e,
        contract: t
      }),
      fromAmino: ({ sender: e, contract: t }) => ({
        sender: e,
        contract: t
      })
    },
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
      aminoType: "wasm/MsgExecuteContract",
      toAmino: ({ sender: e, contract: t, msg: n, funds: r }) => ({
        sender: e,
        contract: t,
        msg: JSON.parse((0, Je.fromUtf8)(n)),
        funds: r
      }),
      fromAmino: ({ sender: e, contract: t, msg: n, funds: r }) => ({
        sender: e,
        contract: t,
        msg: (0, Je.toUtf8)(JSON.stringify(n)),
        funds: [...r]
      })
    },
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
      aminoType: "wasm/MsgMigrateContract",
      toAmino: ({ sender: e, contract: t, codeId: n, msg: r }) => ({
        sender: e,
        contract: t,
        code_id: n.toString(),
        msg: JSON.parse((0, Je.fromUtf8)(r))
      }),
      fromAmino: ({ sender: e, contract: t, code_id: n, msg: r }) => ({
        sender: e,
        contract: t,
        codeId: BigInt(n),
        msg: (0, Je.toUtf8)(JSON.stringify(r))
      })
    }
  };
}
Kt.createWasmAminoConverters = AA;
var ae = {};
Object.defineProperty(ae, "__esModule", { value: !0 });
ae.isMsgExecuteEncodeObject = ae.isMsgMigrateEncodeObject = ae.isMsgClearAdminEncodeObject = ae.isMsgUpdateAdminEncodeObject = ae.isMsgInstantiateContract2EncodeObject = ae.isMsgInstantiateContractEncodeObject = ae.isMsgStoreCodeEncodeObject = ae.wasmTypes = void 0;
const Xt = Ad;
ae.wasmTypes = [
  ["/cosmwasm.wasm.v1.MsgClearAdmin", Xt.MsgClearAdmin],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", Xt.MsgExecuteContract],
  ["/cosmwasm.wasm.v1.MsgMigrateContract", Xt.MsgMigrateContract],
  ["/cosmwasm.wasm.v1.MsgStoreCode", Xt.MsgStoreCode],
  ["/cosmwasm.wasm.v1.MsgInstantiateContract", Xt.MsgInstantiateContract],
  ["/cosmwasm.wasm.v1.MsgInstantiateContract2", Xt.MsgInstantiateContract2],
  ["/cosmwasm.wasm.v1.MsgUpdateAdmin", Xt.MsgUpdateAdmin]
];
function PA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgStoreCode";
}
ae.isMsgStoreCodeEncodeObject = PA;
function kA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgInstantiateContract";
}
ae.isMsgInstantiateContractEncodeObject = kA;
function EA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgInstantiateContract2";
}
ae.isMsgInstantiateContract2EncodeObject = EA;
function TA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgUpdateAdmin";
}
ae.isMsgUpdateAdminEncodeObject = TA;
function OA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgClearAdmin";
}
ae.isMsgClearAdminEncodeObject = OA;
function IA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgMigrateContract";
}
ae.isMsgMigrateEncodeObject = IA;
function BA(e) {
  return e.typeUrl === "/cosmwasm.wasm.v1.MsgExecuteContract";
}
ae.isMsgExecuteEncodeObject = BA;
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.setupWasmExtension = void 0;
const rl = j, Bn = hn, ra = Up;
function NA(e) {
  const t = (0, Bn.createProtobufRpcClient)(e), n = new ra.QueryClientImpl(t);
  return {
    wasm: {
      listCodeInfo: async (r) => {
        const s = {
          pagination: (0, Bn.createPagination)(r)
        };
        return n.Codes(s);
      },
      getCode: async (r) => {
        const s = ra.QueryCodeRequest.fromPartial({ codeId: BigInt(r) });
        return n.Code(s);
      },
      listContractsByCodeId: async (r, s) => {
        const o = ra.QueryContractsByCodeRequest.fromPartial({
          codeId: BigInt(r),
          pagination: (0, Bn.createPagination)(s)
        });
        return n.ContractsByCode(o);
      },
      listContractsByCreator: async (r, s) => {
        const o = {
          creatorAddress: r,
          pagination: (0, Bn.createPagination)(s)
        };
        return n.ContractsByCreator(o);
      },
      getContractInfo: async (r) => {
        const s = { address: r };
        return n.ContractInfo(s);
      },
      getContractCodeHistory: async (r, s) => {
        const o = {
          address: r,
          pagination: (0, Bn.createPagination)(s)
        };
        return n.ContractHistory(o);
      },
      getAllContractState: async (r, s) => {
        const o = {
          address: r,
          pagination: (0, Bn.createPagination)(s)
        };
        return n.AllContractState(o);
      },
      queryContractRaw: async (r, s) => {
        const o = { address: r, queryData: s };
        return n.RawContractState(o);
      },
      queryContractSmart: async (r, s) => {
        const o = { address: r, queryData: (0, rl.toUtf8)(JSON.stringify(s)) }, { data: i } = await n.SmartContractState(o);
        let a;
        try {
          a = (0, rl.fromUtf8)(i);
        } catch (c) {
          throw new Error(`Could not UTF-8 decode smart query response from contract: ${c}`);
        }
        try {
          return JSON.parse(a);
        } catch (c) {
          throw new Error(`Could not JSON parse smart query response from contract: ${c}`);
        }
      }
    }
  };
}
Oi.setupWasmExtension = NA;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.setupWasmExtension = e.wasmTypes = e.isMsgUpdateAdminEncodeObject = e.isMsgStoreCodeEncodeObject = e.isMsgMigrateEncodeObject = e.isMsgInstantiateContractEncodeObject = e.isMsgInstantiateContract2EncodeObject = e.isMsgExecuteEncodeObject = e.isMsgClearAdminEncodeObject = e.createWasmAminoConverters = void 0;
  var t = Kt;
  Object.defineProperty(e, "createWasmAminoConverters", { enumerable: !0, get: function() {
    return t.createWasmAminoConverters;
  } });
  var n = ae;
  Object.defineProperty(e, "isMsgClearAdminEncodeObject", { enumerable: !0, get: function() {
    return n.isMsgClearAdminEncodeObject;
  } }), Object.defineProperty(e, "isMsgExecuteEncodeObject", { enumerable: !0, get: function() {
    return n.isMsgExecuteEncodeObject;
  } }), Object.defineProperty(e, "isMsgInstantiateContract2EncodeObject", { enumerable: !0, get: function() {
    return n.isMsgInstantiateContract2EncodeObject;
  } }), Object.defineProperty(e, "isMsgInstantiateContractEncodeObject", { enumerable: !0, get: function() {
    return n.isMsgInstantiateContractEncodeObject;
  } }), Object.defineProperty(e, "isMsgMigrateEncodeObject", { enumerable: !0, get: function() {
    return n.isMsgMigrateEncodeObject;
  } }), Object.defineProperty(e, "isMsgStoreCodeEncodeObject", { enumerable: !0, get: function() {
    return n.isMsgStoreCodeEncodeObject;
  } }), Object.defineProperty(e, "isMsgUpdateAdminEncodeObject", { enumerable: !0, get: function() {
    return n.isMsgUpdateAdminEncodeObject;
  } }), Object.defineProperty(e, "wasmTypes", { enumerable: !0, get: function() {
    return n.wasmTypes;
  } });
  var r = Oi;
  Object.defineProperty(e, "setupWasmExtension", { enumerable: !0, get: function() {
    return r.setupWasmExtension;
  } });
})(Ti);
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.CosmWasmClient = void 0;
const Nn = j, sl = se, Ot = hn, ol = gs, Mn = te, MA = _d, sa = Sd, RA = Ti;
class yo {
  /**
   * Creates an instance by connecting to the given CometBFT RPC endpoint.
   *
   * This uses auto-detection to decide between a CometBFT 0.38, Tendermint 0.37 and 0.34 client.
   * To set the Comet client explicitly, use `create`.
   */
  static async connect(t) {
    const n = await (0, ol.connectComet)(t);
    return yo.create(n);
  }
  /**
   * Creates an instance from a manually created Comet client.
   * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
   */
  static async create(t) {
    return new yo(t);
  }
  constructor(t) {
    this.codesCache = /* @__PURE__ */ new Map(), t && (this.cometClient = t, this.queryClient = Ot.QueryClient.withExtensions(t, Ot.setupAuthExtension, Ot.setupBankExtension, RA.setupWasmExtension, Ot.setupTxExtension));
  }
  getCometClient() {
    return this.cometClient;
  }
  forceGetCometClient() {
    if (!this.cometClient)
      throw new Error("Comet client not available. You cannot use online functionality in offline mode.");
    return this.cometClient;
  }
  getQueryClient() {
    return this.queryClient;
  }
  forceGetQueryClient() {
    if (!this.queryClient)
      throw new Error("Query client not available. You cannot use online functionality in offline mode.");
    return this.queryClient;
  }
  async getChainId() {
    if (!this.chainId) {
      const n = (await this.forceGetCometClient().status()).nodeInfo.network;
      if (!n)
        throw new Error("Chain ID must not be empty");
      this.chainId = n;
    }
    return this.chainId;
  }
  async getHeight() {
    return (await this.forceGetCometClient().status()).syncInfo.latestBlockHeight;
  }
  async getAccount(t) {
    try {
      const n = await this.forceGetQueryClient().auth.account(t);
      return n ? (0, Ot.accountFromAny)(n) : null;
    } catch (n) {
      if (/rpc error: code = NotFound/i.test(n.toString()))
        return null;
      throw n;
    }
  }
  async getSequence(t) {
    const n = await this.getAccount(t);
    if (!n)
      throw new Error(`Account '${t}' does not exist on chain. Send some tokens there before trying to query sequence.`);
    return {
      accountNumber: n.accountNumber,
      sequence: n.sequence
    };
  }
  async getBlock(t) {
    const n = await this.forceGetCometClient().block(t);
    return {
      id: (0, Nn.toHex)(n.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new sl.Uint53(n.block.header.version.block).toString(),
          app: new sl.Uint53(n.block.header.version.app).toString()
        },
        height: n.block.header.height,
        chainId: n.block.header.chainId,
        time: (0, ol.toRfc3339WithNanoseconds)(n.block.header.time)
      },
      txs: n.block.txs
    };
  }
  async getBalance(t, n) {
    return this.forceGetQueryClient().bank.balance(t, n);
  }
  async getTx(t) {
    return (await this.txsQuery(`tx.hash='${t}'`))[0] ?? null;
  }
  async searchTx(t) {
    let n;
    if (typeof t == "string")
      n = t;
    else if ((0, Ot.isSearchTxQueryArray)(t))
      n = t.map((r) => typeof r.value == "string" ? `${r.key}='${r.value}'` : `${r.key}=${r.value}`).join(" AND ");
    else
      throw new Error("Got unsupported query type. See CosmJS 0.31 CHANGELOG for API breaking changes here.");
    return this.txsQuery(n);
  }
  disconnect() {
    this.cometClient && this.cometClient.disconnect();
  }
  /**
   * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
   *
   * If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
   * usually needs to check for execution success or failure.
   */
  // NOTE: This method is tested against slow chains and timeouts in the @cosmjs/stargate package.
  // Make sure it is kept in sync!
  async broadcastTx(t, n = 6e4, r = 3e3) {
    let s = !1;
    const o = setTimeout(() => {
      s = !0;
    }, n), i = async (c) => {
      if (s)
        throw new Ot.TimeoutError(`Transaction with ID ${c} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${n / 1e3} seconds.`, c);
      await (0, Mn.sleep)(r);
      const u = await this.getTx(c);
      return u ? {
        code: u.code,
        height: u.height,
        txIndex: u.txIndex,
        rawLog: u.rawLog,
        transactionHash: c,
        events: u.events,
        msgResponses: u.msgResponses,
        gasUsed: u.gasUsed,
        gasWanted: u.gasWanted
      } : i(c);
    }, a = await this.broadcastTxSync(t);
    return new Promise((c, u) => i(a).then((l) => {
      clearTimeout(o), c(l);
    }, (l) => {
      clearTimeout(o), u(l);
    }));
  }
  /**
   * Broadcasts a signed transaction to the network without monitoring it.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is broadcasted, a `string` containing the hash of the transaction is returned. The caller then
   * usually needs to check if the transaction was included in a block and was successful.
   *
   * @returns Returns the hash of the transaction
   */
  async broadcastTxSync(t) {
    const n = await this.forceGetCometClient().broadcastTxSync({ tx: t });
    return n.code ? Promise.reject(new Ot.BroadcastTxError(n.code, n.codespace ?? "", n.log)) : (0, Nn.toHex)(n.hash).toUpperCase();
  }
  /**
   * getCodes() returns all codes and is just looping through all pagination pages.
   *
   * This is potentially inefficient and advanced apps should consider creating
   * their own query client to handle pagination together with the app's screens.
   */
  async getCodes() {
    const t = [];
    let n;
    do {
      const { codeInfos: r, pagination: s } = await this.forceGetQueryClient().wasm.listCodeInfo(n), o = r || [];
      t.push(...o), n = s == null ? void 0 : s.nextKey;
    } while ((n == null ? void 0 : n.length) !== 0);
    return t.map((r) => ((0, Mn.assert)(r.creator && r.codeId && r.dataHash, "entry incomplete"), {
      id: Number(r.codeId),
      creator: r.creator,
      checksum: (0, Nn.toHex)(r.dataHash)
    }));
  }
  async getCodeDetails(t) {
    const n = this.codesCache.get(t);
    if (n)
      return n;
    const { codeInfo: r, data: s } = await this.forceGetQueryClient().wasm.getCode(t);
    (0, Mn.assert)(r && r.codeId && r.creator && r.dataHash && s, "codeInfo missing or incomplete");
    const o = {
      id: Number(r.codeId),
      creator: r.creator,
      checksum: (0, Nn.toHex)(r.dataHash),
      data: s
    };
    return this.codesCache.set(t, o), o;
  }
  /**
   * getContracts() returns all contract instances for one code and is just looping through all pagination pages.
   *
   * This is potentially inefficient and advanced apps should consider creating
   * their own query client to handle pagination together with the app's screens.
   */
  async getContracts(t) {
    const n = [];
    let r;
    do {
      const { contracts: s, pagination: o } = await this.forceGetQueryClient().wasm.listContractsByCodeId(t, r);
      n.push(...s), r = o == null ? void 0 : o.nextKey;
    } while ((r == null ? void 0 : r.length) !== 0 && r !== void 0);
    return n;
  }
  /**
   * Returns a list of contract addresses created by the given creator.
   * This just loops through all pagination pages.
   */
  async getContractsByCreator(t) {
    const n = [];
    let r;
    do {
      const { contractAddresses: s, pagination: o } = await this.forceGetQueryClient().wasm.listContractsByCreator(t, r);
      n.push(...s), r = o == null ? void 0 : o.nextKey;
    } while ((r == null ? void 0 : r.length) !== 0 && r !== void 0);
    return n;
  }
  /**
   * Throws an error if no contract was found at the address
   */
  async getContract(t) {
    const { address: n, contractInfo: r } = await this.forceGetQueryClient().wasm.getContractInfo(t);
    if (!r)
      throw new Error(`No contract found at address "${t}"`);
    return (0, Mn.assert)(n, "address missing"), (0, Mn.assert)(r.codeId && r.creator && r.label, "contractInfo incomplete"), {
      address: n,
      codeId: Number(r.codeId),
      creator: r.creator,
      admin: r.admin || void 0,
      label: r.label,
      ibcPortId: r.ibcPortId || void 0
    };
  }
  /**
   * Throws an error if no contract was found at the address
   */
  async getContractCodeHistory(t) {
    const n = await this.forceGetQueryClient().wasm.getContractCodeHistory(t);
    if (!n)
      throw new Error(`No contract history found for address "${t}"`);
    const r = {
      [sa.ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT]: "Init",
      [sa.ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS]: "Genesis",
      [sa.ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE]: "Migrate"
    };
    return (n.entries || []).map((s) => ((0, Mn.assert)(s.operation && s.codeId && s.msg), {
      operation: r[s.operation],
      codeId: Number(s.codeId),
      msg: JSON.parse((0, Nn.fromUtf8)(s.msg))
    }));
  }
  /**
   * Returns the data at the key if present (raw contract dependent storage data)
   * or null if no data at this key.
   *
   * Promise is rejected when contract does not exist.
   */
  async queryContractRaw(t, n) {
    await this.getContract(t);
    const { data: r } = await this.forceGetQueryClient().wasm.queryContractRaw(t, n);
    return r ?? null;
  }
  /**
   * Makes a smart query on the contract, returns the parsed JSON document.
   *
   * Promise is rejected when contract does not exist.
   * Promise is rejected for invalid query format.
   * Promise is rejected for invalid response format.
   */
  async queryContractSmart(t, n) {
    try {
      return await this.forceGetQueryClient().wasm.queryContractSmart(t, n);
    } catch (r) {
      throw r instanceof Error && r.message.startsWith("not found: contract") ? new Error(`No contract found at address "${t}"`) : r;
    }
  }
  async txsQuery(t) {
    return (await this.forceGetCometClient().txSearchAll({ query: t })).txs.map((r) => {
      const s = MA.TxMsgData.decode(r.result.data ?? new Uint8Array());
      return {
        height: r.height,
        txIndex: r.index,
        hash: (0, Nn.toHex)(r.hash).toUpperCase(),
        code: r.result.code,
        events: r.result.events.map(Ot.fromTendermintEvent),
        rawLog: r.result.log || "",
        tx: r.tx,
        msgResponses: s.msgResponses,
        gasUsed: r.result.gasUsed,
        gasWanted: r.result.gasWanted
      };
    });
  }
}
_s.CosmWasmClient = yo;
var vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.fromBinary = vr.toBinary = void 0;
const ho = j;
function jA(e) {
  return (0, ho.toBase64)((0, ho.toUtf8)(JSON.stringify(e)));
}
vr.toBinary = jA;
function DA(e) {
  return JSON.parse((0, ho.fromUtf8)((0, ho.fromBase64)(e)));
}
vr.fromBinary = DA;
var wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.instantiate2Address = wr._instantiate2AddressIntermediate = void 0;
const il = be, Jr = j, UA = se, $A = te;
function xA(e, t) {
  return new il.Sha256((0, il.sha256)((0, Jr.toAscii)(e))).update(t).digest();
}
function Ws(e) {
  return UA.Uint64.fromNumber(e).toBytesBigEndian();
}
function Ef(e, t, n, r, s) {
  (0, $A.assert)(e.length === 32);
  const o = (0, Jr.fromBech32)(t).data, i = typeof r == "string" ? (0, Jr.toUtf8)(r) : new Uint8Array();
  if (n.length < 1 || n.length > 64)
    throw new Error("Salt must be between 1 and 64 bytes");
  const a = new Uint8Array([
    ...(0, Jr.toAscii)("wasm"),
    0,
    ...Ws(e.length),
    ...e,
    ...Ws(o.length),
    ...o,
    ...Ws(n.length),
    ...n,
    ...Ws(i.length),
    ...i
  ]), c = xA("module", a), u = (0, Jr.toBech32)(s, c);
  return { key: a, addressData: c, address: u };
}
wr._instantiate2AddressIntermediate = Ef;
function HA(e, t, n, r) {
  return Ef(e, t, n, null, r).address;
}
wr.instantiate2Address = HA;
var _r = {}, qA = h && h.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.SigningCosmWasmClient = _r.findAttribute = void 0;
const Js = gt, FA = be, Zt = j, en = se, It = Et, ie = hn, VA = gs, qr = te, LA = sc, al = ic, WA = is, Gs = Rt, tn = Ad, JA = qA($p), GA = _s, cl = Ti;
function Zs(e, t, n) {
  const s = e.filter((o) => o.type === t).flatMap((o) => o.attributes).find((o) => o.key === n);
  if (!s)
    throw new Error(`Could not find attribute '${n}' in first event of type '${t}' in first log.`);
  return s;
}
_r.findAttribute = Zs;
function nn(e) {
  return `Error when broadcasting tx ${e.transactionHash} at height ${e.height}. Code: ${e.code}; Raw log: ${e.rawLog}`;
}
class Qr extends GA.CosmWasmClient {
  /**
   * Creates an instance by connecting to the given CometBFT RPC endpoint.
   *
   * This uses auto-detection to decide between a CometBFT 0.38, Tendermint 0.37 and 0.34 client.
   * To set the Comet client explicitly, use `createWithSigner`.
   */
  static async connectWithSigner(t, n, r = {}) {
    const s = await (0, VA.connectComet)(t);
    return Qr.createWithSigner(s, n, r);
  }
  /**
   * Creates an instance from a manually created Comet client.
   * Use this to use `Comet38Client` or `Tendermint37Client` instead of `Tendermint34Client`.
   */
  static async createWithSigner(t, n, r = {}) {
    return new Qr(t, n, r);
  }
  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  static async offline(t, n = {}) {
    return new Qr(void 0, t, n);
  }
  constructor(t, n, r) {
    super(t);
    const { registry: s = new It.Registry([...ie.defaultRegistryTypes, ...cl.wasmTypes]), aminoTypes: o = new ie.AminoTypes({
      ...(0, ie.createDefaultAminoConverters)(),
      ...(0, cl.createWasmAminoConverters)()
    }) } = r;
    this.registry = s, this.aminoTypes = o, this.signer = n, this.broadcastTimeoutMs = r.broadcastTimeoutMs, this.broadcastPollIntervalMs = r.broadcastPollIntervalMs, this.gasPrice = r.gasPrice;
  }
  async simulate(t, n, r) {
    const s = n.map((u) => this.registry.encodeAsAny(u)), o = (await this.signer.getAccounts()).find((u) => u.address === t);
    if (!o)
      throw new Error("Failed to retrieve account from signer");
    const i = (0, Js.encodeSecp256k1Pubkey)(o.pubkey), { sequence: a } = await this.getSequence(t), { gasInfo: c } = await this.forceGetQueryClient().tx.simulate(s, r, i, a);
    return (0, qr.assertDefined)(c), en.Uint53.fromString(c.gasUsed.toString()).toNumber();
  }
  /** Uploads code and returns a receipt, including the code ID */
  async upload(t, n, r, s = "", o) {
    const i = JA.default.gzip(n, { level: 9 }), a = {
      typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
      value: tn.MsgStoreCode.fromPartial({
        sender: t,
        wasmByteCode: i,
        instantiatePermission: o
      })
    }, c = r == "auto" ? 1.1 : r, u = await this.signAndBroadcast(t, [a], c, s);
    if ((0, ie.isDeliverTxFailure)(u))
      throw new Error(nn(u));
    const l = Zs(u.events, "store_code", "code_id");
    return {
      checksum: (0, Zt.toHex)((0, FA.sha256)(n)),
      originalSize: n.length,
      compressedSize: i.length,
      codeId: Number.parseInt(l.value, 10),
      logs: ie.logs.parseRawLog(u.rawLog),
      height: u.height,
      transactionHash: u.transactionHash,
      events: u.events,
      gasWanted: u.gasWanted,
      gasUsed: u.gasUsed
    };
  }
  async instantiate(t, n, r, s, o, i = {}) {
    const a = {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
      value: tn.MsgInstantiateContract.fromPartial({
        sender: t,
        codeId: BigInt(new en.Uint53(n).toString()),
        label: s,
        msg: (0, Zt.toUtf8)(JSON.stringify(r)),
        funds: [...i.funds || []],
        admin: i.admin
      })
    }, c = await this.signAndBroadcast(t, [a], o, i.memo);
    if ((0, ie.isDeliverTxFailure)(c))
      throw new Error(nn(c));
    return {
      contractAddress: Zs(c.events, "instantiate", "_contract_address").value,
      logs: ie.logs.parseRawLog(c.rawLog),
      height: c.height,
      transactionHash: c.transactionHash,
      events: c.events,
      gasWanted: c.gasWanted,
      gasUsed: c.gasUsed
    };
  }
  async instantiate2(t, n, r, s, o, i, a = {}) {
    const c = {
      typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
      value: tn.MsgInstantiateContract2.fromPartial({
        sender: t,
        codeId: BigInt(new en.Uint53(n).toString()),
        label: o,
        msg: (0, Zt.toUtf8)(JSON.stringify(s)),
        funds: [...a.funds || []],
        admin: a.admin,
        salt: r,
        fixMsg: !1
      })
    }, u = await this.signAndBroadcast(t, [c], i, a.memo);
    if ((0, ie.isDeliverTxFailure)(u))
      throw new Error(nn(u));
    return {
      contractAddress: Zs(u.events, "instantiate", "_contract_address").value,
      logs: ie.logs.parseRawLog(u.rawLog),
      height: u.height,
      transactionHash: u.transactionHash,
      events: u.events,
      gasWanted: u.gasWanted,
      gasUsed: u.gasUsed
    };
  }
  async updateAdmin(t, n, r, s, o = "") {
    const i = {
      typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
      value: tn.MsgUpdateAdmin.fromPartial({
        sender: t,
        contract: n,
        newAdmin: r
      })
    }, a = await this.signAndBroadcast(t, [i], s, o);
    if ((0, ie.isDeliverTxFailure)(a))
      throw new Error(nn(a));
    return {
      logs: ie.logs.parseRawLog(a.rawLog),
      height: a.height,
      transactionHash: a.transactionHash,
      events: a.events,
      gasWanted: a.gasWanted,
      gasUsed: a.gasUsed
    };
  }
  async clearAdmin(t, n, r, s = "") {
    const o = {
      typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
      value: tn.MsgClearAdmin.fromPartial({
        sender: t,
        contract: n
      })
    }, i = await this.signAndBroadcast(t, [o], r, s);
    if ((0, ie.isDeliverTxFailure)(i))
      throw new Error(nn(i));
    return {
      logs: ie.logs.parseRawLog(i.rawLog),
      height: i.height,
      transactionHash: i.transactionHash,
      events: i.events,
      gasWanted: i.gasWanted,
      gasUsed: i.gasUsed
    };
  }
  async migrate(t, n, r, s, o, i = "") {
    const a = {
      typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
      value: tn.MsgMigrateContract.fromPartial({
        sender: t,
        contract: n,
        codeId: BigInt(new en.Uint53(r).toString()),
        msg: (0, Zt.toUtf8)(JSON.stringify(s))
      })
    }, c = await this.signAndBroadcast(t, [a], o, i);
    if ((0, ie.isDeliverTxFailure)(c))
      throw new Error(nn(c));
    return {
      logs: ie.logs.parseRawLog(c.rawLog),
      height: c.height,
      transactionHash: c.transactionHash,
      events: c.events,
      gasWanted: c.gasWanted,
      gasUsed: c.gasUsed
    };
  }
  async execute(t, n, r, s, o = "", i) {
    const a = {
      contractAddress: n,
      msg: r,
      funds: i
    };
    return this.executeMultiple(t, [a], s, o);
  }
  /**
   * Like `execute` but allows executing multiple messages in one transaction.
   */
  async executeMultiple(t, n, r, s = "") {
    const o = n.map((a) => ({
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: tn.MsgExecuteContract.fromPartial({
        sender: t,
        contract: a.contractAddress,
        msg: (0, Zt.toUtf8)(JSON.stringify(a.msg)),
        funds: [...a.funds || []]
      })
    })), i = await this.signAndBroadcast(t, o, r, s);
    if ((0, ie.isDeliverTxFailure)(i))
      throw new Error(nn(i));
    return {
      logs: ie.logs.parseRawLog(i.rawLog),
      height: i.height,
      transactionHash: i.transactionHash,
      events: i.events,
      gasWanted: i.gasWanted,
      gasUsed: i.gasUsed
    };
  }
  async sendTokens(t, n, r, s, o = "") {
    const i = {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: {
        fromAddress: t,
        toAddress: n,
        amount: [...r]
      }
    };
    return this.signAndBroadcast(t, [i], s, o);
  }
  async delegateTokens(t, n, r, s, o = "") {
    const i = {
      typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
      value: al.MsgDelegate.fromPartial({ delegatorAddress: t, validatorAddress: n, amount: r })
    };
    return this.signAndBroadcast(t, [i], s, o);
  }
  async undelegateTokens(t, n, r, s, o = "") {
    const i = {
      typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
      value: al.MsgUndelegate.fromPartial({ delegatorAddress: t, validatorAddress: n, amount: r })
    };
    return this.signAndBroadcast(t, [i], s, o);
  }
  async withdrawRewards(t, n, r, s = "") {
    const o = {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: LA.MsgWithdrawDelegatorReward.fromPartial({ delegatorAddress: t, validatorAddress: n })
    };
    return this.signAndBroadcast(t, [o], r, s);
  }
  /**
   * Creates a transaction with the given messages, fee, memo and timeout height. Then signs and broadcasts the transaction.
   *
   * @param signerAddress The address that will sign transactions using this instance. The signer must be able to sign with this address.
   * @param messages
   * @param fee
   * @param memo
   * @param timeoutHeight (optional) timeout height to prevent the tx from being committed past a certain height
   */
  async signAndBroadcast(t, n, r, s = "", o) {
    let i;
    if (r == "auto" || typeof r == "number") {
      (0, qr.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
      const u = await this.simulate(t, n, s), l = typeof r == "number" ? r : 1.4;
      i = (0, ie.calculateFee)(Math.round(u * l), this.gasPrice);
    } else
      i = r;
    const a = await this.sign(t, n, i, s, void 0, o), c = Gs.TxRaw.encode(a).finish();
    return this.broadcastTx(c, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
  }
  /**
   * Creates a transaction with the given messages, fee, memo and timeout height. Then signs and broadcasts the transaction.
   *
   * This method is useful if you want to send a transaction in broadcast,
   * without waiting for it to be placed inside a block, because for example
   * I would like to receive the hash to later track the transaction with another tool.
   *
   * @param signerAddress The address that will sign transactions using this instance. The signer must be able to sign with this address.
   * @param messages
   * @param fee
   * @param memo
   * @param timeoutHeight (optional) timeout height to prevent the tx from being committed past a certain height
   *
   * @returns Returns the hash of the transaction
   */
  async signAndBroadcastSync(t, n, r, s = "", o) {
    let i;
    if (r == "auto" || typeof r == "number") {
      (0, qr.assertDefined)(this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
      const u = await this.simulate(t, n, s), l = typeof r == "number" ? r : 1.3;
      i = (0, ie.calculateFee)(Math.round(u * l), this.gasPrice);
    } else
      i = r;
    const a = await this.sign(t, n, i, s, void 0, o), c = Gs.TxRaw.encode(a).finish();
    return this.broadcastTxSync(c);
  }
  async sign(t, n, r, s, o, i) {
    let a;
    if (o)
      a = o;
    else {
      const { accountNumber: c, sequence: u } = await this.getSequence(t), l = await this.getChainId();
      a = {
        accountNumber: c,
        sequence: u,
        chainId: l
      };
    }
    return (0, It.isOfflineDirectSigner)(this.signer) ? this.signDirect(t, n, r, s, a, i) : this.signAmino(t, n, r, s, a, i);
  }
  async signAmino(t, n, r, s, { accountNumber: o, sequence: i, chainId: a }, c) {
    (0, qr.assert)(!(0, It.isOfflineDirectSigner)(this.signer));
    const u = (await this.signer.getAccounts()).find((_) => _.address === t);
    if (!u)
      throw new Error("Failed to retrieve account from signer");
    const l = (0, It.encodePubkey)((0, Js.encodeSecp256k1Pubkey)(u.pubkey)), d = WA.SignMode.SIGN_MODE_LEGACY_AMINO_JSON, b = n.map((_) => this.aminoTypes.toAmino(_)), y = (0, Js.makeSignDoc)(b, r, a, s, o, i, c), { signature: P, signed: v } = await this.signer.signAmino(t, y), m = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: v.msgs.map((_) => this.aminoTypes.fromAmino(_)),
        memo: v.memo,
        timeoutHeight: c
      }
    }, S = this.registry.encode(m), D = en.Int53.fromString(v.fee.gas).toNumber(), N = en.Int53.fromString(v.sequence).toNumber(), Y = (0, It.makeAuthInfoBytes)([{ pubkey: l, sequence: N }], v.fee.amount, D, v.fee.granter, v.fee.payer, d);
    return Gs.TxRaw.fromPartial({
      bodyBytes: S,
      authInfoBytes: Y,
      signatures: [(0, Zt.fromBase64)(P.signature)]
    });
  }
  async signDirect(t, n, r, s, { accountNumber: o, sequence: i, chainId: a }, c) {
    (0, qr.assert)((0, It.isOfflineDirectSigner)(this.signer));
    const u = (await this.signer.getAccounts()).find((D) => D.address === t);
    if (!u)
      throw new Error("Failed to retrieve account from signer");
    const l = (0, It.encodePubkey)((0, Js.encodeSecp256k1Pubkey)(u.pubkey)), d = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: n,
        memo: s,
        timeoutHeight: c
      }
    }, b = this.registry.encode(d), y = en.Int53.fromString(r.gas).toNumber(), P = (0, It.makeAuthInfoBytes)([{ pubkey: l, sequence: i }], r.amount, y, r.granter, r.payer), v = (0, It.makeSignDoc)(b, P, a, o), { signature: m, signed: S } = await this.signer.signDirect(t, v);
    return Gs.TxRaw.fromPartial({
      bodyBytes: S.bodyBytes,
      authInfoBytes: S.authInfoBytes,
      signatures: [(0, Zt.fromBase64)(m.signature)]
    });
  }
}
_r.SigningCosmWasmClient = Qr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.SigningCosmWasmClient = e.wasmTypes = e.setupWasmExtension = e.isMsgUpdateAdminEncodeObject = e.isMsgStoreCodeEncodeObject = e.isMsgMigrateEncodeObject = e.isMsgInstantiateContractEncodeObject = e.isMsgInstantiateContract2EncodeObject = e.isMsgExecuteEncodeObject = e.isMsgClearAdminEncodeObject = e.createWasmAminoConverters = e.instantiate2Address = e._instantiate2AddressIntermediate = e.toBinary = e.fromBinary = e.CosmWasmClient = void 0;
  var t = _s;
  Object.defineProperty(e, "CosmWasmClient", { enumerable: !0, get: function() {
    return t.CosmWasmClient;
  } });
  var n = vr;
  Object.defineProperty(e, "fromBinary", { enumerable: !0, get: function() {
    return n.fromBinary;
  } }), Object.defineProperty(e, "toBinary", { enumerable: !0, get: function() {
    return n.toBinary;
  } });
  var r = wr;
  Object.defineProperty(e, "_instantiate2AddressIntermediate", { enumerable: !0, get: function() {
    return r._instantiate2AddressIntermediate;
  } }), Object.defineProperty(e, "instantiate2Address", { enumerable: !0, get: function() {
    return r.instantiate2Address;
  } });
  var s = Ti;
  Object.defineProperty(e, "createWasmAminoConverters", { enumerable: !0, get: function() {
    return s.createWasmAminoConverters;
  } }), Object.defineProperty(e, "isMsgClearAdminEncodeObject", { enumerable: !0, get: function() {
    return s.isMsgClearAdminEncodeObject;
  } }), Object.defineProperty(e, "isMsgExecuteEncodeObject", { enumerable: !0, get: function() {
    return s.isMsgExecuteEncodeObject;
  } }), Object.defineProperty(e, "isMsgInstantiateContract2EncodeObject", { enumerable: !0, get: function() {
    return s.isMsgInstantiateContract2EncodeObject;
  } }), Object.defineProperty(e, "isMsgInstantiateContractEncodeObject", { enumerable: !0, get: function() {
    return s.isMsgInstantiateContractEncodeObject;
  } }), Object.defineProperty(e, "isMsgMigrateEncodeObject", { enumerable: !0, get: function() {
    return s.isMsgMigrateEncodeObject;
  } }), Object.defineProperty(e, "isMsgStoreCodeEncodeObject", { enumerable: !0, get: function() {
    return s.isMsgStoreCodeEncodeObject;
  } }), Object.defineProperty(e, "isMsgUpdateAdminEncodeObject", { enumerable: !0, get: function() {
    return s.isMsgUpdateAdminEncodeObject;
  } }), Object.defineProperty(e, "setupWasmExtension", { enumerable: !0, get: function() {
    return s.setupWasmExtension;
  } }), Object.defineProperty(e, "wasmTypes", { enumerable: !0, get: function() {
    return s.wasmTypes;
  } });
  var o = _r;
  Object.defineProperty(e, "SigningCosmWasmClient", { enumerable: !0, get: function() {
    return o.SigningCosmWasmClient;
  } });
})(xc);
class Hc extends tg {
}
const $e = class $e extends Hc {
  // Get the wrapped version of an asset created on wormchain
  async getWrappedAsset(t) {
    const n = await this.getTokenBridge(), r = new Te(await n.getWrappedAsset(t)), s = $i.encode(r.toUniversalAddress().toUint8Array()), o = `factory/${$e.gatewayAddress(this.network)}/${s}`;
    return new Te(o);
  }
  // Gets the the source channel for outgoing transfers from wormchain
  static getGatewaySourceChannel(t, n) {
    const r = Sr.getIbcChannels(t, n);
    if (!r)
      throw new Error("No channels configured for chain " + n);
    if (!($e.chain in r))
      throw new Error("No channel configured for chain " + n);
    return r[$e.chain];
  }
  // derive the ics20 token denom from the
  // wrapped denom and destination channel
  static deriveIbcDenom(t, n, r) {
    const s = this.getGatewaySourceChannel(t, n), o = xp.encode(`${kd}/${s}/${r}`), i = tc.encode(Hp(o));
    return new Te(`ibc/${i.toUpperCase()}`);
  }
  // Util to convert a factory address to a CW20 address
  // expects the denom to be base58 encoded
  // e.g. factoryToCw20("wormhole", "8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA")
  static factoryToCw20(t) {
    if (t.denomType !== "factory")
      throw new Error("Invalid address type");
    return new Te(Te.encode(t.domain, $i.decode(t.denom)));
  }
  static cw20ToFactory(t, n) {
    const r = $i.encode(n.toUniversalAddress().toUint8Array());
    return new Te(`factory/${$e.gatewayAddress(t)}/${r}`);
  }
  static makeTransferMsg(t, n, r = 0n, s, o) {
    const i = nc.encode(n.toUint8Array()), a = {
      chain: qp(t),
      recipient: i,
      fee: r.toString(),
      nonce: o ?? Math.round(Math.random() * 1e5)
    };
    return s ? {
      gateway_transfer_with_payload: { ...a, payload: s }
    } : { gateway_transfer: { ...a } };
  }
};
E($e, "chain", "Wormchain"), E($e, "gatewayAddress", (t) => Ui[t].chains[$e.chain].contracts.gateway), E($e, "tokenBridgeAddress", (t) => Ui[t].chains[$e.chain].contracts.tokenBridge), E($e, "coreAddress", (t) => Ui[t].chains[$e.chain].contracts.coreBridge);
let Ka = $e;
const Ke = class Ke extends ng {
  constructor(t, n) {
    super(t, n ?? Fp(t, Ke._platform));
  }
  async getRpc(t) {
    if (t in this.config && this.config[t].rpc)
      return await xc.CosmWasmClient.connect(this.config[t].rpc);
    throw new Error("No configuration available for chain: " + t);
  }
  getChain(t, n) {
    if (!(t in this.config))
      throw new Error("No configuration available for chain: " + t);
    return new Hc(t, this, n);
  }
  // cached channels from config if available
  static getIbcChannels(t, n) {
    return wu.has(t, n) ? wu.get(t, n) : null;
  }
  static nativeTokenId(t, n) {
    if (!this.isSupportedChain(n))
      throw new Error(`invalid chain for CosmWasm: ${n}`);
    return Vp.chainAddress(n, this.getNativeDenom(t, n));
  }
  static isSupportedChain(t) {
    return Lp(t) === Ke._platform;
  }
  static isNativeTokenId(t, n, r) {
    return !this.isSupportedChain(n) || r.chain !== n ? !1 : this.nativeTokenId(t, n) == r;
  }
  static async getDecimals(t, n, r) {
    if (xi(r))
      return Wp(Ke._platform);
    let s = new Te(r).toString();
    s.startsWith("factory") && (s = Ka.factoryToCw20(new Te(s)).toString());
    const { decimals: o } = await n.queryContractSmart(s, {
      token_info: {}
    });
    return o;
  }
  static async getBalance(t, n, r, s) {
    if (xi(s)) {
      const [a, c] = await Ke.chainFromRpc(n), { amount: u } = await n.getBalance(r, this.getNativeDenom(a, t));
      return BigInt(u);
    }
    const o = new Te(s).toString(), { amount: i } = await n.getBalance(r, o);
    return BigInt(i);
  }
  static async getBalances(t, n, r, s) {
    const i = await Ke.getQueryClient(n).bank.allBalances(r), [a, c] = await Ke.chainFromRpc(n);
    return s.map((l) => {
      const d = xi(l) ? this.getNativeDenom(a, t) : new Te(l).toString(), b = i.find((P) => P.denom === d), y = b ? BigInt(b.amount) : null;
      return { [d]: y };
    }).reduce((l, d) => Object.assign(l, d), {});
  }
  static getNativeDenom(t, n) {
    return sg.get(t, n);
  }
  static async sendWait(t, n, r) {
    const s = [];
    for (const o of r) {
      const i = await n.broadcastTx(o);
      if (i.code !== 0)
        throw new Error(`Error sending transaction (${i.transactionHash}): ${i.rawLog}`);
      s.push(i.transactionHash);
    }
    return s;
  }
  static async getLatestBlock(t) {
    return await t.getHeight();
  }
  static async getLatestFinalizedBlock(t) {
    throw new Error("not implemented");
  }
  static chainFromChainId(t) {
    const n = Jp(Ke._platform, t);
    if (n === void 0)
      throw new Error(`Unknown Cosmwasm chainId ${t}`);
    const [r, s] = n;
    return [r, s];
  }
  static async chainFromRpc(t) {
    const n = await t.getChainId();
    return this.chainFromChainId(n);
  }
  static async getCounterpartyChannel(t, n) {
    var o, i;
    return ((i = (o = (await Ke.getQueryClient(n).ibc.channel.channel(kd, t)).channel) == null ? void 0 : o.counterparty) == null ? void 0 : i.channelId) ?? null;
  }
};
E(Ke, "_platform", Zr), E(Ke, "getQueryClient", (t) => hn.QueryClient.withExtensions(t.cometClient, hn.setupBankExtension, hn.setupIbcExtension));
let Sr = Ke;
function ul() {
  return { typeUrl: "", value: new Uint8Array(0) };
}
const C = {
  encode(e, t = w.Writer.create()) {
    return e.typeUrl !== "" && t.uint32(10).string(e.typeUrl), e.value.length !== 0 && t.uint32(18).bytes(e.value), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = ul();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.typeUrl = n.string();
          continue;
        case 2:
          if (o !== 18)
            break;
          s.value = n.bytes();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      typeUrl: ll(e.typeUrl) ? globalThis.String(e.typeUrl) : "",
      value: ll(e.value) ? KA(e.value) : new Uint8Array(0)
    };
  },
  toJSON(e) {
    const t = {};
    return e.typeUrl !== "" && (t.typeUrl = e.typeUrl), e.value.length !== 0 && (t.value = zA(e.value)), t;
  },
  create(e) {
    return C.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n;
    const r = ul();
    return r.typeUrl = (t = e.typeUrl) !== null && t !== void 0 ? t : "", r.value = (n = e.value) !== null && n !== void 0 ? n : new Uint8Array(0), r;
  }
};
function KA(e) {
  if (globalThis.Buffer)
    return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
  {
    const t = globalThis.atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; ++r)
      n[r] = t.charCodeAt(r);
    return n;
  }
}
function zA(e) {
  if (globalThis.Buffer)
    return globalThis.Buffer.from(e).toString("base64");
  {
    const t = [];
    return e.forEach((n) => {
      t.push(globalThis.String.fromCharCode(n));
    }), globalThis.btoa(t.join(""));
  }
}
function ll(e) {
  return e != null;
}
w.util.Long !== ue && (w.util.Long = ue, w.configure());
function dl() {
  return { denom: "", amount: "" };
}
const ce = {
  encode(e, t = w.Writer.create()) {
    return e.denom !== "" && t.uint32(10).string(e.denom), e.amount !== "" && t.uint32(18).string(e.amount), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = dl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.denom = n.string();
          continue;
        case 2:
          if (o !== 18)
            break;
          s.amount = n.string();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      denom: ml(e.denom) ? globalThis.String(e.denom) : "",
      amount: ml(e.amount) ? globalThis.String(e.amount) : ""
    };
  },
  toJSON(e) {
    const t = {};
    return e.denom !== "" && (t.denom = e.denom), e.amount !== "" && (t.amount = e.amount), t;
  },
  create(e) {
    return ce.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n;
    const r = dl();
    return r.denom = (t = e.denom) !== null && t !== void 0 ? t : "", r.amount = (n = e.amount) !== null && n !== void 0 ? n : "", r;
  }
};
function ml(e) {
  return e != null;
}
function fl() {
  return { extraBitsStored: 0, elems: new Uint8Array(0) };
}
const Dn = {
  encode(e, t = w.Writer.create()) {
    return e.extraBitsStored !== 0 && t.uint32(8).uint32(e.extraBitsStored), e.elems.length !== 0 && t.uint32(18).bytes(e.elems), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = fl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 8)
            break;
          s.extraBitsStored = n.uint32();
          continue;
        case 2:
          if (o !== 18)
            break;
          s.elems = n.bytes();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      extraBitsStored: pl(e.extraBitsStored) ? globalThis.Number(e.extraBitsStored) : 0,
      elems: pl(e.elems) ? QA(e.elems) : new Uint8Array(0)
    };
  },
  toJSON(e) {
    const t = {};
    return e.extraBitsStored !== 0 && (t.extraBitsStored = Math.round(e.extraBitsStored)), e.elems.length !== 0 && (t.elems = CA(e.elems)), t;
  },
  create(e) {
    return Dn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n;
    const r = fl();
    return r.extraBitsStored = (t = e.extraBitsStored) !== null && t !== void 0 ? t : 0, r.elems = (n = e.elems) !== null && n !== void 0 ? n : new Uint8Array(0), r;
  }
};
function QA(e) {
  if (globalThis.Buffer)
    return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
  {
    const t = globalThis.atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; ++r)
      n[r] = t.charCodeAt(r);
    return n;
  }
}
function CA(e) {
  if (globalThis.Buffer)
    return globalThis.Buffer.from(e).toString("base64");
  {
    const t = [];
    return e.forEach((n) => {
      t.push(globalThis.String.fromCharCode(n));
    }), globalThis.btoa(t.join(""));
  }
}
function pl(e) {
  return e != null;
}
function gl() {
  return { key: new Uint8Array(0) };
}
const sn = {
  encode(e, t = w.Writer.create()) {
    return e.key.length !== 0 && t.uint32(10).bytes(e.key), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = gl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.key = n.bytes();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return { key: ZA(e.key) ? YA(e.key) : new Uint8Array(0) };
  },
  toJSON(e) {
    const t = {};
    return e.key.length !== 0 && (t.key = XA(e.key)), t;
  },
  create(e) {
    return sn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t;
    const n = gl();
    return n.key = (t = e.key) !== null && t !== void 0 ? t : new Uint8Array(0), n;
  }
};
function YA(e) {
  if (globalThis.Buffer)
    return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
  {
    const t = globalThis.atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; ++r)
      n[r] = t.charCodeAt(r);
    return n;
  }
}
function XA(e) {
  if (globalThis.Buffer)
    return globalThis.Buffer.from(e).toString("base64");
  {
    const t = [];
    return e.forEach((n) => {
      t.push(globalThis.String.fromCharCode(n));
    }), globalThis.btoa(t.join(""));
  }
}
function ZA(e) {
  return e != null;
}
w.util.Long !== ue && (w.util.Long = ue, w.configure());
var ee;
(function(e) {
  e[e.SIGN_MODE_UNSPECIFIED = 0] = "SIGN_MODE_UNSPECIFIED", e[e.SIGN_MODE_DIRECT = 1] = "SIGN_MODE_DIRECT", e[e.SIGN_MODE_TEXTUAL = 2] = "SIGN_MODE_TEXTUAL", e[e.SIGN_MODE_DIRECT_AUX = 3] = "SIGN_MODE_DIRECT_AUX", e[e.SIGN_MODE_LEGACY_AMINO_JSON = 127] = "SIGN_MODE_LEGACY_AMINO_JSON", e[e.SIGN_MODE_EIP712_V2 = 128] = "SIGN_MODE_EIP712_V2", e[e.SIGN_MODE_EIP_191 = 191] = "SIGN_MODE_EIP_191", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED";
})(ee || (ee = {}));
function eP(e) {
  switch (e) {
    case 0:
    case "SIGN_MODE_UNSPECIFIED":
      return ee.SIGN_MODE_UNSPECIFIED;
    case 1:
    case "SIGN_MODE_DIRECT":
      return ee.SIGN_MODE_DIRECT;
    case 2:
    case "SIGN_MODE_TEXTUAL":
      return ee.SIGN_MODE_TEXTUAL;
    case 3:
    case "SIGN_MODE_DIRECT_AUX":
      return ee.SIGN_MODE_DIRECT_AUX;
    case 127:
    case "SIGN_MODE_LEGACY_AMINO_JSON":
      return ee.SIGN_MODE_LEGACY_AMINO_JSON;
    case 128:
    case "SIGN_MODE_EIP712_V2":
      return ee.SIGN_MODE_EIP712_V2;
    case 191:
    case "SIGN_MODE_EIP_191":
      return ee.SIGN_MODE_EIP_191;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ee.UNRECOGNIZED;
  }
}
function tP(e) {
  switch (e) {
    case ee.SIGN_MODE_UNSPECIFIED:
      return "SIGN_MODE_UNSPECIFIED";
    case ee.SIGN_MODE_DIRECT:
      return "SIGN_MODE_DIRECT";
    case ee.SIGN_MODE_TEXTUAL:
      return "SIGN_MODE_TEXTUAL";
    case ee.SIGN_MODE_DIRECT_AUX:
      return "SIGN_MODE_DIRECT_AUX";
    case ee.SIGN_MODE_LEGACY_AMINO_JSON:
      return "SIGN_MODE_LEGACY_AMINO_JSON";
    case ee.SIGN_MODE_EIP712_V2:
      return "SIGN_MODE_EIP712_V2";
    case ee.SIGN_MODE_EIP_191:
      return "SIGN_MODE_EIP_191";
    case ee.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
w.util.Long !== ue && (w.util.Long = ue, w.configure());
function yl() {
  return { bodyBytes: new Uint8Array(0), authInfoBytes: new Uint8Array(0), signatures: [] };
}
const bo = {
  encode(e, t = w.Writer.create()) {
    e.bodyBytes.length !== 0 && t.uint32(10).bytes(e.bodyBytes), e.authInfoBytes.length !== 0 && t.uint32(18).bytes(e.authInfoBytes);
    for (const n of e.signatures)
      t.uint32(26).bytes(n);
    return t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = yl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.bodyBytes = n.bytes();
          continue;
        case 2:
          if (o !== 18)
            break;
          s.authInfoBytes = n.bytes();
          continue;
        case 3:
          if (o !== 26)
            break;
          s.signatures.push(n.bytes());
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      bodyBytes: re(e.bodyBytes) ? Cr(e.bodyBytes) : new Uint8Array(0),
      authInfoBytes: re(e.authInfoBytes) ? Cr(e.authInfoBytes) : new Uint8Array(0),
      signatures: globalThis.Array.isArray(e == null ? void 0 : e.signatures) ? e.signatures.map((t) => Cr(t)) : []
    };
  },
  toJSON(e) {
    var t;
    const n = {};
    return e.bodyBytes.length !== 0 && (n.bodyBytes = Yr(e.bodyBytes)), e.authInfoBytes.length !== 0 && (n.authInfoBytes = Yr(e.authInfoBytes)), !((t = e.signatures) === null || t === void 0) && t.length && (n.signatures = e.signatures.map((r) => Yr(r))), n;
  },
  create(e) {
    return bo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n, r;
    const s = yl();
    return s.bodyBytes = (t = e.bodyBytes) !== null && t !== void 0 ? t : new Uint8Array(0), s.authInfoBytes = (n = e.authInfoBytes) !== null && n !== void 0 ? n : new Uint8Array(0), s.signatures = ((r = e.signatures) === null || r === void 0 ? void 0 : r.map((o) => o)) || [], s;
  }
};
function hl() {
  return { bodyBytes: new Uint8Array(0), authInfoBytes: new Uint8Array(0), chainId: "", accountNumber: "0" };
}
const qc = {
  encode(e, t = w.Writer.create()) {
    return e.bodyBytes.length !== 0 && t.uint32(10).bytes(e.bodyBytes), e.authInfoBytes.length !== 0 && t.uint32(18).bytes(e.authInfoBytes), e.chainId !== "" && t.uint32(26).string(e.chainId), e.accountNumber !== "0" && t.uint32(32).uint64(e.accountNumber), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = hl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.bodyBytes = n.bytes();
          continue;
        case 2:
          if (o !== 18)
            break;
          s.authInfoBytes = n.bytes();
          continue;
        case 3:
          if (o !== 26)
            break;
          s.chainId = n.string();
          continue;
        case 4:
          if (o !== 32)
            break;
          s.accountNumber = Ii(n.uint64());
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      bodyBytes: re(e.bodyBytes) ? Cr(e.bodyBytes) : new Uint8Array(0),
      authInfoBytes: re(e.authInfoBytes) ? Cr(e.authInfoBytes) : new Uint8Array(0),
      chainId: re(e.chainId) ? globalThis.String(e.chainId) : "",
      accountNumber: re(e.accountNumber) ? globalThis.String(e.accountNumber) : "0"
    };
  },
  toJSON(e) {
    const t = {};
    return e.bodyBytes.length !== 0 && (t.bodyBytes = Yr(e.bodyBytes)), e.authInfoBytes.length !== 0 && (t.authInfoBytes = Yr(e.authInfoBytes)), e.chainId !== "" && (t.chainId = e.chainId), e.accountNumber !== "0" && (t.accountNumber = e.accountNumber), t;
  },
  create(e) {
    return qc.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n, r, s;
    const o = hl();
    return o.bodyBytes = (t = e.bodyBytes) !== null && t !== void 0 ? t : new Uint8Array(0), o.authInfoBytes = (n = e.authInfoBytes) !== null && n !== void 0 ? n : new Uint8Array(0), o.chainId = (r = e.chainId) !== null && r !== void 0 ? r : "", o.accountNumber = (s = e.accountNumber) !== null && s !== void 0 ? s : "0", o;
  }
};
function bl() {
  return { messages: [], memo: "", timeoutHeight: "0", extensionOptions: [], nonCriticalExtensionOptions: [] };
}
const Fc = {
  encode(e, t = w.Writer.create()) {
    for (const n of e.messages)
      C.encode(n, t.uint32(10).fork()).ldelim();
    e.memo !== "" && t.uint32(18).string(e.memo), e.timeoutHeight !== "0" && t.uint32(24).uint64(e.timeoutHeight);
    for (const n of e.extensionOptions)
      C.encode(n, t.uint32(8186).fork()).ldelim();
    for (const n of e.nonCriticalExtensionOptions)
      C.encode(n, t.uint32(16378).fork()).ldelim();
    return t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = bl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.messages.push(C.decode(n, n.uint32()));
          continue;
        case 2:
          if (o !== 18)
            break;
          s.memo = n.string();
          continue;
        case 3:
          if (o !== 24)
            break;
          s.timeoutHeight = Ii(n.uint64());
          continue;
        case 1023:
          if (o !== 8186)
            break;
          s.extensionOptions.push(C.decode(n, n.uint32()));
          continue;
        case 2047:
          if (o !== 16378)
            break;
          s.nonCriticalExtensionOptions.push(C.decode(n, n.uint32()));
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      messages: globalThis.Array.isArray(e == null ? void 0 : e.messages) ? e.messages.map((t) => C.fromJSON(t)) : [],
      memo: re(e.memo) ? globalThis.String(e.memo) : "",
      timeoutHeight: re(e.timeoutHeight) ? globalThis.String(e.timeoutHeight) : "0",
      extensionOptions: globalThis.Array.isArray(e == null ? void 0 : e.extensionOptions) ? e.extensionOptions.map((t) => C.fromJSON(t)) : [],
      nonCriticalExtensionOptions: globalThis.Array.isArray(e == null ? void 0 : e.nonCriticalExtensionOptions) ? e.nonCriticalExtensionOptions.map((t) => C.fromJSON(t)) : []
    };
  },
  toJSON(e) {
    var t, n, r;
    const s = {};
    return !((t = e.messages) === null || t === void 0) && t.length && (s.messages = e.messages.map((o) => C.toJSON(o))), e.memo !== "" && (s.memo = e.memo), e.timeoutHeight !== "0" && (s.timeoutHeight = e.timeoutHeight), !((n = e.extensionOptions) === null || n === void 0) && n.length && (s.extensionOptions = e.extensionOptions.map((o) => C.toJSON(o))), !((r = e.nonCriticalExtensionOptions) === null || r === void 0) && r.length && (s.nonCriticalExtensionOptions = e.nonCriticalExtensionOptions.map((o) => C.toJSON(o))), s;
  },
  create(e) {
    return Fc.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n, r, s, o;
    const i = bl();
    return i.messages = ((t = e.messages) === null || t === void 0 ? void 0 : t.map((a) => C.fromPartial(a))) || [], i.memo = (n = e.memo) !== null && n !== void 0 ? n : "", i.timeoutHeight = (r = e.timeoutHeight) !== null && r !== void 0 ? r : "0", i.extensionOptions = ((s = e.extensionOptions) === null || s === void 0 ? void 0 : s.map((a) => C.fromPartial(a))) || [], i.nonCriticalExtensionOptions = ((o = e.nonCriticalExtensionOptions) === null || o === void 0 ? void 0 : o.map((a) => C.fromPartial(a))) || [], i;
  }
};
function vl() {
  return { signerInfos: [], fee: void 0, tip: void 0 };
}
const Vc = {
  encode(e, t = w.Writer.create()) {
    for (const n of e.signerInfos)
      un.encode(n, t.uint32(10).fork()).ldelim();
    return e.fee !== void 0 && dn.encode(e.fee, t.uint32(18).fork()).ldelim(), e.tip !== void 0 && $n.encode(e.tip, t.uint32(26).fork()).ldelim(), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = vl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.signerInfos.push(un.decode(n, n.uint32()));
          continue;
        case 2:
          if (o !== 18)
            break;
          s.fee = dn.decode(n, n.uint32());
          continue;
        case 3:
          if (o !== 26)
            break;
          s.tip = $n.decode(n, n.uint32());
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      signerInfos: globalThis.Array.isArray(e == null ? void 0 : e.signerInfos) ? e.signerInfos.map((t) => un.fromJSON(t)) : [],
      fee: re(e.fee) ? dn.fromJSON(e.fee) : void 0,
      tip: re(e.tip) ? $n.fromJSON(e.tip) : void 0
    };
  },
  toJSON(e) {
    var t;
    const n = {};
    return !((t = e.signerInfos) === null || t === void 0) && t.length && (n.signerInfos = e.signerInfos.map((r) => un.toJSON(r))), e.fee !== void 0 && (n.fee = dn.toJSON(e.fee)), e.tip !== void 0 && (n.tip = $n.toJSON(e.tip)), n;
  },
  create(e) {
    return Vc.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t;
    const n = vl();
    return n.signerInfos = ((t = e.signerInfos) === null || t === void 0 ? void 0 : t.map((r) => un.fromPartial(r))) || [], n.fee = e.fee !== void 0 && e.fee !== null ? dn.fromPartial(e.fee) : void 0, n.tip = e.tip !== void 0 && e.tip !== null ? $n.fromPartial(e.tip) : void 0, n;
  }
};
function wl() {
  return { publicKey: void 0, modeInfo: void 0, sequence: "0" };
}
const un = {
  encode(e, t = w.Writer.create()) {
    return e.publicKey !== void 0 && C.encode(e.publicKey, t.uint32(10).fork()).ldelim(), e.modeInfo !== void 0 && rt.encode(e.modeInfo, t.uint32(18).fork()).ldelim(), e.sequence !== "0" && t.uint32(24).uint64(e.sequence), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = wl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.publicKey = C.decode(n, n.uint32());
          continue;
        case 2:
          if (o !== 18)
            break;
          s.modeInfo = rt.decode(n, n.uint32());
          continue;
        case 3:
          if (o !== 24)
            break;
          s.sequence = Ii(n.uint64());
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      publicKey: re(e.publicKey) ? C.fromJSON(e.publicKey) : void 0,
      modeInfo: re(e.modeInfo) ? rt.fromJSON(e.modeInfo) : void 0,
      sequence: re(e.sequence) ? globalThis.String(e.sequence) : "0"
    };
  },
  toJSON(e) {
    const t = {};
    return e.publicKey !== void 0 && (t.publicKey = C.toJSON(e.publicKey)), e.modeInfo !== void 0 && (t.modeInfo = rt.toJSON(e.modeInfo)), e.sequence !== "0" && (t.sequence = e.sequence), t;
  },
  create(e) {
    return un.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t;
    const n = wl();
    return n.publicKey = e.publicKey !== void 0 && e.publicKey !== null ? C.fromPartial(e.publicKey) : void 0, n.modeInfo = e.modeInfo !== void 0 && e.modeInfo !== null ? rt.fromPartial(e.modeInfo) : void 0, n.sequence = (t = e.sequence) !== null && t !== void 0 ? t : "0", n;
  }
};
function _l() {
  return { single: void 0, multi: void 0 };
}
const rt = {
  encode(e, t = w.Writer.create()) {
    return e.single !== void 0 && ln.encode(e.single, t.uint32(10).fork()).ldelim(), e.multi !== void 0 && Un.encode(e.multi, t.uint32(18).fork()).ldelim(), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = _l();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.single = ln.decode(n, n.uint32());
          continue;
        case 2:
          if (o !== 18)
            break;
          s.multi = Un.decode(n, n.uint32());
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      single: re(e.single) ? ln.fromJSON(e.single) : void 0,
      multi: re(e.multi) ? Un.fromJSON(e.multi) : void 0
    };
  },
  toJSON(e) {
    const t = {};
    return e.single !== void 0 && (t.single = ln.toJSON(e.single)), e.multi !== void 0 && (t.multi = Un.toJSON(e.multi)), t;
  },
  create(e) {
    return rt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    const t = _l();
    return t.single = e.single !== void 0 && e.single !== null ? ln.fromPartial(e.single) : void 0, t.multi = e.multi !== void 0 && e.multi !== null ? Un.fromPartial(e.multi) : void 0, t;
  }
};
function Sl() {
  return { mode: 0 };
}
const ln = {
  encode(e, t = w.Writer.create()) {
    return e.mode !== 0 && t.uint32(8).int32(e.mode), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = Sl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 8)
            break;
          s.mode = n.int32();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return { mode: re(e.mode) ? eP(e.mode) : 0 };
  },
  toJSON(e) {
    const t = {};
    return e.mode !== 0 && (t.mode = tP(e.mode)), t;
  },
  create(e) {
    return ln.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t;
    const n = Sl();
    return n.mode = (t = e.mode) !== null && t !== void 0 ? t : 0, n;
  }
};
function Al() {
  return { bitarray: void 0, modeInfos: [] };
}
const Un = {
  encode(e, t = w.Writer.create()) {
    e.bitarray !== void 0 && Dn.encode(e.bitarray, t.uint32(10).fork()).ldelim();
    for (const n of e.modeInfos)
      rt.encode(n, t.uint32(18).fork()).ldelim();
    return t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = Al();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.bitarray = Dn.decode(n, n.uint32());
          continue;
        case 2:
          if (o !== 18)
            break;
          s.modeInfos.push(rt.decode(n, n.uint32()));
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      bitarray: re(e.bitarray) ? Dn.fromJSON(e.bitarray) : void 0,
      modeInfos: globalThis.Array.isArray(e == null ? void 0 : e.modeInfos) ? e.modeInfos.map((t) => rt.fromJSON(t)) : []
    };
  },
  toJSON(e) {
    var t;
    const n = {};
    return e.bitarray !== void 0 && (n.bitarray = Dn.toJSON(e.bitarray)), !((t = e.modeInfos) === null || t === void 0) && t.length && (n.modeInfos = e.modeInfos.map((r) => rt.toJSON(r))), n;
  },
  create(e) {
    return Un.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t;
    const n = Al();
    return n.bitarray = e.bitarray !== void 0 && e.bitarray !== null ? Dn.fromPartial(e.bitarray) : void 0, n.modeInfos = ((t = e.modeInfos) === null || t === void 0 ? void 0 : t.map((r) => rt.fromPartial(r))) || [], n;
  }
};
function Pl() {
  return { amount: [], gasLimit: "0", payer: "", granter: "" };
}
const dn = {
  encode(e, t = w.Writer.create()) {
    for (const n of e.amount)
      ce.encode(n, t.uint32(10).fork()).ldelim();
    return e.gasLimit !== "0" && t.uint32(16).uint64(e.gasLimit), e.payer !== "" && t.uint32(26).string(e.payer), e.granter !== "" && t.uint32(34).string(e.granter), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = Pl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.amount.push(ce.decode(n, n.uint32()));
          continue;
        case 2:
          if (o !== 16)
            break;
          s.gasLimit = Ii(n.uint64());
          continue;
        case 3:
          if (o !== 26)
            break;
          s.payer = n.string();
          continue;
        case 4:
          if (o !== 34)
            break;
          s.granter = n.string();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      amount: globalThis.Array.isArray(e == null ? void 0 : e.amount) ? e.amount.map((t) => ce.fromJSON(t)) : [],
      gasLimit: re(e.gasLimit) ? globalThis.String(e.gasLimit) : "0",
      payer: re(e.payer) ? globalThis.String(e.payer) : "",
      granter: re(e.granter) ? globalThis.String(e.granter) : ""
    };
  },
  toJSON(e) {
    var t;
    const n = {};
    return !((t = e.amount) === null || t === void 0) && t.length && (n.amount = e.amount.map((r) => ce.toJSON(r))), e.gasLimit !== "0" && (n.gasLimit = e.gasLimit), e.payer !== "" && (n.payer = e.payer), e.granter !== "" && (n.granter = e.granter), n;
  },
  create(e) {
    return dn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n, r, s;
    const o = Pl();
    return o.amount = ((t = e.amount) === null || t === void 0 ? void 0 : t.map((i) => ce.fromPartial(i))) || [], o.gasLimit = (n = e.gasLimit) !== null && n !== void 0 ? n : "0", o.payer = (r = e.payer) !== null && r !== void 0 ? r : "", o.granter = (s = e.granter) !== null && s !== void 0 ? s : "", o;
  }
};
function kl() {
  return { amount: [], tipper: "" };
}
const $n = {
  encode(e, t = w.Writer.create()) {
    for (const n of e.amount)
      ce.encode(n, t.uint32(10).fork()).ldelim();
    return e.tipper !== "" && t.uint32(18).string(e.tipper), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = kl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.amount.push(ce.decode(n, n.uint32()));
          continue;
        case 2:
          if (o !== 18)
            break;
          s.tipper = n.string();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      amount: globalThis.Array.isArray(e == null ? void 0 : e.amount) ? e.amount.map((t) => ce.fromJSON(t)) : [],
      tipper: re(e.tipper) ? globalThis.String(e.tipper) : ""
    };
  },
  toJSON(e) {
    var t;
    const n = {};
    return !((t = e.amount) === null || t === void 0) && t.length && (n.amount = e.amount.map((r) => ce.toJSON(r))), e.tipper !== "" && (n.tipper = e.tipper), n;
  },
  create(e) {
    return $n.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n;
    const r = kl();
    return r.amount = ((t = e.amount) === null || t === void 0 ? void 0 : t.map((s) => ce.fromPartial(s))) || [], r.tipper = (n = e.tipper) !== null && n !== void 0 ? n : "", r;
  }
};
function Cr(e) {
  if (globalThis.Buffer)
    return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
  {
    const t = globalThis.atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; ++r)
      n[r] = t.charCodeAt(r);
    return n;
  }
}
function Yr(e) {
  if (globalThis.Buffer)
    return globalThis.Buffer.from(e).toString("base64");
  {
    const t = [];
    return e.forEach((n) => {
      t.push(globalThis.String.fromCharCode(n));
    }), globalThis.btoa(t.join(""));
  }
}
function Ii(e) {
  return e.toString();
}
w.util.Long !== ue && (w.util.Long = ue, w.configure());
function re(e) {
  return e != null;
}
function El() {
  return { revisionNumber: "0", revisionHeight: "0" };
}
const mn = {
  encode(e, t = w.Writer.create()) {
    return e.revisionNumber !== "0" && t.uint32(8).uint64(e.revisionNumber), e.revisionHeight !== "0" && t.uint32(16).uint64(e.revisionHeight), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = El();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 8)
            break;
          s.revisionNumber = Tl(n.uint64());
          continue;
        case 2:
          if (o !== 16)
            break;
          s.revisionHeight = Tl(n.uint64());
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      revisionNumber: Ol(e.revisionNumber) ? globalThis.String(e.revisionNumber) : "0",
      revisionHeight: Ol(e.revisionHeight) ? globalThis.String(e.revisionHeight) : "0"
    };
  },
  toJSON(e) {
    const t = {};
    return e.revisionNumber !== "0" && (t.revisionNumber = e.revisionNumber), e.revisionHeight !== "0" && (t.revisionHeight = e.revisionHeight), t;
  },
  create(e) {
    return mn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n;
    const r = El();
    return r.revisionNumber = (t = e.revisionNumber) !== null && t !== void 0 ? t : "0", r.revisionHeight = (n = e.revisionHeight) !== null && n !== void 0 ? n : "0", r;
  }
};
function Tl(e) {
  return e.toString();
}
w.util.Long !== ue && (w.util.Long = ue, w.configure());
function Ol(e) {
  return e != null;
}
function Il() {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: void 0,
    sender: "",
    receiver: "",
    timeoutHeight: void 0,
    timeoutTimestamp: "0",
    memo: ""
  };
}
const eo = {
  encode(e, t = w.Writer.create()) {
    return e.sourcePort !== "" && t.uint32(10).string(e.sourcePort), e.sourceChannel !== "" && t.uint32(18).string(e.sourceChannel), e.token !== void 0 && ce.encode(e.token, t.uint32(26).fork()).ldelim(), e.sender !== "" && t.uint32(34).string(e.sender), e.receiver !== "" && t.uint32(42).string(e.receiver), e.timeoutHeight !== void 0 && mn.encode(e.timeoutHeight, t.uint32(50).fork()).ldelim(), e.timeoutTimestamp !== "0" && t.uint32(56).uint64(e.timeoutTimestamp), e.memo !== "" && t.uint32(66).string(e.memo), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = Il();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.sourcePort = n.string();
          continue;
        case 2:
          if (o !== 18)
            break;
          s.sourceChannel = n.string();
          continue;
        case 3:
          if (o !== 26)
            break;
          s.token = ce.decode(n, n.uint32());
          continue;
        case 4:
          if (o !== 34)
            break;
          s.sender = n.string();
          continue;
        case 5:
          if (o !== 42)
            break;
          s.receiver = n.string();
          continue;
        case 6:
          if (o !== 50)
            break;
          s.timeoutHeight = mn.decode(n, n.uint32());
          continue;
        case 7:
          if (o !== 56)
            break;
          s.timeoutTimestamp = nP(n.uint64());
          continue;
        case 8:
          if (o !== 66)
            break;
          s.memo = n.string();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return {
      sourcePort: xt(e.sourcePort) ? globalThis.String(e.sourcePort) : "",
      sourceChannel: xt(e.sourceChannel) ? globalThis.String(e.sourceChannel) : "",
      token: xt(e.token) ? ce.fromJSON(e.token) : void 0,
      sender: xt(e.sender) ? globalThis.String(e.sender) : "",
      receiver: xt(e.receiver) ? globalThis.String(e.receiver) : "",
      timeoutHeight: xt(e.timeoutHeight) ? mn.fromJSON(e.timeoutHeight) : void 0,
      timeoutTimestamp: xt(e.timeoutTimestamp) ? globalThis.String(e.timeoutTimestamp) : "0",
      memo: xt(e.memo) ? globalThis.String(e.memo) : ""
    };
  },
  toJSON(e) {
    const t = {};
    return e.sourcePort !== "" && (t.sourcePort = e.sourcePort), e.sourceChannel !== "" && (t.sourceChannel = e.sourceChannel), e.token !== void 0 && (t.token = ce.toJSON(e.token)), e.sender !== "" && (t.sender = e.sender), e.receiver !== "" && (t.receiver = e.receiver), e.timeoutHeight !== void 0 && (t.timeoutHeight = mn.toJSON(e.timeoutHeight)), e.timeoutTimestamp !== "0" && (t.timeoutTimestamp = e.timeoutTimestamp), e.memo !== "" && (t.memo = e.memo), t;
  },
  create(e) {
    return eo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t, n, r, s, o, i;
    const a = Il();
    return a.sourcePort = (t = e.sourcePort) !== null && t !== void 0 ? t : "", a.sourceChannel = (n = e.sourceChannel) !== null && n !== void 0 ? n : "", a.token = e.token !== void 0 && e.token !== null ? ce.fromPartial(e.token) : void 0, a.sender = (r = e.sender) !== null && r !== void 0 ? r : "", a.receiver = (s = e.receiver) !== null && s !== void 0 ? s : "", a.timeoutHeight = e.timeoutHeight !== void 0 && e.timeoutHeight !== null ? mn.fromPartial(e.timeoutHeight) : void 0, a.timeoutTimestamp = (o = e.timeoutTimestamp) !== null && o !== void 0 ? o : "0", a.memo = (i = e.memo) !== null && i !== void 0 ? i : "", a;
  }
};
function nP(e) {
  return e.toString();
}
w.util.Long !== ue && (w.util.Long = ue, w.configure());
function xt(e) {
  return e != null;
}
function Bl() {
  return { key: new Uint8Array(0) };
}
const za = {
  encode(e, t = w.Writer.create()) {
    return e.key.length !== 0 && t.uint32(10).bytes(e.key), t;
  },
  decode(e, t) {
    const n = e instanceof w.Reader ? e : w.Reader.create(e);
    let r = t === void 0 ? n.len : n.pos + t;
    const s = Bl();
    for (; n.pos < r; ) {
      const o = n.uint32();
      switch (o >>> 3) {
        case 1:
          if (o !== 10)
            break;
          s.key = n.bytes();
          continue;
      }
      if ((o & 7) === 4 || o === 0)
        break;
      n.skipType(o & 7);
    }
    return s;
  },
  fromJSON(e) {
    return { key: oP(e.key) ? rP(e.key) : new Uint8Array(0) };
  },
  toJSON(e) {
    const t = {};
    return e.key.length !== 0 && (t.key = sP(e.key)), t;
  },
  create(e) {
    return za.fromPartial(e ?? {});
  },
  fromPartial(e) {
    var t;
    const n = Bl();
    return n.key = (t = e.key) !== null && t !== void 0 ? t : new Uint8Array(0), n;
  }
};
function rP(e) {
  if (globalThis.Buffer)
    return Uint8Array.from(globalThis.Buffer.from(e, "base64"));
  {
    const t = globalThis.atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; ++r)
      n[r] = t.charCodeAt(r);
    return n;
  }
}
function sP(e) {
  if (globalThis.Buffer)
    return globalThis.Buffer.from(e).toString("base64");
  {
    const t = [];
    return e.forEach((n) => {
      t.push(globalThis.String.fromCharCode(n));
    }), globalThis.btoa(t.join(""));
  }
}
function oP(e) {
  return e != null;
}
const Nl = (e) => e.split("/").map((t) => t.split("_").map((n) => n.charAt(0).toUpperCase() + n.slice(1)).join("")).join("/"), iP = (e, t = 18) => new lt(e).multipliedBy(new lt(10).pow(t));
class at extends lt {
  static make(t) {
    return new at(t);
  }
  minus(t, n) {
    return new at(super.minus(t, n));
  }
  plus(t, n) {
    return new at(super.plus(t, n));
  }
  dividedBy(t, n) {
    return new at(super.dividedBy(t, n));
  }
  div(t, n) {
    return new at(super.div(t, n));
  }
  multipliedBy(t, n) {
    return new at(super.multipliedBy(t, n));
  }
  times(t, n) {
    return new at(super.times(t, n));
  }
  pow(t, n) {
    return new at(super.pow(t, n));
  }
  toWei(t = 18) {
    return iP(this, t);
  }
}
var Lc = { exports: {} }, Tf = function(t, n) {
  return function() {
    for (var s = new Array(arguments.length), o = 0; o < s.length; o++)
      s[o] = arguments[o];
    return t.apply(n, s);
  };
}, aP = Tf, En = Object.prototype.toString;
function Wc(e) {
  return En.call(e) === "[object Array]";
}
function Qa(e) {
  return typeof e > "u";
}
function cP(e) {
  return e !== null && !Qa(e) && e.constructor !== null && !Qa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function uP(e) {
  return En.call(e) === "[object ArrayBuffer]";
}
function lP(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function dP(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && e.buffer instanceof ArrayBuffer, t;
}
function mP(e) {
  return typeof e == "string";
}
function fP(e) {
  return typeof e == "number";
}
function Of(e) {
  return e !== null && typeof e == "object";
}
function to(e) {
  if (En.call(e) !== "[object Object]")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function pP(e) {
  return En.call(e) === "[object Date]";
}
function gP(e) {
  return En.call(e) === "[object File]";
}
function yP(e) {
  return En.call(e) === "[object Blob]";
}
function If(e) {
  return En.call(e) === "[object Function]";
}
function hP(e) {
  return Of(e) && If(e.pipe);
}
function bP(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function vP(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function wP() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Jc(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Wc(e))
      for (var n = 0, r = e.length; n < r; n++)
        t.call(null, e[n], n, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function Ca() {
  var e = {};
  function t(s, o) {
    to(e[o]) && to(s) ? e[o] = Ca(e[o], s) : to(s) ? e[o] = Ca({}, s) : Wc(s) ? e[o] = s.slice() : e[o] = s;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    Jc(arguments[n], t);
  return e;
}
function _P(e, t, n) {
  return Jc(t, function(s, o) {
    n && typeof s == "function" ? e[o] = aP(s, n) : e[o] = s;
  }), e;
}
function SP(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
var Ve = {
  isArray: Wc,
  isArrayBuffer: uP,
  isBuffer: cP,
  isFormData: lP,
  isArrayBufferView: dP,
  isString: mP,
  isNumber: fP,
  isObject: Of,
  isPlainObject: to,
  isUndefined: Qa,
  isDate: pP,
  isFile: gP,
  isBlob: yP,
  isFunction: If,
  isStream: hP,
  isURLSearchParams: bP,
  isStandardBrowserEnv: wP,
  forEach: Jc,
  merge: Ca,
  extend: _P,
  trim: vP,
  stripBOM: SP
}, Rn = Ve;
function Ml(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Bf = function(t, n, r) {
  if (!n)
    return t;
  var s;
  if (r)
    s = r(n);
  else if (Rn.isURLSearchParams(n))
    s = n.toString();
  else {
    var o = [];
    Rn.forEach(n, function(c, u) {
      c === null || typeof c > "u" || (Rn.isArray(c) ? u = u + "[]" : c = [c], Rn.forEach(c, function(d) {
        Rn.isDate(d) ? d = d.toISOString() : Rn.isObject(d) && (d = JSON.stringify(d)), o.push(Ml(u) + "=" + Ml(d));
      }));
    }), s = o.join("&");
  }
  if (s) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}, AP = Ve;
function Bi() {
  this.handlers = [];
}
Bi.prototype.use = function(t, n, r) {
  return this.handlers.push({
    fulfilled: t,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
Bi.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
Bi.prototype.forEach = function(t) {
  AP.forEach(this.handlers, function(r) {
    r !== null && t(r);
  });
};
var PP = Bi, kP = Ve, EP = function(t, n) {
  kP.forEach(t, function(s, o) {
    o !== n && o.toUpperCase() === n.toUpperCase() && (t[n] = s, delete t[o]);
  });
}, Nf = function(t, n, r, s, o) {
  return t.config = n, r && (t.code = r), t.request = s, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  }, t;
}, oa, Rl;
function Mf() {
  if (Rl)
    return oa;
  Rl = 1;
  var e = Nf;
  return oa = function(n, r, s, o, i) {
    var a = new Error(n);
    return e(a, r, s, o, i);
  }, oa;
}
var ia, jl;
function TP() {
  if (jl)
    return ia;
  jl = 1;
  var e = Mf();
  return ia = function(n, r, s) {
    var o = s.config.validateStatus;
    !s.status || !o || o(s.status) ? n(s) : r(e(
      "Request failed with status code " + s.status,
      s.config,
      null,
      s.request,
      s
    ));
  }, ia;
}
var aa, Dl;
function OP() {
  if (Dl)
    return aa;
  Dl = 1;
  var e = Ve;
  return aa = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    /* @__PURE__ */ function() {
      return {
        write: function(r, s, o, i, a, c) {
          var u = [];
          u.push(r + "=" + encodeURIComponent(s)), e.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), e.isString(i) && u.push("path=" + i), e.isString(a) && u.push("domain=" + a), c === !0 && u.push("secure"), document.cookie = u.join("; ");
        },
        read: function(r) {
          var s = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
          return s ? decodeURIComponent(s[3]) : null;
        },
        remove: function(r) {
          this.write(r, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    /* @__PURE__ */ function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), aa;
}
var ca, Ul;
function IP() {
  return Ul || (Ul = 1, ca = function(t) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
  }), ca;
}
var ua, $l;
function BP() {
  return $l || ($l = 1, ua = function(t, n) {
    return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
  }), ua;
}
var la, xl;
function NP() {
  if (xl)
    return la;
  xl = 1;
  var e = IP(), t = BP();
  return la = function(r, s) {
    return r && !e(s) ? t(r, s) : s;
  }, la;
}
var da, Hl;
function MP() {
  if (Hl)
    return da;
  Hl = 1;
  var e = Ve, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return da = function(r) {
    var s = {}, o, i, a;
    return r && e.forEach(r.split(`
`), function(u) {
      if (a = u.indexOf(":"), o = e.trim(u.substr(0, a)).toLowerCase(), i = e.trim(u.substr(a + 1)), o) {
        if (s[o] && t.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? s[o] = (s[o] ? s[o] : []).concat([i]) : s[o] = s[o] ? s[o] + ", " + i : i;
      }
    }), s;
  }, da;
}
var ma, ql;
function RP() {
  if (ql)
    return ma;
  ql = 1;
  var e = Ve;
  return ma = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), s;
      function o(i) {
        var a = i;
        return n && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
          href: r.href,
          protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
          host: r.host,
          search: r.search ? r.search.replace(/^\?/, "") : "",
          hash: r.hash ? r.hash.replace(/^#/, "") : "",
          hostname: r.hostname,
          port: r.port,
          pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
        };
      }
      return s = o(window.location.href), function(a) {
        var c = e.isString(a) ? o(a) : a;
        return c.protocol === s.protocol && c.host === s.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function() {
      return function() {
        return !0;
      };
    }()
  ), ma;
}
var fa, Fl;
function Vl() {
  if (Fl)
    return fa;
  Fl = 1;
  var e = Ve, t = TP(), n = OP(), r = Bf, s = NP(), o = MP(), i = RP(), a = Mf();
  return fa = function(u) {
    return new Promise(function(d, b) {
      var y = u.data, P = u.headers, v = u.responseType;
      e.isFormData(y) && delete P["Content-Type"];
      var m = new XMLHttpRequest();
      if (u.auth) {
        var S = u.auth.username || "", D = u.auth.password ? unescape(encodeURIComponent(u.auth.password)) : "";
        P.Authorization = "Basic " + btoa(S + ":" + D);
      }
      var N = s(u.baseURL, u.url);
      m.open(u.method.toUpperCase(), r(N, u.params, u.paramsSerializer), !0), m.timeout = u.timeout;
      function Y() {
        if (m) {
          var k = "getAllResponseHeaders" in m ? o(m.getAllResponseHeaders()) : null, A = !v || v === "text" || v === "json" ? m.responseText : m.response, $ = {
            data: A,
            status: m.status,
            statusText: m.statusText,
            headers: k,
            config: u,
            request: m
          };
          t(d, b, $), m = null;
        }
      }
      if ("onloadend" in m ? m.onloadend = Y : m.onreadystatechange = function() {
        !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(Y);
      }, m.onabort = function() {
        m && (b(a("Request aborted", u, "ECONNABORTED", m)), m = null);
      }, m.onerror = function() {
        b(a("Network Error", u, null, m)), m = null;
      }, m.ontimeout = function() {
        var A = "timeout of " + u.timeout + "ms exceeded";
        u.timeoutErrorMessage && (A = u.timeoutErrorMessage), b(a(
          A,
          u,
          u.transitional && u.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
          m
        )), m = null;
      }, e.isStandardBrowserEnv()) {
        var _ = (u.withCredentials || i(N)) && u.xsrfCookieName ? n.read(u.xsrfCookieName) : void 0;
        _ && (P[u.xsrfHeaderName] = _);
      }
      "setRequestHeader" in m && e.forEach(P, function(A, $) {
        typeof y > "u" && $.toLowerCase() === "content-type" ? delete P[$] : m.setRequestHeader($, A);
      }), e.isUndefined(u.withCredentials) || (m.withCredentials = !!u.withCredentials), v && v !== "json" && (m.responseType = u.responseType), typeof u.onDownloadProgress == "function" && m.addEventListener("progress", u.onDownloadProgress), typeof u.onUploadProgress == "function" && m.upload && m.upload.addEventListener("progress", u.onUploadProgress), u.cancelToken && u.cancelToken.promise.then(function(A) {
        m && (m.abort(), b(A), m = null);
      }), y || (y = null), m.send(y);
    });
  }, fa;
}
var le = Ve, Ll = EP, jP = Nf, DP = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Wl(e, t) {
  !le.isUndefined(e) && le.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function UP() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof U.process < "u" && Object.prototype.toString.call(U.process) === "[object process]") && (e = Vl()), e;
}
function $P(e, t, n) {
  if (le.isString(e))
    try {
      return (t || JSON.parse)(e), le.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
var Ni = {
  transitional: {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  adapter: UP(),
  transformRequest: [function(t, n) {
    return Ll(n, "Accept"), Ll(n, "Content-Type"), le.isFormData(t) || le.isArrayBuffer(t) || le.isBuffer(t) || le.isStream(t) || le.isFile(t) || le.isBlob(t) ? t : le.isArrayBufferView(t) ? t.buffer : le.isURLSearchParams(t) ? (Wl(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : le.isObject(t) || n && n["Content-Type"] === "application/json" ? (Wl(n, "application/json"), $P(t)) : t;
  }],
  transformResponse: [function(t) {
    var n = this.transitional, r = n && n.silentJSONParsing, s = n && n.forcedJSONParsing, o = !r && this.responseType === "json";
    if (o || s && le.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (i) {
        if (o)
          throw i.name === "SyntaxError" ? jP(i, this, "E_JSON_PARSE") : i;
      }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  }
};
Ni.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
le.forEach(["delete", "get", "head"], function(t) {
  Ni.headers[t] = {};
});
le.forEach(["post", "put", "patch"], function(t) {
  Ni.headers[t] = le.merge(DP);
});
var Gc = Ni, xP = Ve, HP = Gc, qP = function(t, n, r) {
  var s = this || HP;
  return xP.forEach(r, function(i) {
    t = i.call(s, t, n);
  }), t;
}, pa, Jl;
function Rf() {
  return Jl || (Jl = 1, pa = function(t) {
    return !!(t && t.__CANCEL__);
  }), pa;
}
var Gl = Ve, ga = qP, FP = Rf(), VP = Gc;
function ya(e) {
  e.cancelToken && e.cancelToken.throwIfRequested();
}
var LP = function(t) {
  ya(t), t.headers = t.headers || {}, t.data = ga.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = Gl.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), Gl.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete t.headers[s];
    }
  );
  var n = t.adapter || VP.adapter;
  return n(t).then(function(s) {
    return ya(t), s.data = ga.call(
      t,
      s.data,
      s.headers,
      t.transformResponse
    ), s;
  }, function(s) {
    return FP(s) || (ya(t), s && s.response && (s.response.data = ga.call(
      t,
      s.response.data,
      s.response.headers,
      t.transformResponse
    ))), Promise.reject(s);
  });
}, ge = Ve, jf = function(t, n) {
  n = n || {};
  var r = {}, s = ["url", "method", "data"], o = ["headers", "auth", "proxy", "params"], i = [
    "baseURL",
    "transformRequest",
    "transformResponse",
    "paramsSerializer",
    "timeout",
    "timeoutMessage",
    "withCredentials",
    "adapter",
    "responseType",
    "xsrfCookieName",
    "xsrfHeaderName",
    "onUploadProgress",
    "onDownloadProgress",
    "decompress",
    "maxContentLength",
    "maxBodyLength",
    "maxRedirects",
    "transport",
    "httpAgent",
    "httpsAgent",
    "cancelToken",
    "socketPath",
    "responseEncoding"
  ], a = ["validateStatus"];
  function c(b, y) {
    return ge.isPlainObject(b) && ge.isPlainObject(y) ? ge.merge(b, y) : ge.isPlainObject(y) ? ge.merge({}, y) : ge.isArray(y) ? y.slice() : y;
  }
  function u(b) {
    ge.isUndefined(n[b]) ? ge.isUndefined(t[b]) || (r[b] = c(void 0, t[b])) : r[b] = c(t[b], n[b]);
  }
  ge.forEach(s, function(y) {
    ge.isUndefined(n[y]) || (r[y] = c(void 0, n[y]));
  }), ge.forEach(o, u), ge.forEach(i, function(y) {
    ge.isUndefined(n[y]) ? ge.isUndefined(t[y]) || (r[y] = c(void 0, t[y])) : r[y] = c(void 0, n[y]);
  }), ge.forEach(a, function(y) {
    y in n ? r[y] = c(t[y], n[y]) : y in t && (r[y] = c(void 0, t[y]));
  });
  var l = s.concat(o).concat(i).concat(a), d = Object.keys(t).concat(Object.keys(n)).filter(function(y) {
    return l.indexOf(y) === -1;
  });
  return ge.forEach(d, u), r;
};
const WP = "axios", JP = "0.21.4", GP = "Promise based HTTP client for the browser and node.js", KP = "index.js", zP = {
  test: "grunt test",
  start: "node ./sandbox/server.js",
  build: "NODE_ENV=production grunt build",
  preversion: "npm test",
  version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
  postversion: "git push && git push --tags",
  examples: "node ./examples/server.js",
  coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
  fix: "eslint --fix lib/**/*.js"
}, QP = {
  type: "git",
  url: "https://github.com/axios/axios.git"
}, CP = [
  "xhr",
  "http",
  "ajax",
  "promise",
  "node"
], YP = "Matt Zabriskie", XP = "MIT", ZP = {
  url: "https://github.com/axios/axios/issues"
}, ek = "https://axios-http.com", tk = {
  coveralls: "^3.0.0",
  "es6-promise": "^4.2.4",
  grunt: "^1.3.0",
  "grunt-banner": "^0.6.0",
  "grunt-cli": "^1.2.0",
  "grunt-contrib-clean": "^1.1.0",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^23.0.0",
  "grunt-karma": "^4.0.0",
  "grunt-mocha-test": "^0.13.3",
  "grunt-ts": "^6.0.0-beta.19",
  "grunt-webpack": "^4.0.2",
  "istanbul-instrumenter-loader": "^1.0.0",
  "jasmine-core": "^2.4.1",
  karma: "^6.3.2",
  "karma-chrome-launcher": "^3.1.0",
  "karma-firefox-launcher": "^2.1.0",
  "karma-jasmine": "^1.1.1",
  "karma-jasmine-ajax": "^0.1.13",
  "karma-safari-launcher": "^1.0.0",
  "karma-sauce-launcher": "^4.3.6",
  "karma-sinon": "^1.0.5",
  "karma-sourcemap-loader": "^0.3.8",
  "karma-webpack": "^4.0.2",
  "load-grunt-tasks": "^3.5.2",
  minimist: "^1.2.0",
  mocha: "^8.2.1",
  sinon: "^4.5.0",
  "terser-webpack-plugin": "^4.2.3",
  typescript: "^4.0.5",
  "url-search-params": "^0.10.0",
  webpack: "^4.44.2",
  "webpack-dev-server": "^3.11.0"
}, nk = {
  "./lib/adapters/http.js": "./lib/adapters/xhr.js"
}, rk = "dist/axios.min.js", sk = "dist/axios.min.js", ok = "./index.d.ts", ik = {
  "follow-redirects": "^1.14.0"
}, ak = [
  {
    path: "./dist/axios.min.js",
    threshold: "5kB"
  }
], ck = {
  name: WP,
  version: JP,
  description: GP,
  main: KP,
  scripts: zP,
  repository: QP,
  keywords: CP,
  author: YP,
  license: XP,
  bugs: ZP,
  homepage: ek,
  devDependencies: tk,
  browser: nk,
  jsdelivr: rk,
  unpkg: sk,
  typings: ok,
  dependencies: ik,
  bundlesize: ak
};
var Df = ck, Kc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Kc[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var Kl = {}, uk = Df.version.split(".");
function Uf(e, t) {
  for (var n = t ? t.split(".") : uk, r = e.split("."), s = 0; s < 3; s++) {
    if (n[s] > r[s])
      return !0;
    if (n[s] < r[s])
      return !1;
  }
  return !1;
}
Kc.transitional = function(t, n, r) {
  var s = n && Uf(n);
  function o(i, a) {
    return "[Axios v" + Df.version + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return function(i, a, c) {
    if (t === !1)
      throw new Error(o(a, " has been removed in " + n));
    return s && !Kl[a] && (Kl[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, c) : !0;
  };
};
function lk(e, t, n) {
  if (typeof e != "object")
    throw new TypeError("options must be an object");
  for (var r = Object.keys(e), s = r.length; s-- > 0; ) {
    var o = r[s], i = t[o];
    if (i) {
      var a = e[o], c = a === void 0 || i(a, o, e);
      if (c !== !0)
        throw new TypeError("option " + o + " must be " + c);
      continue;
    }
    if (n !== !0)
      throw Error("Unknown option " + o);
  }
}
var dk = {
  isOlderVersion: Uf,
  assertOptions: lk,
  validators: Kc
}, $f = Ve, mk = Bf, zl = PP, Ql = LP, Mi = jf, xf = dk, jn = xf.validators;
function Ss(e) {
  this.defaults = e, this.interceptors = {
    request: new zl(),
    response: new zl()
  };
}
Ss.prototype.request = function(t) {
  typeof t == "string" ? (t = arguments[1] || {}, t.url = arguments[0]) : t = t || {}, t = Mi(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var n = t.transitional;
  n !== void 0 && xf.assertOptions(n, {
    silentJSONParsing: jn.transitional(jn.boolean, "1.0.0"),
    forcedJSONParsing: jn.transitional(jn.boolean, "1.0.0"),
    clarifyTimeoutError: jn.transitional(jn.boolean, "1.0.0")
  }, !1);
  var r = [], s = !0;
  this.interceptors.request.forEach(function(b) {
    typeof b.runWhen == "function" && b.runWhen(t) === !1 || (s = s && b.synchronous, r.unshift(b.fulfilled, b.rejected));
  });
  var o = [];
  this.interceptors.response.forEach(function(b) {
    o.push(b.fulfilled, b.rejected);
  });
  var i;
  if (!s) {
    var a = [Ql, void 0];
    for (Array.prototype.unshift.apply(a, r), a = a.concat(o), i = Promise.resolve(t); a.length; )
      i = i.then(a.shift(), a.shift());
    return i;
  }
  for (var c = t; r.length; ) {
    var u = r.shift(), l = r.shift();
    try {
      c = u(c);
    } catch (d) {
      l(d);
      break;
    }
  }
  try {
    i = Ql(c);
  } catch (d) {
    return Promise.reject(d);
  }
  for (; o.length; )
    i = i.then(o.shift(), o.shift());
  return i;
};
Ss.prototype.getUri = function(t) {
  return t = Mi(this.defaults, t), mk(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
};
$f.forEach(["delete", "get", "head", "options"], function(t) {
  Ss.prototype[t] = function(n, r) {
    return this.request(Mi(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
$f.forEach(["post", "put", "patch"], function(t) {
  Ss.prototype[t] = function(n, r, s) {
    return this.request(Mi(s || {}, {
      method: t,
      url: n,
      data: r
    }));
  };
});
var fk = Ss, ha, Cl;
function Hf() {
  if (Cl)
    return ha;
  Cl = 1;
  function e(t) {
    this.message = t;
  }
  return e.prototype.toString = function() {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }, e.prototype.__CANCEL__ = !0, ha = e, ha;
}
var ba, Yl;
function pk() {
  if (Yl)
    return ba;
  Yl = 1;
  var e = Hf();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    var s = this;
    n(function(i) {
      s.reason || (s.reason = new e(i), r(s.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.source = function() {
    var r, s = new t(function(i) {
      r = i;
    });
    return {
      token: s,
      cancel: r
    };
  }, ba = t, ba;
}
var va, Xl;
function gk() {
  return Xl || (Xl = 1, va = function(t) {
    return function(r) {
      return t.apply(null, r);
    };
  }), va;
}
var wa, Zl;
function yk() {
  return Zl || (Zl = 1, wa = function(t) {
    return typeof t == "object" && t.isAxiosError === !0;
  }), wa;
}
var ed = Ve, hk = Tf, no = fk, bk = jf, vk = Gc;
function qf(e) {
  var t = new no(e), n = hk(no.prototype.request, t);
  return ed.extend(n, no.prototype, t), ed.extend(n, t), n;
}
var pt = qf(vk);
pt.Axios = no;
pt.create = function(t) {
  return qf(bk(pt.defaults, t));
};
pt.Cancel = Hf();
pt.CancelToken = pk();
pt.isCancel = Rf();
pt.all = function(t) {
  return Promise.all(t);
};
pt.spread = gk();
pt.isAxiosError = yk();
Lc.exports = pt;
Lc.exports.default = pt;
var wk = Lc.exports, _k = wk;
const Ya = /* @__PURE__ */ Gp(_k);
class Sk {
  constructor(t, n = {
    headers: {
      "Content-Type": "application/json"
    }
  }) {
    E(this, "client");
    E(this, "config", {});
    this.client = Ya.create({
      baseURL: t,
      timeout: 15e3,
      ...n
    }), this.config = {};
  }
  setConfig(t) {
    return this.config = t, this;
  }
  get(t, n = {}) {
    return this.client.get(t, { params: n, ...this.config });
  }
  post(t, n = {}) {
    return this.client.post(t, n, this.config);
  }
  put(t, n = {}) {
    return this.client.put(t, n, this.config);
  }
  delete(t, n = {}) {
    return this.client.delete(t, { params: n, ...this.config });
  }
}
const td = (e, t) => e.response ? e.response.data ? e.response.data.message || e.response.data : e.response.statusText : `The request to ${t} has failed.`;
class Ak {
  constructor(t, n = {}) {
    E(this, "client");
    E(this, "endpoint");
    this.client = new Sk(t, n), this.endpoint = t;
  }
  setConfig(t) {
    return this.client.setConfig(t), this;
  }
  async get(t, n = {}) {
    try {
      return await this.client.get(t, n);
    } catch (r) {
      const s = r;
      if (Ya.isAxiosError(s)) {
        if (s.code === "ECONNABORTED")
          throw new ut(new Error(s.message), {
            code: fn.REQUEST_TOO_LONG,
            context: t,
            method: ct.Get
          });
        const o = td(s, t);
        throw new ut(new Error(o), {
          context: t,
          code: s.response ? s.response.status : fn.BAD_REQUEST,
          method: ct.Get
        });
      }
      throw new ut(new Error(s.message), {
        code: gn,
        context: t,
        contextModule: ct.Get
      });
    }
  }
  async post(t, n = {}) {
    try {
      return await this.client.post(t, n);
    } catch (r) {
      const s = r;
      if (Ya.isAxiosError(s)) {
        if (s.code === "ECONNABORTED")
          throw new ut(new Error(s.message), {
            code: fn.REQUEST_TOO_LONG,
            method: ct.Post
          });
        const o = td(s, t);
        throw new ut(new Error(o), {
          code: s.response ? s.response.status : fn.BAD_REQUEST,
          context: t,
          contextModule: ct.Post
        });
      }
      throw new ut(new Error(s.message), {
        code: gn,
        context: t,
        contextModule: ct.Post
      });
    }
  }
}
var nd;
(function(e) {
  e.Idle = "idle", e.Loading = "loading", e.Completed = "completed", e.Error = "error", e.Confirmed = "confirmed";
})(nd || (nd = {}));
const Xa = 4e5, vo = 16e7, Ff = {
  amount: [
    {
      amount: new lt(Xa).times(vo).toString(),
      denom: "inj"
    }
  ],
  gas: Xa.toString(),
  payer: "",
  granter: "",
  feePayer: ""
}, Pk = (e) => {
  if (!e)
    return Ff;
  const { gas: t = Xa.toString(), gasPrice: n = vo, payer: r, granter: s, feePayer: o } = e, i = new lt(t).toFixed(0), a = new lt(n).toFixed(0);
  return {
    amount: [
      {
        denom: "inj",
        amount: new lt(i).times(a).toFixed()
      }
    ],
    gas: new lt(i).toFixed(),
    payer: r,
    granter: s,
    feePayer: o
  };
}, kk = (e) => {
  const t = e.match(/^([0-9.]+)([a-zA-Z][a-zA-Z0-9/:._-]*)$/);
  if (!t)
    throw new Error("Invalid gas price string");
  const [n, r] = t, s = new at(r).toWei().dividedBy(vo).toFixed(0);
  return Pk({ gas: s, gasPrice: vo });
};
lt.clone({ ROUNDING_MODE: lt.ROUND_DOWN });
const Ek = (e) => typeof e == "number" ? !0 : !isNaN(parseFloat(e)), rd = (e) => new lt(e).toFixed(18), Tk = "wasm/MsgExecuteContract", Za = ({ object: e, messageType: t, primaryType: n = "MsgValue" }) => {
  const r = [
    "order_mask",
    "order_type",
    "oracle_type",
    "round",
    "oracle_scale_factor",
    "expiry",
    "option",
    "proposal_id",
    "creation_height"
  ], s = [
    "timeout_timestamp",
    "revision_height",
    "revision_number"
  ], o = ["cid"], i = /* @__PURE__ */ new Map(), a = new Array();
  for (const c in _a(e)) {
    const u = _a(e)[c];
    if (c === "@type")
      continue;
    const l = typeof u;
    if (l === "boolean")
      a.push({ name: c, type: "bool" });
    else if (l === "number" || l === "bigint" || r.includes(c))
      a.push({
        name: c,
        type: Ok(c)
      });
    else if (l === "string") {
      if (o.includes(c) && !u)
        continue;
      if (s.includes(c)) {
        a.push({
          name: c,
          type: Ik(c)
        });
        continue;
      }
      a.push({ name: c, type: "string" });
    } else if (l === "object") {
      if (Array.isArray(u) && u.length === 0)
        throw new Vr(new Error("Array with length 0 found"));
      if (Array.isArray(u) && u.length > 0) {
        const d = typeof u[0];
        if (d === "boolean" || d === "number" || d === "string") {
          for (const y in u)
            if (typeof y !== d)
              throw new Vr(new Error("Array with different types found"));
          d === "boolean" ? a.push({ name: c, type: "bool[]" }) : d === "number" ? a.push({ name: c, type: "number[]" }) : d === "string" && a.push({ name: c, type: "string[]" });
        } else if (d === "object") {
          const y = sd({
            property: Nl(c),
            parentProperty: n,
            messageType: t
          }), P = Za({
            object: u[0],
            primaryType: y,
            messageType: t
          }), v = P.get(y);
          a.push({ name: c, type: `${y}[]` }), i.set(y, v);
          for (const m of P.keys())
            m !== n && i.set(m, P.get(m));
        } else
          throw new Vr(new Error("Array with elements of unknown type found"));
      } else if (u instanceof Date)
        a.push({ name: c, type: "string" });
      else {
        const d = sd({
          property: Nl(c),
          parentProperty: n,
          messageType: t
        }), b = Za({
          object: u,
          primaryType: d,
          messageType: t
        }), y = b.get(d);
        a.push({ name: c, type: d }), i.set(d, y);
        for (const P of b.keys())
          P !== n && i.set(P, b.get(P));
      }
    } else
      throw new Vr(new Error(`Type ${c} not found`));
  }
  return i.set(n, a), i;
}, Ok = (e) => {
  switch (e) {
    case "order_mask":
      return "int32";
    case "timeout_timestamp":
      return "timeout_timestamp";
    case "revision_number":
      return "uint64";
    case "revision_height":
      return "uint64";
    case "order_type":
      return "int32";
    case "oracle_type":
      return "int32";
    case "exponent":
      return "uint32";
    case "round":
      return "uint64";
    case "oracle_scale_factor":
      return "uint64";
    case "expiry":
      return "int64";
    case "creation_height":
      return "int64";
    case "option":
      return "int32";
    case "proposal_id":
      return "uint64";
    default:
      return "uint64";
  }
}, Ik = (e) => {
  switch (e) {
    case "timeout_timestamp":
      return "uint64";
    case "revision_number":
      return "uint64";
    case "revision_height":
      return "uint64";
    default:
      return "uint64";
  }
}, ec = (e, t) => {
  const n = [
    "proposal_id",
    "round",
    "oracle_scale_factor",
    "timeout_timestamp",
    "revision_height",
    "revision_number",
    "expiry"
  ], r = [
    "min_price_tick_size",
    "price",
    "quantity",
    "margin",
    "trigger_price",
    "min_quantity_tick_size"
  ], s = {
    "exchange/MsgIncreasePositionMargin": ["amount"]
  }, o = {
    "wasmx/MsgExecuteContractCompat": ["funds"]
  }, i = ["uri", "uri_hash"];
  return Object.keys(e).reduce((a, c) => {
    const u = e[c];
    if (!u) {
      if (t) {
        const l = Object.keys(o).find((d) => d === t);
        if (l && o[l].includes(c))
          return {
            ...a,
            [c]: u
          };
      }
      return i.includes(c) ? {
        ...a,
        [c]: u
      } : a;
    }
    if (typeof u == "object")
      return u instanceof Date ? {
        ...a,
        [c]: u.toJSON().split(".")[0] + "Z"
      } : Array.isArray(u) ? {
        ...a,
        [c]: u.every((l) => typeof l == "string") ? u : u.map((l) => ec(l))
      } : {
        ...a,
        [c]: ec(u)
      };
    if (Ek(u) && n.includes(c))
      return {
        ...a,
        [c]: u.toString()
      };
    if (typeof u == "string") {
      if (r.includes(c))
        return {
          ...a,
          [c]: rd(u)
        };
      if (t) {
        const l = Object.keys(s).find((d) => d === t);
        if (l && s[l].includes(c))
          return {
            ...a,
            [c]: rd(u)
          };
      }
    }
    return {
      ...a,
      [c]: u
    };
  }, {});
}, sd = ({ property: e, parentProperty: t, messageType: n }) => n === Tk ? Bk(e, t) : Nk(e, t), Bk = (e, t = "") => {
  const n = "CosmwasmInnerMsgMarker", r = e.replace("Type", "");
  return r === "Msg" ? n : `${t.replace(n, "") + r}Value`;
}, Nk = (e, t = "") => {
  const n = e.replace("Type", "");
  return `Type${(t === "MsgValue" ? "" : t.replace("Type", "")) + n}`;
};
function wo(e) {
  if (Array.isArray(e))
    return e.map(wo);
  if (typeof e != "object" || e === null)
    return e;
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    e[n] === void 0 || e[n] === null || (t[n] = wo(e[n]));
  }), t;
}
class Mk {
  constructor(t) {
    E(this, "params");
    this.params = t;
  }
  toJSON() {
    return JSON.stringify(wo(this.toData()));
  }
  /**
   * Returns the types of the message for EIP712
   */
  toEip712Types() {
    const t = this.toAmino();
    return Za({
      object: t.value,
      messageType: t.type
    });
  }
  /**
   * Returns the values of the message for EIP712
   */
  toEip712() {
    const t = this.toAmino(), { type: n, value: r } = t;
    return {
      type: n,
      value: ec(r, n)
    };
  }
  toDirectSignJSON() {
    return JSON.stringify(wo(this.toDirectSign()));
  }
}
const Rk = "injpub", Ks = "inj", jk = "injvaloper", Dk = "injvalcons", Uk = "m/44'/60'/0'/0/0";
class Ar {
  constructor(t) {
    E(this, "bech32Address");
    this.bech32Address = t;
  }
  compare(t) {
    return this.bech32Address === t.bech32Address;
  }
  get address() {
    return this.bech32Address;
  }
  /**
   * Create an address instance from a bech32-encoded address and a prefix
   * @param {string} bech32 bech32-encoded address
   * @param {string} prefix
   * @return {Address}
   * @throws {Error} if bech is not a valid bech32-encoded address
   */
  static fromBech32(t, n = Ks) {
    try {
      const r = U.Buffer.from(Ge.fromWords(Ge.decode(t).words)).toString("hex"), s = r.startsWith("0x") ? r : `0x${r}`, o = zs.Address.fromString(s.toString()).toBuffer(), i = Ge.encode(n, Ge.toWords(o));
      return new Ar(i);
    } catch (r) {
      throw new Vr(new Error(r.message), {
        type: yn.ValidationError
      });
    }
  }
  /**
   * Create an address instance from an ethereum address
   * @param {string} hex Ethereum address
   * @param {string} prefix
   * @return {Address}
   * @throws {Error} if bech is not a valid bech32-encoded address
   */
  static fromHex(t, n = Ks) {
    const r = t.startsWith("0x") ? t : `0x${t}`, s = zs.Address.fromString(r.toString()).toBuffer(), o = Ge.encode(n, Ge.toWords(s));
    return new Ar(o);
  }
  /**
   * Convert an address instance to a bech32-encoded account address
   * @param {string} prefix
   * @returns {string}
   */
  toBech32(t = Ks) {
    const n = this.toHex(), r = n.startsWith("0x") ? n : `0x${n}`, s = zs.Address.fromString(r).toBuffer();
    return Ge.encode(t, Ge.toWords(s));
  }
  /**
   * Return a bech32-encoded account address
   * @return {string}
   * @throws {Error} if this address is not a valid account address
   * */
  toAccountAddress() {
    return this.toBech32(Ks);
  }
  /**
   * Return a bech32-encoded validator address
   * @return {string}
   * @throws {Error} if this address is not a valid validator address
   * */
  toValidatorAddress() {
    return this.toBech32(jk);
  }
  /**
   * Return a bech32-encoded consensus address
   * @return {string}
   * @throws {Error} if this address is not a valid consensus address
   * */
  toConsensusAddress() {
    return this.toBech32(Dk);
  }
  /**
   * Return a hex representation of address
   * @return {string}
   * @throws {Error} if this address is not a valid account address
   * */
  toHex() {
    const { bech32Address: t } = this, n = U.Buffer.from(Ge.fromWords(Ge.decode(t).words)).toString("hex");
    return n.startsWith("0x") ? n : `0x${n}`;
  }
  /**
   * Return a subaccount address from the given bech32 encoded address
   * @param {number} index the subaccount index
   * @return {string}
   * @throws {Error} if this address is not a valid account address
   * */
  getSubaccountId(t = 0) {
    const n = "0".repeat(23) + t;
    return `${this.toHex()}${n}`;
  }
  /**
   * Return a ethereum address from the given bech32 encoded address
   * @return {string}
   * @throws {Error} if this address is not a valid account address
   * */
  getEthereumAddress() {
    return this.toHex();
  }
}
var od;
(function(e) {
  e.UnBonded = "UnBonded", e.UnBonding = "UnBonding", e.Bonded = "Bonded";
})(od || (od = {}));
const id = { ...Aa }, $k = (e) => Kp.SHA256.hash(zp.Base64.parse(e)).toString().toUpperCase();
function xk(e) {
  return U.Buffer.from(e).toString("hex");
}
function Hk(e) {
  return new Uint8Array(U.Buffer.from(e, "hex"));
}
function qk(e) {
  U.Buffer.from(e, "hex").length === 64 && (e = "04" + e);
  let n = xk(Qp.publicKeyConvert(Hk(e), !1));
  return n = n.substring(2), n;
}
class zc extends Mk {
  static fromJSON(t) {
    return new zc(t);
  }
  toProto() {
    const { params: t } = this, n = ce.create();
    n.denom = t.amount.denom, n.amount = t.amount.amount;
    const r = eo.create();
    if (r.receiver = t.receiver, r.sender = t.sender, r.sourceChannel = t.channelId, r.sourcePort = t.port, r.token = n, t.height) {
      const s = mn.create();
      s.revisionHeight = t.height.revisionHeight.toString(), s.revisionNumber = t.height.revisionNumber.toString(), r.timeoutHeight = s;
    }
    return t.timeout && (r.timeoutTimestamp = t.timeout.toString()), r.memo = t.memo || "", eo.fromJSON(r);
  }
  toData() {
    return {
      "@type": "/ibc.applications.transfer.v1.MsgTransfer",
      ...this.toProto()
    };
  }
  toAmino() {
    const t = this.toProto(), n = {
      ..._a(t)
    };
    return {
      type: "cosmos-sdk/MsgTransfer",
      value: {
        ...n,
        memo: n.memo || ""
      }
    };
  }
  toWeb3() {
    const t = this.toAmino(), { value: n } = t;
    return {
      "@type": "/ibc.applications.transfer.v1.MsgTransfer",
      ...n
    };
  }
  toDirectSign() {
    return {
      type: "/ibc.applications.transfer.v1.MsgTransfer",
      message: this.toProto()
    };
  }
  toBinary() {
    return eo.encode(this.toProto()).finish();
  }
}
class Qc {
  /**
   * Encode a transaction to base64-encoded protobuf
   * @param tx transaction to encode
   */
  static encode(t) {
    return U.Buffer.from(bo.encode(t).finish()).toString("base64");
  }
  /**
   * Decode a transaction from base64-encoded protobuf
   * @param tx transaction string to decode
   */
  static decode(t) {
    return bo.decode(U.Buffer.from(t, "base64"));
  }
  /**
   * Get the transaction's hash
   * @param tx transaction to hash
   */
  static hash(t) {
    return $k(Qc.encode(t));
  }
}
const Fk = (e) => {
  const t = C.create();
  return t.typeUrl = `${e.type.startsWith("/") ? "" : "/"}${e.type}`, t.value = e.value, t;
}, Vk = (e, t) => {
  const n = C.create();
  return n.typeUrl = t, n.value = e, n;
}, Lk = ee.SIGN_MODE_DIRECT;
ee.SIGN_MODE_LEGACY_AMINO_JSON;
ee.SIGN_MODE_LEGACY_AMINO_JSON;
ee.SIGN_MODE_EIP712_V2;
const Wk = ({ chainId: e, key: t }) => {
  if (typeof t != "string")
    return t;
  let n, r, s;
  return e.startsWith("injective") ? (n = sn.create(), s = sn, r = "/injective.crypto.v1beta1.ethsecp256k1.PubKey") : e.startsWith("evmos") ? (n = sn.create(), s = sn, r = "/ethermint.crypto.v1.ethsecp256k1.PubKey") : (n = sn.create(), s = sn, r = "/cosmos.crypto.secp256k1.PubKey"), n.key = U.Buffer.from(t, "base64"), Vk(s.encode(n).finish(), r);
}, Jk = ({ message: e, memo: t = "", timeoutHeight: n }) => {
  const r = Array.isArray(e) ? e : [e], s = Fc.create();
  return s.messages = r.map((o) => Fk({
    value: o.toBinary(),
    type: o.toDirectSign().type
  })), s.memo = t, n && (s.timeoutHeight = n.toString()), s;
}, Gk = ({ fee: e, payer: t, granter: n, gasLimit: r }) => {
  const s = ce.create();
  s.amount = e.amount, s.denom = e.denom;
  const o = dn.create();
  return o.gasLimit = r.toString(), o.amount = [s], t && (o.payer = t), n && (o.granter = n), o;
}, Kk = ({ chainId: e, mode: t, signers: n }) => n.map((r) => zk({
  mode: t,
  chainId: e,
  publicKey: r.pubKey,
  sequence: r.sequence
})), zk = ({ chainId: e, publicKey: t, sequence: n, mode: r }) => {
  const s = Wk({ chainId: e, key: t }), o = ln.create();
  o.mode = r;
  const i = rt.create();
  i.single = o;
  const a = un.create();
  return a.publicKey = s, a.sequence = n.toString(), a.modeInfo = i, a;
}, Qk = ({ signerInfo: e, fee: t }) => {
  const n = Vc.create();
  return n.signerInfos = e, n.fee = t, n;
}, Ck = ({ bodyBytes: e, authInfoBytes: t, chainId: n, accountNumber: r }) => {
  const s = qc.create();
  return s.accountNumber = r.toString(), s.chainId = n, s.bodyBytes = e, s.authInfoBytes = t, s;
};
class Yk extends Ak {
  retry(t, n = 3, r = 1e3) {
    const s = async (o = 1) => {
      try {
        return await t();
      } catch (i) {
        if (i instanceof ut && i.code === fn.REQUEST_TOO_LONG || o >= n)
          throw i;
        return new Promise((a) => setTimeout(() => a(s(o + 1)), r * o));
      }
    };
    return s();
  }
}
class Xk extends Yk {
  /**
   * Looks up the account information for the Injective address.
   *
   * @param address address of account to look up
   */
  async fetchAccount(t, n = {}) {
    const r = `cosmos/auth/v1beta1/accounts/${t}`;
    try {
      return (await this.retry(() => this.get(r, n))).data;
    } catch (s) {
      throw s instanceof ut ? s : new ut(new Error(s.message), {
        code: gn,
        context: `${this.endpoint}/${r}`,
        contextModule: id.Auth
      });
    }
  }
  /**
   * Looks up the account information for any cosmos chain address.
   *
   * @param address address of account to look up
   */
  async fetchCosmosAccount(t, n = {}) {
    const r = `cosmos/auth/v1beta1/accounts/${t}`;
    try {
      const s = t.startsWith("inj") || t.startsWith("evmos"), o = await this.retry(() => this.get(r, n));
      return s ? o.data.account.base_account : o.data.account;
    } catch (s) {
      throw s instanceof ut ? s : new ut(new Error(s.message), {
        code: gn,
        context: `${this.endpoint}/${r}`,
        contextModule: id.Auth
      });
    }
  }
}
var Zk = (() => {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof U.global < "u")
    return U.global;
  throw "Unable to locate global object";
})();
w.util.Long !== ue && (w.util.Long = ue, w.configure());
let TE = class extends Zk.Error {
  constructor(t, n, r) {
    super(t), this.code = n, this.metadata = r;
  }
};
var ad;
(function(e) {
  e.Internal = "internal", e.External = "external", e.Withdraw = "withdraw", e.Deposit = "deposit";
})(ad || (ad = {}));
var cd;
(function(e) {
  e[e.AccessTypeUnspecified = 0] = "AccessTypeUnspecified", e[e.AccessTypeNobody = 1] = "AccessTypeNobody", e[e.AccessTypeOnlyAddress = 2] = "AccessTypeOnlyAddress", e[e.AccessTypeEverybody = 3] = "AccessTypeEverybody", e[e.AccessTypeAnyOfAddresses = 4] = "AccessTypeAnyOfAddresses";
})(cd || (cd = {}));
var ud;
(function(e) {
  e.AccessTypeUnspecified = "Unspecified", e.AccessTypeNobody = "Nobody", e.AccessTypeOnlyAddress = "Only Address", e.AccessTypeEverybody = "Everybody", e.AccessTypeAnyOfAddresses = "Any of Addresses";
})(ud || (ud = {}));
var ld;
(function(e) {
  e.Proposed = "proposed", e.Signed = "signed", e.Missed = "missed";
})(ld || (ld = {}));
var dd;
(function(e) {
  e.Pending = "pending", e.Disbursed = "disbursed";
})(dd || (dd = {}));
({ ...Pa });
var md;
(function(e) {
  e.Market = "market", e.LimitFill = "limitFill", e.LimitMatchRestingOrder = "limitMatchRestingOrder", e.LimitMatchNewOrder = "limitMatchNewOrder";
})(md || (md = {}));
var fd;
(function(e) {
  e.Maker = "maker", e.Taker = "taker";
})(fd || (fd = {}));
var pd;
(function(e) {
  e.Buy = "buy", e.Sell = "sell", e.Long = "long", e.Short = "short";
})(pd || (pd = {}));
var gd;
(function(e) {
  e.Insert = "insert", e.Delete = "delete", e.Replace = "replace", e.Update = "update", e.Invalidate = "invalidate";
})(gd || (gd = {}));
new at(0);
Pd`
  query Deposits($destination: Bytes!) {
    deposits(
      orderBy: timestamp
      orderDirection: desc
      first: 10
      where: { destination: $destination }
    ) {
      id
      tokenContract
      sender
      destination
      eventNonce
      amount
      timestamp
      blockHeight
    }
  }
`;
Pd`
  query Deposits($sender: Bytes!, $timestamp: Int!) {
    deposits(
      orderBy: timestamp
      orderDirection: desc
      where: { timestamp_gte: $timestamp, sender: $sender }
    ) {
      id
      tokenContract
      sender
      destination
      eventNonce
      amount
      timestamp
      blockHeight
    }
  }
`;
w.util.Long !== ue && (w.util.Long = ue, w.configure());
var eE = (() => {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof U.global < "u")
    return U.global;
  throw "Unable to locate global object";
})();
w.util.Long !== ue && (w.util.Long = ue, w.configure());
class IE extends eE.Error {
  constructor(t, n, r) {
    super(t), this.code = n, this.metadata = r;
  }
}
class Xr {
  constructor(t, n) {
    E(this, "type");
    E(this, "key");
    this.key = t, this.type = n || "/injective.crypto.v1beta1.ethsecp256k1.PubKey";
  }
  static fromBase64(t) {
    return new Xr(U.Buffer.from(t, "base64"));
  }
  static fromBytes(t) {
    return new Xr(t);
  }
  static fromHex(t) {
    const r = typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t, s = U.Buffer.from(r.toString(), "hex"), o = Qs.publicKeyCreate(s, !0), i = "/injective.crypto.v1beta1.ethsecp256k1.PubKey";
    return new Xr(o, i);
  }
  toPubKeyBytes() {
    return this.key;
  }
  toBase64() {
    return U.Buffer.from(this.toPubKeyBytes()).toString("base64");
  }
  toHex() {
    return U.Buffer.from(this.toPubKeyBytes()).toString("hex");
  }
  toBech32() {
    return Ge.encode(Rk, Ge.toWords(U.Buffer.from(this.toHex(), "hex")));
  }
  toAddress() {
    const t = this.toHex(), n = qk(t), r = U.Buffer.from(Cp.keccak256(zs.toBuffer(n.startsWith("0x") ? n : "0x" + n)), "hex").subarray(-20);
    return Ar.fromHex(U.Buffer.from(r).toString("hex").toLowerCase());
  }
  toProto() {
    const t = za.create();
    return t.key = this.key, t;
  }
  toAny() {
    const t = this.toProto(), n = C.create();
    return n.typeUrl = this.type, n.value = U.Buffer.from(za.encode(t).finish()), n;
  }
}
class Vn {
  constructor(t) {
    E(this, "wallet");
    this.wallet = t;
  }
  /**
   * Generate new private key with random mnemonic phrase
   * @returns { privateKey: PrivateKey, mnemonic: string }
   */
  static generate() {
    const t = Yp.generateMnemonic();
    return {
      privateKey: Vn.fromMnemonic(t),
      mnemonic: t
    };
  }
  /**
   * Create a PrivateKey instance from a given mnemonic phrase and a HD derivation path.
   * If path is not given, default to Band's HD prefix 494 and all other indexes being zeroes.
   * @param {string} words the mnemonic phrase
   * @param {string|undefined} path the HD path that follows the BIP32 standard (optional)
   * @returns {PrivateKey} Initialized PrivateKey object
   */
  static fromMnemonic(t, n = Uk) {
    return new Vn(Hi.fromMnemonic(t, n));
  }
  /**
   * Create a PrivateKey instance from a given private key and a HD derivation path.
   * If path is not given, default to Band's HD prefix 494 and all other indexes being zeroes.
   * @param {string} privateKey  the private key
   * @returns {PrivateKey} Initialized PrivateKey object
   *
   * @deprecated - use fromHex instead
   */
  static fromPrivateKey(t) {
    return new Vn(new Hi(t));
  }
  /**
   * Create a PrivateKey instance from a given private key and a HD derivation path.
   * If path is not given, default to Band's HD prefix 494 and all other indexes being zeroes.
   * @param {string} privateKey  the private key
   * @returns {PrivateKey} Initialized PrivateKey object
   */
  static fromHex(t) {
    const n = typeof t == "string", r = n && t.startsWith("0x") ? t.slice(2) : t, s = n ? U.Buffer.from(r.toString(), "hex") : t;
    return new Vn(new Hi(s));
  }
  /**
   * Return the private key in hex
   * @returns {string}
   **/
  toPrivateKeyHex() {
    return this.wallet.privateKey.startsWith("0x") ? this.wallet.privateKey : `0x${this.wallet.privateKey}`;
  }
  /**
   * Return the PublicKey associated with this private key.
   * @returns {PublicKey} a Public key that can be used to verify the signatures made with this PrivateKey
   **/
  toPublicKey() {
    return Xr.fromHex(this.wallet.privateKey);
  }
  /**
   * Return a hex representation of signing key.
   * @returns {string}
   */
  toHex() {
    return this.wallet.address.startsWith("0x") ? this.wallet.address : `0x${this.wallet.address}`;
  }
  /**
   * Return the Address associated with this private key.
   * @returns {Address}
   **/
  toAddress() {
    return Ar.fromHex(this.toHex());
  }
  /**
   * Return the Bech32 address associated with this private key.
   * @returns {string}
   **/
  toBech32() {
    return Ar.fromHex(this.toHex()).toBech32();
  }
  /**
   * Sign the given message using the wallet's _signingKey function.
   * @param {string} messageBytes: the message that will be hashed and signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async sign(t) {
    const { wallet: n } = this, r = Sa(t), s = await n._signingKey().signDigest(r), o = Yc(s);
    return Xc(Zc([o.r, o.s]));
  }
  /**
   * Sign the given message using the edcsa sign_deterministic function.
   * @param {Buffer} messageBytes: the message that will be hashed and signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signEcda(t) {
    const { wallet: n } = this, r = Sa(t), s = n.privateKey.startsWith("0x") ? n.privateKey.slice(2) : n.privateKey, o = Uint8Array.from(U.Buffer.from(s, "hex")), { signature: i } = Qs.ecdsaSign(r, o);
    return i;
  }
  /**
   * Sign the given message using the wallet's _signingKey function.
   * @param {string} messageHashedBytes: the message that will be signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signHashed(t) {
    const { wallet: n } = this, r = await n._signingKey().signDigest(t), s = Yc(r);
    return Xc(Zc([s.r, s.s]));
  }
  /**
   * Sign the given message using the edcsa sign_deterministic function.
   * @param {Buffer} messageHashedBytes: the message that will be signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signHashedEcda(t) {
    const { wallet: n } = this, r = n.privateKey.startsWith("0x") ? n.privateKey.slice(2) : n.privateKey, s = Uint8Array.from(U.Buffer.from(r, "hex")), { signature: o } = Qs.ecdsaSign(t, s);
    return o;
  }
  /**
   * Sign the given typed data using the edcsa sign_deterministic function.
   * @param {Buffer} eip712Data: the typed data that will be hashed and signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signTypedData(t) {
    const { wallet: n } = this, r = n.privateKey.startsWith("0x") ? n.privateKey.slice(2) : n.privateKey, s = eu.signTypedData({
      privateKey: U.Buffer.from(r, "hex"),
      data: t,
      version: eu.SignTypedDataVersion.V4
    });
    return U.Buffer.from(s.replace("0x", ""), "hex");
  }
  /**
   * Sign the given typed data using the edcsa sign_deterministic function.
   * @param {Buffer} eip712Data: the typed data that will be signed, a Buffer made of bytes
   * @returns {Uint8Array} a signature of this private key over the given message
   */
  async signHashedTypedData(t) {
    const { wallet: n } = this, r = n.privateKey.startsWith("0x") ? n.privateKey.slice(2) : n.privateKey, s = Uint8Array.from(U.Buffer.from(r, "hex")), { signature: o } = Qs.ecdsaSign(t, s);
    return o;
  }
}
const tE = ({ signers: e, chainId: t, message: n, timeoutHeight: r, memo: s = "", fee: o = Ff, signMode: i = Lk }) => {
  const a = Array.isArray(e) ? e : [e], [c] = a, u = Jk({ message: n, memo: s, timeoutHeight: r }), l = typeof o == "string" ? kk(o) : o, d = Gk({
    fee: l.amount[0],
    payer: l.payer,
    granter: l.granter,
    gasLimit: parseInt(l.gas, 10)
  }), b = Kk({
    chainId: t,
    mode: i,
    signers: a
  }), y = Qk({
    signerInfo: b,
    fee: d
  }), P = Fc.encode(u).finish(), v = Vc.encode(y).finish(), m = Ck({
    chainId: t,
    bodyBytes: P,
    authInfoBytes: v,
    accountNumber: c.accountNumber
  }), S = qc.encode(m).finish(), D = U.Buffer.from(S), N = Sa(U.Buffer.from(S)), Y = bo.create();
  return Y.authInfoBytes = v, Y.bodyBytes = P, {
    txRaw: Y,
    signDoc: m,
    signers: e,
    signer: c,
    signBytes: D,
    signHashedBytes: N,
    bodyBytes: P,
    authInfoBytes: v
  };
}, nE = (e) => tE({
  ...e,
  signers: {
    pubKey: e.pubKey,
    accountNumber: e.accountNumber,
    sequence: e.sequence
  }
});
async function rE(e, t) {
  const [n, r] = await Sr.chainFromRpc(e);
  if (ig.includes(r))
    return new oE(r, n, t);
  const s = await Et.DirectSecp256k1HdWallet.fromMnemonic(t, {
    prefix: Td(r)
  }), o = (await s.getAccounts())[0], i = await xc.SigningCosmWasmClient.connectWithSigner(Xp(n, r), s);
  return new sE(r, i, o.address);
}
class sE {
  constructor(t, n, r, s) {
    E(this, "_chain");
    E(this, "_signer");
    E(this, "_account");
    E(this, "_debug");
    this._chain = t, this._signer = n, this._account = r, this._debug = s;
  }
  chain() {
    return this._chain;
  }
  address() {
    return this._account;
  }
  async sign(t) {
    const n = [];
    for (const r of t) {
      const { description: s, transaction: o } = r;
      this._debug && (console.log(`Signing: ${s} for ${this.address()}`), console.log(o.msgs, o.fee, o.memo));
      const i = await this._signer.sign(this.address(), o.msgs, o.fee, o.memo), a = Rt.TxRaw.encode(i).finish();
      n.push(a);
    }
    return n;
  }
}
class oE {
  constructor(t, n, r) {
    E(this, "_chain");
    E(this, "_chainId");
    E(this, "key");
    E(this, "prefix");
    E(this, "_rpc");
    this._chain = t, this._rpc = new Xk(cg(n, t)), this._chainId = Zp.get(n, t), this.prefix = Td(t), this.key = Vn.fromMnemonic(r);
  }
  chain() {
    return this._chain;
  }
  address() {
    return this.key.toAddress().toBech32(this.prefix);
  }
  async sign(t) {
    const n = this.key.toPublicKey().toBase64(), { sequence: r, accountNumber: s } = await this.getSignerData(), o = [];
    for (const i of t) {
      const { description: a, transaction: c } = i;
      console.log(`Signing ${a} for ${this.address()}`);
      const { signBytes: u, txRaw: l } = nE({
        message: c.msgs.map((d) => zc.fromJSON({
          port: d.value.sourcePort,
          amount: d.value.token,
          memo: d.value.memo,
          sender: d.value.sender,
          receiver: d.value.receiver,
          channelId: d.value.sourceChannel,
          timeout: d.value.timeoutTimestamp,
          height: d.value.timeoutHeight
        })),
        pubKey: n,
        sequence: r,
        accountNumber: s,
        chainId: this._chainId,
        memo: c.memo,
        fee: c.fee
      });
      l.signatures = [await this.key.sign(u)], o.push(nc.decode(Qc.encode(l)));
    }
    return o;
  }
  async getSignerData() {
    const t = this.address(), { account: n } = await this._rpc.fetchAccount(t), r = parseInt(n.base_account.account_number, 10), s = parseInt(n.base_account.sequence, 10);
    return { address: t, sequence: s, accountNumber: r };
  }
}
const iE = {
  Address: Te,
  Platform: Sr,
  getSigner: rE,
  protocols: {
    WormholeCore: () => import("./index-1UYO6C7i.mjs"),
    TokenBridge: () => import("./index-BCg5kiin.mjs"),
    IbcBridge: () => import("./index-udkjEC-A.mjs")
  },
  getChain: (e, t, n) => new Hc(t, new Sr(e, eg(e, Zr, {
    [t]: n
  })))
}, BE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iE
}, Symbol.toStringTag, { value: "Module" }));
export {
  Sr as C,
  dE as D,
  Ka as G,
  fE as I,
  mE as M,
  Zr as _,
  Te as a,
  kd as b,
  pE as c,
  gE as d,
  yE as e,
  hE as f,
  bE as g,
  vE as h,
  wE as i,
  _E as j,
  SE as k,
  AE as l,
  hn as m,
  wu as n,
  BE as o
};
