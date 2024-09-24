import { Chain, ChainContext, Network, Wormhole, routes } from '@wormhole-foundation/sdk';
import { ChainId, ChainName, TokenId as TokenIdV1 } from '@wormhole-foundation/wormhole-connect-sdk';
import { Route, TokenConfig, Network as NetworkV1 } from '../../config/types';
import { BigNumber } from 'ethers';
import { RouteAvailability, RouteAbstract } from '../abstracts';
import { RelayerFee, SignedMessage, TransferDestInfo, TransferDestInfoBaseParams, TransferDisplayData, TransferInfoBaseParams, UnsignedMessage } from '../types';
import { TokenPrices } from '../../store/tokenPrices';
import { ParsedMessage, ParsedRelayerMessage } from '../../utils/sdk';

export declare class SDKv2Route<N extends Network> extends RouteAbstract {
    readonly rc: routes.RouteConstructor;
    TYPE: Route;
    NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    AUTOMATIC_DEPOSIT: boolean;
    network: N;
    route?: routes.Route<Network>;
    constructor(network: NetworkV1, rc: routes.RouteConstructor, routeType: Route);
    getWh(network: N): Promise<Wormhole<N>>;
    toRequest<FC extends Chain, TC extends Chain>(wh: Wormhole<N>, req: {
        srcChain: ChainName | ChainId;
        srcToken: string;
        dstChain: ChainName | ChainId;
        dstToken: string;
    }): Promise<routes.RouteTransferRequest<N>>;
    getV2ChainContext<C extends Chain>(chainV1: ChainName | ChainId): Promise<{
        chain: C;
        context: ChainContext<N, C>;
    }>;
    isRouteSupported(sourceToken: string, destToken: string, _amount: string, // Amount is validated later, when getting a quote
    fromChainV1: ChainName | ChainId, toChainV1: ChainName | ChainId): Promise<boolean>;
    isSupportedChain(chainV1: ChainName): boolean;
    isRouteAvailable(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<RouteAvailability>;
    isSupportedSourceToken(sourceToken?: TokenConfig | undefined, _destToken?: TokenConfig | undefined, fromChainV1?: ChainName | ChainId | undefined, _destChain?: ChainName | ChainId | undefined): Promise<boolean>;
    isSupportedDestToken(sourceToken?: TokenConfig | undefined, destToken?: TokenConfig | undefined, fromChainV1?: ChainName | ChainId | undefined, toChainV1?: ChainName | ChainId | undefined): Promise<boolean>;
    supportedSourceTokens(tokens: TokenConfig[], _destToken?: TokenConfig | undefined, fromChainV1?: ChainName | ChainId | undefined, _destChain?: ChainName | ChainId | undefined): Promise<TokenConfig[]>;
    supportedDestTokens(tokens: TokenConfig[], sourceToken: TokenConfig | undefined, fromChainV1?: ChainName | ChainId | undefined, toChainV1?: ChainName | ChainId | undefined): Promise<TokenConfig[]>;
    computeReceiveAmount(amountIn: number, sourceToken: string, destToken: string, fromChainV1: ChainName | undefined, toChainV1: ChainName | undefined, options: any): Promise<number>;
    computeReceiveAmountWithFees(amount: number, sourceToken: string, destToken: string, fromChainV1: ChainName | undefined, toChainV1: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenIdV1 | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenIdV1 | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage | undefined): Promise<BigNumber>;
    getMinSendAmount(routeOptions: any): number;
    getMaxSendAmount(): number;
    send(token: TokenIdV1 | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<any>;
    redeem(destChain: ChainName | ChainId, messageInfo: SignedMessage, recipient: string): Promise<string>;
    getPreview(token: TokenConfig, destToken: TokenConfig, amount: number, sendingChain: ChainName | ChainId, receipientChain: ChainName | ChainId, sendingGasEst: string, claimingGasEst: string, receiveAmount: string, tokenPrices: TokenPrices, routeOptions?: any): Promise<TransferDisplayData>;
    getTransferSourceInfo<T extends TransferInfoBaseParams>(params: T): Promise<TransferDisplayData>;
    getTransferDestInfo<T extends TransferDestInfoBaseParams>(params: T): Promise<TransferDestInfo>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getForeignAsset(token: TokenIdV1, chain: ChainName | ChainId, destToken?: TokenConfig | undefined): Promise<string | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    getSignedMessage(message: UnsignedMessage): Promise<SignedMessage>;
    isTransferCompleted(destChain: ChainName | ChainId, messageInfo: SignedMessage): Promise<boolean>;
    tryFetchRedeemTx(txData: ParsedMessage | ParsedRelayerMessage): Promise<string | undefined>;
}
//# sourceMappingURL=route.d.ts.map