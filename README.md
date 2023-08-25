# Badagry - First African web3 Meseum for preserving the African heritage through story telling

## Introduction

![home](./front.png)

##Deliverables : Submitted projects should have:

### 1. Project / Team name 
Badagry 

### 2. Short description about the project
Badagry - First African web3 Meseum for preserving the African heritage through story telling, As we intend to onbaord more web3 users, it is pertinent that the tourism section of Africa be considered. This project seek to bring the blockchain technology into the African tourism (meseum) Space. Users from all around the world can see some of the African heritage without leaving the shores of their country. They also buy collecetibles as proof of their visit.


### 3. Discord and Telegram username for the team’s person of contact
holyaustin#3735

### 4. Repository with project’s code 
https://github.com/holyaustin/Badagry

### 5. Video demo (90 seconds) and/or Presentation (10 slides max)
https://youtu.be/9YQon2ihLLE


### 6. The contract address(es) or website URLs of your deployed application, either on a testnet of your choice or mainnet of a platform of choice.
https://goerli.basescan.org/address/0xd547726541fb37db19fdb263f4855ba969034071



## Tech Stack Used

Client: Next.js, TailwindCSS, web3.js

web3:  Hardhat, ethers.js

BlockChain: Base Goerli Testnet

## To run the dapp Locally

### npm run dev

Deploying on Base Mainnet
When you are done with making changes and your minting dapp is just as you wanted it is time to deploy on ethereum mainnet. To do that;

Make sure you changed all env variables with yours. And also for the network you need to chose ethereum mainnet.
Update hardhat.config.js so that as network option you use mainnet not rtestnet. hardhat
While deploying your contract with hardhat you need to use mainnet as network-name

# This command will deploy your smart contract on base testnet

  npx hardhat run scripts/deploy.js --network base_testnet


https://goerli.basescan.org/address/0xd547726541fb37db19fdb263f4855ba969034071

https://youtu.be/9YQon2ihLLE