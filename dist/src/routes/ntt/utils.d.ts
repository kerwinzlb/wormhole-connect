/// <reference types="node" />
export interface WormholeTransceiverInstruction {
    shouldSkipRelayerSend: boolean;
}
export declare const encodeWormholeTransceiverInstruction: (instruction: WormholeTransceiverInstruction) => Buffer;
export interface TransceiverInstruction {
    index: number;
    payload: Buffer;
}
export declare const encodeTransceiverInstruction: (instruction: TransceiverInstruction) => Buffer;
export declare const encodeTransceiverInstructions: (instructions: TransceiverInstruction[]) => Buffer;
export declare const abiVersionMatches: (targetVersion: string, abiVersion: string) => boolean;
//# sourceMappingURL=utils.d.ts.map