require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  abiExporter: {
    path: process.env.CONTRACT_ABI_PATH,
    runOnCompile: true,
    clear: true,
    flat: true,
    spacing: 2,
  },
  networks:{
    dev: {
      url: process.env.PROVIDER_URL,
    }
  },
  solidity: "0.8.9",
};
