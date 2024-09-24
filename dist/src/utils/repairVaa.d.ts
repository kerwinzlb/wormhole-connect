import { ParsedVaa } from '@certusone/wormhole-sdk';
import { GuardianSetData } from '../config/types';

export declare const INVALID_VAA_MESSAGE = "There are not enough valid signatures to repair.";
/**
 *
 * Takes in a hexstring representation of a signed vaa and a guardian set.
 * Attempts to remove invalid guardian signatures, update total remaining
 * valid signatures, and update the guardian set index
 * @throws if not enough valid signatures remain
 * @see https://github.com/wormhole-foundation/wormhole/blob/main/sdk/js/src/utils/repairVaa.ts#L44
 *
 * NOTE: copied since original function does not normalize the public keys
 **/
export declare function repairVaa(vaaBytes: Uint8Array, guardianSetData: GuardianSetData, parsedVaa?: ParsedVaa): Uint8Array;
//# sourceMappingURL=repairVaa.d.ts.map