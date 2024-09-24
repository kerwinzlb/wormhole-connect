import { Network } from '@certusone/wormhole-sdk';
import { SendResult } from '@wormhole-foundation/wormhole-connect-sdk';
import { SeiWallet, SeiTransaction } from '@xlabs-libs/wallet-aggregator-sei';
import { Wallet } from '@xlabs-libs/wallet-aggregator-core';

export declare const getSeiChainId: (env: Network) => "pacific-1" | "atlantic-2";
export declare function fetchOptions(): Promise<{
    [key: string]: SeiWallet;
}>;
export declare function signAndSendTransaction(transaction: SendResult, wallet: Wallet): Promise<import('@xlabs-libs/wallet-aggregator-core').SendTransactionResult<DeliverTxResponse>>;
export declare const simulateSeiTransaction: (transaction: SeiTransaction, wallet: SeiWallet) => Promise<string>;
//# sourceMappingURL=sei.d.ts.map