const sha256 = require('sha256');
const currentNodeUrl = process.argv[3]; //get port url
const uuid = require('uuid/v1');

function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
    
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = []; //urls of others nodes

    this.createNewBlock(100,'0','0'); //genysis block -- first block
}

//mine a block and a create a new block in a blockchain
Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
  const newBlock = {
      index: this.chain.length+1,
      timestamp: Date.now(),
      transactions: this.pendingTransactions,
      nonce: nonce,
      hash: hash,
      previousBlockHash: previousBlockHash
  }; 
   this.pendingTransactions = [];
   this.chain.push(newBlock);

   return newBlock;
}

//return last block in blockchain
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1];
}

//create new transaction
Blockchain.prototype.createNewTransaction = function(amount,sender,recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        transactionId: uuid().split('-').join('')
    };
    
    return newTransaction;
}

//takes in transaction add to pending transaction
Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index']+1;
};

//return hash key of a string
Blockchain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData)
    const hash = sha256(dataAsString);
    return hash;
}

//security of our blockchain a specific hash starting with 0000 is created
Blockchain.prototype.proofOfWork = function(previousBlockHash,currentBlockData){
    let nonce =0;
    let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4)!=='0000')
    {
        nonce++;
        hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);            
    }

    return nonce;
}

//CONSENSUS ALGORITHM
Blockchain.prototype.chainIsValid = function(blockchain){
    let validChain = true;
    for(var i=1;i<blockchain.length;i++)
    {
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i-1];
        const blockHash = this.hashBlock(prevBlock['hash'],{ transactions: currentBlock['transactions'],index: currentBlock['index']},currentBlock['nonce']);
        if(blockHash.substring(0,4) !== '0000') validChain = false;
        if(currentBlock['previousBlockHash'] !== prevBlock['hash']) //chain not valid
        {
            validChain=false;
        }
    }
    const genesisBlock = blockchain[0];
    const correctNonce = genesisBlock['nonce'] === 100;
    const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
    const correctHash = genesisBlock['hash'] === '0';
    const correctTransactions = genesisBlock['transactions'].length === 0;

    if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;
    return validChain;
};

module.exports = Blockchain;