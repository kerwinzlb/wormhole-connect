import { Route, TokenConfig } from '../../config/types';
import { ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';
import { NttBase } from './nttBase';
import { RelayerFee, TransferDisplayData, TransferInfoBaseParams, UnsignedMessage } from '../types';
import { TokenPrices } from '../../store/tokenPrices';

export declare class NttRelay extends NttBase {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    readonly AUTOMATIC_DEPOSIT: boolean;
    readonly TYPE: Route;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions: {
        relayerFee: number;
    }): Promise<TransferDisplayData>;
    getTransferSourceInfo<T extends TransferInfoBaseParams>(params: T): Promise<TransferDisplayData>;
    tryFetchRedeemTx(txData: UnsignedMessage): Promise<string | undefined>;
}
//# sourceMappingURL=nttRelay.d.ts.map