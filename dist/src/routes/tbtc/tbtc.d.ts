import { BigNumber } from 'ethers';
import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { TokenConfig, Route } from '../../config/types';
import { SignedMessage, UnsignedMessage, TokenTransferMessage, SignedTokenTransferMessage, TBTCMessage, RelayerFee } from '../types';
import { BaseRoute } from '../bridge';

export declare class TBTCRoute extends BaseRoute {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    readonly AUTOMATIC_DEPOSIT: boolean;
    readonly TYPE: Route;
    isSupportedChain(chain: ChainName): boolean;
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<string>;
    redeem(destChain: ChainName | ChainId, message: SignedTokenTransferMessage, payer: string): Promise<string>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<TBTCMessage>;
    getSignedMessage(message: TokenTransferMessage): Promise<SignedTokenTransferMessage>;
    nativeTokenAmount(destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    maxSwapAmount(destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
    tryFetchRedeemTx(txData: UnsignedMessage): Promise<string | undefined>;
    getOverrides(destChain: ChainId, gasLimit: BigNumber): {
        type?: number | undefined;
        gasLimit: BigNumber;
    };
}
//# sourceMappingURL=tbtc.d.ts.map