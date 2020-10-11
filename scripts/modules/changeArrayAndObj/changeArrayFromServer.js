'use strict';

// какой массив ты меняешь? называй функции более конкретно
// arrayFromServer - можно просто array, а лучше что-то типа data
function changeArrayFromServer(arrayFromServer) {

	const valueCandles = {
        date: [],
        open: [],
        high: [],
        low: [],
		close: [],
        volume: []        
    };
    
    // параметры колбека - можно использовать деструктуризацию массива, пример ([data, open, high, low...])
	arrayFromServer.forEach((array) => {
		valueCandles.date.push(array[0]);
		valueCandles.open.push(+array[1]);
		valueCandles.high.push(+array[2]);
		valueCandles.low.push(+array[3]);
		valueCandles.close.push(+array[4]);
		valueCandles.volume.push(+array[5]);
	});

    // не совсем понятно, выше ты кладешь данные в массив, а тут удаляешь последний
    for (let variable in valueCandles) {
        valueCandles[variable].pop();
    }
    return valueCandles;
}

module.exports = changeArrayFromServer;