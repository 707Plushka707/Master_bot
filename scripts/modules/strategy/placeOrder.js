'use strict';

const initData = require('../initData');
const getBalance = require('../../modules/workWithExchange/getDataFromServer/getBalanceCoin');
const getPrice = require('../workWithExchange/getDataFromServer/getPriceNow');
const checkTradeHistory = require('./checkTradeHistory');
const { buy, sell } = require('../workWithExchange/getDataFromServer/MarketBuySell');


async function placeOrder(signal) {
	let price = await getPrice();
	const interestRate = initData.interestRate; /*Процент ставки  */

	/* Средства, которые на данный момент выполнились в сделке  */
	let activeFundsFirstCoin = checkTradeHistory(initData.firstCoin); 
	/* Средства, которые на данный момент выполнились в сделке */
	let activeFundsSecondCoin = checkTradeHistory(initData.secondCoin); 

	let quantityFirstCoinInWallet = await getBalance(initData.firstCoin);
	let quantitySecondCoinInWallet = await getBalance(initData.secondCoin);

	if (signal == 'short') {
		console.log("short", price);

		if (activeFundsFirstCoin > 0) {
			let quantity = +activeFundsFirstCoin.toFixed(2);
			console.log(`1 - buy ${quantity}`);
			sell(quantity, price);
		}
		console.info(`Total coins: ${initData.firstCoin} ${quantityFirstCoinInWallet}`);

		let rate = +(quantityFirstCoinInWallet * interestRate).toFixed(2);
		sell(rate, price);

	} else if (signal == 'long') {
		console.log('long', price);

		if (activeFundsSecondCoin > 0) {
			let quantity = +activeFundsSecondCoin.toFixed(2);
			console.log(`3 - buy ${quantity}`);
			buy(quantity, price);
		}
		console.log(`Total coins: ${initData.secondCoin} ${quantitySecondCoinInWallet}`);
		let rate = +(quantitySecondCoinInWallet * interestRate / price).toFixed(2);
		buy(rate, price);
	}
	let results = {
		qCoin1: quantityFirstCoinInWallet,
		qCoin2: quantitySecondCoinInWallet,
		aCoin1: activeFundsFirstCoin,
		aCoin2: activeFundsSecondCoin
	};
	return results;
}

module.exports = placeOrder;