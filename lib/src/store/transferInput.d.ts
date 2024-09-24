import { PayloadAction } from '@reduxjs/toolkit';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { Route, TokenConfig } from '../config/types';
import { TransferWallet } from '../utils/wallet';
import { WalletData } from './wallet';
import { DataWrapper } from './helpers';
import { RouteAvailability } from '../routes';

export type Balance = {
    lastUpdated: number;
    balance: string | null;
};
export type Balances = {
    [key: string]: Balance;
};
export type ChainBalances = {
    balances: Balances;
};
export type BalancesCache = {
    [key in ChainName]?: ChainBalances;
};
type WalletAddress = string;
export type WalletBalances = {
    [key: WalletAddress]: BalancesCache;
};
export declare const formatBalance: (chain: ChainName, token: TokenConfig, balance: BigNumber | null) => string | null;
export declare const getNativeVersionOfToken: (tokenSymbol: string, chain: ChainName) => string;
export declare const accessChainBalances: (balances: WalletBalances | undefined, walletAddress: WalletAddress | undefined, chain: ChainName | undefined) => ChainBalances | undefined;
export declare const accessBalance: (balances: WalletBalances | undefined, walletAddress: WalletAddress | undefined, chain: ChainName | undefined, token: string) => Balance | undefined;
export type ValidationErr = string;
export type TransferValidations = {
    sendingWallet: ValidationErr;
    receivingWallet: ValidationErr;
    fromChain: ValidationErr;
    toChain: ValidationErr;
    token: ValidationErr;
    destToken: ValidationErr;
    amount: ValidationErr;
    route: ValidationErr;
    toNativeToken: ValidationErr;
    foreignAsset: ValidationErr;
    relayerFee: ValidationErr;
    receiveAmount: ValidationErr;
};
export type RouteState = {
    name: string;
    supported: boolean;
    availability: RouteAvailability;
};
export interface TransferInputState {
    showValidationState: boolean;
    validations: TransferValidations;
    routeStates: RouteState[] | undefined;
    fromChain: ChainName | undefined;
    toChain: ChainName | undefined;
    token: string;
    destToken: string;
    amount: string;
    receiveAmount: DataWrapper<string>;
    route: Route | undefined;
    balances: WalletBalances;
    foreignAsset: string;
    associatedTokenAddress: string;
    gasEst: {
        send: string;
        claim: string;
    };
    isTransactionInProgress: boolean;
    receiverNativeBalance: string | undefined;
    supportedSourceTokens: TokenConfig[];
    allSupportedDestTokens: TokenConfig[];
    supportedDestTokens: TokenConfig[];
    manualAddressTarget: boolean;
    showManualAddressInput: boolean;
    resolvingRoutes: boolean;
}
export declare const transferInputSlice: import('@reduxjs/toolkit').Slice<TransferInputState, {
    setResolvingRoutes(state: TransferInputState, { payload }: PayloadAction<boolean>): void;
    setValidations: (state: TransferInputState, { payload: { showValidationState, validations }, }: PayloadAction<{
        showValidationState: boolean;
        validations: TransferValidations;
    }>) => void;
    setRoutes: (state: TransferInputState, { payload }: PayloadAction<RouteState[]>) => void;
    setToken: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setDestToken: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setFromChain: (state: TransferInputState, { payload }: PayloadAction<ChainName>) => void;
    setToChain: (state: TransferInputState, { payload }: PayloadAction<ChainName>) => void;
    setAmount: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setReceiveAmount: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setFetchingReceiveAmount: (state: TransferInputState) => void;
    setReceiveAmountError: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    updateBalances: (state: TransferInputState, { payload, }: PayloadAction<{
        address: WalletAddress;
        chain: ChainName;
        balances: Balances;
    }>) => void;
    setReceiverNativeBalance: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setForeignAsset: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setAssociatedTokenAddress: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setTransferRoute: (state: TransferInputState, { payload }: PayloadAction<Route | undefined>) => void;
    setSendingGasEst: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    setClaimGasEst: (state: TransferInputState, { payload }: PayloadAction<string>) => void;
    clearTransfer: (state: TransferInputState) => void;
    setIsTransactionInProgress: (state: TransferInputState, { payload }: PayloadAction<boolean>) => void;
    setSupportedSourceTokens: (state: TransferInputState, { payload }: PayloadAction<TokenConfig[]>) => void;
    setSupportedDestTokens: (state: TransferInputState, { payload }: PayloadAction<TokenConfig[]>) => void;
    setAllSupportedDestTokens: (state: TransferInputState, { payload }: PayloadAction<TokenConfig[]>) => void;
    swapChains: (state: TransferInputState) => void;
    setManualAddressTarget: (state: TransferInputState, { payload }: PayloadAction<boolean>) => void;
    showManualAddressInput: (state: TransferInputState, { payload }: PayloadAction<boolean>) => void;
}, "transfer">;
export declare const isDisabledChain: (chain: ChainName, wallet: WalletData) => boolean;
export declare const selectFromChain: (dispatch: any, chain: ChainName, wallet: WalletData) => Promise<void>;
export declare const selectToChain: (dispatch: any, chain: ChainName, wallet: WalletData) => Promise<void>;
export declare const selectChain: (type: TransferWallet, dispatch: any, chain: ChainName, wallet: WalletData) => Promise<void>;
export declare const setValidations: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    showValidationState: boolean;
    validations: TransferValidations;
}, "transfer/setValidations">, setRoutes: import('@reduxjs/toolkit').ActionCreatorWithPayload<RouteState[], "transfer/setRoutes">, setToken: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setToken">, setDestToken: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setDestToken">, setFromChain: import('@reduxjs/toolkit').ActionCreatorWithPayload<ChainName, "transfer/setFromChain">, setToChain: import('@reduxjs/toolkit').ActionCreatorWithPayload<ChainName, "transfer/setToChain">, setAmount: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setAmount">, setReceiveAmount: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setReceiveAmount">, setFetchingReceiveAmount: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"transfer/setFetchingReceiveAmount">, setReceiveAmountError: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setReceiveAmountError">, setForeignAsset: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setForeignAsset">, setAssociatedTokenAddress: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setAssociatedTokenAddress">, setTransferRoute: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<Route | undefined, "transfer/setTransferRoute">, setSendingGasEst: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setSendingGasEst">, setClaimGasEst: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setClaimGasEst">, updateBalances: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    address: WalletAddress;
    chain: ChainName;
    balances: Balances;
}, "transfer/updateBalances">, clearTransfer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"transfer/clearTransfer">, setIsTransactionInProgress: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "transfer/setIsTransactionInProgress">, setReceiverNativeBalance: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setReceiverNativeBalance">, setSupportedDestTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<TokenConfig[], "transfer/setSupportedDestTokens">, setAllSupportedDestTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<TokenConfig[], "transfer/setAllSupportedDestTokens">, setSupportedSourceTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<TokenConfig[], "transfer/setSupportedSourceTokens">, swapChains: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"transfer/swapChains">, setManualAddressTarget: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "transfer/setManualAddressTarget">, showManualAddressInput: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "transfer/showManualAddressInput">, setResolvingRoutes: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "transfer/setResolvingRoutes">;
declare const _default: import('redux').Reducer<TransferInputState>;
export default _default;
//# sourceMappingURL=transferInput.d.ts.map