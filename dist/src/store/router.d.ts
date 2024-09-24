import { PayloadAction } from '@reduxjs/toolkit';
import { TransferWallet } from '../utils/wallet';

export type Route = 'bridge' | 'redeem' | 'search' | 'terms' | 'faq';
export interface RouterState {
    route: Route;
    showFromChainsModal: boolean;
    showToChainsModal: boolean;
    showTokensModal: boolean;
    showWalletModal: TransferWallet | false;
}
export declare const routerSlice: import('@reduxjs/toolkit').Slice<RouterState, {
    setWalletModal: (state: RouterState, { payload }: PayloadAction<TransferWallet | false>) => void;
    setRoute: (state: RouterState, { payload }: PayloadAction<Route>) => void;
}, "router">;
export declare const setWalletModal: import('@reduxjs/toolkit').ActionCreatorWithPayload<false | TransferWallet, "router/setWalletModal">, setRoute: import('@reduxjs/toolkit').ActionCreatorWithPayload<Route, "router/setRoute">;
declare const _default: import('redux').Reducer<RouterState>;
export default _default;
//# sourceMappingURL=router.d.ts.map