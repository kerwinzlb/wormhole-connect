import { default as React } from 'react';
import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

interface TransferLimitedWarningProps {
    fromChain: ChainName | undefined;
    token: string;
}
declare const TransferLimitedWarning: (props: TransferLimitedWarningProps) => React.JSX.Element | null;
export default TransferLimitedWarning;
//# sourceMappingURL=TransferLimitedWarning.d.ts.map