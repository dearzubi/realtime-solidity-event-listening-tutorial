# Realtime Solidity Event Listening Tutorial

A quick demonstration project on how to listen to solidity events in a real time using ethereum-event-processor node module and web3js.

**Note:** Please make sure you are using latest NodeJs and NPM version.

## Running the project

1. Clone this repository.
    ```
    git clone https://github.com/dearzubi/realtime-solidity-event-listening-tutorial/

    cd realtime-solidity-event-listening-tutorial
    ```

2. Make a copy of `.env.sample` and rename it `.env.` Set the valus of the environment variables as per your preferrence.

3. Initialize a hardhat or a ganache node.
    ```
    npx hardhat node
    (or)
    ganache
    ```
4. Deploy the contract to the node.
    ```
    npx hardhat run --network dev scripts/deploy.js
    ```

5. In a separate terminal, run listener.
    ```
    node listener.mjs
    ```

6. In another terminal, run app.
    ```
    node app.mjs
    ```

Read the complete article at medium: [https://dearzubi.medium.com/real-time-solidity-event-listening-with-web3js-part-2-4bcb7e5a1566](https://dearzubi.medium.com/real-time-solidity-event-listening-with-web3js-part-2-4bcb7e5a1566)