import { ChainId, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';

export declare function buildToCosmosPayload(recipientChainId: ChainId, recipientAddress: string): Buffer;
export declare function toCosmos(token: TokenId | 'native', amount: string, sendingChainId: ChainId, senderAddress: string, recipientChainId: ChainId, recipientAddress: string, routeOptions: any): Promise<any>;
//# sourceMappingURL=toCosmos.d.ts.map