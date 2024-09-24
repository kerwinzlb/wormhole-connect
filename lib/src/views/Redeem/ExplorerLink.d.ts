import { default as React } from 'react';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { TransferSide } from '../../config/types';

type ExplorerLinkProps = {
    chain: ChainName;
    side: TransferSide;
    styles?: React.CSSProperties;
} & ({
    type: 'tx';
    txHash: string;
} | {
    type: 'address';
    address: string;
} | {
    type: 'object';
    object: string;
});
declare function ExplorerLink(props: ExplorerLinkProps): React.JSX.Element | null;
export default ExplorerLink;
//# sourceMappingURL=ExplorerLink.d.ts.map