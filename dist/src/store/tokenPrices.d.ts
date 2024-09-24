import { PayloadAction } from '@reduxjs/toolkit';
import { DataWrapper } from './helpers';

export type TokenPrices = {
    [key: string]: {
        usd: number;
    };
};
export interface TokenPricesState {
    usdPrices: DataWrapper<TokenPrices>;
}
export declare const tokenPricesSlice: import('@reduxjs/toolkit').Slice<TokenPricesState, {
    setPrices: (state: TokenPricesState, { payload }: PayloadAction<TokenPrices>) => void;
    setFetchingPrices: (state: TokenPricesState) => void;
    setPricesError: (state: TokenPricesState, { payload }: PayloadAction<string>) => void;
    resetPrices: (state: TokenPricesState) => void;
    clearTokenPrices: () => TokenPricesState;
}, "tokenPrices">;
export declare const setPrices: import('@reduxjs/toolkit').ActionCreatorWithPayload<TokenPrices, "tokenPrices/setPrices">, setFetchingPrices: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"tokenPrices/setFetchingPrices">, setPricesError: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "tokenPrices/setPricesError">, resetPrices: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"tokenPrices/resetPrices">, clearTokenPrices: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"tokenPrices/clearTokenPrices">;
declare const _default: import('redux').Reducer<TokenPricesState>;
export default _default;
//# sourceMappingURL=tokenPrices.d.ts.map