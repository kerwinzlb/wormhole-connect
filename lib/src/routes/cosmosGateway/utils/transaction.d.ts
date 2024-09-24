import { IndexedTx, Event } from '@cosmjs/stargate';
import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { IBCTransferInfo } from '../types';

/**
 * Search the ibc transfer info (sequence, timeout, src channel, dst channel, data) from an event
 * emitted by a transaction
 */
export declare function getTransactionIBCTransferInfo(tx: IndexedTx, event: 'send_packet' | 'write_acknowledgement' | 'acknowledge_packet'): IBCTransferInfo;
/**
 * Search the ibc transfer info (sequence, timeout, src channel, dst channel, data) in
 * the transaction events array
 */
export declare function getIBCTransferInfoFromEvents(events: readonly Event[], event: 'send_packet' | 'write_acknowledgement' | 'acknowledge_packet'): IBCTransferInfo;
export declare function findDestinationIBCTransferTx(destChain: ChainName | ChainId, ibcInfo: IBCTransferInfo): Promise<IndexedTx | undefined>;
//# sourceMappingURL=transaction.d.ts.map