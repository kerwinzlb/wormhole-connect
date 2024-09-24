import { SendResult } from '@wormhole-foundation/wormhole-connect-sdk';
import { SuiWallet } from '@xlabs-libs/wallet-aggregator-sui';
import { Wallet } from '@xlabs-libs/wallet-aggregator-core';

export declare function fetchOptions(): Promise<{
    [key: string]: SuiWallet;
}>;
export declare const signAndSendTransaction: (transaction: SendResult, wallet: Wallet) => Promise<import('@xlabs-libs/wallet-aggregator-core').SendTransactionResult<any>>;
//# sourceMappingURL=sui.d.ts.map