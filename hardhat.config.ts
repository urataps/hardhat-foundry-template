import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  paths: {
    sources: "src",
    tests: "test/hardhat",
  },
  solidity: "0.8.24",
};

export default config;
