import { Transaction } from '@solana/web3.js';
import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { ManualCCTPMessage, SignedMessage } from '../../types';
import { default as ManualCCTP } from './abstract';

export declare class ManualCCTPSolanaImpl implements ManualCCTP<Transaction> {
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string): Promise<Transaction>;
    redeem(destChain: ChainName | ChainId, message: SignedMessage, payer: string): Promise<Transaction>;
    getMessage(id: string, chain: ChainName | ChainId): Promise<ManualCCTPMessage>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    isTransferCompleted(destChain: ChainName | ChainId, message: SignedMessage): Promise<boolean>;
}
//# sourceMappingURL=solana.d.ts.map