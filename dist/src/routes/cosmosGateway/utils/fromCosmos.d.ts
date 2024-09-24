import { ChainId, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';

export declare function buildFromCosmosPayloadMemo(recipientChainId: ChainId, recipientAddress: string): string;
export declare function fromCosmos(token: TokenId | 'native', amount: string, sendingChainId: ChainId, senderAddress: string, recipientChainId: ChainId, recipientAddress: string, routeOptions: any): Promise<any>;
//# sourceMappingURL=fromCosmos.d.ts.map