import { BigNumber, BigNumberish } from 'ethers';
import { ChainName, ChainId, TokenId, NATIVE } from '@wormhole-foundation/wormhole-connect-sdk';
import { GasEstimateOptions, Route } from '../config/types';
import { SignedMessage } from '../routes';

export declare const getGasFallback: (chain: ChainName | ChainId, route: Route, operation: GasEstimateOptions) => BigNumber;
export declare const estimateSendGas: (route: Route, token: TokenId | typeof NATIVE, amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any) => Promise<string>;
export declare const estimateClaimGas: (route: Route, destChain: ChainName | ChainId, signedMessage?: SignedMessage) => Promise<string>;
export declare const estimateAverageGasFee: (chain: ChainName | ChainId, gasLimit: BigNumberish) => Promise<BigNumber>;
//# sourceMappingURL=gas.d.ts.map