import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

export declare const CCTPManual_CHAINS: ChainName[];
export declare const CCTPDomains: Partial<Record<ChainName, number>>;
export declare function getChainNameCCTP(domain: number): ChainName;
export declare function getDomainCCTP(chain: ChainName): number;
//# sourceMappingURL=chains.d.ts.map