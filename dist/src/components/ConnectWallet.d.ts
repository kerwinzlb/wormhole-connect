import { default as React } from 'react';
import { TransferWallet } from '../utils/wallet';
import { TransferSide } from '../config/types';

type Props = {
    side: TransferSide;
    type: TransferWallet;
    disabled?: boolean;
};
declare function ConnectWallet(props: Props): React.JSX.Element;
export default ConnectWallet;
//# sourceMappingURL=ConnectWallet.d.ts.map