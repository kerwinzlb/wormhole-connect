import { ChainId, ChainName, NATIVE, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';

export declare const getSolanaAssociatedTokenAccount: (token: TokenId | typeof NATIVE, sendingChain: ChainName | ChainId, recipientAddress: string) => Promise<string>;
//# sourceMappingURL=solana.d.ts.map