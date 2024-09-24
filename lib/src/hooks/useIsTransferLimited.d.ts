import { ChainId } from '@wormhole-foundation/wormhole-connect-sdk';

export interface ChainLimits {
    chainId: ChainId;
    chainNotionalLimit: number;
    chainRemainingAvailableNotional: number;
    chainBigTransactionSize: number;
    tokenPrice: number;
}
export interface IsTransferLimitedResult {
    isLimited: boolean;
    reason?: 'EXCEEDS_REMAINING_NOTIONAL' | 'EXCEEDS_MAX_NOTIONAL' | 'EXCEEDS_LARGE_TRANSFER_LIMIT';
    limits?: ChainLimits;
}
declare const useIsTransferLimited: () => IsTransferLimitedResult;
export default useIsTransferLimited;
//# sourceMappingURL=useIsTransferLimited.d.ts.map