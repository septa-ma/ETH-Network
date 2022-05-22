// require the web3 package
const Web3 = require('web3');

class checkingTRX {
    web3;
    account;

    // connect to the ETH network
    constructor(projectId, account) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/' + projectId));
        this.account = account.toLowerCase();
    }

    // checking the block
    async checkBlock(trxHash) {
        let block = await this.web3.eth.getBlock(trxHash);
        if ( block == null ) {
            console.log('Could not find a block');
        } else {
            let number = block.number;
            console.log('Finding a block ' + number);
            
            // if the block was found and had trxs
            if (block != null && block.transactions != null) {

                // loop trough block's trxs
                for (let txHash of block.transactions) { // check trxhash here!!
                    let tx = await this.web3.eth.getTransaction(txHash);
                    console.log('Transaction found on block: ' + number);
                    console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
                } // end for
                
            } // end if
        } // end else

    } // end function
} // end class

module.exports.checkingTRX = checkingTRX;