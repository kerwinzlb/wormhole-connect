import { TokenId, ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { TokenConfig, Route } from '../../config/types';
import { BridgeRoute } from '../bridge/bridge';
import { RelayTransferMessage, RelayerFee, SignedRelayTransferMessage, TransferDestInfo, TransferDisplayData, UnsignedMessage, SignedMessage, TransferInfoBaseParams } from '../types';
import { RelayOptions, TransferDestInfoParams } from './types';
import { RouteAvailability, RelayAbstract } from '../abstracts';
import { TokenPrices } from '../../store/tokenPrices';

export declare class RelayRoute extends BridgeRoute implements RelayAbstract {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED = true;
    readonly AUTOMATIC_DEPOSIT = true;
    readonly TYPE = Route.Relay;
    isSupportedChain(chain: ChainName): boolean;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    isRouteAvailable(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    supportedSourceTokens(tokens: TokenConfig[], destToken?: TokenConfig, sourceChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    supportedDestTokens(tokens: TokenConfig[], sourceToken?: TokenConfig): Promise<TokenConfig[]>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: RelayOptions): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: RelayOptions): Promise<number>;
    nativeTokenAmount(destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: RelayOptions): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    /**
     * These operations have to be implemented in subclasses.
     */
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: RelayOptions): Promise<string>;
    redeem(destChain: ChainName | ChainId, signedMessage: SignedMessage, payer: string): Promise<string>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    getSignedMessage(message: RelayTransferMessage): Promise<SignedRelayTransferMessage>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions: RelayOptions): Promise<TransferDisplayData>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getTransferSourceInfo({ txData: data, tokenPrices, }: TransferInfoBaseParams): Promise<TransferDisplayData>;
    getTransferDestInfo({ txData: data, tokenPrices, receiveTx, transferComplete, }: TransferDestInfoParams): Promise<TransferDestInfo>;
    tryFetchRedeemTx(message: SignedMessage): Promise<string | undefined>;
}
//# sourceMappingURL=relay.d.ts.map