import { Wallet } from '@xlabs-libs/wallet-aggregator-core';
import { InjectedWallet, WalletConnectWallet } from '@xlabs-libs/wallet-aggregator-evm';

export declare const wallets: {
    walletConnect?: WalletConnectWallet | undefined;
    injected: InjectedWallet;
};
export interface AssetInfo {
    address: string;
    symbol: string;
    decimals: number;
    chainId?: number;
}
export declare const watchAsset: (asset: AssetInfo, wallet: Wallet) => Promise<void>;
export declare function switchChain(w: Wallet, chainId: number | string): Promise<void>;
//# sourceMappingURL=evm.d.ts.map