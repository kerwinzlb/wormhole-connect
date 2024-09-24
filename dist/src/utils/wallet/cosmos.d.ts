import { Wallet } from '@xlabs-libs/wallet-aggregator-core';
import { SendResult } from '@wormhole-foundation/wormhole-connect-sdk';

export declare const wallets: {
    cosmos: Record<string, Wallet<import('@xlabs-libs/wallet-aggregator-core').ChainId, any, any, any, any, any, any, any, any, any, any, any, any>>;
    cosmosEvm: Record<string, Wallet<import('@xlabs-libs/wallet-aggregator-core').ChainId, any, any, any, any, any, any, any, any, any, any, any, any>>;
};
export declare function signAndSendTransaction(transaction: SendResult, wallet: Wallet | undefined): Promise<import('@xlabs-libs/wallet-aggregator-core').SendTransactionResult<import('@cosmjs/stargate').DeliverTxResponse>>;
export declare function switchChain(w: Wallet, chainId: number | string): Promise<void>;
//# sourceMappingURL=cosmos.d.ts.map