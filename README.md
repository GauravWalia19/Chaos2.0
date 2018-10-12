# CHAOS 2.0

## DEPENDENCIES

* sha256
* express
* nodemon
* body-parser
* uuid
* request-promise
* request

## OTHERS

* postman (API development environment)
* chrome extension JSON FORMATTER

## WORKING OF BLOCKCHAIN API

* open the repo and start server by **npm start**
* **don't change the js file while running server it may get crashed never run unless u restart a system**

### SEE CURRENT BLOCKCHAIN

* OPEN **localhost:3000/blockchain** on chrome

### CREATE A NEW TRANSACTION

* OPEN YOUR POSTMAN(installed)
* Enter the url ```http://localhost:3000/transaction```
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

* **Refresh browser** having url **localhost:3000/transaction**
* You will now see transactions done
* **Refresh browser** having url **localhost:3000/blockchain**
* You will now see a pending transactions in blockchain

### MINE A BLOCK

* Now for mining a block
* **Refresh browser** having url **localhost:3000/mine**
* You will now see a mined a block on browser
* Again **Refresh browser** having url **localhost:3000/blockchain**
* Then u will see no pending transaction

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

* Open postman
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

* Enter the url ```http://localhost:3002/register-and-broadcast-node```
* Write json

```json
{
    "newNodeUrl": "http://localhost:3005"
}
```

* Enter the url ```http://localhost:3005/register-and-broadcast-node```
* Write json

```json
{
    "newNodeUrl": "http://localhost:3004"
}
```

* Refresh all urls and see distinct network nodes urls in each node. So its decentralised now.