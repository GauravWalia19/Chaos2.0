
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
// console.log(bitcoin);
// bitcoin.createNewBlock(100,'SFDSD4344','232342SLDFS');

// bitcoin.createNewTransaction(200,'ALEXDFFGDF4344','JENNSDGG5445SS');
// bitcoin.createNewBlock(300,'SFDSD3344','232342SYDFS');              //mine a block

// //pending transactions
// bitcoin.createNewTransaction(300,'ALEXDFFGDF4344','JENNSDGG5445SS'); 
// bitcoin.createNewTransaction(400,'ALEXDFFGDF4344','JENNSDGG5445SS');
// bitcoin.createNewTransaction(500,'ALEXDFFGDF4344','JENNSDGG5445SS');
// bitcoin.createNewBlock(600,'SFSFF3343','4334TSFS');                 //mine a block
// console.log(bitcoin);
// console.log(bitcoin.chain[2]);

//  TESTING HASH METHOD
// const previousBlockHash='PREVIOUSHASHKEY';
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: 'SDGDSFGFD455',
//         recipent: 'SGDGDDG45DFGDFG'
//     },
//     {
//         amount: 20,
//         sender: 'DFGDFGDFGDG34334',
//         recipent: 'SGDFGSGDSG343'
//     },
//     {
//         amount: 30,
//         sender: 'DFGDFHDF34343',
//         recipent: 'SDGDHTRH4554'
//     }
// ];
// const nonce = 100;
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));

//TESTING PROOF OF DATA returns nonce
// nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData);
// console.log(nonce);
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));

//TESTING CONSENSUS ALGORITHM
const bc = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1539373547288,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1539373613751,
    "transactions": [
    {
    "amount": 10,
    "sender": "GKVSFASFSSAFSDB",
    "recipient": "SDFSDSDFASF3474NSN345",
    "transactionId": "8124a860ce5711e89af0b932067c4a59"
    },
    {
    "amount": 20,
    "sender": "GKVSSGDFSFSSAFSDB",
    "recipient": "SDFSDWEW3474NSN345",
    "transactionId": "8d3a1270ce5711e89af0b932067c4a59"
    }
    ],
    "nonce": 28669,
    "hash": "0000ead1d3b6f08394bde98bc49b839b238bbbc5d616fb74294fb186084f66c1",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1539373626367,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "6a21d980ce5711e89af0b932067c4a59",
    "transactionId": "91c1bd70ce5711e89af0b932067c4a59"
    }
    ],
    "nonce": 11537,
    "hash": "0000e4a4bd3be44e7bedc334225d1036db1b458ac502a002bf37188e53221f33",
    "previousBlockHash": "0000ead1d3b6f08394bde98bc49b839b238bbbc5d616fb74294fb186084f66c1"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "6a21d980ce5711e89af0b932067c4a59",
    "transactionId": "9944a710ce5711e89af0b932067c4a59"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};
console.log(bitcoin.chainIsValid(bc.chain));
