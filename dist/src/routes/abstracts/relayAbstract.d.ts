import { ChainId, ChainName, TokenId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';

export declare abstract class RelayAbstract {
    abstract nativeTokenAmount(destChain: ChainName | ChainId, token: TokenId, amount: BigNumber, walletAddress: string): Promise<BigNumber>;
    abstract maxSwapAmount(destChain: ChainName | ChainId, token: TokenId, walletAddress: string): Promise<BigNumber>;
}
//# sourceMappingURL=relayAbstract.d.ts.map