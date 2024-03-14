# Hybrid Foundry + Hardhat Template [![Foundry][foundry-badge]][foundry] [![Hardhat][hardhat-badge]][hardhat] [![License: MIT][license-badge]][license]

[foundry]: https://getfoundry.sh/
[foundry-badge]: https://img.shields.io/badge/Built%20with-Foundry-FFDB1C.svg
[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[hardhat]: https://hardhat.org/
[hardhat-badge]: https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg

This template synergizes Foundry and Hardhat to offer a powerful, integrated environment for Ethereum smart contract
development, testing, and deployment.

- [Foundry](https://github.com/foundry-rs/foundry): modern framework to write unit, fuzz, fork or invariant tests in
  solidity.
- [Hardhat](https://github.com/nomiclabs/hardhat): generate artifacts, run scripts and test smart contracts in
  typescript.
- [Viem](https://github.com/wevm/viem): modern Ethereum library for blockchain interaction.
- [Solhint](https://github.com/protofire/solhint): linter for Solidity code
- [Prettier](https://github.com/prettier/prettier): code formatter for non-Solidity files

## Motivation

By integrating Foundry and Hardhat, developers can harness the strengths of both platforms. Foundry's exceptional
testing capabilities ensure your contracts are robust and secure, while Hardhat's deployment, scripting, and artifact
generation features streamline the development and integration of smart contracts with frontend applications.

### Leveraging Foundry's Strengths

Foundry is a cutting-edge Ethereum development toolkit renowned for its speed and efficiency, especially when it comes
to testing smart contracts. It shines in several key areas:

- **Invariant Testing**: Validates contract integrity under varied conditions.
- **Fuzz Testing**: Exposes vulnerabilities by testing contracts with millions of random inputs.
- **Fork Tests**: Assesses contract performance in real-world blockchain conditions.

### Hardhat's Complementary Capabilities

While Foundry excels in testing, Hardhat complements it by offering a rich environment for smart contract deployment,
scripting, and interaction, especially useful for frontend development:

- **Scripting and Deployment**: Simplifies complex deployments and interactions.
- **Quick Mocking and Calls**: Facilitates frontend development by enabling easy simulation of contract interactions.
- **Artifact Generation**: Streamlines web integration with automatic generation of essential artifacts, either using
  viem or typechain.

## Getting Started

Click the [`Use this template`](https://github.com/urataps/hardhat-foundry-template/generate) button at the top of the
page to create a new repository with this repo as the initial state.

## How to use

This is a list of the most frequently needed commands.

### Build

Build the contracts:

```sh
$ bun run compile
```

Or compile using hardhat only:

```sh
$ bun run compile:hh
```

Or compile using forge:

```sh
$ bun run compile:forge
```

### Clean

Delete all the build artifacts and cache directories:

```sh
$ bun run clean
```

### Coverage

Get a test coverage report using foundry:

```sh
$ bun run coverage
```

## Installing dependencies

Foundry typically uses git submodules to manage dependencies, but this template uses Node.js packages because
[submodules don't scale](https://twitter.com/PaulRBerg/status/1736695487057531328).

This is how to install dependencies:

1. Install the dependency using your preferred package manager, e.g. `bun install dependency-name`
   - Use this syntax to install from GitHub: `bun install github:username/repo-name`
2. Add a remapping for the dependency in [remappings.txt](./remappings.txt), e.g.
   `dependency-name=node_modules/dependency-name`

Note that OpenZeppelin Contracts is pre-installed, so you can follow that as an example.

## Acknowledgements

Inspiration drawn from PaulRBerg's [Foundry Template](https://github.com/paulRBerg/foundry-template) and
[Hardhat Template](https://github.com/PaulRBerg/hardhat-template).

## License

MIT License © 2024 Alexe Spataru. Explore the [LICENSE](./LICENSE) for more information.
