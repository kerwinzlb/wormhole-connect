import { PorticoBridge } from './porticoBridge';
import { Route } from '../../config/types';
import { ChainName, ChainId } from '@wormhole-foundation/wormhole-connect-sdk';
import { BigNumber } from 'ethers';

export declare class USDTBridge extends PorticoBridge {
    readonly TYPE: Route;
    static readonly SUPPORTED_TOKENS: string[];
    constructor();
    isSupportedChain(chain: ChainName): boolean;
    getQuote(chain: ChainName | ChainId, tokenIn: string, tokenOut: string, amountIn: BigNumber, fee: number): Promise<{
        amountOut: BigNumber;
    }>;
    getPorticoAddress(chain: ChainName | ChainId): string;
}
//# sourceMappingURL=usdtBridge.d.ts.map