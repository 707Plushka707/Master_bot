'use strict';

let initData = {
    firstCoin: 'LTC',
    secondCoin: 'BTC',
    intervalCandles: "5m",
    quantityCandles: 500,
    interestRate: 0.2,
    minLimitSignalMACD: 0.00002,
    fastPeriodMACD: 12,
    slowPeriodMACD: 24,

    testDayHistoryCandles: 30,
    testValueFirstCoinOnWallet: 2.5,
    testValueSecondCoinOnWallet: 0.017
};

initData.pair = initData.firstCoin + initData.secondCoin;

module.exports = initData;
