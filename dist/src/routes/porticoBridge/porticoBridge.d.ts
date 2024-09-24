import { BigNumber } from 'ethers';
import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { TokenConfig } from '../../config/types';
import { SignedMessage, UnsignedMessage, TokenTransferMessage, SignedTokenTransferMessage, TransferDisplayData, TransferInfoBaseParams, RelayerFee } from '../types';
import { BaseRoute } from '../bridge';
import { PorticoTransferDestInfo } from './types';
import { TransferDestInfoParams } from '../relay';
import { PorticoBridgeState, PorticoSwapAmounts } from '../../store/porticoBridge';
import { TokenPrices } from '../../store/tokenPrices';

export declare abstract class PorticoBridge extends BaseRoute {
    protected supportedTokenSymbols: string[];
    protected maxAmount: number;
    readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    readonly AUTOMATIC_DEPOSIT: boolean;
    constructor(supportedTokenSymbols: string[], maxAmount: number);
    isSupportedChain(chain: ChainName): boolean;
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedToken(token: TokenConfig, chain: ChainName | ChainId): boolean;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    computeSwapAmounts(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined): Promise<PorticoSwapAmounts>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: PorticoBridgeState): Promise<number>;
    computeReceiveAmountInternal(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: PorticoBridgeState, includeFees?: boolean): Promise<number>;
    computeReceiveAmountWithFees(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: PorticoBridgeState): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: PorticoBridgeState): number;
    getMaxSendAmount(): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: PorticoBridgeState): Promise<string>;
    redeem(destChain: ChainName | ChainId, message: SignedTokenTransferMessage, payer: string): Promise<string>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee>;
    getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    getSignedMessage(message: TokenTransferMessage): Promise<SignedTokenTransferMessage>;
    nativeTokenAmount(destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    tryFetchRedeemTx(txData: UnsignedMessage): Promise<string | undefined>;
    getTransferSourceInfo({ txData, tokenPrices, }: TransferInfoBaseParams): Promise<TransferDisplayData>;
    getTransferDestInfo({ txData, tokenPrices, receiveTx, transferComplete, }: TransferDestInfoParams): Promise<PorticoTransferDestInfo>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions: PorticoBridgeState): Promise<TransferDisplayData>;
    getQuote(chain: ChainName | ChainId, tokenIn: string, tokenOut: string, amountIn: BigNumber, fee: number): Promise<{
        amountOut: BigNumber;
    }>;
    getPorticoAddress(chain: ChainName | ChainId): string;
}
//# sourceMappingURL=porticoBridge.d.ts.map