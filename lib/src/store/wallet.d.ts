import { Context } from '@wormhole-foundation/wormhole-connect-sdk';
import { PayloadAction } from '@reduxjs/toolkit';
import { TransferWallet } from '../utils/wallet';

export type WalletData = {
    type: Context | undefined;
    address: string;
    currentAddress: string;
    error: string;
    icon?: string;
    name: string;
};
export interface WalletState {
    sending: WalletData;
    receiving: WalletData;
}
export type ConnectPayload = {
    address: string;
    type: Context;
    icon?: string;
    name: string;
};
export declare const walletSlice: import('@reduxjs/toolkit').Slice<WalletState, {
    connectWallet: (state: WalletState, { payload }: PayloadAction<ConnectPayload>) => void;
    connectReceivingWallet: (state: WalletState, { payload }: PayloadAction<ConnectPayload>) => void;
    clearWallet: (state: WalletState, { payload }: PayloadAction<TransferWallet>) => void;
    disconnectWallet: (state: WalletState, { payload }: PayloadAction<TransferWallet>) => void;
    setWalletError: (state: WalletState, { payload }: PayloadAction<{
        type: TransferWallet;
        error: string;
    }>) => void;
    setAddress: (state: WalletState, { payload }: PayloadAction<{
        type: TransferWallet;
        address: string;
    }>) => void;
    clearWallets: (state: WalletState) => void;
    disconnectWallets: (state: WalletState) => void;
    swapWallets: (state: WalletState) => void;
}, "wallet">;
export declare const connectWallet: import('@reduxjs/toolkit').ActionCreatorWithPayload<ConnectPayload, "wallet/connectWallet">, connectReceivingWallet: import('@reduxjs/toolkit').ActionCreatorWithPayload<ConnectPayload, "wallet/connectReceivingWallet">, clearWallet: import('@reduxjs/toolkit').ActionCreatorWithPayload<TransferWallet, "wallet/clearWallet">, setAddress: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    type: TransferWallet;
    address: string;
}, "wallet/setAddress">, setWalletError: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    type: TransferWallet;
    error: string;
}, "wallet/setWalletError">, clearWallets: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"wallet/clearWallets">, disconnectWallet: import('@reduxjs/toolkit').ActionCreatorWithPayload<TransferWallet, "wallet/disconnectWallet">, disconnectWallets: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"wallet/disconnectWallets">, swapWallets: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"wallet/swapWallets">;
declare const _default: import('redux').Reducer<WalletState>;
export default _default;
//# sourceMappingURL=wallet.d.ts.map