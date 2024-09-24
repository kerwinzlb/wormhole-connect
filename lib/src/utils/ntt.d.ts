import { NttManagerConfig, TokenConfig } from '../config/types';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

export declare const isNttToken: (token: TokenConfig) => boolean;
export declare const isNttTokenPair: (token1: TokenConfig, token2: TokenConfig) => boolean;
export declare const getNttDisplayName: (token1: TokenConfig, token2: TokenConfig) => string | undefined;
export declare const getNttManagerConfig: (token: TokenConfig, groupKey: string) => NttManagerConfig | undefined;
export declare const getNttManagerAddress: (token: TokenConfig, groupKey: string) => string | undefined;
export declare const getNttGroupKey: (token1: TokenConfig, token2: TokenConfig) => string | undefined;
export declare const getNttGroupKeyByAddress: (managerAddress: string, chainName: ChainName) => string | undefined;
export declare const getNttManagerConfigByAddress: (managerAddress: string, chainName: ChainName) => NttManagerConfig | undefined;
export declare const getNttManagerConfigByGroupKey: (groupKey: string, chainName: ChainName) => NttManagerConfig | undefined;
export declare const getNttTokenByGroupKey: (groupKey: string, chainName: ChainName) => TokenConfig | undefined;
//# sourceMappingURL=ntt.d.ts.map