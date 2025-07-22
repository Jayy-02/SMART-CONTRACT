// const hre = require("hardhat");

// async function main() {
//   const Storage = await hre.ethers.getContractFactory("Storage");
//   const storage = await Storage.deploy();

//   await storage.deployed();

//   console.log("Storage contract deployed to:", storage.address);

//   console.log("call retrieve():", await storage.retrieve());

//   console.log("call store(), set value to 100");
//   const tx = await storage.store(100);
//   await tx.wait();

//   console.log("call retrieve() again:", await storage.retrieve());
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


import { ethers } from "hardhat";

async function deploy() {
  const storage = await ethers.deployContract("Storage");

  await storage.waitForDeployment();

  console.log("Storage deployed to:", storage.target);
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});