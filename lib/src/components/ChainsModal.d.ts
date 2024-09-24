import { default as React } from 'react';
import { ChainConfig, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

export declare enum ModalType {
    FROM = 1,
    TO = 2
}
type Props = {
    title: string;
    open: boolean;
    chains?: ChainConfig[];
    isDisabled?: (chain: ChainName) => boolean;
    onClose: () => any;
    onSelect: (chain: ChainName) => any;
    onMoreNetworkSelect?: (href: string, chainName: string, target?: string) => any;
};
declare function ChainsModal(props: Props): React.JSX.Element;
export default ChainsModal;
//# sourceMappingURL=ChainsModal.d.ts.map