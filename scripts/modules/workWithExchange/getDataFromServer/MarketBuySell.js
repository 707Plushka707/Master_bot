'use strict';

const binance = require('../connectToExchange');
const initData = require('../../initData');
const sendInTelegram = require('../../other/sendInTelegram');
const writeLog = require('../../other/writeLog');

const buy = (quantity, price) => {
	return new Promise(() => {		
		binance.marketBuy(initData.pair, quantity);
		
		let message = `Buy: ${initData.pair} \n Quantity: ${quantity} \n	Price: ${price}`;
		sendInTelegram(message);
		writeLog('log.txt' ,message);
	});
};

const sell = (quantity, price) => {
	return new Promise(() => {
		binance.marketSell(initData.pair, quantity);

		let message = `Buy: ${initData.pair} \n Quantity: ${quantity} \n	Price: ${price}`;
		sendInTelegram(message);
		writeLog('log.txt' ,message);

	});
};



module.exports = {buy, sell};
