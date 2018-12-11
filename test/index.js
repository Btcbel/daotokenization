const context = require('../context.json')

const tokenContract = artifacts.require('./Token.sol')

contract("Contracts", function(accounts) {
  let token

  before(async () => {
    token = await tokenContract.deployed()
  })

  describe('Token', function() {
    it('should have correct name', async () => {
      assert.equal(await token.name(), context.tokenName)
    })

    it('should have correct symbol', async () => {
      assert.equal(await token.symbol(), context.tokenSymbol)
    })

    it('should have correct decimals', async () => {
      assert.equal(await token.decimals(), context.tokenDecimals)
    })
  })
})
