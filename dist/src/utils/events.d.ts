import { ParsedRelayerMessage } from './sdk';
import { Route } from '../config/types';
import { SignedMessage } from '../routes';

export declare const fetchRedeemTx: (route: Route, txData: SignedMessage) => Promise<{
    transactionHash: string;
} | null>;
export declare const fetchRedeemedEvent: (txData: SignedMessage) => Promise<{
    transactionHash: string;
} | null>;
export declare const fetchRedeemedEventSender: (txData: SignedMessage) => Promise<string | null>;
export declare const fetchSwapEvent: (txData: ParsedRelayerMessage) => Promise<any>;
//# sourceMappingURL=events.d.ts.map