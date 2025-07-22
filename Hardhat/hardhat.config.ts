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
      url: "https://scan.test2.btcs.network/9687468750214c578e7f4992a5870c16",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 1114,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,

    customChains: [
      {
        network: "CoreDAO",
        chainId: 1114,
        urls: {
          apiURL:
            "https://scan.test2.btcs.network/9687468750214c578e7f4992a5870c16",
          browserURL: "https://scan.test2.btcs.network",
        },
      },
    ],
  },
};
export default config;
