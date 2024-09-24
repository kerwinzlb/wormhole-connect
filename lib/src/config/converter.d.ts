import { Network as NetworkConnect, TokenConfig as TokenConfigV1, TokensConfig as TokensConfigV1 } from './types';
import * as v1 from '@wormhole-foundation/wormhole-connect-sdk';
import * as v2 from '@wormhole-foundation/sdk';
export declare class SDKConverter {
    wh: v1.WormholeContext;
    constructor(wh: v1.WormholeContext);
    toChainIdV1(chain: v2.Chain): v1.ChainId;
    toChainNameV1(chain: v2.Chain): v1.ChainName;
    toChainV2(chain: v1.ChainName | v1.ChainId): v2.Chain;
    toNetworkV2(network: NetworkConnect): v2.Network;
    toNetworkV1(network: v2.Network): NetworkConnect;
    toTokenIdV1(token: v2.TokenId): v1.TokenId | undefined;
    toTokenIdV2(token: v1.TokenId | TokenConfigV1): v2.TokenId;
    tokenIdV2<C extends v2.Chain>(chain: v1.ChainName | v1.ChainId, address: string): v2.TokenId<C>;
    isTokenConfigV1(v: v1.TokenId | TokenConfigV1): v is TokenConfigV1;
    findTokenConfigV1(tokenId: v2.TokenId, tokenConfigs: TokenConfigV1[]): TokenConfigV1 | undefined;
    getTokenIdV2ForKey<C extends v2.Chain>(key: string, chain: v1.ChainName | v1.ChainId, tokenConfigs: TokensConfigV1): v2.TokenId<C> | undefined;
}
//# sourceMappingURL=converter.d.ts.map