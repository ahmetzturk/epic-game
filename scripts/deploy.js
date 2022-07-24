// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const gameContractFactory  = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tyler", "Nietzsche", "Tony"],       // Names
    ["QmbRrKmfcfrNJspJkZRFCErNxbGGtHV8GSFudHXWMMZoi5", // Images
    "QmUQnAwaLDmNDMrATEMSPcWmknjfciY9h3phT9CQCBP5Rw", 
    "QmZb6H8REMvoYHXBXFyqQgEjhzsJZagn73hJkBgQ9q5UPC"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],                       // Attack damage values
    "Elon Musk", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

  await gameContract.deployed();

  console.log("Contract deployed to:", gameContract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
