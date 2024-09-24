import { Route } from '../config/types';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

export declare const isValidRouteName: (routeName: string) => routeName is Route;
export declare const isAutomatic: (routeName: string, toChain?: ChainName) => boolean;
//# sourceMappingURL=route.d.ts.map