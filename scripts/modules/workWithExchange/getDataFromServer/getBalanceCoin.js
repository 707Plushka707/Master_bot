'use strict';

const binance = require('../connectToExchange');

// можно не создавать скоуп ф-и, если ничего кроме return нет
const getBalanceCoin = (coin) => {
	return new Promise(resolve => {
		binance.balance((error, balances) => {
			const balanceOneCoin = balances[coin];
			resolve(balanceOneCoin.available);
		});
	});
};

module.exports = getBalanceCoin;