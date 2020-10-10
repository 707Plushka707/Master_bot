'use strict';

function changeArrayFromServer(arrayFromServer) {

	const valueCandles = {
        date: [],
        open: [],
        high: [],
        low: [],
		close: [],
        volume: []        
    };
    
	arrayFromServer.forEach((array) => {
		valueCandles.date.push(array[0]);
		valueCandles.open.push(+array[1]);
		valueCandles.high.push(+array[2]);
		valueCandles.low.push(+array[3]);
		valueCandles.close.push(+array[4]);
		valueCandles.volume.push(+array[5]);
	});

    for (let variable in valueCandles) {
        valueCandles[variable].pop();
    }
    return valueCandles;
}

module.exports = changeArrayFromServer;