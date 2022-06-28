const { ethers } = require("hardhat");
const { Contract } = require("hardhat/internal/hardhat-network/stack-traces/model");

const main = async () =>
{
const HelloWorld = await ethers.getContractFactory('HelloWorld');
const hw = await HelloWorld.deploy("Hello World!");

const API_KEY = process.env.API_KEY; //get from alchemy
const CONTRACT_ADDRESS = hw.address; //deployed contract address
const PRIVATE_KEY = process.env.PRIVATE_KEY; //metamask


const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

/*contract /*instance*/
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);



    const message = await helloWorldContract.message();
    console.log("the message is "+ message);

    const tx = await helloWorldContract.update("Good Bye, World!");
    await tx.wait();

    const nmessage = await helloWorldContract.message();
    console.log("the new message is "+ nmessage);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});