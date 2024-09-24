import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../common';

export declare namespace TransceiverStructs {
    type TransceiverMessageStruct = {
        sourceNttManagerAddress: BytesLike;
        recipientNttManagerAddress: BytesLike;
        nttManagerPayload: BytesLike;
        transceiverPayload: BytesLike;
    };
    type TransceiverMessageStructOutput = [
        string,
        string,
        string,
        string
    ] & {
        sourceNttManagerAddress: string;
        recipientNttManagerAddress: string;
        nttManagerPayload: string;
        transceiverPayload: string;
    };
    type TransceiverInstructionStruct = {
        index: BigNumberish;
        payload: BytesLike;
    };
    type TransceiverInstructionStructOutput = [number, string] & {
        index: number;
        payload: string;
    };
}
export declare namespace IWormholeTransceiver {
    type WormholeTransceiverInstructionStruct = {
        shouldSkipRelayerSend: boolean;
    };
    type WormholeTransceiverInstructionStructOutput = [boolean] & {
        shouldSkipRelayerSend: boolean;
    };
}
export interface WormholeTransceiverInterface extends utils.Interface {
    functions: {
        'WORMHOLE_TRANSCEIVER_VERSION()': FunctionFragment;
        'consistencyLevel()': FunctionFragment;
        'encodeWormholeTransceiverInstruction((bool))': FunctionFragment;
        'gasLimit()': FunctionFragment;
        'getMigratesImmutables()': FunctionFragment;
        'getNttManagerOwner()': FunctionFragment;
        'getNttManagerToken()': FunctionFragment;
        'getWormholePeer(uint16)': FunctionFragment;
        'initialize()': FunctionFragment;
        'isPaused()': FunctionFragment;
        'isSpecialRelayingEnabled(uint16)': FunctionFragment;
        'isVAAConsumed(bytes32)': FunctionFragment;
        'isWormholeEvmChain(uint16)': FunctionFragment;
        'isWormholeRelayingEnabled(uint16)': FunctionFragment;
        'migrate()': FunctionFragment;
        'nttManager()': FunctionFragment;
        'nttManagerToken()': FunctionFragment;
        'owner()': FunctionFragment;
        'parseWormholeTransceiverInstruction(bytes)': FunctionFragment;
        'pauser()': FunctionFragment;
        'quoteDeliveryPrice(uint16,(uint8,bytes))': FunctionFragment;
        'receiveMessage(bytes)': FunctionFragment;
        'receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)': FunctionFragment;
        'sendMessage(uint16,(uint8,bytes),bytes,bytes32,bytes32)': FunctionFragment;
        'setIsSpecialRelayingEnabled(uint16,bool)': FunctionFragment;
        'setIsWormholeEvmChain(uint16,bool)': FunctionFragment;
        'setIsWormholeRelayingEnabled(uint16,bool)': FunctionFragment;
        'setWormholePeer(uint16,bytes32)': FunctionFragment;
        'specialRelayer()': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
        'transferPauserCapability(address)': FunctionFragment;
        'transferTransceiverOwnership(address)': FunctionFragment;
        'upgrade(address)': FunctionFragment;
        'wormhole()': FunctionFragment;
        'wormholeRelayer()': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'WORMHOLE_TRANSCEIVER_VERSION' | 'consistencyLevel' | 'encodeWormholeTransceiverInstruction' | 'gasLimit' | 'getMigratesImmutables' | 'getNttManagerOwner' | 'getNttManagerToken' | 'getWormholePeer' | 'initialize' | 'isPaused' | 'isSpecialRelayingEnabled' | 'isVAAConsumed' | 'isWormholeEvmChain' | 'isWormholeRelayingEnabled' | 'migrate' | 'nttManager' | 'nttManagerToken' | 'owner' | 'parseWormholeTransceiverInstruction' | 'pauser' | 'quoteDeliveryPrice' | 'receiveMessage' | 'receiveWormholeMessages' | 'sendMessage' | 'setIsSpecialRelayingEnabled' | 'setIsWormholeEvmChain' | 'setIsWormholeRelayingEnabled' | 'setWormholePeer' | 'specialRelayer' | 'transferOwnership' | 'transferPauserCapability' | 'transferTransceiverOwnership' | 'upgrade' | 'wormhole' | 'wormholeRelayer'): FunctionFragment;
    encodeFunctionData(functionFragment: 'WORMHOLE_TRANSCEIVER_VERSION', values?: undefined): string;
    encodeFunctionData(functionFragment: 'consistencyLevel', values?: undefined): string;
    encodeFunctionData(functionFragment: 'encodeWormholeTransceiverInstruction', values: [IWormholeTransceiver.WormholeTransceiverInstructionStruct]): string;
    encodeFunctionData(functionFragment: 'gasLimit', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getMigratesImmutables', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getNttManagerOwner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getNttManagerToken', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getWormholePeer', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'initialize', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isSpecialRelayingEnabled', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'isVAAConsumed', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'isWormholeEvmChain', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'isWormholeRelayingEnabled', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'migrate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'nttManager', values?: undefined): string;
    encodeFunctionData(functionFragment: 'nttManagerToken', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'parseWormholeTransceiverInstruction', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'pauser', values?: undefined): string;
    encodeFunctionData(functionFragment: 'quoteDeliveryPrice', values: [BigNumberish, TransceiverStructs.TransceiverInstructionStruct]): string;
    encodeFunctionData(functionFragment: 'receiveMessage', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'receiveWormholeMessages', values: [BytesLike, BytesLike[], BytesLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'sendMessage', values: [
        BigNumberish,
        TransceiverStructs.TransceiverInstructionStruct,
        BytesLike,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: 'setIsSpecialRelayingEnabled', values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: 'setIsWormholeEvmChain', values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: 'setIsWormholeRelayingEnabled', values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: 'setWormholePeer', values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'specialRelayer', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
    encodeFunctionData(functionFragment: 'transferPauserCapability', values: [string]): string;
    encodeFunctionData(functionFragment: 'transferTransceiverOwnership', values: [string]): string;
    encodeFunctionData(functionFragment: 'upgrade', values: [string]): string;
    encodeFunctionData(functionFragment: 'wormhole', values?: undefined): string;
    encodeFunctionData(functionFragment: 'wormholeRelayer', values?: undefined): string;
    decodeFunctionResult(functionFragment: 'WORMHOLE_TRANSCEIVER_VERSION', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'consistencyLevel', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'encodeWormholeTransceiverInstruction', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'gasLimit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMigratesImmutables', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getNttManagerOwner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getNttManagerToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getWormholePeer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isSpecialRelayingEnabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isVAAConsumed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isWormholeEvmChain', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isWormholeRelayingEnabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nttManager', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nttManagerToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'parseWormholeTransceiverInstruction', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pauser', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'quoteDeliveryPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'receiveMessage', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'receiveWormholeMessages', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sendMessage', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setIsSpecialRelayingEnabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setIsWormholeEvmChain', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setIsWormholeRelayingEnabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setWormholePeer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'specialRelayer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferPauserCapability', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferTransceiverOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'upgrade', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'wormhole', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'wormholeRelayer', data: BytesLike): Result;
    events: {
        'AdminChanged(address,address)': EventFragment;
        'BeaconUpgraded(address)': EventFragment;
        'Initialized(uint64)': EventFragment;
        'NotPaused(bool)': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
        'Paused(bool)': EventFragment;
        'PauserTransferred(address,address)': EventFragment;
        'ReceivedMessage(bytes32,uint16,bytes32,uint64)': EventFragment;
        'ReceivedRelayedMessage(bytes32,uint16,bytes32)': EventFragment;
        'RelayingInfo(uint8,bytes32,uint256)': EventFragment;
        'SendTransceiverMessage(uint16,(bytes32,bytes32,bytes,bytes))': EventFragment;
        'SetIsSpecialRelayingEnabled(uint16,bool)': EventFragment;
        'SetIsWormholeEvmChain(uint16,bool)': EventFragment;
        'SetIsWormholeRelayingEnabled(uint16,bool)': EventFragment;
        'SetWormholePeer(uint16,bytes32)': EventFragment;
        'Upgraded(address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NotPaused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PauserTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ReceivedMessage'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ReceivedRelayedMessage'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RelayingInfo'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SendTransceiverMessage'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SetIsSpecialRelayingEnabled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SetIsWormholeEvmChain'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SetIsWormholeRelayingEnabled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'SetWormholePeer'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface NotPausedEventObject {
    notPaused: boolean;
}
export type NotPausedEvent = TypedEvent<[boolean], NotPausedEventObject>;
export type NotPausedEventFilter = TypedEventFilter<NotPausedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    paused: boolean;
}
export type PausedEvent = TypedEvent<[boolean], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PauserTransferredEventObject {
    oldPauser: string;
    newPauser: string;
}
export type PauserTransferredEvent = TypedEvent<[
    string,
    string
], PauserTransferredEventObject>;
export type PauserTransferredEventFilter = TypedEventFilter<PauserTransferredEvent>;
export interface ReceivedMessageEventObject {
    digest: string;
    emitterChainId: number;
    emitterAddress: string;
    sequence: BigNumber;
}
export type ReceivedMessageEvent = TypedEvent<[
    string,
    number,
    string,
    BigNumber
], ReceivedMessageEventObject>;
export type ReceivedMessageEventFilter = TypedEventFilter<ReceivedMessageEvent>;
export interface ReceivedRelayedMessageEventObject {
    digest: string;
    emitterChainId: number;
    emitterAddress: string;
}
export type ReceivedRelayedMessageEvent = TypedEvent<[
    string,
    number,
    string
], ReceivedRelayedMessageEventObject>;
export type ReceivedRelayedMessageEventFilter = TypedEventFilter<ReceivedRelayedMessageEvent>;
export interface RelayingInfoEventObject {
    relayingType: number;
    refundAddress: string;
    deliveryPayment: BigNumber;
}
export type RelayingInfoEvent = TypedEvent<[
    number,
    string,
    BigNumber
], RelayingInfoEventObject>;
export type RelayingInfoEventFilter = TypedEventFilter<RelayingInfoEvent>;
export interface SendTransceiverMessageEventObject {
    recipientChain: number;
    message: TransceiverStructs.TransceiverMessageStructOutput;
}
export type SendTransceiverMessageEvent = TypedEvent<[
    number,
    TransceiverStructs.TransceiverMessageStructOutput
], SendTransceiverMessageEventObject>;
export type SendTransceiverMessageEventFilter = TypedEventFilter<SendTransceiverMessageEvent>;
export interface SetIsSpecialRelayingEnabledEventObject {
    chainId: number;
    isRelayingEnabled: boolean;
}
export type SetIsSpecialRelayingEnabledEvent = TypedEvent<[
    number,
    boolean
], SetIsSpecialRelayingEnabledEventObject>;
export type SetIsSpecialRelayingEnabledEventFilter = TypedEventFilter<SetIsSpecialRelayingEnabledEvent>;
export interface SetIsWormholeEvmChainEventObject {
    chainId: number;
    isEvm: boolean;
}
export type SetIsWormholeEvmChainEvent = TypedEvent<[
    number,
    boolean
], SetIsWormholeEvmChainEventObject>;
export type SetIsWormholeEvmChainEventFilter = TypedEventFilter<SetIsWormholeEvmChainEvent>;
export interface SetIsWormholeRelayingEnabledEventObject {
    chainId: number;
    isRelayingEnabled: boolean;
}
export type SetIsWormholeRelayingEnabledEvent = TypedEvent<[
    number,
    boolean
], SetIsWormholeRelayingEnabledEventObject>;
export type SetIsWormholeRelayingEnabledEventFilter = TypedEventFilter<SetIsWormholeRelayingEnabledEvent>;
export interface SetWormholePeerEventObject {
    chainId: number;
    peerContract: string;
}
export type SetWormholePeerEvent = TypedEvent<[
    number,
    string
], SetWormholePeerEventObject>;
export type SetWormholePeerEventFilter = TypedEventFilter<SetWormholePeerEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface WormholeTransceiver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: WormholeTransceiverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        WORMHOLE_TRANSCEIVER_VERSION(overrides?: CallOverrides): Promise<[string]>;
        consistencyLevel(overrides?: CallOverrides): Promise<[number]>;
        encodeWormholeTransceiverInstruction(instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct, overrides?: CallOverrides): Promise<[string]>;
        gasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<[boolean]>;
        getNttManagerOwner(overrides?: CallOverrides): Promise<[string]>;
        getNttManagerToken(overrides?: CallOverrides): Promise<[string]>;
        getWormholePeer(chainId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        initialize(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isSpecialRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isWormholeEvmChain(chainId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isWormholeRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        migrate(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        nttManager(overrides?: CallOverrides): Promise<[string]>;
        nttManagerToken(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        parseWormholeTransceiverInstruction(encoded: BytesLike, overrides?: CallOverrides): Promise<[
            IWormholeTransceiver.WormholeTransceiverInstructionStructOutput
        ] & {
            instruction: IWormholeTransceiver.WormholeTransceiverInstructionStructOutput;
        }>;
        pauser(overrides?: CallOverrides): Promise<[string]>;
        quoteDeliveryPrice(targetChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
        receiveMessage(encodedMessage: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        receiveWormholeMessages(payload: BytesLike, additionalMessages: BytesLike[], sourceAddress: BytesLike, sourceChain: BigNumberish, deliveryHash: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sendMessage(recipientChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, nttManagerMessage: BytesLike, recipientNttManagerAddress: BytesLike, refundAddress: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setIsSpecialRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setIsWormholeEvmChain(chainId: BigNumberish, isEvm: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setIsWormholeRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setWormholePeer(peerChainId: BigNumberish, peerContract: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        specialRelayer(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferPauserCapability(newPauser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferTransceiverOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgrade(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        wormhole(overrides?: CallOverrides): Promise<[string]>;
        wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
    };
    WORMHOLE_TRANSCEIVER_VERSION(overrides?: CallOverrides): Promise<string>;
    consistencyLevel(overrides?: CallOverrides): Promise<number>;
    encodeWormholeTransceiverInstruction(instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct, overrides?: CallOverrides): Promise<string>;
    gasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    getMigratesImmutables(overrides?: CallOverrides): Promise<boolean>;
    getNttManagerOwner(overrides?: CallOverrides): Promise<string>;
    getNttManagerToken(overrides?: CallOverrides): Promise<string>;
    getWormholePeer(chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    initialize(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    isSpecialRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isWormholeEvmChain(chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isWormholeRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    migrate(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    nttManager(overrides?: CallOverrides): Promise<string>;
    nttManagerToken(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    parseWormholeTransceiverInstruction(encoded: BytesLike, overrides?: CallOverrides): Promise<IWormholeTransceiver.WormholeTransceiverInstructionStructOutput>;
    pauser(overrides?: CallOverrides): Promise<string>;
    quoteDeliveryPrice(targetChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, overrides?: CallOverrides): Promise<BigNumber>;
    receiveMessage(encodedMessage: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    receiveWormholeMessages(payload: BytesLike, additionalMessages: BytesLike[], sourceAddress: BytesLike, sourceChain: BigNumberish, deliveryHash: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sendMessage(recipientChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, nttManagerMessage: BytesLike, recipientNttManagerAddress: BytesLike, refundAddress: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setIsSpecialRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setIsWormholeEvmChain(chainId: BigNumberish, isEvm: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setIsWormholeRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setWormholePeer(peerChainId: BigNumberish, peerContract: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    specialRelayer(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferPauserCapability(newPauser: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferTransceiverOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgrade(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    wormhole(overrides?: CallOverrides): Promise<string>;
    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        WORMHOLE_TRANSCEIVER_VERSION(overrides?: CallOverrides): Promise<string>;
        consistencyLevel(overrides?: CallOverrides): Promise<number>;
        encodeWormholeTransceiverInstruction(instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct, overrides?: CallOverrides): Promise<string>;
        gasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<boolean>;
        getNttManagerOwner(overrides?: CallOverrides): Promise<string>;
        getNttManagerToken(overrides?: CallOverrides): Promise<string>;
        getWormholePeer(chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        isSpecialRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isWormholeEvmChain(chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isWormholeRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        migrate(overrides?: CallOverrides): Promise<void>;
        nttManager(overrides?: CallOverrides): Promise<string>;
        nttManagerToken(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        parseWormholeTransceiverInstruction(encoded: BytesLike, overrides?: CallOverrides): Promise<IWormholeTransceiver.WormholeTransceiverInstructionStructOutput>;
        pauser(overrides?: CallOverrides): Promise<string>;
        quoteDeliveryPrice(targetChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        receiveMessage(encodedMessage: BytesLike, overrides?: CallOverrides): Promise<void>;
        receiveWormholeMessages(payload: BytesLike, additionalMessages: BytesLike[], sourceAddress: BytesLike, sourceChain: BigNumberish, deliveryHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        sendMessage(recipientChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, nttManagerMessage: BytesLike, recipientNttManagerAddress: BytesLike, refundAddress: BytesLike, overrides?: CallOverrides): Promise<void>;
        setIsSpecialRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: CallOverrides): Promise<void>;
        setIsWormholeEvmChain(chainId: BigNumberish, isEvm: boolean, overrides?: CallOverrides): Promise<void>;
        setIsWormholeRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: CallOverrides): Promise<void>;
        setWormholePeer(peerChainId: BigNumberish, peerContract: BytesLike, overrides?: CallOverrides): Promise<void>;
        specialRelayer(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        transferPauserCapability(newPauser: string, overrides?: CallOverrides): Promise<void>;
        transferTransceiverOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        upgrade(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        wormhole(overrides?: CallOverrides): Promise<string>;
        wormholeRelayer(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        'BeaconUpgraded(address)'(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        'Initialized(uint64)'(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        'NotPaused(bool)'(notPaused?: null): NotPausedEventFilter;
        NotPaused(notPaused?: null): NotPausedEventFilter;
        'OwnershipTransferred(address,address)'(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        'Paused(bool)'(paused?: null): PausedEventFilter;
        Paused(paused?: null): PausedEventFilter;
        'PauserTransferred(address,address)'(oldPauser?: string | null, newPauser?: string | null): PauserTransferredEventFilter;
        PauserTransferred(oldPauser?: string | null, newPauser?: string | null): PauserTransferredEventFilter;
        'ReceivedMessage(bytes32,uint16,bytes32,uint64)'(digest?: null, emitterChainId?: null, emitterAddress?: null, sequence?: null): ReceivedMessageEventFilter;
        ReceivedMessage(digest?: null, emitterChainId?: null, emitterAddress?: null, sequence?: null): ReceivedMessageEventFilter;
        'ReceivedRelayedMessage(bytes32,uint16,bytes32)'(digest?: null, emitterChainId?: null, emitterAddress?: null): ReceivedRelayedMessageEventFilter;
        ReceivedRelayedMessage(digest?: null, emitterChainId?: null, emitterAddress?: null): ReceivedRelayedMessageEventFilter;
        'RelayingInfo(uint8,bytes32,uint256)'(relayingType?: null, refundAddress?: null, deliveryPayment?: null): RelayingInfoEventFilter;
        RelayingInfo(relayingType?: null, refundAddress?: null, deliveryPayment?: null): RelayingInfoEventFilter;
        'SendTransceiverMessage(uint16,(bytes32,bytes32,bytes,bytes))'(recipientChain?: null, message?: null): SendTransceiverMessageEventFilter;
        SendTransceiverMessage(recipientChain?: null, message?: null): SendTransceiverMessageEventFilter;
        'SetIsSpecialRelayingEnabled(uint16,bool)'(chainId?: null, isRelayingEnabled?: null): SetIsSpecialRelayingEnabledEventFilter;
        SetIsSpecialRelayingEnabled(chainId?: null, isRelayingEnabled?: null): SetIsSpecialRelayingEnabledEventFilter;
        'SetIsWormholeEvmChain(uint16,bool)'(chainId?: null, isEvm?: null): SetIsWormholeEvmChainEventFilter;
        SetIsWormholeEvmChain(chainId?: null, isEvm?: null): SetIsWormholeEvmChainEventFilter;
        'SetIsWormholeRelayingEnabled(uint16,bool)'(chainId?: null, isRelayingEnabled?: null): SetIsWormholeRelayingEnabledEventFilter;
        SetIsWormholeRelayingEnabled(chainId?: null, isRelayingEnabled?: null): SetIsWormholeRelayingEnabledEventFilter;
        'SetWormholePeer(uint16,bytes32)'(chainId?: null, peerContract?: null): SetWormholePeerEventFilter;
        SetWormholePeer(chainId?: null, peerContract?: null): SetWormholePeerEventFilter;
        'Upgraded(address)'(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        WORMHOLE_TRANSCEIVER_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        consistencyLevel(overrides?: CallOverrides): Promise<BigNumber>;
        encodeWormholeTransceiverInstruction(instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        gasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<BigNumber>;
        getNttManagerOwner(overrides?: CallOverrides): Promise<BigNumber>;
        getNttManagerToken(overrides?: CallOverrides): Promise<BigNumber>;
        getWormholePeer(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isSpecialRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isWormholeEvmChain(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isWormholeRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        migrate(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        nttManager(overrides?: CallOverrides): Promise<BigNumber>;
        nttManagerToken(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        parseWormholeTransceiverInstruction(encoded: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        pauser(overrides?: CallOverrides): Promise<BigNumber>;
        quoteDeliveryPrice(targetChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        receiveMessage(encodedMessage: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        receiveWormholeMessages(payload: BytesLike, additionalMessages: BytesLike[], sourceAddress: BytesLike, sourceChain: BigNumberish, deliveryHash: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        sendMessage(recipientChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, nttManagerMessage: BytesLike, recipientNttManagerAddress: BytesLike, refundAddress: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        setIsSpecialRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setIsWormholeEvmChain(chainId: BigNumberish, isEvm: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setIsWormholeRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setWormholePeer(peerChainId: BigNumberish, peerContract: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        specialRelayer(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferPauserCapability(newPauser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferTransceiverOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgrade(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        wormhole(overrides?: CallOverrides): Promise<BigNumber>;
        wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        WORMHOLE_TRANSCEIVER_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        consistencyLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encodeWormholeTransceiverInstruction(instruction: IWormholeTransceiver.WormholeTransceiverInstructionStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNttManagerOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNttManagerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWormholePeer(chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSpecialRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isVAAConsumed(hash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWormholeEvmChain(chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isWormholeRelayingEnabled(chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        nttManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nttManagerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseWormholeTransceiverInstruction(encoded: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauser(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteDeliveryPrice(targetChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveMessage(encodedMessage: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        receiveWormholeMessages(payload: BytesLike, additionalMessages: BytesLike[], sourceAddress: BytesLike, sourceChain: BigNumberish, deliveryHash: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sendMessage(recipientChain: BigNumberish, instruction: TransceiverStructs.TransceiverInstructionStruct, nttManagerMessage: BytesLike, recipientNttManagerAddress: BytesLike, refundAddress: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setIsSpecialRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setIsWormholeEvmChain(chainId: BigNumberish, isEvm: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setIsWormholeRelayingEnabled(chainId: BigNumberish, isEnabled: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setWormholePeer(peerChainId: BigNumberish, peerContract: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        specialRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferPauserCapability(newPauser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferTransceiverOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgrade(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=WormholeTransceiver.d.ts.map