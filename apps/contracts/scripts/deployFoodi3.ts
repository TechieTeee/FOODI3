import { ethers } from 'hardhat';
import { updateConfig, config } from '@repo/config-contract';

async function deployFoodi3() {
    const [owner] = await ethers.getSigners();

    console.log('Deploying contract with the account:', owner.address);

    // Replace 'EcoEarn' with 'Foodi3'
    const Foodi3 = await ethers.getContractFactory('Foodi3');

    // Update the constructor arguments to match Foodi3's requirements
    const foodi3Instance = await Foodi3.deploy(
        config.TOKEN_ADDRESS,
        config.CYCLE_DURATION,
        config.MAX_SUBMISSIONS_PER_CYCLE,
        config.REWARD_AMOUNT, 
        config.REWARD_TOKEN
    );

    await foodi3Instance.deployed();

    const foodi3Address = await foodi3Instance.address;

    console.log(`Foodi3 deployed to: ${foodi3Address}`);

    updateConfig({
        ...config,
        CONTRACT_ADDRESS: foodi3Address,
    });
}

deployFoodi3()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
