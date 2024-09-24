import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { NttManagerEvm } from './nttManager';

export declare const getManagerEvm: (chain: ChainName | ChainId, address: string) => Promise<NttManagerEvm>;
export declare const getVersion: (chain: ChainName | ChainId, address: string) => Promise<string>;
//# sourceMappingURL=cache.d.ts.map