const Token = artifacts.require("Token")

const context = require("../context_dao.json")

let tokenInstance;

module.exports = function(deployer, network, accounts) {
  const totalSupply = context.totalSupply * 10**context.tokenDecimals

  deployer.then(function() {
    return Token.at('0x2240a314a2F99f48a6B0c36a8782d53Ad2B6891F')
  }).then(function (instance) {
    tokenInstance = instance
  }).then(function() {
    return tokenInstance.mint(context.wallet, totalSupply)
  }).then(function() {
    console.log('Congratulations!')
  })
}
