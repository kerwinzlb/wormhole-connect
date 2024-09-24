import { Route } from './types';

export type RouteData = {
    route: Route;
    name: string;
    providedBy: string;
    routePath?: string;
    link: string;
    icon: () => JSX.Element;
    pendingMessage: string;
};
export declare const RoutesConfig: {
    [route in Route]: RouteData;
};
//# sourceMappingURL=routes.d.ts.map