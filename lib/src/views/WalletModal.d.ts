import { default as React } from 'react';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { TransferWallet } from '../utils/wallet';

type Props = {
    type: TransferWallet;
    chain?: ChainName;
    onClose?: () => any;
};
declare function WalletsModal(props: Props): React.JSX.Element;
export default WalletsModal;
//# sourceMappingURL=WalletModal.d.ts.map