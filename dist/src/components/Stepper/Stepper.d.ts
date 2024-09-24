import * as React from 'react';
type Step = {
    label: string;
    component: JSX.Element | JSX.Element[];
    warningLabel?: boolean;
    warningLine?: boolean;
};
type Props = {
    steps: Step[];
    activeStep: number;
};
export default function Stepper(props: Props): React.JSX.Element;
export {};
//# sourceMappingURL=Stepper.d.ts.map