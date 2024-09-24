import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { TokenConfig, Route } from '../config/types';
import { RouteAvailability, RouteAbstract } from './abstracts/routeAbstract';
import { UnsignedMessage, SignedMessage, TransferDisplayData, TransferInfoBaseParams, TransferDestInfo, RelayerFee } from './types';
import { TokenPrices } from '../store/tokenPrices';

export declare class Operator {
    getRoute(route: Route): RouteAbstract;
    getRouteFromTx(txHash: string, chain: ChainName): Promise<Route>;
    isRouteSupported(route: Route, sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    isRouteAvailable(route: Route, sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    allSupportedChains(): ChainName[];
    allSupportedSourceTokens(destToken: TokenConfig | undefined, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    allSupportedDestTokens(sourceToken: TokenConfig | undefined, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    isSupportedChain(route: Route, chain: ChainName): boolean;
    isSupportedSourceToken(route: Route, token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    computeReceiveAmount(route: Route, sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeReceiveAmountWithFees(route: Route, sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(route: Route, receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(route: Route, token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(route: Route, token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<BigNumber>;
    estimateClaimGas(route: Route, destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    send(route: Route, token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<string>;
    redeem(route: Route, destChain: ChainName | ChainId, signed: SignedMessage, payer: string): Promise<string>;
    getPreview(route: Route, token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    getRelayerFee(route: Route, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getForeignAsset(route: Route, tokenId: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    isTransferCompleted(route: Route, destChain: ChainName | ChainId, message: SignedMessage): Promise<boolean>;
    getMessage(route: Route, tx: string, chain: ChainName | ChainId, unsigned?: boolean): Promise<UnsignedMessage>;
    getSignedMessage(route: Route, message: UnsignedMessage): Promise<SignedMessage>;
    getTransferSourceInfo<T extends TransferInfoBaseParams>(route: Route, params: T): Promise<TransferDisplayData>;
    getTransferDestInfo<T extends TransferInfoBaseParams>(route: Route, params: T): Promise<TransferDestInfo>;
    nativeTokenAmount(route: Route, destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(route: Route, destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    minSwapAmountNative(route: Route, destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    tryFetchRedeemTx(route: Route, txData: UnsignedMessage): Promise<string | undefined>;
}
declare const RouteOperator: Operator;
export default RouteOperator;
//# sourceMappingURL=operator.d.ts.map