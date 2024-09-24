import { BridgeDefaults, NttGroups, TokensConfig, ChainsConfig } from './types';

export declare const populateRpcField: (chainName: string, rpc: string | undefined) => {
    [x: string]: string;
};
export declare const mergeCustomTokensConfig: (builtin: TokensConfig, custom?: TokensConfig) => TokensConfig;
export declare const mergeNttGroups: (tokens: TokensConfig, builtin: NttGroups, custom?: NttGroups) => NttGroups;
export declare const validateDefaults: (defaults: BridgeDefaults, chains: ChainsConfig, tokens: TokensConfig) => BridgeDefaults | undefined;
//# sourceMappingURL=utils.d.ts.map