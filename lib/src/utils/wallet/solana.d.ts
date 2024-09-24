import { SendResult } from '@wormhole-foundation/wormhole-connect-sdk';
import { Wallet } from '@xlabs-libs/wallet-aggregator-core';
import { ConfirmOptions } from '@solana/web3.js';
import { SolanaWallet } from '@xlabs-libs/wallet-aggregator-solana';

export declare function fetchOptions(): {
    walletConnect?: SolanaWallet | undefined;
    bitget: SolanaWallet;
    clover: SolanaWallet;
    coin98: SolanaWallet;
    solong: SolanaWallet;
    torus: SolanaWallet;
    nightly: SolanaWallet;
};
export declare function signAndSendTransaction(transaction: SendResult, wallet: Wallet | undefined, options?: ConfirmOptions): Promise<import('@xlabs-libs/wallet-aggregator-core').SendTransactionResult<import('@xlabs-libs/wallet-aggregator-solana').SolanaSubmitTransactionResult>>;
//# sourceMappingURL=solana.d.ts.map