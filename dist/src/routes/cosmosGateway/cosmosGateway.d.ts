import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { Route, TokenConfig } from '../../config/types';
import { BaseRoute } from '../bridge/baseRoute';
import { RelayTransferMessage, SignedRelayTransferMessage, SignedTokenTransferMessage, TokenTransferMessage, TransferDisplayData, UnsignedMessage, SignedMessage, TransferDestInfoBaseParams, TransferInfoBaseParams, TransferDestInfo, RelayerFee } from '../types';
import { TokenPrices } from '../../store/tokenPrices';

export declare class CosmosGatewayRoute extends BaseRoute {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    readonly AUTOMATIC_DEPOSIT: boolean;
    readonly TYPE: Route;
    isSupportedChain(chain: ChainName): boolean;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    getForeignAsset(token: TokenId, chain: ChainId | ChainName, destToken?: TokenConfig): Promise<string | null>;
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<any>;
    private manualRedeem;
    redeem(destChain: ChainName | ChainId, messageInfo: SignedMessage, recipient: string): Promise<string>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    isTransferCompleted(destChain: ChainName | ChainId, message: SignedMessage): Promise<boolean>;
    getMessage(hash: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    getSignedMessage(unsignedMessage: TokenTransferMessage | RelayTransferMessage): Promise<SignedTokenTransferMessage | SignedRelayTransferMessage>;
    fetchRedeemTx(message: SignedMessage): Promise<string | null>;
    getTransferSourceInfo({ txData, tokenPrices, }: TransferInfoBaseParams): Promise<TransferDisplayData>;
    getTransferDestInfo({ txData, tokenPrices, receiveTx, gasEstimate, }: TransferDestInfoBaseParams): Promise<TransferDestInfo>;
    nativeTokenAmount(destChain: ChainId | ChainName, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(destChain: ChainId | ChainName, token: TokenId, walletAddress: string): Promise<BigNumber>;
    tryFetchRedeemTx(txData: SignedMessage): Promise<string | undefined>;
}
//# sourceMappingURL=cosmosGateway.d.ts.map