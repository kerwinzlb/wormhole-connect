import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';
import { Route, TokenConfig } from '../../config/types';
import { UnsignedMessage, TokenTransferMessage, SignedTokenTransferMessage, RelayerFee, SignedMessage } from '../types';
import { BaseRoute } from './baseRoute';

export declare class BridgeRoute extends BaseRoute {
    readonly NATIVE_GAS_DROPOFF_SUPPORTED: boolean;
    readonly AUTOMATIC_DEPOSIT: boolean;
    readonly TYPE: Route;
    isRouteSupported(sourceToken: string, destToken: string, amount: string, sourceChain: ChainName | ChainId, destChain: ChainName | ChainId): Promise<boolean>;
    isSupportedChain(chain: ChainName): boolean;
    computeReceiveAmount(sendAmount: number, token: string, destToken: string, sendingChain: ChainName | undefined, recipientChain: ChainName | undefined, routeOptions: any): Promise<number>;
    computeSendAmount(receiveAmount: number | undefined, routeOptions: any): Promise<number>;
    validate(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions: any): Promise<boolean>;
    estimateSendGas(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, routeOptions?: any): Promise<BigNumber>;
    estimateClaimGas(destChain: ChainName | ChainId, signedMessage?: SignedMessage): Promise<BigNumber>;
    /**
     * These operations have to be implemented in subclasses.
     */
    getMinSendAmount(token: TokenId | 'native', recipientChain: ChainName | ChainId, routeOptions: any): number;
    send(token: TokenId | 'native', amount: string, sendingChain: ChainName | ChainId, senderAddress: string, recipientChain: ChainName | ChainId, recipientAddress: string, destToken: string, routeOptions: any): Promise<string>;
    redeem(destChain: ChainName | ChainId, signedMessage: SignedMessage, payer: string): Promise<string>;
    getRelayerFee(sourceChain: ChainName | ChainId, destChain: ChainName | ChainId, token: string, destToken: string): Promise<RelayerFee | null>;
    getForeignAsset(token: TokenId, chain: ChainName | ChainId, destToken?: TokenConfig): Promise<string | null>;
    getMessage(tx: string, chain: ChainName | ChainId): Promise<UnsignedMessage>;
    getSignedMessage(message: TokenTransferMessage): Promise<SignedTokenTransferMessage>;
    tryFetchRedeemTx(txData: UnsignedMessage): Promise<string | undefined>;
}
//# sourceMappingURL=bridge.d.ts.map