// require the web3 package
const Web3 = require('web3');

class checkingTRXWS {
    web3;
    account;

    constructor(projectId, account) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/' + projectId));
        this.account = account.toLowerCase();
    }

    async getConfirmations(txHash) {
        try {
            // get transaction details
            let trx = await this.web3.eth.getTransaction(txHash);
            if (trx == null) {
                console.log('there is not a confirmation with this txHash.');
            } else {
                console.log({address: trx.from, value: this.web3.utils.fromWei(trx.value, 'ether'), timestamp: new Date()});
            }
        } catch (error) {
            console.log(error)
        }
    } // end function

} // end class

module.exports.checkingTRXWS = checkingTRXWS;