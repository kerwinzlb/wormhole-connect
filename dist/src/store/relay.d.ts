import { PayloadAction } from '@reduxjs/toolkit';

export interface RelayState {
    maxSwapAmt: number | undefined;
    toNativeToken: number;
    receiveNativeAmt: number | undefined;
    relayerFee: number | undefined;
    receiverNativeBalance: string | undefined;
}
export declare const relaySlice: import('@reduxjs/toolkit').Slice<RelayState, {
    setToNativeToken: (state: RelayState, { payload }: PayloadAction<number>) => void;
    setMaxSwapAmt: (state: RelayState, { payload }: PayloadAction<number | undefined>) => void;
    setReceiveNativeAmt: (state: RelayState, { payload }: PayloadAction<number>) => void;
    setRelayerFee: (state: RelayState, { payload }: PayloadAction<number>) => void;
    setReceiverNativeBalance: (state: RelayState, { payload }: PayloadAction<string>) => void;
    clearRelay: (state: RelayState) => void;
}, "transfer">;
export declare const setToNativeToken: import('@reduxjs/toolkit').ActionCreatorWithPayload<number, "transfer/setToNativeToken">, setMaxSwapAmt: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<number | undefined, "transfer/setMaxSwapAmt">, setReceiveNativeAmt: import('@reduxjs/toolkit').ActionCreatorWithPayload<number, "transfer/setReceiveNativeAmt">, setRelayerFee: import('@reduxjs/toolkit').ActionCreatorWithPayload<number, "transfer/setRelayerFee">, setReceiverNativeBalance: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "transfer/setReceiverNativeBalance">;
declare const _default: import('redux').Reducer<RelayState>;
export default _default;
//# sourceMappingURL=relay.d.ts.map