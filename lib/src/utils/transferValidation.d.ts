import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { Route, TokenConfig } from '../config/types';
import { TransferInputState, ValidationErr, TransferValidations } from '../store/transferInput';
import { WalletData, WalletState } from '../store/wallet';
import { RelayState } from '../store/relay';
import { PorticoBridgeState } from '../store/porticoBridge';
import { DataWrapper } from '../store/helpers';

export declare const MANUAL_WALLET_NAME = "Manual Wallet";
export declare const validateFromChain: (chain: ChainName | undefined) => ValidationErr;
export declare const validateToChain: (chain: ChainName | undefined, fromChain: ChainName | undefined) => ValidationErr;
export declare const validateToken: (token: string, chain: ChainName | undefined) => ValidationErr;
export declare const validateDestToken: (token: string, chain: ChainName | undefined, supportedTokens: TokenConfig[]) => ValidationErr;
export declare const validateAmount: (amount: string, balance: string | null, maxAmount: number, isCctp?: boolean) => ValidationErr;
export declare const validateWallet: (wallet: WalletData, chain: ChainName | undefined) => Promise<ValidationErr>;
export declare const validateToNativeAmt: (amount: number, max: number | undefined) => ValidationErr;
export declare const validateRoute: (route: Route | undefined, availableRoutes: string[] | undefined, resolvingRoutes?: boolean) => ValidationErr;
export declare const validateForeignAsset: (destTokenAddr: string | undefined) => ValidationErr;
export declare const validateSolanaTokenAccount: (destChain: string | undefined, destTokenAddr: string, solanaTokenAccount: string, route: Route | undefined) => ValidationErr;
export declare const validateRelayerFee: (route: Route | undefined, routeOptions: any) => ValidationErr;
export declare const validateReceiveAmount: (route: Route | undefined, receiveAmount: DataWrapper<string>, routeOptions: any) => ValidationErr;
export declare const getMaxAmt: (route: Route | undefined) => number;
export declare const getIsAutomatic: (route: Route | undefined) => boolean;
export declare const isCctp: (token: string, destToken: string, toChain: ChainName | undefined, fromChain: ChainName | undefined) => boolean;
export declare const validateAll: (transferData: TransferInputState, relayData: RelayState, walletData: WalletState, porticoData: PorticoBridgeState) => Promise<TransferValidations>;
export declare const isTransferValid: (validations: TransferValidations) => boolean;
export declare const validate: ({ transferInput, relay, wallet, portico, }: {
    transferInput: TransferInputState;
    relay: RelayState;
    wallet: WalletState;
    portico: PorticoBridgeState;
}, dispatch: Dispatch<AnyAction>, isCanceled: () => boolean) => Promise<void>;
export declare const useValidate: () => void;
export declare const millisToMinutesAndSeconds: (millis: number) => string;
//# sourceMappingURL=transferValidation.d.ts.map