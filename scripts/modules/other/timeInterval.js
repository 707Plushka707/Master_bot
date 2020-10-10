'use strict';

const initData = require('../initData');

const dateNow = new Date().getTime();    
const timeOneCandleNum = parseFloat(initData.intervalCandles);
const MiliseconsInOneMinut = 1000 * 60;
const MiliseconsInOneHour = 1000 * 60 * 60;
const MiliseconsInOneDay = 1000 * 60 * 60 * 24;
const delayedStartScript = 1000 * 30;
let timeSymbol = initData.intervalCandles;
timeSymbol = timeSymbol[timeSymbol.length - 1];

let timeInterval = {};


function getTimeInterval() {

    switch(timeSymbol) {
        case 'm':
            timeInterval.timeOneCandleMiliseconds = MiliseconsInOneMinut *  timeOneCandleNum;
            break;
        case 'h':
            timeInterval.timeOneCandleMiliseconds = MiliseconsInOneHour * timeOneCandleNum;
            break;
        case 'd':
            timeInterval.timeOneCandleMiliseconds = MiliseconsInOneDay * timeOneCandleNum;
            break;
        default:
            console.info('Время свечного интервала указанно неверно! Интервал в неделю и месяц не рассматривается.');
    }

    timeInterval.timeFirstStart = ((Math.floor( dateNow / timeInterval.timeOneCandleMiliseconds ) + 1) * timeInterval.timeOneCandleMiliseconds) + delayedStartScript - dateNow;
    console.info(`the first signal check will be in ${timeInterval.timeFirstStart/1000} seconds.`);
}
getTimeInterval();

module.exports = timeInterval;