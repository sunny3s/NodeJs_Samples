//Importing events
const EventEmitter = require('events');
//Initializing event emitter instances 
var eventEmitter = new EventEmitter();

// Registering to myEvent 
eventEmitter.on('MyEvent',function(msg){
    console.log(msg);
});

//eventEmitter.emit('MyEvent','MyFirst Event');

module.exports = eventEmitter;