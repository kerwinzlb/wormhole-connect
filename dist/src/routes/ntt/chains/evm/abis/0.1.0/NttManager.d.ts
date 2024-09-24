import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../common';

export declare namespace TransceiverStructs {
    type NttManagerMessageStruct = {
        id: BytesLike;
        sender: BytesLike;
        payload: BytesLike;
    };
    type NttManagerMessageStructOutput = [string, string, string] & {
        id: string;
        sender: string;
        payload: string;
    };
}
export declare namespace IRateLimiter {
    type RateLimitParamsStruct = {
        limit: BigNumberish;
        currentCapacity: BigNumberish;
        lastTxTimestamp: BigNumberish;
    };
    type RateLimitParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        limit: BigNumber;
        currentCapacity: BigNumber;
        lastTxTimestamp: BigNumber;
    };
    type InboundQueuedTransferStruct = {
        amount: BigNumberish;
        txTimestamp: BigNumberish;
        recipient: string;
    };
    type InboundQueuedTransferStructOutput = [
        BigNumber,
        BigNumber,
        string
    ] & {
        amount: BigNumber;
        txTimestamp: BigNumber;
        recipient: string;
    };
    type OutboundQueuedTransferStruct = {
        recipient: BytesLike;
        refundAddress: BytesLike;
        amount: BigNumberish;
        txTimestamp: BigNumberish;
        recipientChain: BigNumberish;
        sender: string;
        transceiverInstructions: BytesLike;
    };
    type OutboundQueuedTransferStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        number,
        string,
        string
    ] & {
        recipient: string;
        refundAddress: string;
        amount: BigNumber;
        txTimestamp: BigNumber;
        recipientChain: number;
        sender: string;
        transceiverInstructions: string;
    };
}
export declare namespace INttManager {
    type NttManagerPeerStruct = {
        peerAddress: BytesLike;
        tokenDecimals: BigNumberish;
    };
    type NttManagerPeerStructOutput = [string, number] & {
        peerAddress: string;
        tokenDecimals: number;
    };
}
export interface NttManagerInterface extends utils.Interface {
    functions: {
        'NTT_MANAGER_VERSION()': FunctionFragment;
        'attestationReceived(uint16,bytes32,(bytes32,bytes32,bytes))': FunctionFragment;
        'cancelOutboundQueuedTransfer(uint64)': FunctionFragment;
        'chainId()': FunctionFragment;
        'completeInboundQueuedTransfer(bytes32)': FunctionFragment;
        'completeOutboundQueuedTransfer(uint64)': FunctionFragment;
        'executeMsg(uint16,bytes32,(bytes32,bytes32,bytes))': FunctionFragment;
        'getCurrentInboundCapacity(uint16)': FunctionFragment;
        'getCurrentOutboundCapacity()': FunctionFragment;
        'getInboundLimitParams(uint16)': FunctionFragment;
        'getInboundQueuedTransfer(bytes32)': FunctionFragment;
        'getMigratesImmutables()': FunctionFragment;
        'getMode()': FunctionFragment;
        'getOutboundLimitParams()': FunctionFragment;
        'getOutboundQueuedTransfer(uint64)': FunctionFragment;
        'getPeer(uint16)': FunctionFragment;
        'getThreshold()': FunctionFragment;
        'getTransceivers()': FunctionFragment;
        'initialize()': FunctionFragment;
        'isMessageApproved(bytes32)': FunctionFragment;
        'isMessageExecuted(bytes32)': FunctionFragment;
        'isPaused()': FunctionFragment;
        'messageAttestations(bytes32)': FunctionFragment;
        'migrate()': FunctionFragment;
        'mode()': FunctionFragment;
        'nextMessageSequence()': FunctionFragment;
        'owner()': FunctionFragment;
        'pause()': FunctionFragment;
        'pauser()': FunctionFragment;
        'quoteDeliveryPrice(uint16,bytes)': FunctionFragment;
        'rateLimitDuration()': FunctionFragment;
        'removeTransceiver(address)': FunctionFragment;
        'setInboundLimit(uint256,uint16)': FunctionFragment;
        'setOutboundLimit(uint256)': FunctionFragment;
        'setPeer(uint16,bytes32,uint8,uint256)': FunctionFragment;
        'setThreshold(uint8)': FunctionFragment;
        'setTransceiver(address)': FunctionFragment;
        'token()': FunctionFragment;
        'tokenDecimals()': FunctionFragment;
        'transceiverAttestedToMessage(bytes32,uint8)': FunctionFragment;
        'transfer(uint256,uint16,bytes32)': FunctionFragment;
        'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)': FunctionFragment;
        'transferOwnership(address)': FunctionFragment;
        'transferPauserCapability(address)': FunctionFragment;
        'unpause()': FunctionFragment;
        'upgrade(address)': FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: 'NTT_MANAGER_VERSION' | 'attestationReceived' | 'cancelOutboundQueuedTransfer' | 'chainId' | 'completeInboundQueuedTransfer' | 'completeOutboundQueuedTransfer' | 'executeMsg' | 'getCurrentInboundCapacity' | 'getCurrentOutboundCapacity' | 'getInboundLimitParams' | 'getInboundQueuedTransfer' | 'getMigratesImmutables' | 'getMode' | 'getOutboundLimitParams' | 'getOutboundQueuedTransfer' | 'getPeer' | 'getThreshold' | 'getTransceivers' | 'initialize' | 'isMessageApproved' | 'isMessageExecuted' | 'isPaused' | 'messageAttestations' | 'migrate' | 'mode' | 'nextMessageSequence' | 'owner' | 'pause' | 'pauser' | 'quoteDeliveryPrice' | 'rateLimitDuration' | 'removeTransceiver' | 'setInboundLimit' | 'setOutboundLimit' | 'setPeer' | 'setThreshold' | 'setTransceiver' | 'token' | 'tokenDecimals' | 'transceiverAttestedToMessage' | 'transfer(uint256,uint16,bytes32)' | 'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)' | 'transferOwnership' | 'transferPauserCapability' | 'unpause' | 'upgrade'): FunctionFragment;
    encodeFunctionData(functionFragment: 'NTT_MANAGER_VERSION', values?: undefined): string;
    encodeFunctionData(functionFragment: 'attestationReceived', values: [
        BigNumberish,
        BytesLike,
        TransceiverStructs.NttManagerMessageStruct
    ]): string;
    encodeFunctionData(functionFragment: 'cancelOutboundQueuedTransfer', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'chainId', values?: undefined): string;
    encodeFunctionData(functionFragment: 'completeInboundQueuedTransfer', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'completeOutboundQueuedTransfer', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'executeMsg', values: [
        BigNumberish,
        BytesLike,
        TransceiverStructs.NttManagerMessageStruct
    ]): string;
    encodeFunctionData(functionFragment: 'getCurrentInboundCapacity', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getCurrentOutboundCapacity', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getInboundLimitParams', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getInboundQueuedTransfer', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getMigratesImmutables', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getMode', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getOutboundLimitParams', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getOutboundQueuedTransfer', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getPeer', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getThreshold', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getTransceivers', values?: undefined): string;
    encodeFunctionData(functionFragment: 'initialize', values?: undefined): string;
    encodeFunctionData(functionFragment: 'isMessageApproved', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'isMessageExecuted', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'isPaused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'messageAttestations', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'migrate', values?: undefined): string;
    encodeFunctionData(functionFragment: 'mode', values?: undefined): string;
    encodeFunctionData(functionFragment: 'nextMessageSequence', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
    encodeFunctionData(functionFragment: 'pauser', values?: undefined): string;
    encodeFunctionData(functionFragment: 'quoteDeliveryPrice', values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'rateLimitDuration', values?: undefined): string;
    encodeFunctionData(functionFragment: 'removeTransceiver', values: [string]): string;
    encodeFunctionData(functionFragment: 'setInboundLimit', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setOutboundLimit', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setPeer', values: [BigNumberish, BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setThreshold', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'setTransceiver', values: [string]): string;
    encodeFunctionData(functionFragment: 'token', values?: undefined): string;
    encodeFunctionData(functionFragment: 'tokenDecimals', values?: undefined): string;
    encodeFunctionData(functionFragment: 'transceiverAttestedToMessage', values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'transfer(uint256,uint16,bytes32)', values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: 'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)', values: [
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike,
        boolean,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
    encodeFunctionData(functionFragment: 'transferPauserCapability', values: [string]): string;
    encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
    encodeFunctionData(functionFragment: 'upgrade', values: [string]): string;
    decodeFunctionResult(functionFragment: 'NTT_MANAGER_VERSION', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'attestationReceived', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'cancelOutboundQueuedTransfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'chainId', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'completeInboundQueuedTransfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'completeOutboundQueuedTransfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'executeMsg', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCurrentInboundCapacity', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getCurrentOutboundCapacity', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getInboundLimitParams', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getInboundQueuedTransfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMigratesImmutables', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getMode', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getOutboundLimitParams', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getOutboundQueuedTransfer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getPeer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getThreshold', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getTransceivers', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isMessageApproved', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isMessageExecuted', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isPaused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'messageAttestations', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'migrate', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'mode', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'nextMessageSequence', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'pauser', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'quoteDeliveryPrice', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rateLimitDuration', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'removeTransceiver', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setInboundLimit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setOutboundLimit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setPeer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setThreshold', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'setTransceiver', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'tokenDecimals', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transceiverAttestedToMessage', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transfer(uint256,uint16,bytes32)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'transferPauserCapability', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'upgrade', data: BytesLike): Result;
    events: {
        'AdminChanged(address,address)': EventFragment;
        'BeaconUpgraded(address)': EventFragment;
        'InboundTransferQueued(bytes32)': EventFragment;
        'Initialized(uint64)': EventFragment;
        'MessageAlreadyExecuted(bytes32,bytes32)': EventFragment;
        'MessageAttestedTo(bytes32,address,uint8)': EventFragment;
        'NotPaused(bool)': EventFragment;
        'OutboundTransferCancelled(uint256,address,uint256)': EventFragment;
        'OutboundTransferQueued(uint64)': EventFragment;
        'OutboundTransferRateLimited(address,uint64,uint256,uint256)': EventFragment;
        'OwnershipTransferred(address,address)': EventFragment;
        'Paused(bool)': EventFragment;
        'PauserTransferred(address,address)': EventFragment;
        'PeerUpdated(uint16,bytes32,uint8,bytes32,uint8)': EventFragment;
        'ThresholdChanged(uint8,uint8)': EventFragment;
        'TransceiverAdded(address,uint256,uint8)': EventFragment;
        'TransceiverRemoved(address,uint8)': EventFragment;
        'TransferRedeemed(bytes32)': EventFragment;
        'TransferSent(bytes32,bytes32,uint256,uint256,uint16,uint64)': EventFragment;
        'Upgraded(address)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'InboundTransferQueued'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'MessageAlreadyExecuted'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'MessageAttestedTo'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'NotPaused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OutboundTransferCancelled'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OutboundTransferQueued'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OutboundTransferRateLimited'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PauserTransferred'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'PeerUpdated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'ThresholdChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransceiverAdded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransceiverRemoved'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransferRedeemed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'TransferSent'): EventFragment;
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
export interface InboundTransferQueuedEventObject {
    digest: string;
}
export type InboundTransferQueuedEvent = TypedEvent<[
    string
], InboundTransferQueuedEventObject>;
export type InboundTransferQueuedEventFilter = TypedEventFilter<InboundTransferQueuedEvent>;
export interface InitializedEventObject {
    version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MessageAlreadyExecutedEventObject {
    sourceNttManager: string;
    msgHash: string;
}
export type MessageAlreadyExecutedEvent = TypedEvent<[
    string,
    string
], MessageAlreadyExecutedEventObject>;
export type MessageAlreadyExecutedEventFilter = TypedEventFilter<MessageAlreadyExecutedEvent>;
export interface MessageAttestedToEventObject {
    digest: string;
    transceiver: string;
    index: number;
}
export type MessageAttestedToEvent = TypedEvent<[
    string,
    string,
    number
], MessageAttestedToEventObject>;
export type MessageAttestedToEventFilter = TypedEventFilter<MessageAttestedToEvent>;
export interface NotPausedEventObject {
    notPaused: boolean;
}
export type NotPausedEvent = TypedEvent<[boolean], NotPausedEventObject>;
export type NotPausedEventFilter = TypedEventFilter<NotPausedEvent>;
export interface OutboundTransferCancelledEventObject {
    sequence: BigNumber;
    recipient: string;
    amount: BigNumber;
}
export type OutboundTransferCancelledEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], OutboundTransferCancelledEventObject>;
export type OutboundTransferCancelledEventFilter = TypedEventFilter<OutboundTransferCancelledEvent>;
export interface OutboundTransferQueuedEventObject {
    queueSequence: BigNumber;
}
export type OutboundTransferQueuedEvent = TypedEvent<[
    BigNumber
], OutboundTransferQueuedEventObject>;
export type OutboundTransferQueuedEventFilter = TypedEventFilter<OutboundTransferQueuedEvent>;
export interface OutboundTransferRateLimitedEventObject {
    sender: string;
    sequence: BigNumber;
    amount: BigNumber;
    currentCapacity: BigNumber;
}
export type OutboundTransferRateLimitedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], OutboundTransferRateLimitedEventObject>;
export type OutboundTransferRateLimitedEventFilter = TypedEventFilter<OutboundTransferRateLimitedEvent>;
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
export interface PeerUpdatedEventObject {
    chainId_: number;
    oldPeerContract: string;
    oldPeerDecimals: number;
    peerContract: string;
    peerDecimals: number;
}
export type PeerUpdatedEvent = TypedEvent<[
    number,
    string,
    number,
    string,
    number
], PeerUpdatedEventObject>;
export type PeerUpdatedEventFilter = TypedEventFilter<PeerUpdatedEvent>;
export interface ThresholdChangedEventObject {
    oldThreshold: number;
    threshold: number;
}
export type ThresholdChangedEvent = TypedEvent<[
    number,
    number
], ThresholdChangedEventObject>;
export type ThresholdChangedEventFilter = TypedEventFilter<ThresholdChangedEvent>;
export interface TransceiverAddedEventObject {
    transceiver: string;
    transceiversNum: BigNumber;
    threshold: number;
}
export type TransceiverAddedEvent = TypedEvent<[
    string,
    BigNumber,
    number
], TransceiverAddedEventObject>;
export type TransceiverAddedEventFilter = TypedEventFilter<TransceiverAddedEvent>;
export interface TransceiverRemovedEventObject {
    transceiver: string;
    threshold: number;
}
export type TransceiverRemovedEvent = TypedEvent<[
    string,
    number
], TransceiverRemovedEventObject>;
export type TransceiverRemovedEventFilter = TypedEventFilter<TransceiverRemovedEvent>;
export interface TransferRedeemedEventObject {
    digest: string;
}
export type TransferRedeemedEvent = TypedEvent<[
    string
], TransferRedeemedEventObject>;
export type TransferRedeemedEventFilter = TypedEventFilter<TransferRedeemedEvent>;
export interface TransferSentEventObject {
    recipient: string;
    refundAddress: string;
    amount: BigNumber;
    fee: BigNumber;
    recipientChain: number;
    msgSequence: BigNumber;
}
export type TransferSentEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber
], TransferSentEventObject>;
export type TransferSentEventFilter = TypedEventFilter<TransferSentEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface NttManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NttManagerInterface;
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
        NTT_MANAGER_VERSION(overrides?: CallOverrides): Promise<[string]>;
        attestationReceived(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, payload: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cancelOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        chainId(overrides?: CallOverrides): Promise<[number]>;
        completeInboundQueuedTransfer(digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        completeOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeMsg(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, message: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getCurrentInboundCapacity(chainId_: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentOutboundCapacity(overrides?: CallOverrides): Promise<[BigNumber]>;
        getInboundLimitParams(chainId_: BigNumberish, overrides?: CallOverrides): Promise<[IRateLimiter.RateLimitParamsStructOutput]>;
        getInboundQueuedTransfer(digest: BytesLike, overrides?: CallOverrides): Promise<[IRateLimiter.InboundQueuedTransferStructOutput]>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<[boolean]>;
        getMode(overrides?: CallOverrides): Promise<[number]>;
        getOutboundLimitParams(overrides?: CallOverrides): Promise<[IRateLimiter.RateLimitParamsStructOutput]>;
        getOutboundQueuedTransfer(queueSequence: BigNumberish, overrides?: CallOverrides): Promise<[IRateLimiter.OutboundQueuedTransferStructOutput]>;
        getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<[INttManager.NttManagerPeerStructOutput]>;
        getThreshold(overrides?: CallOverrides): Promise<[number]>;
        getTransceivers(overrides?: CallOverrides): Promise<[string[]] & {
            result: string[];
        }>;
        initialize(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isMessageApproved(digest: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isMessageExecuted(digest: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        messageAttestations(digest: BytesLike, overrides?: CallOverrides): Promise<[number] & {
            count: number;
        }>;
        migrate(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mode(overrides?: CallOverrides): Promise<[number]>;
        nextMessageSequence(overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauser(overrides?: CallOverrides): Promise<[string]>;
        quoteDeliveryPrice(recipientChain: BigNumberish, transceiverInstructions: BytesLike, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber]>;
        rateLimitDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeTransceiver(transceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setInboundLimit(limit: BigNumberish, chainId_: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setOutboundLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPeer(peerChainId: BigNumberish, peerContract: BytesLike, decimals: BigNumberish, inboundLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setThreshold(threshold: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setTransceiver(transceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        tokenDecimals(overrides?: CallOverrides): Promise<[number]>;
        transceiverAttestedToMessage(digest: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        'transfer(uint256,uint16,bytes32)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, refundAddress: BytesLike, shouldQueue: boolean, transceiverInstructions: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferPauserCapability(newPauser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgrade(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    NTT_MANAGER_VERSION(overrides?: CallOverrides): Promise<string>;
    attestationReceived(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, payload: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cancelOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    chainId(overrides?: CallOverrides): Promise<number>;
    completeInboundQueuedTransfer(digest: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    completeOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeMsg(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, message: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getCurrentInboundCapacity(chainId_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentOutboundCapacity(overrides?: CallOverrides): Promise<BigNumber>;
    getInboundLimitParams(chainId_: BigNumberish, overrides?: CallOverrides): Promise<IRateLimiter.RateLimitParamsStructOutput>;
    getInboundQueuedTransfer(digest: BytesLike, overrides?: CallOverrides): Promise<IRateLimiter.InboundQueuedTransferStructOutput>;
    getMigratesImmutables(overrides?: CallOverrides): Promise<boolean>;
    getMode(overrides?: CallOverrides): Promise<number>;
    getOutboundLimitParams(overrides?: CallOverrides): Promise<IRateLimiter.RateLimitParamsStructOutput>;
    getOutboundQueuedTransfer(queueSequence: BigNumberish, overrides?: CallOverrides): Promise<IRateLimiter.OutboundQueuedTransferStructOutput>;
    getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<INttManager.NttManagerPeerStructOutput>;
    getThreshold(overrides?: CallOverrides): Promise<number>;
    getTransceivers(overrides?: CallOverrides): Promise<string[]>;
    initialize(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isMessageApproved(digest: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isMessageExecuted(digest: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    messageAttestations(digest: BytesLike, overrides?: CallOverrides): Promise<number>;
    migrate(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mode(overrides?: CallOverrides): Promise<number>;
    nextMessageSequence(overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauser(overrides?: CallOverrides): Promise<string>;
    quoteDeliveryPrice(recipientChain: BigNumberish, transceiverInstructions: BytesLike, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber]>;
    rateLimitDuration(overrides?: CallOverrides): Promise<BigNumber>;
    removeTransceiver(transceiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setInboundLimit(limit: BigNumberish, chainId_: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setOutboundLimit(limit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPeer(peerChainId: BigNumberish, peerContract: BytesLike, decimals: BigNumberish, inboundLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setThreshold(threshold: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setTransceiver(transceiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    tokenDecimals(overrides?: CallOverrides): Promise<number>;
    transceiverAttestedToMessage(digest: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    'transfer(uint256,uint16,bytes32)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, refundAddress: BytesLike, shouldQueue: boolean, transceiverInstructions: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferPauserCapability(newPauser: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgrade(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        NTT_MANAGER_VERSION(overrides?: CallOverrides): Promise<string>;
        attestationReceived(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, payload: TransceiverStructs.NttManagerMessageStruct, overrides?: CallOverrides): Promise<void>;
        cancelOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: CallOverrides): Promise<void>;
        chainId(overrides?: CallOverrides): Promise<number>;
        completeInboundQueuedTransfer(digest: BytesLike, overrides?: CallOverrides): Promise<void>;
        completeOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        executeMsg(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, message: TransceiverStructs.NttManagerMessageStruct, overrides?: CallOverrides): Promise<void>;
        getCurrentInboundCapacity(chainId_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentOutboundCapacity(overrides?: CallOverrides): Promise<BigNumber>;
        getInboundLimitParams(chainId_: BigNumberish, overrides?: CallOverrides): Promise<IRateLimiter.RateLimitParamsStructOutput>;
        getInboundQueuedTransfer(digest: BytesLike, overrides?: CallOverrides): Promise<IRateLimiter.InboundQueuedTransferStructOutput>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<boolean>;
        getMode(overrides?: CallOverrides): Promise<number>;
        getOutboundLimitParams(overrides?: CallOverrides): Promise<IRateLimiter.RateLimitParamsStructOutput>;
        getOutboundQueuedTransfer(queueSequence: BigNumberish, overrides?: CallOverrides): Promise<IRateLimiter.OutboundQueuedTransferStructOutput>;
        getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<INttManager.NttManagerPeerStructOutput>;
        getThreshold(overrides?: CallOverrides): Promise<number>;
        getTransceivers(overrides?: CallOverrides): Promise<string[]>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isMessageApproved(digest: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isMessageExecuted(digest: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        messageAttestations(digest: BytesLike, overrides?: CallOverrides): Promise<number>;
        migrate(overrides?: CallOverrides): Promise<void>;
        mode(overrides?: CallOverrides): Promise<number>;
        nextMessageSequence(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        pauser(overrides?: CallOverrides): Promise<string>;
        quoteDeliveryPrice(recipientChain: BigNumberish, transceiverInstructions: BytesLike, overrides?: CallOverrides): Promise<[BigNumber[], BigNumber]>;
        rateLimitDuration(overrides?: CallOverrides): Promise<BigNumber>;
        removeTransceiver(transceiver: string, overrides?: CallOverrides): Promise<void>;
        setInboundLimit(limit: BigNumberish, chainId_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOutboundLimit(limit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPeer(peerChainId: BigNumberish, peerContract: BytesLike, decimals: BigNumberish, inboundLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setThreshold(threshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTransceiver(transceiver: string, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        tokenDecimals(overrides?: CallOverrides): Promise<number>;
        transceiverAttestedToMessage(digest: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        'transfer(uint256,uint16,bytes32)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, refundAddress: BytesLike, shouldQueue: boolean, transceiverInstructions: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        transferPauserCapability(newPauser: string, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        upgrade(newImplementation: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        'BeaconUpgraded(address)'(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        'InboundTransferQueued(bytes32)'(digest?: null): InboundTransferQueuedEventFilter;
        InboundTransferQueued(digest?: null): InboundTransferQueuedEventFilter;
        'Initialized(uint64)'(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        'MessageAlreadyExecuted(bytes32,bytes32)'(sourceNttManager?: BytesLike | null, msgHash?: BytesLike | null): MessageAlreadyExecutedEventFilter;
        MessageAlreadyExecuted(sourceNttManager?: BytesLike | null, msgHash?: BytesLike | null): MessageAlreadyExecutedEventFilter;
        'MessageAttestedTo(bytes32,address,uint8)'(digest?: null, transceiver?: null, index?: null): MessageAttestedToEventFilter;
        MessageAttestedTo(digest?: null, transceiver?: null, index?: null): MessageAttestedToEventFilter;
        'NotPaused(bool)'(notPaused?: null): NotPausedEventFilter;
        NotPaused(notPaused?: null): NotPausedEventFilter;
        'OutboundTransferCancelled(uint256,address,uint256)'(sequence?: null, recipient?: null, amount?: null): OutboundTransferCancelledEventFilter;
        OutboundTransferCancelled(sequence?: null, recipient?: null, amount?: null): OutboundTransferCancelledEventFilter;
        'OutboundTransferQueued(uint64)'(queueSequence?: null): OutboundTransferQueuedEventFilter;
        OutboundTransferQueued(queueSequence?: null): OutboundTransferQueuedEventFilter;
        'OutboundTransferRateLimited(address,uint64,uint256,uint256)'(sender?: string | null, sequence?: null, amount?: null, currentCapacity?: null): OutboundTransferRateLimitedEventFilter;
        OutboundTransferRateLimited(sender?: string | null, sequence?: null, amount?: null, currentCapacity?: null): OutboundTransferRateLimitedEventFilter;
        'OwnershipTransferred(address,address)'(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        'Paused(bool)'(paused?: null): PausedEventFilter;
        Paused(paused?: null): PausedEventFilter;
        'PauserTransferred(address,address)'(oldPauser?: string | null, newPauser?: string | null): PauserTransferredEventFilter;
        PauserTransferred(oldPauser?: string | null, newPauser?: string | null): PauserTransferredEventFilter;
        'PeerUpdated(uint16,bytes32,uint8,bytes32,uint8)'(chainId_?: BigNumberish | null, oldPeerContract?: null, oldPeerDecimals?: null, peerContract?: null, peerDecimals?: null): PeerUpdatedEventFilter;
        PeerUpdated(chainId_?: BigNumberish | null, oldPeerContract?: null, oldPeerDecimals?: null, peerContract?: null, peerDecimals?: null): PeerUpdatedEventFilter;
        'ThresholdChanged(uint8,uint8)'(oldThreshold?: null, threshold?: null): ThresholdChangedEventFilter;
        ThresholdChanged(oldThreshold?: null, threshold?: null): ThresholdChangedEventFilter;
        'TransceiverAdded(address,uint256,uint8)'(transceiver?: null, transceiversNum?: null, threshold?: null): TransceiverAddedEventFilter;
        TransceiverAdded(transceiver?: null, transceiversNum?: null, threshold?: null): TransceiverAddedEventFilter;
        'TransceiverRemoved(address,uint8)'(transceiver?: null, threshold?: null): TransceiverRemovedEventFilter;
        TransceiverRemoved(transceiver?: null, threshold?: null): TransceiverRemovedEventFilter;
        'TransferRedeemed(bytes32)'(digest?: BytesLike | null): TransferRedeemedEventFilter;
        TransferRedeemed(digest?: BytesLike | null): TransferRedeemedEventFilter;
        'TransferSent(bytes32,bytes32,uint256,uint256,uint16,uint64)'(recipient?: null, refundAddress?: null, amount?: null, fee?: null, recipientChain?: null, msgSequence?: null): TransferSentEventFilter;
        TransferSent(recipient?: null, refundAddress?: null, amount?: null, fee?: null, recipientChain?: null, msgSequence?: null): TransferSentEventFilter;
        'Upgraded(address)'(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        NTT_MANAGER_VERSION(overrides?: CallOverrides): Promise<BigNumber>;
        attestationReceived(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, payload: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cancelOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        completeInboundQueuedTransfer(digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        completeOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeMsg(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, message: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getCurrentInboundCapacity(chainId_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentOutboundCapacity(overrides?: CallOverrides): Promise<BigNumber>;
        getInboundLimitParams(chainId_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getInboundQueuedTransfer(digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<BigNumber>;
        getMode(overrides?: CallOverrides): Promise<BigNumber>;
        getOutboundLimitParams(overrides?: CallOverrides): Promise<BigNumber>;
        getOutboundQueuedTransfer(queueSequence: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        getTransceivers(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isMessageApproved(digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isMessageExecuted(digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        messageAttestations(digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        migrate(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mode(overrides?: CallOverrides): Promise<BigNumber>;
        nextMessageSequence(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauser(overrides?: CallOverrides): Promise<BigNumber>;
        quoteDeliveryPrice(recipientChain: BigNumberish, transceiverInstructions: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        rateLimitDuration(overrides?: CallOverrides): Promise<BigNumber>;
        removeTransceiver(transceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setInboundLimit(limit: BigNumberish, chainId_: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setOutboundLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPeer(peerChainId: BigNumberish, peerContract: BytesLike, decimals: BigNumberish, inboundLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setThreshold(threshold: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setTransceiver(transceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        tokenDecimals(overrides?: CallOverrides): Promise<BigNumber>;
        transceiverAttestedToMessage(digest: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        'transfer(uint256,uint16,bytes32)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, refundAddress: BytesLike, shouldQueue: boolean, transceiverInstructions: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferPauserCapability(newPauser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgrade(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        NTT_MANAGER_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        attestationReceived(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, payload: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cancelOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        completeInboundQueuedTransfer(digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        completeOutboundQueuedTransfer(messageSequence: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeMsg(sourceChainId: BigNumberish, sourceNttManagerAddress: BytesLike, message: TransceiverStructs.NttManagerMessageStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getCurrentInboundCapacity(chainId_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentOutboundCapacity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInboundLimitParams(chainId_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInboundQueuedTransfer(digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMigratesImmutables(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOutboundLimitParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOutboundQueuedTransfer(queueSequence: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPeer(chainId_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTransceivers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isMessageApproved(digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMessageExecuted(digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messageAttestations(digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrate(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextMessageSequence(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauser(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteDeliveryPrice(recipientChain: BigNumberish, transceiverInstructions: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rateLimitDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeTransceiver(transceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setInboundLimit(limit: BigNumberish, chainId_: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setOutboundLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPeer(peerChainId: BigNumberish, peerContract: BytesLike, decimals: BigNumberish, inboundLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setThreshold(threshold: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setTransceiver(transceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transceiverAttestedToMessage(digest: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        'transfer(uint256,uint16,bytes32)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        'transfer(uint256,uint16,bytes32,bytes32,bool,bytes)'(amount: BigNumberish, recipientChain: BigNumberish, recipient: BytesLike, refundAddress: BytesLike, shouldQueue: boolean, transceiverInstructions: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferPauserCapability(newPauser: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgrade(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=NttManager.d.ts.map