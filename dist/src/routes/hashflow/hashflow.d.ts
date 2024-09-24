import { ChainName, ChainId, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { Route, TokenConfig } from '../../config/types';
import { TransferInfoBaseParams, UnsignedMessage, SignedMessage, TransferDestInfo, RelayerFee, TransferDisplayData } from '../types';
import { RouteAvailability, RouteAbstract } from '../abstracts';

export declare class HashflowRoute extends RouteAbstract {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED = false;
    readonly AUTOMATIC_DEPOSIT = true;
    readonly TYPE: Route;
    isSupportedChain(chain: ChainName): boolean;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    isRouteAvailable(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    isSupportedSourceToken(token: TokenConfig | undefined, destToken: TokenConfig | undefined): Promise<boolean>;
    isSupportedDestToken(token: TokenConfig | undefined, sourceToken: TokenConfig | undefined): Promise<boolean>;
    supportedSourceTokens(tokens: TokenConfig[]): Promise<TokenConfig[]>;
    supportedDestTokens(tokens: TokenConfig[]): Promise<TokenConfig[]>;
    computeReceiveAmount(sendAmount: number | undefined): Promise<number>;
    computeReceiveAmountWithFees(sendAmount: number | undefined): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    getMaxSendAmount(): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<any>;
    redeem(destChain: ChainName | ChainId, messageInfo: SignedMessage, recipient: string): Promise<string>;
    getPreview<P>(params: P): Promise<TransferDisplayData>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string): Promise<RelayerFee>;
    getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    isTransferCompleted(destChain: ChainName | ChainId, message: SignedMessage): Promise<boolean>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    getSignedMessage(message: UnsignedMessage): Promise<SignedMessage>;
    getTransferSourceInfo<T extends TransferInfoBaseParams>(params: T): Promise<TransferDisplayData>;
    getTransferDestInfo<T extends TransferInfoBaseParams>(params: T): Promise<TransferDestInfo>;
    nativeTokenAmount(destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    tryFetchRedeemTx(txData: UnsignedMessage): Promise<string | undefined>;
}
//# sourceMappingURL=hashflow.d.ts.map