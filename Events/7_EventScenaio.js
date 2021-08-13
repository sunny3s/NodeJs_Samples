const EventEmitter = require('events');
const fs = require('fs');

var eventEmitter = new EventEmitter();

eventEmitter.on('read',readFileContent);
eventEmitter.on('display',displayFileContent);
eventEmitter.on('finished',finishedData);

eventEmitter.emit('read','sample.txt');

function readFileContent(FileName){
    console.log(`Reading FileName ${FileName} started...`);
    fs.readFile(FileName,'utf8',readFile);
}

function readFile(error,data,FileName){
    console.log(`Reading FileName ${FileName} completed...`);
    eventEmitter.emit('display',data);
}

function displayFileContent(data){
    console.log('File Data:');
    console.log(data);
    eventEmitter.emit('finished');
}

function finishedData() {
    console.log("Reading and Printing File content job is done successfully.");
}

module.exports = eventEmitter;