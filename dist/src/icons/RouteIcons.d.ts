import { default as React } from 'react';
import { default as WormholeIcon } from './Routes/Wormhole';
import { Route } from '../config/types';

export declare const getIcon: (route: Route) => React.JSX.Element | typeof WormholeIcon;
type Props = {
    route: Route;
    height?: number;
};
declare function RouteIcon(props: Props): React.JSX.Element;
export default RouteIcon;
//# sourceMappingURL=RouteIcons.d.ts.map