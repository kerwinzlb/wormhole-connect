import { CreateOrderRequest, CreateOrderResponse, PorticoFlagSet, PorticoPayload, PorticoTradeParameters, PorticoTransferDestInfo } from './types';
import { Route, TokenConfig } from '../../config/types';
import { TransferDestInfo } from '../types';

export declare const parseAddress: (buffer: Buffer) => string;
export declare const parseTradeParameters: (buffer: Buffer) => PorticoTradeParameters;
export declare const parsePorticoPayload: (buffer: Buffer) => PorticoPayload;
export declare const parseFlagSet: (buffer: Buffer) => PorticoFlagSet;
/**
 * Validates that the response from the order creation API matches the request
 * throws an error if there is a mismatch
 */
export declare const validateCreateOrderResponse: (response: CreateOrderResponse, request: CreateOrderRequest, startToken: TokenConfig) => Promise<void>;
/**
 * The canonical token address is the foreign asset of the token bridged from Ethereum
 */
export declare const getCanonicalTokenAddress: (token: TokenConfig) => Promise<string>;
export declare const isPorticoRoute: (route: Route) => boolean;
export declare const isPorticoTransferDestInfo: (info: TransferDestInfo | undefined) => info is PorticoTransferDestInfo;
//# sourceMappingURL=utils.d.ts.map