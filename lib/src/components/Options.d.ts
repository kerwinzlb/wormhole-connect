import { default as React } from 'react';

export type Option = {
    key: any;
    child: any;
    disabled?: boolean;
};
type Props = {
    children: Option[];
    onSelect: (value: any) => void;
    active?: number | string;
    collapsable?: boolean;
    collapsed?: boolean;
};
declare function Options(props: Props): React.JSX.Element;
export default Options;
//# sourceMappingURL=Options.d.ts.map