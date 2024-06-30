# Foodi3

Unlock the potential of decentralized application development on VeChain with our X-App template for VeBetterDAO. Designed for the VeChain Thor blockchain, this template integrates cutting-edge technologies such as React, TypeScript, Hardhat, and Express, ensuring a seamless and efficient DApp development experience. 🌟

## Background

Foodi3 is a decentralized application (DApp) template built on the VeChain Thor blockchain. It aims to revolutionize how users interact with food-related data by providing transparency, incentives, and community engagement. The platform utilizes smart contracts to manage receipts, validate purchases, and reward users for participating in food-related activities.

## Problem

The food industry lacks transparency, making it challenging for consumers to verify product claims such as vegan, vegetarian, kosher, fair trade, and allergen-free status. Existing centralized systems often fail to provide real-time information or incentives for consumers to engage actively with food-related data.

## Unique Value Proposition
- **Real-Time Alerts:** Receive notifications for manager specials and exclusive deals in real-time.
- **Machine Learning:** Tagging: Automatically tag products with categories like Vegan, Vegetarian, Kosher, Fair Trade, and allergen-free using neural network models.
- **Leaderboard:** Compete and earn rewards based on engagement and activity levels.
- **Rewards for Local Retailers:** Local businesses earn rewards by participating and offering exclusive discounts to users.
-**Grocery Discounts:** Users receive discounts on grocery purchases based on their leaderboard score.

## Scalability
Built with scalability in mind, Foodi3 leverages VeChain's robust infrastructure to handle large-scale transactions efficiently. As more users join the platform, the decentralized nature of the application ensures scalability without compromising on security or performance.

## Revenue Model
Foodi3 generates revenue through:
- **Transaction Fees:** Earn from transactions made on the platform.
- **Premium Services:** Offer enhanced features or analytics tools for businesses and users.
- **Advertising:** Partner with food brands for targeted advertising based on user preferences and data insights.

## Requirements
Ensure your development environment is set up with the following:

- **Node.js (v18 or later):** [Download here](https://nodejs.org/en/download/package-manager)
- **Yarn:** [Install here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- **Docker (for containerization):** [Get Docker](https://docs.docker.com/get-docker/)
- **Hardhat (for smart contracts):** [Getting Started with Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started)

## Project Structure
### Frontend (apps/frontend) 🌐

A blazing-fast React application powered by Vite:
- **Vechain dapp-kit:** Streamline wallet connections and interactions. [Learn more](https://docs.vechain.org/developer-resources/sdks-and-providers/dapp-kit)

### Backend (apps/backend) 🔙
An Express server crafted with TypeScript for robust API development:
- **Vechain SDK:** Seamlessly fetch and perform transactions with the VechainThor blockchain. [Learn more](https://docs.vechain.org/developer-resources/sdks-and-providers/sdk)
- **OpenAI GPT-Vision-Preview:** Integrate image analysis capabilities. [Explore here](https://platform.openai.com/docs/guides/vision)

### Contracts (apps/contracts) 📜
Smart contracts in Solidity, managed with Hardhat for deployment on the Vechain Thor network and Ethereum Sepolia testnet

## Environment Variables ⚙️
Configure your environment variables for seamless integration:

### Frontend
Place your `.env` files in `apps/frontend`:
- **VITE_RECAPTCHA_V3_SITE_KEY:** [Request your RecaptchaV3 site keys](https://developers.google.com/recaptcha/docs/v3)

### Backend
Store your environment-specific `.env` files in `apps/backend`. `.env.development.local` & `.env.production.local` allow for custom environment variables based on the environment:
- **OPENAI_API_KEY:** [Get your GPT-4 OpenAI key](https://platform.openai.com/api-keys) (Enable GPT-4 [here](https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4-gpt-4-turbo-and-gpt-4o))
- **RECAPTCHA_SECRET_KEY:** [Request your RecaptchaV3 site keys](https://developers.google.com/recaptcha/docs/v3)

### Contracts
Manage deployment parameters and network configurations in `hardhat.config.js` under `apps/contracts`:
- **MNEMONIC:** Mnemonic of the deploying wallet

## Getting Started 🏁
Clone the repository and install dependencies with ease:
```bash
yarn install # Run this at the root level of the project

## Deploying 🏁
yarn contracts:deploy:solo or https://Remix.ethereum.org

## Deploying on Testnet
yarn contracts:deploy:testnet

## Running on Solo Network
yarn dev

## Setting up rewards
npx @vechain/devpal http://localhost:8669

Open the Inspector tab and perform the following transactions:
1. Add Contracts: Add the EcoEarn contract and the Token contract deployed previously. Addresses can be found in the config-contracts package. ABIs can be found in the artifacts folder of the contracts app.
2. Approve token: Approve the EcoEarn contract to spend your tokens.
3. Claim rewards: Claim rewards for the EcoEarn contract
4. Trigger cycle: Trigger the cycle for the EcoEarn contract



