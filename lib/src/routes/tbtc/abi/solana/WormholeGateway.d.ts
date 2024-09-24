import { Connection, PublicKeyInitData, Transaction } from '@solana/web3.js';
import { SignedVaa, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';

export declare function sendTbtc(amount: string, recipientChain: ChainId, recipientAddress: Uint8Array, sender: string, isCanonicalChain: boolean, connection: Connection, gatewayProgramId: string, tokenBridgeProgramId: string, coreBridgeProgramId: string): Promise<Transaction>;
export declare function receiveTbtc(signedVAA: SignedVaa, payer: PublicKeyInitData, connection: Connection, gatewayProgramId: string, tokenBridgeProgramId: string, coreBridgeProgramId: string): Promise<Transaction>;
//# sourceMappingURL=WormholeGateway.d.ts.map