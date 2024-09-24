import { default as React } from 'react';
import { Icon } from '../../../config/types';

type Selected = {
    icon: Icon | string;
    text: string;
    secondaryText?: string;
};
type Props = {
    label: string;
    testId?: string;
    selected: Selected | undefined;
    error?: boolean;
    editable?: boolean;
    disabled?: boolean;
    onClick?: any;
};
declare function Select(props: Props): React.JSX.Element;
export default Select;
//# sourceMappingURL=Select.d.ts.map