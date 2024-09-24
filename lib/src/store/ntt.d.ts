import { PayloadAction } from '@reduxjs/toolkit';
import { DataWrapper } from './helpers';
import { InboundQueuedTransfer } from '../routes/ntt/types';

export interface NttState {
    inboundQueuedTransfer: DataWrapper<InboundQueuedTransfer | undefined>;
}
export declare const nttSlice: import('@reduxjs/toolkit').Slice<NttState, {
    setInboundQueuedTransfer: (state: NttState, { payload }: PayloadAction<InboundQueuedTransfer | undefined>) => void;
    resetInboundQueuedTransfer: (state: NttState) => void;
    clearNtt: () => NttState;
}, "ntt">;
export declare const setInboundQueuedTransfer: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<InboundQueuedTransfer | undefined, "ntt/setInboundQueuedTransfer">, resetInboundQueuedTransfer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"ntt/resetInboundQueuedTransfer">, clearNtt: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"ntt/clearNtt">;
declare const _default: import('redux').Reducer<NttState>;
export default _default;
//# sourceMappingURL=ntt.d.ts.map