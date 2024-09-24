import { default as React } from 'react';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { TransferSide } from '../../../config/types';
import { ValidationErr } from '../../../store/transferInput';
import { TransferWallet } from '../../../utils/wallet';

type Props = {
    side: TransferSide;
    wallet: TransferWallet;
    walletError: string;
    walletValidations: string[];
    inputValidations: string[];
    warning?: React.ReactNode | null;
    chain: ChainName | undefined;
    chainValidation: ValidationErr;
    onChainClick: any;
    tokenInput: any;
    amountInput: any;
    balance: string | undefined;
    tokenPrice: number | undefined;
};
declare function Inputs(props: Props): React.JSX.Element;
export default Inputs;
//# sourceMappingURL=Inputs.d.ts.map