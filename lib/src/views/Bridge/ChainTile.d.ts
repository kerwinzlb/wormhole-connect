import { default as React } from 'react';
import { ChainConfig } from '../../config/types';

type Props = {
    chain?: ChainConfig;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    error?: boolean;
    disabled?: boolean;
};
declare function ChainTile(props: Props): React.JSX.Element;
export default ChainTile;
//# sourceMappingURL=ChainTile.d.ts.map