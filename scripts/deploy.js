const { ethers } = require("hardhat");

(async () => {
  try {
    const TokenFactory = await ethers.getContractFactory("Modulus");
    console.log("Deploying...");
    let token = await TokenFactory.deploy(
      "Modulus",
      "MOD",
      ethers.utils.parseUnits("60000000000", 18),
      "0xDCcB4aC22E5CaDd542B693DEfb41Aea5553E4749",
      6
    );
    token = await token.deployed();
    console.log(token.address);
  } catch (error) {
    console.log(error);
  }
})();
