import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { IbcExtension, QueryClient } from '@cosmjs/stargate';
import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { Tendermint34Client, Tendermint37Client } from '@cosmjs/tendermint-rpc';

export declare function getQueryClient(chain: ChainId | ChainName): Promise<QueryClient & IbcExtension>;
export declare function getTmClient(chain: ChainId | ChainName): Promise<Tendermint34Client | Tendermint37Client>;
export declare function getCosmWasmClient(chain: ChainId | ChainName): Promise<CosmWasmClient>;
//# sourceMappingURL=client.d.ts.map