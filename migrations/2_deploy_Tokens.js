const OOSF = artifacts.require("OOSF")

module.exports = async function (deployer, network, accounts) {
    // Deploy OOSF token
    await deployer.deploy(OOSF)
    const token = await OOSF.deployed()
}