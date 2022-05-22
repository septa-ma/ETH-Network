const checkingTRX = require('./checkingTRX');

var project_id = '86e44087cd3a4cd4a130112fca17586c';
var account_id = '312ed35460ce4b78baba08f374904280';
var data = 'latest';

let trxChecker = new checkingTRX.checkingTRX(project_id, account_id);
trxChecker.checkBlock(data);