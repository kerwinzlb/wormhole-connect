import { default as React } from 'react';
import { Route } from '../../config/types';
import { SignedMessage } from '../../routes';
import { ParsedMessage, ParsedRelayerMessage } from '../../utils/sdk';

declare function Redeem({ setSignedMessage, setIsVaaEnqueued, setInvalidVaa, setTransferComplete, txData, transferComplete, isVaaEnqueued, isResumeTx, route, signedMessage, }: {
    setSignedMessage: (signed: SignedMessage) => any;
    setIsVaaEnqueued: (isVaaEnqueued: boolean) => any;
    setInvalidVaa: (invalidVaa: boolean) => void;
    setTransferComplete: any;
    txData: ParsedMessage | ParsedRelayerMessage | undefined;
    transferComplete: boolean;
    isVaaEnqueued: boolean;
    isResumeTx: boolean;
    route: Route | undefined;
    signedMessage: SignedMessage | undefined;
}): React.JSX.Element;
declare const _default: import('react-redux').ConnectedComponent<typeof Redeem, {
    context?: React.Context<import('react-redux').ReactReduxContextValue<any, import('redux').AnyAction>> | undefined;
    store?: import('redux').Store<any, import('redux').AnyAction> | undefined;
}>;
export default _default;
//# sourceMappingURL=Redeem.d.ts.map