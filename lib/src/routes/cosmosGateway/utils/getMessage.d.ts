import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { ParsedMessage } from '../../../utils/sdk';
import { UnsignedMessage } from '../../types';

/**
 * Extract the transfer information from a gateway chain transfer without
 * looking for an attestation/vaa
 *
 * @param hash Transaction id/hash
 * @param chain Source chain
 * @returns An unsigned message (transfer information without an attestation/VAA)
 */
export declare function getUnsignedMessageFromCosmos(hash: string, chain: ChainName): Promise<ParsedMessage>;
/**
 * Extract the transfer information from a non-gateway chain transfer without
 * looking for an attestation/vaa
 *
 * @param hash Transaction id/hash
 * @param chain Source chain
 * @returns An unsigned message (transfer information without an attestation/VAA)
 */
export declare function getUnsignedMessageFromNonCosmos(hash: string, chain: ChainName): Promise<UnsignedMessage>;
export declare function getMessageFromWormchain(hash: string, chain: ChainName): Promise<UnsignedMessage>;
//# sourceMappingURL=getMessage.d.ts.map