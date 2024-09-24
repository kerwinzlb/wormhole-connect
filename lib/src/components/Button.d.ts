import { default as React, MouseEventHandler } from 'react';

type Props = {
    action?: boolean;
    elevated?: boolean;
    link?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
    testId?: string;
};
declare function Button(props: Props): React.JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map