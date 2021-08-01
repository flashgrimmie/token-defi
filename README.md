# token-defi

CREATE AND DEPLOY A DEFI APP

<br />

### Steps

    truffle init

    npm install @openzeppelin/contracts

    truffle version

    truffle compile

    truffle migrate

![truffle migrate](./migrate.png)

<br />

### Test on truffle/ganache

    truffle console

- Get the smart contract: `myToken = await OOSF.deployed()`

- Get the array of accounts from Ganache: `accounts = await web3.eth.getAccounts()`

- Get the balance for the first account: `balance = await myToken.balanceOf(accounts[0])`

- Format the balance from 18 decimals: `web3.utils.fromWei(balance)`

![truffle console](./balance.png)

<br />
