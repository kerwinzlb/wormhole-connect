import { default as React } from 'react';

export type Alignment = 'center' | 'left' | 'right';
type Props = {
    text: string;
    align?: Alignment;
    size?: number;
    testId?: string;
};
declare function Header(props: Props): React.JSX.Element;
export default Header;
//# sourceMappingURL=Header.d.ts.map