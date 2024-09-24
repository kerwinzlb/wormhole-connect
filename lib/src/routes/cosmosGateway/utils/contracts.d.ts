import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

export declare function getTranslatorAddress(): string;
export declare function getIbcDestinationChannel(chain: ChainId | ChainName): Promise<string>;
export declare function getIbcSourceChannel(chain: ChainId | ChainName): Promise<string>;
//# sourceMappingURL=contracts.d.ts.map