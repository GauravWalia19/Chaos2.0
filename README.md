# CHAOS 2.0

## DEPENDENCIES INSTALLED

* sha256
* express
* nodemon
* body-parser
* uuid
* request-promise
* request

## OTHERS NEED TO INSTALL

* postman (API development environment)
* chrome extension JSON FORMATTER

## WORKING OF BLOCKCHAIN API

* **don't change the js file while running server it may get crashed never run unless u restart a system**

### MAKING IT A DECENTRALISED

* Open 1 terminal enter

```bash
npm run node_1
```

* Open 2 terminal enter

```bash
npm run node_2
```

* Open 3 terminal enter

```bash
npm run node_3
```

* Open 4 terminal enter

```bash
npm run node_4
```

* Open 5 terminal enter

```bash
npm run node_5
```

* Open the urls on chrome browser
  * localhost:3001/blockchain
  * localhost:3002/blockchain
  * localhost:3003/blockchain
  * localhost:3004/blockchain
  * localhost:3005/blockchain

* Open postman to make it decentralised
* Enter the url ```http://localhost:3001/register-and-broadcast-node```
* Write json

```json
{
    "newNodeUrl": "http://localhost:3002"
}
```

```json
{
    "newNodeUrl": "http://localhost:3003"
}
```

```json
{
    "newNodeUrl": "http://localhost:3004"
}
```

```json
{
    "newNodeUrl": "http://localhost:3005"
}
```

* Refresh all urls and see distinct network nodes urls in each node. So its decentralised now.

### CREATE A NEW TRANSACTION IN DECENTRALISED BLOCKCHAIN

* OPEN YOUR POSTMAN(installed)
* For a transaction select a node you like i.e 3001,3002,3003,3004 and 3005
* For doing transaction i.e on 3001
* Enter the url ```http://localhost:3001/transaction/broadcast```
* Check options
  * Select body
  * Select raw
  * Select JSON
  * Enter the json

```json
{
    "amount": 50,
    "sender": "SDGDFGDFSGDFGDFGG3",
    "recipient": "SDASGDGDGDLNJFGDFG"
}
```

* Here transaction amount is 50 ,sender has a unique sha256 while recipient have a unique a sha256. Click send on postman. For again new transaction change values and again send it.
* You will receive a message of new transaction on postman

* **Refresh browser** having urls
  * localhost:3001/blockchain
  * localhost:3002/blockchain
  * localhost:3003/blockchain
  * localhost:3004/blockchain
  * localhost:3005/blockchain
* You will now see a pending transactions in blockchain on every node

### MINE A BLOCK IN DECENTRALISED BLOCKCHAIN

* Now for mining a bitcoin
* Select node on which you want to mine i.e 3001,3002,3003,3004 and 3005
* For mining on 3001
  * **Open or Refresh browser** having url **localhost:3001/mine**
* **Refresh browser** having urls
  * localhost:3001/blockchain
  * localhost:3002/blockchain
  * localhost:3003/blockchain
  * localhost:3004/blockchain
  * localhost:3005/blockchain
* You will see bitcoin is mined and a reward for transaction is added to it and there are no transactions left on every node except reward.

### CHECKING CONSENSUS ALGORITHM

This algorithm will correct the blockchain. It will update the node which has wrong data in blockchain.

* Run 4 nodes (3001,3002,3003,3004)
* Do transactions in 4 nodes
* Mine new blocks in 4 nodes network
* Now add 5 node (3005) to network
* Open browser and see conflict i.e node 5 doesn't have all the updated nodes
* For removing this conflict run CONSENSUS ALGO. by opening ```localhost:3005/consensus``` on browser.
* Now conflicts are solved.