import { Network as NetworkLegacy } from '@certusone/wormhole-sdk';
import { ChainConfig as BaseChainConfig, ChainName, TokenId, ChainResourceMap, Context, WormholeContext, WormholeConfig } from '@wormhole-foundation/wormhole-connect-sdk';
import { Alignment } from '../components/Header';
import { WormholeConnectPartialTheme } from 'theme';
import { TransferDetails, WormholeConnectEventHandler } from '../telemetry/types';
import { SDKConverter } from './converter';

export declare enum Icon {
    'AVAX' = 1,
    'BNB' = 2,
    'BSC' = 3,
    'CELO' = 4,
    'ETH' = 5,
    'FANTOM' = 6,
    'POLYGON' = 7,
    'SOLANA' = 8,
    'USDC' = 9,
    'GLMR' = 10,
    'DAI' = 11,
    'USDT' = 12,
    'BUSD' = 13,
    'WBTC' = 14,
    'SUI' = 15,
    'APT' = 16,
    'SEI' = 17,
    'BASE' = 18,
    'OSMO' = 19,
    'TBTC' = 20,
    'WSTETH' = 21,
    'ARBITRUM' = 22,
    'OPTIMISM' = 23,
    'ATOM' = 24,
    'EVMOS' = 25,
    'KUJI' = 26,
    'PYTH' = 27,
    'INJ' = 28,
    'KLAY' = 29,
    'NTT' = 30,
    'SCROLL' = 31,
    'BLAST' = 32,
    'XLAYER' = 33,
    'MANTLE' = 34
}
export declare enum Route {
    Bridge = "bridge",
    Relay = "relay",
    CosmosGateway = "cosmosGateway",
    CCTPManual = "cctpManual",
    CCTPRelay = "cctpRelay",
    TBTC = "tbtc",
    ETHBridge = "ethBridge",
    wstETHBridge = "wstETHBridge",
    NttManual = "nttManual",
    NttRelay = "nttRelay",
    USDTBridge = "usdtBridge"
}
export type TransferSide = 'source' | 'destination';
export type SupportedRoutes = keyof typeof Route;
export type Network = 'mainnet' | 'testnet' | 'devnet';
export interface BridgeDefaults {
    fromNetwork?: ChainName;
    toNetwork?: ChainName;
    token?: string;
    requiredNetwork?: ChainName;
}
export interface ExtendedTransferDetails extends TransferDetails {
    fromWalletAddress: string;
    toWalletAddress: string;
}
export interface ValidateTransferResult {
    isValid: boolean;
    error?: string;
}
export type ValidateTransferHandler = (transferDetails: ExtendedTransferDetails) => Promise<ValidateTransferResult>;
export type IsRouteSupportedHandler = (transferDetails: TransferDetails) => Promise<boolean>;
export interface WormholeConnectConfig {
    env?: Network;
    network?: Network;
    rpcs?: ChainResourceMap;
    rest?: ChainResourceMap;
    graphql?: ChainResourceMap;
    coinGeckoApiKey?: string;
    networks?: ChainName[];
    chains?: ChainName[];
    tokens?: string[];
    tokensConfig?: TokensConfig;
    customTheme?: WormholeConnectPartialTheme;
    mode?: 'dark' | 'light';
    eventHandler?: WormholeConnectEventHandler;
    validateTransferHandler?: ValidateTransferHandler;
    isRouteSupportedHandler?: IsRouteSupportedHandler;
    cta?: {
        text: string;
        link: string;
    };
    showHamburgerMenu?: boolean;
    explorer?: ExplorerConfig;
    bridgeDefaults?: BridgeDefaults;
    routes?: string[];
    cctpWarning?: {
        href: string;
    };
    pageHeader?: string | PageHeader;
    pageSubHeader?: string;
    menu?: MenuEntry[];
    searchTx?: SearchTxConfig;
    moreTokens?: MoreTokenConfig;
    moreNetworks?: MoreChainConfig;
    partnerLogo?: string;
    walletConnectProjectId?: string;
    previewMode?: boolean;
    manualTargetAddress?: boolean;
    ethBridgeMaxAmount?: number;
    wstETHBridgeMaxAmount?: number;
    usdtBridgeMaxAmount?: number;
    nttGroups?: NttGroups;
}
export interface InternalConfig {
    wh: WormholeContext;
    sdkConfig: WormholeConfig;
    sdkConverter: SDKConverter;
    network: Network;
    networkLegacy: NetworkLegacy;
    isMainnet: boolean;
    rpcs: ChainResourceMap;
    rest: ChainResourceMap;
    graphql: ChainResourceMap;
    wormholeApi: string;
    wormholeRpcHosts: string[];
    coinGeckoApiKey?: string;
    chains: ChainsConfig;
    chainsArr: ChainConfig[];
    tokens: TokensConfig;
    tokensArr: TokenConfig[];
    gasEstimates: GasEstimates;
    routes: string[];
    triggerEvent: WormholeConnectEventHandler;
    validateTransfer?: ValidateTransferHandler;
    isRouteSupportedHandler?: IsRouteSupportedHandler;
    cta?: {
        text: string;
        link: string;
    };
    explorer?: ExplorerConfig;
    attestUrl: string;
    bridgeDefaults?: BridgeDefaults;
    cctpWarning: string;
    pageHeader?: string | PageHeader;
    pageSubHeader?: string;
    menu: MenuEntry[];
    searchTx?: SearchTxConfig;
    moreTokens?: MoreTokenConfig;
    moreNetworks?: MoreChainConfig;
    partnerLogo?: string;
    walletConnectProjectId?: string;
    showHamburgerMenu: boolean;
    previewMode?: boolean;
    manualTargetAddress?: boolean;
    ethBridgeMaxAmount: number;
    wstETHBridgeMaxAmount: number;
    usdtBridgeMaxAmount: number;
    nttGroups: NttGroups;
    guardianSet: GuardianSetData;
}
export type ExplorerConfig = {
    href: string;
    label?: string;
    target?: '_blank' | '_self';
};
export type PageHeader = {
    text: string;
    align: Alignment;
};
export type SearchTxConfig = {
    txHash?: string;
    chainName?: string;
};
export type MoreTokenConfig = {
    label: string;
    href: string;
    target?: '_blank' | '_self';
};
export type MoreChainConfig = {
    href: string;
    target?: '_blank' | '_self';
    description: string;
    networks: MoreChainDefinition[];
};
export type MoreChainDefinition = {
    icon: string;
    href?: string;
    label: string;
    name?: string;
    description?: string;
    target?: '_blank' | '_self';
    showOpenInNewIcon?: boolean;
};
type DecimalsMap = Partial<Record<Context, number>> & {
    default: number;
};
export type TokenConfig = {
    key: string;
    symbol: string;
    nativeChain: ChainName;
    icon: Icon | string;
    tokenId?: TokenId;
    coinGeckoId: string;
    color?: string;
    decimals: DecimalsMap;
    wrappedAsset?: string;
    displayName?: string;
    foreignAssets?: {
        [chainName in ChainName]?: {
            address: string;
            decimals: number;
        };
    };
};
export type TokensConfig = {
    [key: string]: TokenConfig;
};
export interface ChainConfig extends BaseChainConfig {
    displayName: string;
    explorerUrl: string;
    explorerName: string;
    gasToken: string;
    chainId: number | string;
    icon: Icon;
    maxBlockSearch: number;
    automaticRelayer?: boolean;
}
export type ChainsConfig = {
    [chain in ChainName]?: ChainConfig;
};
export type GasEstimatesByOperation = {
    sendToken?: number;
    sendNative?: number;
    claim?: number;
};
export type GasEstimateOptions = keyof GasEstimatesByOperation;
export type GasEstimates = {
    [chain in ChainName]?: {
        [route in Route]?: GasEstimatesByOperation;
    };
};
export type RpcMapping = {
    [chain in ChainName]?: string;
};
export type GuardianSetData = {
    index: number;
    keys: string[];
};
export type NetworkData = {
    chains: ChainsConfig;
    tokens: TokensConfig;
    gasEstimates: GasEstimates;
    rpcs: RpcMapping;
    rest: RpcMapping;
    graphql: RpcMapping;
    nttGroups: NttGroups;
    guardianSet: GuardianSetData;
};
export interface MenuEntry {
    label: string;
    href: string;
    target?: string;
    order?: number;
}
export type NttTransceiverConfig = {
    address: string;
    type: 'wormhole';
};
export type NttManagerConfig = {
    chainName: ChainName;
    address: string;
    tokenKey: string;
    transceivers: NttTransceiverConfig[];
    solanaQuoter?: string;
};
export type NttGroup = {
    nttManagers: NttManagerConfig[];
    displayName?: string;
};
export type NttGroups = {
    [key: string]: NttGroup;
};
export {};
//# sourceMappingURL=types.d.ts.map