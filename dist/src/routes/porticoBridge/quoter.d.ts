import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';

export interface Quote {
    amountOut: BigNumber;
}
export declare function getQuote(chain: ChainName | ChainId, quoterAddress: string, tokenIn: string, tokenOut: string, amountIn: BigNumber, fee: number): Promise<Quote>;
//# sourceMappingURL=quoter.d.ts.map