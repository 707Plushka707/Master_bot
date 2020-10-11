'use strict';

// используй одни кавычки или '' или ""
const NodeFetch = require("node-fetch");   
const myAPI = require('../workWithExchange/apiKey');  
const writeLog = require('./writeLog');   


function sendMessage(message) {

    // используй шаблоные строки
    const url = 'https://alarmerbot.ru/?key=' + myAPI.KEYTELEGRAM + '&message=' + message;
    const promise = NodeFetch(url);

    promise.catch(error => {
        const message = `${Date()} \n No Internet!!! \n`;
        writeLog('log.txt', message);
    });
}

module.exports = sendMessage;