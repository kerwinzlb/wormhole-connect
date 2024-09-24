import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { InboundQueuedTransfer } from '../../types';
import { TransferWallet } from '../../../../utils/wallet';
import { AddressLookupTableAccount, Connection, Keypair, PublicKey, Transaction, TransactionInstruction, VersionedTransaction } from '@solana/web3.js';
import { BN, IdlAccounts, Program } from '@coral-xyz/anchor';
import { SignedVaa } from '@certusone/wormhole-sdk/lib/esm';
import { ExampleNativeTokenTransfers as ExampleNativeTokenTransfers_1_0_0 } from './types/1.0.0/example_native_token_transfers';
import { ExampleNativeTokenTransfers as ExampleNativeTokenTransfers_2_0_0 } from './types/2.0.0/example_native_token_transfers';

type ExampleNativeTokenTransfersIdl = ExampleNativeTokenTransfers_1_0_0 | ExampleNativeTokenTransfers_2_0_0;
type Config = IdlAccounts<ExampleNativeTokenTransfersIdl>['config'];
type InboxItem = IdlAccounts<ExampleNativeTokenTransfersIdl>['inboxItem'];
type OutboxRateLimit = IdlAccounts<ExampleNativeTokenTransfersIdl>['outboxRateLimit'];
type InboxRateLimit = IdlAccounts<ExampleNativeTokenTransfersIdl>['inboxRateLimit'];
type ProgramType = Program<ExampleNativeTokenTransfers_1_0_0> | Program<ExampleNativeTokenTransfers_2_0_0>;
type VersionedProgram<T extends 1 | 2> = T extends 1 ? Program<ExampleNativeTokenTransfers_1_0_0> : Program<ExampleNativeTokenTransfers_2_0_0>;
interface TransferArgs {
    amount: BN;
    recipientChain: {
        id: ChainId;
    };
    recipientAddress: number[];
    shouldQueue: boolean;
}
export declare class NttManager {
    readonly nttId: string;
    readonly connection: Connection;
    readonly wormholeId: string;
    readonly program: ProgramType;
    addressLookupTable: AddressLookupTableAccount | null;
    readonly version: number;
    constructor(nttId: string, version: string);
    isVersion<T extends 1 | 2>(version: T, program: ProgramType): program is VersionedProgram<T>;
    send(token: TokenId, sender: string, recipient: string, amount: bigint, toChain: ChainName | ChainId, shouldSkipRelayerSend: boolean): Promise<string>;
    receiveMessage(vaa: string, payer: string): Promise<string>;
    getCurrentOutboundCapacity(): Promise<string>;
    getCurrentInboundCapacity(fromChain: ChainName | ChainId): Promise<string>;
    getCurrentCapacity(limit: BN, capacityAtLastTx: BN, lastTxTimestamp: BN): Promise<string>;
    getRateLimitDuration(): Promise<number>;
    getInboundQueuedTransfer(messageDigest: string): Promise<InboundQueuedTransfer | undefined>;
    completeInboundQueuedTransfer(messageDigest: string, recipientAddress: string, payer: string): Promise<string>;
    isTransferCompleted(messageDigest: string): Promise<boolean>;
    fetchRedeemTx(messageDigest: string): Promise<string | undefined>;
    derivePda(seeds: Buffer | Array<Uint8Array | Buffer>): PublicKey;
    configAccountAddress(): PublicKey;
    lutAccountAddress(): PublicKey;
    lutAuthorityAddress(): PublicKey;
    outboxRateLimitAccountAddress(): PublicKey;
    inboxRateLimitAccountAddress(chain: ChainName | ChainId): PublicKey;
    inboxItemAccountAddress(messageDigest: string): PublicKey;
    sessionAuthorityAddress(sender: PublicKey, args: TransferArgs): PublicKey;
    tokenAuthorityAddress(): PublicKey;
    emitterAccountAddress(): PublicKey;
    wormholeMessageAccountAddress(outboxItem: PublicKey): PublicKey;
    peerAccountAddress(chain: ChainName | ChainId): PublicKey;
    transceiverPeerAccountAddress(chain: ChainName | ChainId): PublicKey;
    transceiverMessageAccountAddress(chain: ChainName | ChainId, id: Buffer): PublicKey;
    registeredTransceiverAddress(transceiver: PublicKey): PublicKey;
    /**
     * Creates a transfer_burn instruction. The `payer` and `fromAuthority`
     * arguments must sign the transaction
     */
    createTransferBurnInstruction(args: {
        payer: PublicKey;
        from: PublicKey;
        fromAuthority: PublicKey;
        amount: BN;
        recipientChain: ChainName;
        recipientAddress: ArrayLike<number>;
        outboxItem: PublicKey;
        shouldQueue: boolean;
        config?: Config;
    }): Promise<TransactionInstruction>;
    /**
     * Creates a transfer_lock instruction. The `payer`, `fromAuthority`, and `outboxItem`
     * arguments must sign the transaction
     */
    createTransferLockInstruction(args: {
        payer: PublicKey;
        from: PublicKey;
        fromAuthority: PublicKey;
        amount: BN;
        recipientChain: ChainName;
        recipientAddress: ArrayLike<number>;
        shouldQueue: boolean;
        outboxItem: PublicKey;
        config: Config;
    }): Promise<TransactionInstruction>;
    /**
     * Creates a release_outbound instruction. The `payer` needs to sign the transaction.
     */
    createReleaseOutboundInstruction(args: {
        payer: PublicKey;
        outboxItem: PublicKey;
        revertOnDelay: boolean;
    }): Promise<TransactionInstruction>;
    createReleaseInboundMintInstruction(args: {
        payer: PublicKey;
        messageDigest: string;
        revertOnDelay: boolean;
        recipient: PublicKey;
        config?: Config;
    }): Promise<TransactionInstruction>;
    createReleaseInboundUnlockInstruction(args: {
        payer: PublicKey;
        messageDigest: string;
        revertOnDelay: boolean;
        recipient: PublicKey;
        config?: Config;
    }): Promise<TransactionInstruction>;
    createReceiveWormholeMessageInstruction(args: {
        payer: PublicKey;
        vaa: SignedVaa;
        config?: Config;
    }): Promise<TransactionInstruction>;
    createRedeemInstruction(args: {
        payer: PublicKey;
        vaa: SignedVaa;
        config?: Config;
    }): Promise<TransactionInstruction>;
    /**
     * Fetches the Config account from the contract.
     *
     * @param config If provided, the config is just returned without making a
     *               network request. This is handy in case multiple config
     *               accessor functions are used, the config can just be queried
     *               once and passed around.
     */
    getConfig(config?: Config): Promise<Config>;
    isPaused(config?: Config): Promise<boolean>;
    mintAccountAddress(config?: Config): Promise<PublicKey>;
    tokenProgram(config?: Config): Promise<PublicKey>;
    getInboxItem(messageDigest: string): Promise<InboxItem>;
    getOutboxRateLimit(): Promise<OutboxRateLimit>;
    getInboxRateLimit(chain: ChainName | ChainId): Promise<InboxRateLimit>;
    getAddressLookupTable(): Promise<AddressLookupTableAccount | null>;
    /**
     * Returns the address of the custody account.
     */
    custodyAccountAddress(config: Config): Promise<PublicKey>;
    simulate(tx: VersionedTransaction): Promise<void>;
    maybeAddExtraTransferHookAccounts(config: Config, source: PublicKey, destination: PublicKey, owner: PublicKey, transferIx: TransactionInstruction): Promise<void>;
    signAndSendTransaction(tx: Transaction, payerKey: PublicKey, transferWallet: TransferWallet, signers?: Keypair[]): Promise<string>;
}
export {};
//# sourceMappingURL=nttManager.d.ts.map