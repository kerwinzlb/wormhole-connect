import { Address, ChainId, SendTransactionResult, Wallet } from '@xlabs-libs/wallet-aggregator-core';

export declare const MANUAL_WALLET_NAME = "Manual Wallet";
export declare class ManualWallet extends Wallet {
    private address;
    private connected;
    private chainId?;
    constructor(address: Address, connected?: boolean);
    connect({ chainId }: {
        chainId: ChainId;
    }): Promise<string[]>;
    getIcon(): string;
    getName(): string;
    disconnect(): Promise<void>;
    getAddress(): string;
    getAddresses(): string[];
    getBalance(): Promise<string>;
    isConnected(): boolean;
    supportsChain(chainId: ChainId): boolean;
    getUrl(): string;
    setMainAddress(address: Address): void;
    getNetworkInfo(): {
        chainId: ChainId | undefined;
    };
    getChainId(): ChainId;
    getFeatures(): any[];
    signTransaction(tx: any): Promise<any>;
    sendTransaction(tx: any): Promise<SendTransactionResult<any>>;
    signMessage(msg: any): Promise<any>;
    signAndSendTransaction(tx: any): Promise<SendTransactionResult<any>>;
}
//# sourceMappingURL=manual.d.ts.map