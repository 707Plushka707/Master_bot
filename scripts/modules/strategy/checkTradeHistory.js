'use strict';

const getTradeHistory = require('../workWithExchange/getDataFromServer/getTradeHistory');
const initData = require('../initData');
const quantityMyOrder = 0;  /* мои ордера, выполненные вручную*/

async function checktradeHistory(active) {
	let tradeHistory = await getTradeHistory();
	
	for(let i = 0; i < quantityMyOrder; i++) {tradeHistory.shift();} /* удалить ордера, выполненные вручную*/
	tradeHistory.reverse();

	if(tradeHistory) {
		return 0;
	}

	let lastTrade = tradeHistory[0];

	let summCoins = 0;

	if (active == initData.firstCoin) {
		if (lastTrade.isBuyer) {			
			for (let i = 0; i < tradeHistory.length; i++) {
				let tradeBefore = tradeHistory[i-1];
				let trade = tradeHistory[i];
				if (trade.isBuyer) {
					summCoins += +trade.qty;
				} else {
					summCoins -= +tradeBefore.qty;
				}
			}
			console.info(`summCoins ${initData.firstCoin}:  ${summCoins}`);
			return summCoins;
		} else {
			return 0;
		}
	} else {
		if (!lastTrade.isBuyer) {			
			for (let i = 0; i < tradeHistory.length; i++) {
				let tradeBefore = tradeHistory[i-1];
				let trade = tradeHistory[i];
				if (!trade.isBuyer) {
					summCoins += +trade.qty;
				} else {
					summCoins -= +tradeBefore.qty;
				}
			}
			console.info(`summCoins ${initData.secondCoin}:  ${summCoins}`);
			return summCoins;
		} else {
			return 0;
		}
	}
}

module.exports = checktradeHistory;