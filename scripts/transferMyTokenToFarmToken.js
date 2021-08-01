const OOSF = artifacts.require("OOSF")
const FarmTokenOne = artifacts.require("FarmTokenOne")

module.exports = async function (callback) {
  const accounts = await new web3.eth.getAccounts()
  const myToken = await OOSF.deployed()
  const farmToken = await FarmTokenOne.deployed()

  // Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom.
  // This is zero by default.
  const allowanceBefore = await myToken.allowance(
    accounts[0],
    farmToken.address
  )
  console.log(
    "Amount of OOSF FarmTokenOne is allowed to transfer on our behalf Before: " +
      allowanceBefore.toString()
  )

  // In order to allow the Smart Contract to transfer to OOSF (ERC-20) on the accounts[0] behalf,
  // we must explicitly allow it.
  // We allow farmToken to transfer x amount of OOSF on our behalf
  await myToken.approve(farmToken.address, web3.utils.toWei("100", "ether"))

  // Validate that the farmToken can now move x amount of OOSF on our behalf
  const allowanceAfter = await myToken.allowance(accounts[0], farmToken.address)
  console.log(
    "Amount of OOSF FarmTokenOne is allowed to transfer on our behalf After: " +
      allowanceAfter.toString()
  )

  // Verify accounts[0] and farmToken balance of OOSF before and after the transfer
  balanceOOSFBeforeAccounts0 = await myToken.balanceOf(accounts[0])
  balanceOOSFBeforeFarmTokenOne = await myToken.balanceOf(farmToken.address)
  console.log("*** My Token ***")
  console.log(
    "Balance OOSF Before accounts[0] " +
      web3.utils.fromWei(balanceOOSFBeforeAccounts0.toString())
  )
  console.log(
    "Balance OOSF Before TokenFarm " +
      web3.utils.fromWei(balanceOOSFBeforeFarmTokenOne.toString())
  )

  console.log("*** Farm Token ***")
  balanceFarmTokenOneBeforeAccounts0 = await farmToken.balanceOf(accounts[0])
  balanceFarmTokenOneBeforeFarmTokenOne = await farmToken.balanceOf(farmToken.address)
  console.log(
    "Balance FarmTokenOne Before accounts[0] " +
      web3.utils.fromWei(balanceFarmTokenOneBeforeAccounts0.toString())
  )
  console.log(
    "Balance FarmTokenOne Before TokenFarm " +
      web3.utils.fromWei(balanceFarmTokenOneBeforeFarmTokenOne.toString())
  )
  // Call Deposit function from FarmTokenOne
  console.log("Call Deposit Function")
  await farmToken.deposit(web3.utils.toWei("100", "ether"))
  console.log("*** My Token ***")
  balanceOOSFAfterAccounts0 = await myToken.balanceOf(accounts[0])
  balanceOOSFAfterFarmTokenOne = await myToken.balanceOf(farmToken.address)
  console.log(
    "Balance OOSF After accounts[0] " +
      web3.utils.fromWei(balanceOOSFAfterAccounts0.toString())
  )
  console.log(
    "Balance OOSF After TokenFarm " +
      web3.utils.fromWei(balanceOOSFAfterFarmTokenOne.toString())
  )

  console.log("*** Farm Token ***")
  balanceFarmTokenOneAfterAccounts0 = await farmToken.balanceOf(accounts[0])
  balanceFarmTokenOneAfterFarmTokenOne = await farmToken.balanceOf(farmToken.address)
  console.log(
    "Balance FarmTokenOne After accounts[0] " +
      web3.utils.fromWei(balanceFarmTokenOneAfterAccounts0.toString())
  )
  console.log(
    "Balance FarmTokenOne After TokenFarm " +
      web3.utils.fromWei(balanceFarmTokenOneAfterFarmTokenOne.toString())
  )

  // End function
  callback()
}
