import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber, providers } from 'ethers';
import { ManualCCTPMessage, SignedMessage } from '../../types';
import { default as ManualCCTP } from './abstract';

export default class ManualCCTPEvmImpl implements ManualCCTP<providers.TransactionReceipt> {
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string): Promise<providers.TransactionReceipt>;
    redeem(destChain: ChainName | ChainId, message: SignedMessage, payer: string): Promise<providers.TransactionReceipt>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<ManualCCTPMessage>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    isTransferCompleted(destChain: ChainName | ChainId, messageInfo: SignedMessage): Promise<boolean>;
}
//# sourceMappingURL=evm.d.ts.map