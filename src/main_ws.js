const checkingTRXWS = require('./checkingTRX_ws');

var project_id = '86e44087cd3a4cd4a130112fca17586c';
var account_id = '312ed35460ce4b78baba08f374904280';

let trxCheckerWS = new checkingTRXWS.checkingTRXWS(project_id, account_id);
trxCheckerWS.subscribe('pendingTransactions');
trxCheckerWS.watchTransactions();