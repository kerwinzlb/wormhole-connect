import { ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';
import { PublicKeyInitData, PublicKey, Connection } from '@solana/web3.js';
import { BN, Program } from '@coral-xyz/anchor';
import { NttQuoter as NttQuoterType } from './types/ntt_quoter';

export declare class NttQuoter {
    readonly connection: Connection;
    readonly program: Program<NttQuoterType>;
    readonly instance: PublicKey;
    constructor(programId: PublicKeyInitData);
    isRelayEnabled(destChain: ChainName | ChainId): Promise<boolean>;
    calcRelayCost(chain: ChainName | ChainId, nttProgramId: string, requestedGasDropoffEth?: number): Promise<BN>;
    createRequestRelayInstruction(payer: PublicKey, outboxItem: PublicKey, chain: ChainName | ChainId, maxFee: BN, nttProgramId: string): Promise<import('@solana/web3.js').TransactionInstruction>;
    getInstance(): Promise<{
        owner: PublicKey;
        assistant: PublicKey;
        feeRecipient: PublicKey;
        solPriceUsd: number;
    }>;
    getRegisteredNtt(nttProgramId: PublicKey): Promise<{
        gasCost: number;
        wormholeTransceiverIndex: number;
    }>;
    getRegisteredChain(chain: ChainName | ChainId): Promise<{
        paused: boolean;
        maxGasDropoffEth: number;
        basePriceUsd: number;
        nativePriceUsd: number;
        gasPriceGwei: number;
    }>;
    private registeredChainPda;
    private registeredNttPda;
    private relayRequestPda;
    private derivePda;
}
//# sourceMappingURL=nttQuoter.d.ts.map