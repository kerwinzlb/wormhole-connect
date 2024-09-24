import { ChainId, ChainName, Context, SendResult, ChainConfig } from '@wormhole-foundation/wormhole-connect-sdk';
import { Wallet } from '@xlabs-libs/wallet-aggregator-core';
import { AssetInfo } from './evm';
import { Dispatch } from 'redux';

export declare enum TransferWallet {
    SENDING = "sending",
    RECEIVING = "receiving"
}
export declare const walletAcceptedChains: (context: Context | undefined) => ChainName[];
export declare const setWalletConnection: (type: TransferWallet, wallet: Wallet) => void;
export declare const connectWallet: (type: TransferWallet, chain: ChainName, walletInfo: WalletData, dispatch: Dispatch<any>) => Promise<void>;
export declare const connectLastUsedWallet: (type: TransferWallet, chain: ChainName, dispatch: Dispatch<any>) => Promise<void>;
export declare const useConnectToLastUsedWallet: () => void;
export declare const getWalletConnection: (type: TransferWallet) => Wallet<import('@xlabs-libs/wallet-aggregator-core').ChainId, any, any, any, any, any, any, any, any, any, any, any, any> | undefined;
export declare const swapWalletConnections: () => void;
export declare const registerWalletSigner: (chain: ChainName | ChainId, type: TransferWallet) => void;
export declare const switchChain: (chainId: number | string, type: TransferWallet) => Promise<string | undefined>;
export declare const disconnect: (type: TransferWallet) => Promise<void>;
export declare const watchAsset: (asset: AssetInfo, type: TransferWallet) => Promise<void>;
export declare const signAndSendTransaction: (chain: ChainName, transaction: SendResult, walletType: TransferWallet, options?: any) => Promise<string>;
export declare const postVaa: (connection: any, coreContract: string, signedVAA: Buffer) => Promise<void>;
export type WalletData = {
    name: string;
    type: Context;
    icon: string;
    isReady: boolean;
    wallet: Wallet;
};
export declare const getWalletOptions: (config: ChainConfig | undefined) => Promise<WalletData[]>;
//# sourceMappingURL=index.d.ts.map