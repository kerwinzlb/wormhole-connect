import { PayloadAction } from '@reduxjs/toolkit';
import { DataWrapper } from './helpers';

export interface PorticoSwapAmounts {
    minAmountStart: string;
    minAmountFinish: string;
    amountFinish: string;
}
export interface PorticoBridgeState {
    relayerFee: DataWrapper<string>;
    swapAmounts: DataWrapper<PorticoSwapAmounts>;
}
export declare const porticoBridgeSlice: import('@reduxjs/toolkit').Slice<PorticoBridgeState, {
    setRelayerFee: (state: PorticoBridgeState, { payload }: PayloadAction<string>) => void;
    setFetchingRelayerFee: (state: PorticoBridgeState) => void;
    setRelayerFeeError: (state: PorticoBridgeState, { payload }: PayloadAction<string>) => void;
    resetRelayerFee: (state: PorticoBridgeState) => void;
    setSwapAmounts: (state: PorticoBridgeState, { payload }: PayloadAction<PorticoSwapAmounts>) => void;
    setFetchingSwapAmounts: (state: PorticoBridgeState) => void;
    setSwapAmountsError: (state: PorticoBridgeState, { payload }: PayloadAction<string>) => void;
    resetSwapAmounts: (state: PorticoBridgeState) => void;
    clearPorticoBridge: () => PorticoBridgeState;
}, "porticoBridge">;
export declare const setRelayerFee: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "porticoBridge/setRelayerFee">, setFetchingRelayerFee: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"porticoBridge/setFetchingRelayerFee">, setRelayerFeeError: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "porticoBridge/setRelayerFeeError">, resetRelayerFee: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"porticoBridge/resetRelayerFee">, setSwapAmounts: import('@reduxjs/toolkit').ActionCreatorWithPayload<PorticoSwapAmounts, "porticoBridge/setSwapAmounts">, setFetchingSwapAmounts: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"porticoBridge/setFetchingSwapAmounts">, setSwapAmountsError: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "porticoBridge/setSwapAmountsError">, resetSwapAmounts: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"porticoBridge/resetSwapAmounts">, clearPorticoBridge: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"porticoBridge/clearPorticoBridge">;
declare const _default: import('redux').Reducer<PorticoBridgeState>;
export default _default;
//# sourceMappingURL=porticoBridge.d.ts.map