import { ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';

export declare const getNttManager: (chain: ChainName | ChainId, nttManagerAddress: string) => Promise<import('./evm').NttManagerEvm | import('./solana/nttManager').NttManager>;
//# sourceMappingURL=index.d.ts.map