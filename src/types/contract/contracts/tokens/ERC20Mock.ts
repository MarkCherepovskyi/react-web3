/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  AddressLike,
  BaseContract,
  BigNumberish,
  BytesLike,
  ContractMethod,
  ContractRunner,
  EventFragment,
  FunctionFragment,
  Interface,
  Listener,
  Result,
} from "ethers";
import type {
  TypedContractEvent,
  TypedContractMethod,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedLogDescription,
} from "../../common";

export interface ERC20MockInterface extends Interface {
    getFunction(
        nameOrSignature:
            | "allowance"
            | "allowance(address,address)"
            | "approve"
            | "approve(address,uint256)"
            | "balanceOf"
            | "balanceOf(address)"
            | "burn"
            | "burn(address,uint256)"
            | "decimals"
            | "decimals()"
            | "mint"
            | "mint(address,uint256)"
            | "name"
            | "name()"
            | "symbol"
            | "symbol()"
            | "totalSupply"
            | "totalSupply()"
            | "transfer"
            | "transfer(address,uint256)"
            | "transferFrom"
            | "transferFrom(address,address,uint256)"
    ): FunctionFragment;

    getEvent(
        nameOrSignatureOrTopic:
            | "Approval"
            | "Approval(address,address,uint256)"
            | "Transfer"
            | "Transfer(address,address,uint256)"
    ): EventFragment;

    encodeFunctionData(
        functionFragment: "allowance",
        values: [AddressLike, AddressLike]
    ): string;

    encodeFunctionData(
        functionFragment: "allowance(address,address)",
        values: [AddressLike, AddressLike]
    ): string;

    encodeFunctionData(
        functionFragment: "approve",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "approve(address,uint256)",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "balanceOf",
        values: [AddressLike]
    ): string;

    encodeFunctionData(
        functionFragment: "balanceOf(address)",
        values: [AddressLike]
    ): string;

    encodeFunctionData(
        functionFragment: "burn",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "burn(address,uint256)",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;

    encodeFunctionData(
        functionFragment: "decimals()",
        values?: undefined
    ): string;

    encodeFunctionData(
        functionFragment: "mint",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "mint(address,uint256)",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(functionFragment: "name", values?: undefined): string;

    encodeFunctionData(functionFragment: "name()", values?: undefined): string;

    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;

    encodeFunctionData(functionFragment: "symbol()", values?: undefined): string;

    encodeFunctionData(
        functionFragment: "totalSupply",
        values?: undefined
    ): string;

    encodeFunctionData(
        functionFragment: "totalSupply()",
        values?: undefined
    ): string;

    encodeFunctionData(
        functionFragment: "transfer",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "transfer(address,uint256)",
        values: [AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "transferFrom",
        values: [AddressLike, AddressLike, BigNumberish]
    ): string;

    encodeFunctionData(
        functionFragment: "transferFrom(address,address,uint256)",
        values: [AddressLike, AddressLike, BigNumberish]
    ): string;

    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "allowance(address,address)",
        data: BytesLike
    ): Result;

    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "approve(address,uint256)",
        data: BytesLike
    ): Result;

    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "balanceOf(address)",
        data: BytesLike
    ): Result;

    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "burn(address,uint256)",
        data: BytesLike
    ): Result;

    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;

    decodeFunctionResult(functionFragment: "decimals()", data: BytesLike): Result;

    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "mint(address,uint256)",
        data: BytesLike
    ): Result;

    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;

    decodeFunctionResult(functionFragment: "name()", data: BytesLike): Result;

    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;

    decodeFunctionResult(functionFragment: "symbol()", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "totalSupply",
        data: BytesLike
    ): Result;

    decodeFunctionResult(
        functionFragment: "totalSupply()",
        data: BytesLike
    ): Result;

    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;

    decodeFunctionResult(
        functionFragment: "transfer(address,uint256)",
        data: BytesLike
    ): Result;

    decodeFunctionResult(
        functionFragment: "transferFrom",
        data: BytesLike
    ): Result;

    decodeFunctionResult(
        functionFragment: "transferFrom(address,address,uint256)",
        data: BytesLike
    ): Result;
}

export namespace ApprovalEvent {
    export type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    export type OutputTuple = [owner: string, spender: string, value: bigint];

    export interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }

    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
    export type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    export type OutputTuple = [from: string, to: string, value: bigint];

    export interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }

    export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    export type Filter = TypedDeferredTopicFilter<Event>;
    export type Log = TypedEventLog<Event>;
    export type LogDescription = TypedLogDescription<Event>;
}

export interface ERC20Mock extends BaseContract {
    contractName: "ERC20Mock";
    interface: ERC20MockInterface;
    allowance: TypedContractMethod<
        [owner: AddressLike, spender: AddressLike],
        [bigint],
        "view"
    >;
    "allowance(address,address)": TypedContractMethod<
        [owner: AddressLike, spender: AddressLike],
        [bigint],
        "view"
    >;
    approve: TypedContractMethod<
        [spender: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;
    "approve(address,uint256)": TypedContractMethod<
        [spender: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    "balanceOf(address)": TypedContractMethod<
        [account: AddressLike],
        [bigint],
        "view"
    >;
    burn: TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;
    "burn(address,uint256)": TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;
    decimals: TypedContractMethod<[], [bigint], "view">;
    "decimals()": TypedContractMethod<[], [bigint], "view">;
    mint: TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;
    "mint(address,uint256)": TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;
    name: TypedContractMethod<[], [string], "view">;
    "name()": TypedContractMethod<[], [string], "view">;
    symbol: TypedContractMethod<[], [string], "view">;
    "symbol()": TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    "totalSupply()": TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<
        [to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;
    "transfer(address,uint256)": TypedContractMethod<
        [to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;
    transferFrom: TypedContractMethod<
        [from: AddressLike, to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;
    "transferFrom(address,address,uint256)": TypedContractMethod<
        [from: AddressLike, to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;
    filters: {
        "Approval(address,address,uint256)": TypedContractEvent<
            ApprovalEvent.InputTuple,
            ApprovalEvent.OutputTuple,
            ApprovalEvent.OutputObject
        >;
        Approval: TypedContractEvent<
            ApprovalEvent.InputTuple,
            ApprovalEvent.OutputTuple,
            ApprovalEvent.OutputObject
        >;

        "Transfer(address,address,uint256)": TypedContractEvent<
            TransferEvent.InputTuple,
            TransferEvent.OutputTuple,
            TransferEvent.OutputObject
        >;
        Transfer: TypedContractEvent<
            TransferEvent.InputTuple,
            TransferEvent.OutputTuple,
            TransferEvent.OutputObject
        >;
    };

    connect(runner?: ContractRunner | null): ERC20Mock;

    waitForDeployment(): Promise<this>;

    queryFilter<TCEvent extends TypedContractEvent>(
        event: TCEvent,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TypedEventLog<TCEvent>>>;

    queryFilter<TCEvent extends TypedContractEvent>(
        filter: TypedDeferredTopicFilter<TCEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TypedEventLog<TCEvent>>>;

    on<TCEvent extends TypedContractEvent>(
        event: TCEvent,
        listener: TypedListener<TCEvent>
    ): Promise<this>;

    on<TCEvent extends TypedContractEvent>(
        filter: TypedDeferredTopicFilter<TCEvent>,
        listener: TypedListener<TCEvent>
    ): Promise<this>;

    once<TCEvent extends TypedContractEvent>(
        event: TCEvent,
        listener: TypedListener<TCEvent>
    ): Promise<this>;

    once<TCEvent extends TypedContractEvent>(
        filter: TypedDeferredTopicFilter<TCEvent>,
        listener: TypedListener<TCEvent>
    ): Promise<this>;

    listeners<TCEvent extends TypedContractEvent>(
        event: TCEvent
    ): Promise<Array<TypedListener<TCEvent>>>;

    listeners(eventName?: string): Promise<Array<Listener>>;

    removeAllListeners<TCEvent extends TypedContractEvent>(
        event?: TCEvent
    ): Promise<this>;

    getFunction<T extends ContractMethod = ContractMethod>(
        key: string | FunctionFragment
    ): T;

    getFunction(
        nameOrSignature: "allowance"
    ): TypedContractMethod<
        [owner: AddressLike, spender: AddressLike],
        [bigint],
        "view"
    >;

    getFunction(
        nameOrSignature: "allowance(address,address)"
    ): TypedContractMethod<
        [owner: AddressLike, spender: AddressLike],
        [bigint],
        "view"
    >;

    getFunction(
        nameOrSignature: "approve"
    ): TypedContractMethod<
        [spender: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "approve(address,uint256)"
    ): TypedContractMethod<
        [spender: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "balanceOf"
    ): TypedContractMethod<[account: AddressLike], [bigint], "view">;

    getFunction(
        nameOrSignature: "balanceOf(address)"
    ): TypedContractMethod<[account: AddressLike], [bigint], "view">;

    getFunction(
        nameOrSignature: "burn"
    ): TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "burn(address,uint256)"
    ): TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "decimals"
    ): TypedContractMethod<[], [bigint], "view">;

    getFunction(
        nameOrSignature: "decimals()"
    ): TypedContractMethod<[], [bigint], "view">;

    getFunction(
        nameOrSignature: "mint"
    ): TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "mint(address,uint256)"
    ): TypedContractMethod<
        [to_: AddressLike, amount_: BigNumberish],
        [void],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "name"
    ): TypedContractMethod<[], [string], "view">;

    getFunction(
        nameOrSignature: "name()"
    ): TypedContractMethod<[], [string], "view">;

    getFunction(
        nameOrSignature: "symbol"
    ): TypedContractMethod<[], [string], "view">;

    getFunction(
        nameOrSignature: "symbol()"
    ): TypedContractMethod<[], [string], "view">;

    getFunction(
        nameOrSignature: "totalSupply"
    ): TypedContractMethod<[], [bigint], "view">;

    getFunction(
        nameOrSignature: "totalSupply()"
    ): TypedContractMethod<[], [bigint], "view">;

    getFunction(
        nameOrSignature: "transfer"
    ): TypedContractMethod<
        [to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "transfer(address,uint256)"
    ): TypedContractMethod<
        [to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "transferFrom"
    ): TypedContractMethod<
        [from: AddressLike, to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;

    getFunction(
        nameOrSignature: "transferFrom(address,address,uint256)"
    ): TypedContractMethod<
        [from: AddressLike, to: AddressLike, value: BigNumberish],
        [boolean],
        "nonpayable"
    >;

    getEvent(
        key: "Approval"
    ): TypedContractEvent<
        ApprovalEvent.InputTuple,
        ApprovalEvent.OutputTuple,
        ApprovalEvent.OutputObject
    >;

    getEvent(
        key: "Approval(address,address,uint256)"
    ): TypedContractEvent<
        Approval_address_address_uint256_Event.InputTuple,
        Approval_address_address_uint256_Event.OutputTuple,
        Approval_address_address_uint256_Event.OutputObject
    >;

    getEvent(
        key: "Transfer"
    ): TypedContractEvent<
        TransferEvent.InputTuple,
        TransferEvent.OutputTuple,
        TransferEvent.OutputObject
    >;

    getEvent(
        key: "Transfer(address,address,uint256)"
    ): TypedContractEvent<
        Transfer_address_address_uint256_Event.InputTuple,
        Transfer_address_address_uint256_Event.OutputTuple,
        Transfer_address_address_uint256_Event.OutputObject
    >;
}
