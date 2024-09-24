import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { default as React } from 'react';

type Props = {
    open: boolean;
    chain: ChainName | undefined;
    walletAddress: string | undefined;
    onSelect: (token: string) => any;
    onClose: any;
    type: 'source' | 'dest';
};
declare function TokensModal(props: Props): React.JSX.Element;
export default TokensModal;
//# sourceMappingURL=TokensModal.d.ts.map