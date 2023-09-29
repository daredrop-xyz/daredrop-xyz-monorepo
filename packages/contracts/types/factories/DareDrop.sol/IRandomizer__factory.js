"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRandomizer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_client",
                type: "address",
            },
        ],
        name: "clientBalanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "deposit",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "reserved",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "client",
                type: "address",
            },
        ],
        name: "clientDeposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "clientWithdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
            },
        ],
        name: "estimateFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "request",
                type: "uint256",
            },
        ],
        name: "getFeeStats",
        outputs: [
            {
                internalType: "uint256[2]",
                name: "",
                type: "uint256[2]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "request",
                type: "uint256",
            },
        ],
        name: "getRequest",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "dataHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "ethPaid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "ethRefunded",
                type: "uint256",
            },
            {
                internalType: "bytes10[2]",
                name: "vrfHashes",
                type: "bytes10[2]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
            },
        ],
        name: "request",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IRandomizer__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRandomizer__factory = IRandomizer__factory;
IRandomizer__factory.abi = _abi;