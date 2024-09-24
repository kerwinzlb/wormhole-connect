import { ChainName, ChainId, ParsedMessage as SdkParsedMessage, ParsedRelayerMessage as SdkParsedRelayerMessage } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { ParsedMessage, ParsedRelayerMessage } from '../utils/sdk';
import { Route, TokenConfig } from '../config/types';

export declare const adaptParsedMessage: (parsed: SdkParsedMessage | SdkParsedRelayerMessage) => Promise<ParsedMessage | ParsedRelayerMessage>;
export declare const formatGasFee: (chain: ChainName | ChainId, gasFee: BigNumber) => string;
export declare const isIlliquidDestToken: ({ symbol, nativeChain }: TokenConfig, destChain: ChainName | ChainId) => boolean;
export declare const isNttRoute: (route?: Route) => boolean;
//# sourceMappingURL=utils.d.ts.map