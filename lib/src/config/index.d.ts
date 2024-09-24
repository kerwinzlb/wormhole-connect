import { WormholeContext, WormholeConfig, ChainResourceMap } from '@wormhole-foundation/wormhole-connect-sdk';
import { Network as NetworkLegacy } from '@certusone/wormhole-sdk';
import { WormholeConnectConfig, Network, InternalConfig, TokensConfig } from './types';

export declare function buildConfig(customConfig?: WormholeConnectConfig): InternalConfig;
declare const config: InternalConfig;
export default config;
export declare function getWormholeContext(network: NetworkLegacy, sdkConfig: WormholeConfig, tokens: TokensConfig, rpcs: ChainResourceMap): WormholeContext;
export declare function getDefaultWormholeContext(network: Network): WormholeContext;
export declare function setConfig(customConfig?: WormholeConnectConfig): void;
//# sourceMappingURL=index.d.ts.map