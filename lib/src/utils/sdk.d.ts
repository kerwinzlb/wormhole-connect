import { BigNumber } from 'ethers';
import { ChainId, ChainName, SolanaContext, TokenId, WormholeContext } from '@wormhole-foundation/wormhole-connect-sdk';

export declare enum PayloadType {
    Manual = 1,
    Automatic = 3
}
export interface ParsedMessage {
    sendTx: string;
    sender: string;
    amount: string;
    payloadID: number;
    recipient: string;
    toChain: ChainName;
    fromChain: ChainName;
    tokenAddress: string;
    tokenChain: ChainName;
    tokenId: TokenId;
    tokenKey: string;
    tokenDecimals: number;
    receivedTokenKey: string;
    emitterAddress?: string;
    sequence?: string;
    block: number;
    gasFee?: string;
    payload?: string;
    inputData?: string;
}
export interface ParsedRelayerMessage extends ParsedMessage {
    relayerPayloadId: number;
    to: string;
    relayerFee: string;
    toNativeTokenAmount: string;
}
export declare const solanaContext: () => SolanaContext<WormholeContext>;
export declare const formatAddress: (chain: ChainName | ChainId, address: string) => Uint8Array;
export declare const formatAssetAddress: (chain: ChainName | ChainId, address: string) => Promise<Uint8Array>;
export declare const parseAddress: (chain: ChainName | ChainId, address: string) => string;
export declare const getRelayerFee: (sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string) => Promise<any>;
export declare const calculateMaxSwapAmount: (destChain: ChainName | ChainId, token: TokenId, walletAddress: string) => Promise<any>;
export declare const calculateNativeTokenAmt: (destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string) => Promise<any>;
export declare const getCurrentBlock: (chain: ChainName | ChainId) => Promise<number>;
export declare const isAcceptedToken: (tokenId: TokenId) => Promise<boolean>;
export declare const isEvmChain: (chain: ChainName | ChainId) => boolean;
export declare const toChainId: (chain: ChainName | ChainId) => ChainId;
export declare const toChainName: (chain: ChainName | ChainId) => ChainName;
export declare const getMessage: (tx: string, chain: ChainName | ChainId) => Promise<import('@wormhole-foundation/wormhole-connect-sdk').ParsedMessage | import('@wormhole-foundation/wormhole-connect-sdk').ParsedRelayerMessage>;
//# sourceMappingURL=sdk.d.ts.map