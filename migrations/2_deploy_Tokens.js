const OOSF = artifacts.require("OOSF")
const FarmTokenOne = artifacts.require("FarmTokenOne")

module.exports = async function (deployer, network, accounts) {
    // Deploy OOSF token
    await deployer.deploy(OOSF)
    const token = await OOSF.deployed()

    // Deploy Farm token (FarmTokenOne)
    await deployer.deploy(FarmTokenOne, token.address)
    const farmToken = await FarmTokenOne.deployed()
}