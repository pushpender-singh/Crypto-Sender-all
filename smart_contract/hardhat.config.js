require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/-C8uWkCIrxFmwZS1-JfmZfSdOE5-ZkjB',
      accounts: [
        '8f33a26bb838791a658892c4f44fdc6ca9a7da579bacf289b34de565304b47fb',
      ],
    },
  },
}