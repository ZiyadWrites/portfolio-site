---
sidebar_position: 3
--- 

# Why Your Smart Contract Functions Aren't Visible on Etherscan
## The Problem
When a smart contract is deployed to the Ethereum blockchain (including test networks like Sepolia), you might notice that the contract's functions (read and write methods) aren't visible or interactive on Etherscan. This can make it difficult to test or demonstrate your contract's functionality.
Why This Happens
This happens because your contract is unverified. When you deploy a contract, only its bytecode is stored on the blockchain. Etherscan doesn't automatically know what functions this bytecode represents https://aiblock.ch/  or how to interact with them.

## What is Contract Verification?
Verification is the process of uploading your contract's source code to Etherscan and proving it matches the deployed bytecode. This allows Etherscan to:
Show your contract's source code
Generate a user interface for interacting with your contract (The read and write tabs)
Display your contract's functions in a human-readable way


## What is an ABI file?
ABI (Application Binary Interface) is a JSON representation of your contract's functions and structure. It's essentially a "manual" that tells applications:
What functions exist in your contract
What parameters they accept
What data types they return
Without the ABI, neither Etherscan nor any other application can understand how to interact with your contract.

## How to Fix This Issue
### To Verify Your Contract on Etherscan:
1. Go to the contract address page on Sepolia Etherscan
2. Click on the "Contract" tab
3. Select "Verify and Publish"
4. Fill in the required information:
- Contract address (check transaction hash in the blockchain explorer)
- Compiler version (look at the compiler version in the "Solidity Compiler" tab)
- Open-source license type (check the top of the source code file)
// SPDX-License-Identifier: UNLICENSED
- Flattened source code or multiple files
5. Click "Verify and Publish"
Once verified, the "Read Contract" and "Write Contract" tabs will appear, allowing direct interaction with your contract through the block explorer interface.

### Alternative: If You Can't Verify  
If verification isn't possible, you can still interact with your contract using:
The ABI and a tool like Remix
- A frontend application that includes the ABI
- Directly through a Web3 library with the ABI

## How to Flatten Your Source Code
### To Flatten Your Source Code in Remix:
1. In Remix, go to the ‘File Explorer’ panel.
2. Right-click on your main contract file.
3. Select “Flatten” from the context menu.

Remix will generate a new flattened file with all dependencies.

## Summary
The contract functions weren't visible because:
- The contract was not verified on Etherscan
- Without verification, the ABI isn't publicly available
- Without the ABI, Etherscan can't generate the interface for your contract functions

