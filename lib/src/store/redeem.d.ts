import { PayloadAction } from '@reduxjs/toolkit';
import { ParsedMessage, ParsedRelayerMessage } from '../utils/sdk';
import { UnsignedNttMessage, SignedMessage, TransferDestInfo } from '../routes';
import { Route } from '../config/types';
import { DeliveryStatus } from '@certusone/wormhole-sdk/lib/esm/relayer';

export declare enum MessageType {
    BRIDGE = 1,
    RELAY = 3
}
export interface RedeemState {
    txData: ParsedMessage | ParsedRelayerMessage | UnsignedNttMessage | undefined;
    signedMessage: SignedMessage | undefined;
    sendTx: string;
    redeemTx: string;
    transferComplete: boolean;
    isVaaEnqueued: boolean;
    isInvalidVaa: boolean;
    route: Route | undefined;
    transferDestInfo: TransferDestInfo | undefined;
    deliveryStatus: DeliveryStatus | undefined;
    isResumeTx: boolean;
}
export declare const redeemSlice: import('@reduxjs/toolkit').Slice<RedeemState, {
    setTxDetails: (state: RedeemState, { payload, }: PayloadAction<ParsedMessage | ParsedRelayerMessage | UnsignedNttMessage>) => void;
    setSendTx: (state: RedeemState, { payload }: PayloadAction<string>) => void;
    setRedeemTx: (state: RedeemState, { payload }: {
        payload: any;
        type: string;
    }) => void;
    setRoute: (state: RedeemState, { payload }: {
        payload: any;
        type: string;
    }) => void;
    setTransferComplete: (state: RedeemState, { payload }: PayloadAction<boolean>) => void;
    setIsVaaEnqueued: (state: RedeemState, { payload }: PayloadAction<boolean>) => void;
    setTransferDestInfo: (state: RedeemState, { payload }: PayloadAction<TransferDestInfo | undefined>) => void;
    clearRedeem: (state: RedeemState) => void;
    setSignedMessage: (state: RedeemState, { payload }: PayloadAction<SignedMessage>) => void;
    setDeliveryStatus: (state: RedeemState, { payload }: PayloadAction<DeliveryStatus>) => void;
    setInvalidVaa: (state: RedeemState, { payload }: PayloadAction<boolean>) => void;
    setIsResumeTx: (state: RedeemState, { payload }: PayloadAction<boolean>) => void;
}, "redeem">;
export declare const setTxDetails: import('@reduxjs/toolkit').ActionCreatorWithPayload<ParsedMessage | ParsedRelayerMessage | UnsignedNttMessage, "redeem/setTxDetails">, setSendTx: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "redeem/setSendTx">, setRedeemTx: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "redeem/setRedeemTx">, setTransferComplete: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "redeem/setTransferComplete">, setIsVaaEnqueued: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "redeem/setIsVaaEnqueued">, setInvalidVaa: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "redeem/setInvalidVaa">, setTransferDestInfo: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<TransferDestInfo | undefined, "redeem/setTransferDestInfo">, clearRedeem: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"redeem/clearRedeem">, setRoute: import('@reduxjs/toolkit').ActionCreatorWithPayload<any, "redeem/setRoute">, setSignedMessage: import('@reduxjs/toolkit').ActionCreatorWithPayload<SignedMessage, "redeem/setSignedMessage">, setDeliveryStatus: import('@reduxjs/toolkit').ActionCreatorWithPayload<DeliveryStatus, "redeem/setDeliveryStatus">, setIsResumeTx: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "redeem/setIsResumeTx">;
declare const _default: import('redux').Reducer<RedeemState>;
export default _default;
//# sourceMappingURL=redeem.d.ts.map