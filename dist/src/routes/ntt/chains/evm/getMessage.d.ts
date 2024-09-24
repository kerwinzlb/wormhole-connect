import { ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';
import { ethers } from 'ethers';
import { UnsignedNttMessage } from '../../../types';

export declare const TRANSFER_SENT_EVENT_TOPIC: string;
export declare const getMessageEvm: (tx: string, chain: ChainName | ChainId, receipt?: ethers.providers.TransactionReceipt) => Promise<UnsignedNttMessage>;
//# sourceMappingURL=getMessage.d.ts.map