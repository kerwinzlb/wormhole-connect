import { default as React } from 'react';

export declare enum CollapseControlStyle {
    None = 1,
    Arrow = 2,
    Switch = 3
}
type Props = {
    title: string;
    description?: string;
    children: JSX.Element | JSX.Element[];
    startClosed?: boolean;
    disabled?: boolean;
    banner?: JSX.Element | JSX.Element[] | false | undefined;
    controlled?: boolean;
    controlStyle?: CollapseControlStyle;
    value?: boolean;
    onCollapseChange?: (value: boolean) => void;
    disableCollapse?: boolean;
};
declare function BridgeCollapse(props: Props): React.JSX.Element;
export default BridgeCollapse;
//# sourceMappingURL=Collapse.d.ts.map