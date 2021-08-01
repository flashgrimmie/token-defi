// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OOSF is ERC20 {
    constructor() public ERC20("OOSF Token", "OOS") {
        _mint(msg.sender, 70000000000000000000000000);
    }
}