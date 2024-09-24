import { Route } from '../config/types';
import { ParsedMessage, ParsedRelayerMessage } from '../utils/sdk';
import { TokenPrices } from '../store/tokenPrices';
import { BigNumber } from 'ethers';
import { TokenId } from '@wormhole-foundation/wormhole-connect-sdk';

export type TokenTransferMessage = ParsedMessage;
export type RelayTransferMessage = ParsedRelayerMessage;
export interface CCTPMessage {
    message: string;
}
export type ManualCCTPMessage = CCTPMessage & ParsedMessage;
export type RelayCCTPMessage = CCTPMessage & ParsedRelayerMessage;
export type UnsignedCCTPMessage = ManualCCTPMessage | RelayCCTPMessage;
export type TBTCMessage = TokenTransferMessage & {
    to: string;
};
export declare enum NttRelayingType {
    Standard = 0,
    Special = 1,
    Manual = 2
}
export type UnsignedNttMessage = ParsedMessage & {
    recipientNttManager: string;
    messageDigest: string;
    relayerFee: string;
    relayingType: NttRelayingType;
};
export type UnsignedMessage = TokenTransferMessage | RelayTransferMessage | UnsignedCCTPMessage | TBTCMessage | UnsignedNttMessage;
export declare const isUnsignedNttMessage: (message: UnsignedMessage) => message is UnsignedNttMessage;
export type SignedTokenTransferMessage = TokenTransferMessage & {
    vaa: string;
};
export type SignedRelayTransferMessage = RelayTransferMessage & {
    vaa: string;
};
export type SignedNttMessage = UnsignedNttMessage & {
    vaa: string;
};
export type SignedWormholeMessage = SignedTokenTransferMessage | SignedRelayTransferMessage | SignedNttMessage;
export type SignedManualCCTPMessage = ManualCCTPMessage & {
    attestation: string;
};
export type SignedRelayCCTPMessage = RelayCCTPMessage & {
    attestation: string;
};
export type SignedCCTPMessage = SignedManualCCTPMessage | SignedRelayCCTPMessage;
export type SignedMessage = SignedWormholeMessage | SignedCCTPMessage;
export declare const isSignedWormholeMessage: (message: SignedMessage) => message is SignedWormholeMessage;
export declare const isSignedCCTPMessage: (message: SignedMessage) => message is SignedCCTPMessage;
export declare const isSignedNttMessage: (message: SignedMessage) => message is SignedNttMessage;
export interface TransferInfoBaseParams {
    txData: ParsedMessage | ParsedRelayerMessage;
    tokenPrices: TokenPrices;
}
export interface TransferDestInfoBaseParams {
    txData: ParsedMessage | ParsedRelayerMessage;
    tokenPrices: TokenPrices;
    receiveTx?: string;
    gasEstimate?: string;
}
export type Row = {
    title: string;
    value: string;
    valueUSD?: string;
};
export interface NestedRow extends Row {
    rows?: Row[];
}
export type TransferDestInfo = {
    route: Route;
    displayData: TransferDisplayData;
};
export type TransferDisplayData = NestedRow[];
export interface RelayerFee {
    fee: BigNumber;
    feeToken: TokenId | 'native';
}
//# sourceMappingURL=types.d.ts.map