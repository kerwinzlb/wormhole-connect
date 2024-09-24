import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { TokenConfig } from '../../config/types';
import { RouteAvailability, RouteAbstract } from '../abstracts';
import { TransferDisplayData, TransferInfoBaseParams, TransferDestInfoBaseParams, SignedMessage, TransferDestInfo } from '../types';
import { TokenPrices } from '../../store/tokenPrices';

export declare abstract class BaseRoute extends RouteAbstract {
    isSupportedSourceToken(token?: TokenConfig, destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    isSupportedDestToken(token?: TokenConfig, sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<boolean>;
    supportedSourceTokens(tokens: TokenConfig[], destToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    supportedDestTokens(tokens: TokenConfig[], sourceToken?: TokenConfig, sourceChain?: ChainName | ChainId, destChain?: ChainName | ChainId): Promise<TokenConfig[]>;
    isRouteAvailable(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    getTransferSourceInfo<T extends TransferInfoBaseParams>(params: T): Promise<TransferDisplayData>;
    getTransferDestInfo<T extends TransferDestInfoBaseParams>(params: T): Promise<TransferDestInfo>;
    isTransferCompleted(destChain: ChainName | ChainId, messageInfo: SignedMessage): Promise<boolean>;
    computeReceiveAmountWithFees(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    getMaxSendAmount(): number;
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
}
//# sourceMappingURL=baseRoute.d.ts.map