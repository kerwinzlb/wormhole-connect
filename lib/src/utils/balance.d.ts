import { BigNumberish } from 'ethers';

/**
 * Makes a BigNumber have # of decimals
 */
export declare function toDecimals(amnt: BigNumberish, tokenDecimals: number, numDecimals?: number): string;
export declare function toFixedDecimals(number: string, numDecimals: number): string;
export declare function getUsdVal(token: string): Promise<any>;
export declare function getConversion(token1: string, token2: string): Promise<number>;
//# sourceMappingURL=balance.d.ts.map