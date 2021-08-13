// Importing events
const EventEmitter = require('events');
// Initializing event emitter instances
var listnerEmitter = new EventEmitter();

// Register to error
listnerEmitter.on('error',(err) =>{
    console.error('whoops! there was an error');
});

// Register to NewListener
listnerEmitter.on('newListener',(event,listener) =>{
    console.log(`The listener is added to ${event}`);
});

// Register to RemoveListener
listnerEmitter.on('removeListener',(event,listener) =>{
    console.log(`The listener is removed to ${event}`);
});

// Declaring listener fun1 to myEvent1
var fun1 = (msg)=>{
    console.log('Message from function1:-'+msg);
}

// Declaring listener fun1 to myEvent2
var fun2 = (msg)=>{
    console.log('Message from function2:-'+msg);
}

listnerEmitter.on('MyEvent',fun1);
listnerEmitter.on('MyEvent',fun2);

// Removing listener
listnerEmitter.off('MyEvent', fun1);
  
listnerEmitter.emit('MyEvent','Event added..!');

listnerEmitter.emit('Error',new Error('Whoops..!'));


module.exports = listnerEmitter;

/*
// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
var eventEmitter = new EventEmitter();

// Register to error
eventEmitter.on('error', (err) => {
	console.error('whoops! there was an error');
});

// Register to newListener
eventEmitter.on( 'newListener', (event, listener) => {
	console.log(`The listener is added to ${event}`);
});

// Register to removeListener
eventEmitter.on( 'removeListener', (event, listener) => {
	console.log(`The listener is removed from ${event}`);
});

// Declaring listener fun1 to myEvent1
var fun1 = (msg) => {
	console.log("Message from fun1: " + msg);
};

// Declaring listener fun2 to myEvent2
var fun2 = (msg) => {
	console.log("Message from fun2: " + msg);
};

// Listening to myEvent with fun1 and fun2
eventEmitter.on('myEvent', fun1);
eventEmitter.on('myEvent', fun2);

// Removing listener
eventEmitter.off('myEvent', fun1);

// Triggering myEvent
eventEmitter.emit('myEvent', 'Event occurred');

// Triggering error
eventEmitter.emit('error', new Error('whoops!'));

module.exports = eventEmitter;*/