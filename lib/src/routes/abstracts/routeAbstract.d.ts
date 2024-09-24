import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { Route, TokenConfig } from '../../config/types';
import { BigNumber } from 'ethers';
import { UnsignedMessage, SignedMessage, TransferDestInfoBaseParams, TransferDisplayData, TransferInfoBaseParams, TransferDestInfo, RelayerFee } from '../types';
import { ParsedRelayerMessage, ParsedMessage } from '../../utils/sdk';
import { TokenPrices } from '../../store/tokenPrices';

export declare const REASON_AMOUNT_TOO_LOW = "Transfer amount too low";
export declare const REASON_MANUAL_ADDRESS_NOT_SUPPORTED = "Manual address not supported";
export interface RouteAvailability {
    isAvailable: boolean;
    reason?: typeof REASON_AMOUNT_TOO_LOW | typeof REASON_MANUAL_ADDRESS_NOT_SUPPORTED;
}
export declare abstract class RouteAbstract {
    abstract readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    abstract readonly AUTOMATIC_DEPOSIT: boolean;
    abstract readonly TYPE: Route;
    abstract isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    abstract isRouteAvailable(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    abstract isSupportedChain(chain: ChainName): boolean;
    abstract isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    abstract isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    abstract supportedSourceTokens(tokens: TokenConfig[], destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    abstract supportedDestTokens(tokens: TokenConfig[], sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    abstract computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    abstract computeReceiveAmountWithFees(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    abstract computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    abstract validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    abstract estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    abstract estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    /**
     * These operations have to be implemented in subclasses.
     */
    abstract getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    abstract getMaxSendAmount(): number;
    abstract send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<any>;
    abstract redeem(destChain: ChainName | ChainId, messageInfo: SignedMessage, recipient: string): Promise<string>;
    abstract getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    abstract getTransferSourceInfo<T extends TransferInfoBaseParams>(params: T): Promise<TransferDisplayData>;
    abstract getTransferDestInfo<T extends TransferDestInfoBaseParams>(params: T): Promise<TransferDestInfo>;
    abstract getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    abstract getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    abstract getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    abstract getSignedMessage(message: UnsignedMessage): Promise<SignedMessage>;
    abstract isTransferCompleted(destChain: ChainName | ChainId, messageInfo: SignedMessage): Promise<boolean>;
    abstract tryFetchRedeemTx(txData: ParsedMessage | ParsedRelayerMessage): Promise<string | undefined>;
}
//# sourceMappingURL=routeAbstract.d.ts.map