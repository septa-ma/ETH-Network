const checkingTRX = require('./checkingTRX');

var project_id = '86e44087cd3a4cd4a130112fca17586c';
var account_id = '312ed35460ce4b78baba08f374904280';
var trxHash = '0x552865a0dbbc5169a1da606598d3908f2652bd656e021bf74acd5f3b2d93591d'; //'latest';

let trxChecker = new checkingTRX.checkingTRX(project_id, account_id);
trxChecker.checkBlock(trxHash);