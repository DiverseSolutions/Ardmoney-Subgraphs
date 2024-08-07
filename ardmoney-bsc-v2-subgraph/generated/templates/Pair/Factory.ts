// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class PairCreated extends ethereum.Event {
  get params(): PairCreated__Params {
    return new PairCreated__Params(this);
  }
}

export class PairCreated__Params {
  _event: PairCreated;

  constructor(event: PairCreated) {
    this._event = event;
  }

  get token0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get pair(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get param3(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  allPairs(param0: BigInt): Address {
    let result = super.call("allPairs", "allPairs(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return result[0].toAddress();
  }

  try_allPairs(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("allPairs", "allPairs(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allPairsLength(): BigInt {
    let result = super.call("allPairsLength", "allPairsLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_allPairsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allPairsLength",
      "allPairsLength():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createPair(
    tokenA: Address,
    tokenB: Address,
    swapFee: BigInt,
    mintFee: BigInt,
    admin: Address,
  ): Address {
    let result = super.call(
      "createPair",
      "createPair(address,address,uint256,uint256,address):(address)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromUnsignedBigInt(mintFee),
        ethereum.Value.fromAddress(admin),
      ],
    );

    return result[0].toAddress();
  }

  try_createPair(
    tokenA: Address,
    tokenB: Address,
    swapFee: BigInt,
    mintFee: BigInt,
    admin: Address,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createPair",
      "createPair(address,address,uint256,uint256,address):(address)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromUnsignedBigInt(mintFee),
        ethereum.Value.fromAddress(admin),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeTo(): Address {
    let result = super.call("feeTo", "feeTo():(address)", []);

    return result[0].toAddress();
  }

  try_feeTo(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeTo", "feeTo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeToSetter(): Address {
    let result = super.call("feeToSetter", "feeToSetter():(address)", []);

    return result[0].toAddress();
  }

  try_feeToSetter(): ethereum.CallResult<Address> {
    let result = super.tryCall("feeToSetter", "feeToSetter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPair(param0: Address, param1: Address): Address {
    let result = super.call("getPair", "getPair(address,address):(address)", [
      ethereum.Value.fromAddress(param0),
      ethereum.Value.fromAddress(param1),
    ]);

    return result[0].toAddress();
  }

  try_getPair(param0: Address, param1: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPair",
      "getPair(address,address):(address)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  migrator(): Address {
    let result = super.call("migrator", "migrator():(address)", []);

    return result[0].toAddress();
  }

  try_migrator(): ethereum.CallResult<Address> {
    let result = super.tryCall("migrator", "migrator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pairCodeHash(): Bytes {
    let result = super.call("pairCodeHash", "pairCodeHash():(bytes32)", []);

    return result[0].toBytes();
  }

  try_pairCodeHash(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("pairCodeHash", "pairCodeHash():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _feeToSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePairCall extends ethereum.Call {
  get inputs(): CreatePairCall__Inputs {
    return new CreatePairCall__Inputs(this);
  }

  get outputs(): CreatePairCall__Outputs {
    return new CreatePairCall__Outputs(this);
  }
}

export class CreatePairCall__Inputs {
  _call: CreatePairCall;

  constructor(call: CreatePairCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get swapFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get mintFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get admin(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class CreatePairCall__Outputs {
  _call: CreatePairCall;

  constructor(call: CreatePairCall) {
    this._call = call;
  }

  get pair(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class SetFeeToCall extends ethereum.Call {
  get inputs(): SetFeeToCall__Inputs {
    return new SetFeeToCall__Inputs(this);
  }

  get outputs(): SetFeeToCall__Outputs {
    return new SetFeeToCall__Outputs(this);
  }
}

export class SetFeeToCall__Inputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }

  get _feeTo(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToCall__Outputs {
  _call: SetFeeToCall;

  constructor(call: SetFeeToCall) {
    this._call = call;
  }
}

export class SetFeeToSetterCall extends ethereum.Call {
  get inputs(): SetFeeToSetterCall__Inputs {
    return new SetFeeToSetterCall__Inputs(this);
  }

  get outputs(): SetFeeToSetterCall__Outputs {
    return new SetFeeToSetterCall__Outputs(this);
  }
}

export class SetFeeToSetterCall__Inputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }

  get _feeToSetter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFeeToSetterCall__Outputs {
  _call: SetFeeToSetterCall;

  constructor(call: SetFeeToSetterCall) {
    this._call = call;
  }
}

export class SetMigratorCall extends ethereum.Call {
  get inputs(): SetMigratorCall__Inputs {
    return new SetMigratorCall__Inputs(this);
  }

  get outputs(): SetMigratorCall__Outputs {
    return new SetMigratorCall__Outputs(this);
  }
}

export class SetMigratorCall__Inputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }

  get _migrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMigratorCall__Outputs {
  _call: SetMigratorCall;

  constructor(call: SetMigratorCall) {
    this._call = call;
  }
}
