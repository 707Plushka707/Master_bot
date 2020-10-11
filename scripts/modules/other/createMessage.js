'use strict';

// не делай таких разрывов, используй prettier

function createMessage(results, initData) {
	// параметры ф-и - используй деструктуризацию 
	// const { qCoin1, aCoin1 } = results и т.д., можно деструктуризировать на входе ф-и, но если несколько, если много
	// как с initData, то лучше использовать первый вариант
	// так же красивее смотрится const totalFirstCoin = qCoin1 + aCoin1

	const totalFirstCoin = results.qCoin1 + results.aCoin1;
	const totalSecondCoin = results.qCoin2 + results.aCoin2;

	// ставь пробелы (totalFirstCoin - initData.testValueFirstCoinOnWallet) * 100 / initData.testValueFirstCoinOnWallet
	// а лучше поставь притер, он решит эти вопросы за тебя
	const IncomeFirstCoin = (totalFirstCoin-initData.testValueFirstCoinOnWallet)*100/initData.testValueFirstCoinOnWallet;
	const IncomeSecondCoin=(totalSecondCoin-initData.testValueSecondCoinOnWallet)*100/initData.testValueSecondCoinOnWallet;

	// const result =
	let result = 'Interest income: ' + (IncomeFirstCoin + IncomeSecondCoin).toFixed(2) + '%';
	const textMessage = `
	___________________________________ \n
	Test time: ${Date()} \n
	Test parameters initData: ${JSON.stringify(initData)} \n
	TotalResults coins: ${initData.firstCoin} ${(totalFirstCoin.toFixed(5))} \n
	TotalResults coins: ${initData.secondCoin} ${(totalSecondCoin.toFixed(5))} \n
	${result} \n
	___________________________________ \n
	`;

    return textMessage;
}

// оставляй пустую строку в конце файла, можно настроить в идее
module.exports = createMessage;