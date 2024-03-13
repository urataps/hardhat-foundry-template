// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.24 <0.9.0;

import { Test } from "forge-std/Test.sol";

abstract contract BaseTest is Test {
    struct Users {
        address alice;
        address bob;
        address carol;
    }

    Users public users;

    /// @dev A function invoked before each test case is run.
    function setUp() public virtual {
        users.alice = makeAddr("alice");
        users.bob = makeAddr("bob");
        users.carol = makeAddr("carol");
    }
}
