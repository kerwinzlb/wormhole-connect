import { default as React } from 'react';
import { TransferSide } from '../../../config/types';

type Props = {
    handleAmountChange: (value: number | string) => void;
    value: string;
    disabled?: boolean;
    label?: string;
    side: TransferSide;
};
declare function AmountInput(props: Props): React.JSX.Element;
export default AmountInput;
//# sourceMappingURL=AmountInput.d.ts.map