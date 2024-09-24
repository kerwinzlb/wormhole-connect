import { ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { Balances } from '../store/transferInput';
import { TokenConfig } from '../config/types';

declare const useGetTokenBalances: (walletAddress: string, chain: ChainName | undefined, tokens: TokenConfig[]) => {
    isFetching: boolean;
    balances: Balances;
};
export default useGetTokenBalances;
//# sourceMappingURL=useGetTokenBalances.d.ts.map