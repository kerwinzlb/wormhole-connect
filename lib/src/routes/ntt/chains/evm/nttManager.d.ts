import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { TransferWallet } from '../../../../utils/wallet';
import { BigNumber, ethers, PopulatedTransaction } from 'ethers';
import { InboundQueuedTransfer } from '../../types';
import { NttManager as NttManager_0_1_0 } from './abis/0.1.0/NttManager';
import { NttManager as NttManager_1_0_0 } from './abis/1.0.0/NttManager';

export declare class NttManagerEvm {
    readonly chain: ChainName | ChainId;
    readonly address: string;
    static readonly abiVersionCache: Map<string, string>;
    constructor(chain: ChainName | ChainId, address: string);
    signAndSendTransaction(tx: PopulatedTransaction, walletType: TransferWallet): Promise<string>;
    quoteDeliveryPrice(destChain: ChainName | ChainId, shouldSkipRelayerSend: boolean): Promise<BigNumber>;
    send(token: TokenId, sender: string, recipient: string, amount: bigint, toChain: ChainName | ChainId, shouldSkipRelayerSend: boolean): Promise<string>;
    getCurrentOutboundCapacity(): Promise<string>;
    getCurrentInboundCapacity(fromChain: ChainName | ChainId): Promise<string>;
    getRateLimitDuration(): Promise<number>;
    getInboundQueuedTransfer(messageDigest: string): Promise<InboundQueuedTransfer | undefined>;
    completeInboundQueuedTransfer(messageDigest: string, recipient: string, payer: string): Promise<string>;
    isTransferCompleted(messageDigest: string): Promise<boolean>;
    isPaused(): Promise<boolean>;
    fetchRedeemTx(messageDigest: string): Promise<string | undefined>;
    throwParsedError(iface: ethers.utils.Interface, e: any): never;
    getAbi(): Promise<{
        abi: NttManager_0_1_0 | NttManager_1_0_0;
        version: string;
    }>;
}
//# sourceMappingURL=nttManager.d.ts.map