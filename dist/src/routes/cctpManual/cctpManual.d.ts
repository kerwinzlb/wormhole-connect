import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { TokenConfig, Route } from '../../config/types';
import { BaseRoute } from '../bridge/baseRoute';
import { ManualCCTPMessage, RelayerFee, SignedCCTPMessage, SignedMessage, TransferDestInfo, TransferDestInfoBaseParams, TransferDisplayData, TransferInfoBaseParams, UnsignedCCTPMessage } from '../types';
import { TokenPrices } from '../../store/tokenPrices';

export declare class CCTPManualRoute extends BaseRoute {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    readonly AUTOMATIC_DEPOSIT: boolean;
    readonly TYPE: Route;
    isSupportedChain(chain: ChainName): boolean;
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    supportedSourceTokens(tokens: TokenConfig[], destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    supportedDestTokens(tokens: TokenConfig[], sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    /**
     * These operations have to be implemented in subclasses.
     */
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<string>;
    redeem(destChain: ChainName | ChainId, message: SignedMessage, payer: string): Promise<string>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<ManualCCTPMessage>;
    getSignedMessage(unsigned: UnsignedCCTPMessage): Promise<SignedCCTPMessage>;
    getTransferSourceInfo({ txData, tokenPrices, }: TransferInfoBaseParams): Promise<TransferDisplayData>;
    getTransferDestInfo({ txData, tokenPrices, receiveTx, gasEstimate, }: TransferDestInfoBaseParams): Promise<TransferDestInfo>;
    isTransferCompleted(destChain: ChainName | ChainId, messageInfo: SignedCCTPMessage): Promise<boolean>;
    tryFetchRedeemTx(txData: UnsignedCCTPMessage): Promise<string | undefined>;
    private getImplementation;
}
//# sourceMappingURL=cctpManual.d.ts.map