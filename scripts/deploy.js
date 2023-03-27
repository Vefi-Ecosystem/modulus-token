const { ethers } = require("hardhat");

(async () => {
  try {
    const TokenFactory = await ethers.getContractFactory("BriseShippuden");
    console.log("Deploying...");
    let token = await TokenFactory.deploy(
      "Brise Shippuden",
      "BRISE-DEN",
      ethers.utils.parseUnits("4000000000000", 18),
      "0xDCcB4aC22E5CaDd542B693DEfb41Aea5553E4749",
      8
    );
    token = await token.deployed();
    console.log(token.address);
  } catch (error) {
    console.log(error);
  }
})();
