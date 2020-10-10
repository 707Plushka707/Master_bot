'use strict';

let initData = {
    firstCoin: 'LTC',
    secondCoin: 'BTC',
    intervalCandles: "5m",
    quantityCandles: 300,
    minLimitSignalMACD: 0.00002,
    interestRate: 0.2,
    fastPeriodMACD: 12,
    slowPeriodMACD: 24
};

initData.pair = initData.firstCoin + initData.secondCoin;

module.exports = initData;
