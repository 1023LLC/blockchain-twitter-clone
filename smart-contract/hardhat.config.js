require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/toU80fTdtiwHfUfnS5n7pMNr0aYpdqvo',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
