import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const { PRIVATE_KEY, ETHERSCAN_KEY, SEPOLIA_URL, COREDAO_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    Sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 11155111,
    },
    CoreDAO: {
      gasPrice: 1000000000,
      gas: 2100000,
      minGasPrice: 1000000000,
      // maxFeePerGas: 100000000000,
      url: COREDAO_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1114,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
export default config;
