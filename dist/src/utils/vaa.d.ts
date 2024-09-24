import { providers, BigNumberish } from 'ethers';
import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { ParsedMessage, ParsedRelayerMessage } from './sdk';

export type ParsedVaa = {
    bytes: string;
    hash: string;
    amount: string;
    emitterAddress: string;
    emitterChain: ChainId;
    fee: string | null;
    fromAddress: string | undefined;
    guardianSignatures: number;
    sequence: string;
    timestamp: number;
    toAddress: string;
    toChain: ChainId;
    tokenAddress: string;
    tokenChain: ChainId;
    txHash: string;
};
export type MessageIdentifier = {
    emitterChain: ChainId;
    emitterAddress: string;
    sequence: string;
};
export declare const NO_VAA_FOUND = "No message publish found in logs";
export declare function getUnsignedVaaEvm(chain: ChainId | ChainName, receipt: providers.TransactionReceipt): Promise<{
    emitterAddress: string;
    sequence: BigNumberish;
    payload: string;
}>;
export declare function getWormholeLogEvm(chain: ChainId | ChainName, receipt: providers.TransactionReceipt): Promise<providers.Log>;
export declare function getEmitterAndSequence(txData: ParsedMessage | ParsedRelayerMessage): MessageIdentifier;
export declare function fetchVaa(txData: ParsedMessage | ParsedRelayerMessage, bytesOnly: true): Promise<Uint8Array | undefined>;
export declare function fetchVaa(txData: ParsedMessage | ParsedRelayerMessage, bytesOnly?: false): Promise<ParsedVaa | undefined>;
export declare function fetchVaaWormscan(txData: ParsedMessage | ParsedRelayerMessage, bytesOnly: boolean): Promise<ParsedVaa | Uint8Array | undefined>;
export declare function fetchVaaGuardian(txData: ParsedMessage | ParsedRelayerMessage, bytesOnly: boolean): Promise<ParsedVaa | Uint8Array | undefined>;
export declare const fetchIsVAAEnqueued: (txData: ParsedMessage | ParsedRelayerMessage) => Promise<boolean>;
export declare const fetchGlobalTx: (txData: ParsedMessage | ParsedRelayerMessage) => Promise<string | undefined>;
//# sourceMappingURL=vaa.d.ts.map