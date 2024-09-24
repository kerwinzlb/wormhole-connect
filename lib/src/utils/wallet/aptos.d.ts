import { SendResult } from '@wormhole-foundation/wormhole-connect-sdk';
import { Wallet } from '@xlabs-libs/wallet-aggregator-core';
import { AptosWallet } from '@xlabs-libs/wallet-aggregator-aptos';

export declare function fetchOptions(): {
    aptos: AptosWallet;
    martian: AptosWallet;
    rise: AptosWallet;
    nightly: AptosWallet;
    pontem: AptosWallet;
    fewcha: AptosWallet;
    spika: AptosWallet;
    snap: AptosWallet;
    bitkeep: AptosWallet;
};
export declare function signAndSendTransaction(transaction: SendResult, wallet: Wallet | undefined): Promise<import('@xlabs-libs/wallet-aggregator-core').SendTransactionResult<import('@xlabs-libs/wallet-aggregator-aptos').AptosSubmitResult>>;
//# sourceMappingURL=aptos.d.ts.map