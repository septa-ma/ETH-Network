const checkingTRXWS = require('./checkingTRX_ws');

var project_id = '86e44087cd3a4cd4a130112fca17586c';
var account_id = '312ed35460ce4b78baba08f374904280';
var trxHash = '0x528f8ddd36f15b0855ca0fd6aadb64344e01fc87716e2a5283852020c17b425d';

let trxCheckerWS = new checkingTRXWS.checkingTRXWS(project_id, account_id);
trxCheckerWS.getConfirmations(trxHash);