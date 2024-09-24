import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { TokenConfig, Route } from '../../config/types';
import { TransferDisplayData, TransferInfoBaseParams, SignedMessage, RelayCCTPMessage, TransferDestInfoBaseParams, TransferDestInfo, RelayerFee } from '../types';
import { RelayOptions } from '../relay';
import { CCTPManualRoute } from '../cctpManual';
import { RouteAvailability, RelayAbstract } from '../abstracts';
import { TokenPrices } from '../../store/tokenPrices';

export declare class CCTPRelayRoute extends CCTPManualRoute implements RelayAbstract {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED = true;
    readonly AUTOMATIC_DEPOSIT = true;
    readonly TYPE: Route;
    isSupportedChain(chain: ChainName): boolean;
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    supportedSourceTokens(tokens: TokenConfig[], destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    supportedDestTokens(tokens: TokenConfig[], sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    isRouteAvailable(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: RelayOptions): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: RelayOptions): Promise<number>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    /**
     * These operations have to be implemented in subclasses.
     */
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<string>;
    redeem(destChain: ChainName | ChainId, messageInfo: SignedMessage, payer: string): Promise<string>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<RelayCCTPMessage>;
    getTransferSourceInfo({ txData: data, tokenPrices, }: TransferInfoBaseParams): Promise<TransferDisplayData>;
    getTransferDestInfo({ txData: data, tokenPrices, receiveTx, }: TransferDestInfoBaseParams): Promise<TransferDestInfo>;
    nativeTokenAmount(destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    tryFetchRedeemTx(txData: RelayCCTPMessage): Promise<string | undefined>;
}
//# sourceMappingURL=cctpRelay.d.ts.map