export declare const store: import('@reduxjs/toolkit/dist/configureStore').ToolkitStore<{
    redeem: import('./redeem').RedeemState;
    transferInput: import('./transferInput').TransferInputState;
    router: import('./router').RouterState;
    wallet: import('./wallet').WalletState;
    relay: import('./relay').RelayState;
    porticoBridge: import('./porticoBridge').PorticoBridgeState;
    tokenPrices: import('./tokenPrices').TokenPricesState;
    ntt: import('./ntt').NttState;
}, import('redux').AnyAction, [import('@reduxjs/toolkit').ThunkMiddleware<{
    redeem: import('./redeem').RedeemState;
    transferInput: import('./transferInput').TransferInputState;
    router: import('./router').RouterState;
    wallet: import('./wallet').WalletState;
    relay: import('./relay').RelayState;
    porticoBridge: import('./porticoBridge').PorticoBridgeState;
    tokenPrices: import('./tokenPrices').TokenPricesState;
    ntt: import('./ntt').NttState;
}, import('redux').AnyAction>]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=index.d.ts.map