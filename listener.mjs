import EthereumEventProcessor from 'ethereum-event-processor';
import Web3 from 'web3';
import fs from 'fs';
import 'dotenv/config';

const readContractABI = (contractABIPath) => {
    let contractABI;
    try{
        contractABI = JSON.parse(fs.readFileSync(contractABIPath));
    }catch(error){
        console.error(error.message);
        process.exit();
    }
    return contractABI;
}


const web3ProviderUrl = process.env.PROVIDER_WEBSOCKET_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = readContractABI(`${process.env.CONTRACT_ABI_PATH}${process.env.CONTRACT_ABI_FILE_NAME}`);


const eventOptions = { 
    pollingInterval: parseInt(process.env.EVENT_POOL_INTERVAL),
    startBlock: 0,
    blocksToWait: parseInt(process.env.EVENT_BLOCKS_TO_WAIT),
    blocksToRead: parseInt(process.env.EVENT_BLOCKS_TO_READ) 
}

const web3 = new Web3(new Web3.providers.WebsocketProvider(web3ProviderUrl));

const latestBlock = await web3.eth.getBlock('latest');
eventOptions.startBlock = latestBlock.number;

const eventListener =  new EthereumEventProcessor(
    web3, 
    contractAddress, 
    contractABI,
    eventOptions
);

eventListener.on('Withdrawal', async (event) => {
    console.log("Event Captured: ", event);
    console.log("Event Return Values: ", event.returnValues)
});

eventListener.listen();

console.log("Event listener started");