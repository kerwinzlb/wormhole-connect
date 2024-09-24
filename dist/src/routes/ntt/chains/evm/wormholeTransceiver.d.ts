import { ChainId, ChainName } from '@wormhole-foundation/wormhole-connect-sdk';
import { WormholeTransceiver as WormholeTransceiver_0_1_0 } from './abis/0.1.0/WormholeTransceiver';
import { WormholeTransceiver as WormholeTransceiver_1_0_0 } from './abis/1.0.0/WormholeTransceiver';

export declare class WormholeTransceiver {
    readonly chain: ChainName | ChainId;
    readonly address: string;
    static readonly abiVersionCache: Map<string, string>;
    constructor(chain: ChainName | ChainId, address: string);
    isWormholeRelayingEnabled(destChain: ChainName | ChainId): Promise<boolean>;
    isSpecialRelayingEnabled(destChain: ChainName | ChainId): Promise<boolean>;
    receiveMessage(vaa: string, payer: string): Promise<string>;
    getAbi(): Promise<{
        abi: WormholeTransceiver_0_1_0 | WormholeTransceiver_1_0_0;
        version: string;
    }>;
}
//# sourceMappingURL=wormholeTransceiver.d.ts.map