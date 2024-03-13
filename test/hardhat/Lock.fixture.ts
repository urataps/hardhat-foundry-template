import { parseGwei } from "viem";
import { time } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import hre from "hardhat";

export async function deployOneYearLockFixture() {
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

  const lockedAmount = parseGwei("1");
  const unlockTime = BigInt((await time.latest()) + ONE_YEAR_IN_SECS);
  console.log("Unlock time:", unlockTime.toString(10));

  // Contracts are deployed using the first signer/account by default
  const [owner, otherAccount] = await hre.viem.getWalletClients();

  const lock = await hre.viem.deployContract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  const publicClient = await hre.viem.getPublicClient();

  return {
    lock,
    unlockTime,
    lockedAmount,
    owner,
    otherAccount,
    publicClient,
  };
}
