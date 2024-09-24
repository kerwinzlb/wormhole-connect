import { SignedRelayTransferMessage, SignedTokenTransferMessage } from '../../types';

export declare function fetchRedeemedEventNonCosmosSource(message: SignedTokenTransferMessage | SignedRelayTransferMessage): Promise<string | null>;
/**
 * Find the redeem/receive funds transaction on the destination chain
 */
export declare function fetchRedeemedEventCosmosSource(message: SignedTokenTransferMessage | SignedRelayTransferMessage): Promise<string | null>;
//# sourceMappingURL=events.d.ts.map