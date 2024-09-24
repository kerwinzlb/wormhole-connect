import { Route } from '../config/types';
import { routes } from '@wormhole-foundation/sdk';
import { RouteAbstract } from './abstracts/routeAbstract';

export interface RouteImpls {
    v1: RouteAbstract;
    v2?: routes.RouteConstructor;
}
export declare function getRouteImpls(route: Route): RouteImpls;
//# sourceMappingURL=mappings.d.ts.map