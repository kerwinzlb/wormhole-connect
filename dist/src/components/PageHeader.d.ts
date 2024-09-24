import { default as React } from 'react';
import { Alignment } from './Header';

type PageHeaderProps = {
    title: string;
    align?: Alignment;
    description?: string;
    back?: boolean;
    showHamburgerMenu?: boolean;
    testId?: string;
};
declare function PageHeader({ back, title, align, description, showHamburgerMenu, testId, }: PageHeaderProps): React.JSX.Element;
export default PageHeader;
//# sourceMappingURL=PageHeader.d.ts.map