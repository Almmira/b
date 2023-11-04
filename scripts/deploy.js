const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  //deploying your smart contract
  await chai.waitForDeployment();
  console.log("Deployed contract address:", `${chai.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Deployed contract address: 0x9D369b1b1f6056513fDA89Fa68626a7882684074
