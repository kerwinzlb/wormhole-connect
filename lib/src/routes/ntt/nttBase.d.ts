import { BigNumber } from 'ethers';
import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { TokenConfig } from '../../config/types';
import { SignedMessage, UnsignedMessage, UnsignedNttMessage, SignedNttMessage, TransferDestInfoBaseParams, TransferDestInfo, RelayerFee } from '../types';
import { BaseRoute } from '../bridge';
import { InboundQueuedTransfer } from './types';

export declare abstract class NttBase extends BaseRoute {
    isSupportedChain(chain: ChainName): boolean;
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedToken(token: TokenConfig, chain: ChainName | ChainId): boolean;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<string>;
    redeem(chain: ChainName | ChainId, signedMessage: SignedMessage, payer: string): Promise<string>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getCurrentOutboundCapacity(chain: ChainId | ChainName, nttManagerAddress: string): Promise<string>;
    getCurrentInboundCapacity(chain: ChainId | ChainName, nttManagerAddress: string, fromChain: ChainId | ChainName): Promise<string>;
    getRateLimitDuration(chain: ChainId | ChainName, nttManagerAddress: string): Promise<number>;
    getInboundQueuedTransfer(chain: ChainName | ChainId, nttManagerAddress: string, messageDigest: string): Promise<InboundQueuedTransfer | undefined>;
    completeInboundQueuedTransfer(chain: ChainName | ChainId, nttManagerAddress: string, messageDigest: string, recipientAddress: string, payer: string): Promise<string>;
    getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedNttMessage>;
    getSignedMessage(unsigned: UnsignedNttMessage): Promise<SignedNttMessage>;
    tryFetchRedeemTx(txData: UnsignedMessage): Promise<string | undefined>;
    isTransferCompleted(chain: ChainName | ChainId, signedMessage: SignedNttMessage): Promise<boolean>;
    getTransferDestInfo<T extends TransferDestInfoBaseParams>(params: T): Promise<TransferDestInfo>;
}
//# sourceMappingURL=nttBase.d.ts.map