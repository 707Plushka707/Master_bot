'use strict';

const initData = require('./modules/tests/testInitData');
const getValueCandles = require('./modules/changeArrayAndObj/changeArrayFromServer');
const indicatorMACD = require('./modules/talibIndicators/indicator_MACD');
const testPlaceOrder = require('./modules/tests/testPlaceOrder');
const getLotOfHistoryCandles = require('./modules/tests/getLotOfHistoryCandles');
const testCheckSignalIndicatorMACD = require('./modules/tests/testCheckSignalIndicatorMACD');
const createMessage = require('./modules/other/createMessage');
const writeLog = require('./modules/other/writeLog');
// const indicatorATR = require('./modules/talibIndicators/indicator_ATR');

async function mainCycle() {
	console.info(Date());
	const HistoryCandles = await getLotOfHistoryCandles();
	const valueCandles = getValueCandles(HistoryCandles);
	const valuesIndicatorMACD = indicatorMACD(valueCandles.close, initData);
	const signalIndicatorMACD = testCheckSignalIndicatorMACD(valuesIndicatorMACD, valueCandles.close, valueCandles.date);
	const results = testPlaceOrder(signalIndicatorMACD);
	const message = createMessage(results, initData);
	writeLog('testsResults.txt' ,message);
}

mainCycle();



