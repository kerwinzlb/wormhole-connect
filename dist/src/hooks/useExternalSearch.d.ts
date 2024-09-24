import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';

type ExternalSearch = {
    hasExternalSearch: boolean;
    txHash?: string;
    chainName?: ChainName;
    clear: () => void;
};
export declare function useExternalSearch(): ExternalSearch;
export {};
//# sourceMappingURL=useExternalSearch.d.ts.map