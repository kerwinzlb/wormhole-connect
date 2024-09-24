import { default as React } from 'react';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { TransferSide } from '../../config/types';

type Props = {
    chain: ChainName;
    address: string;
    txHash?: string;
    loading?: boolean;
    text?: string;
    side: TransferSide;
};
declare function Header(props: Props): React.JSX.Element;
export default Header;
//# sourceMappingURL=Header.d.ts.map