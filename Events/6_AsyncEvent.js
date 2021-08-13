// Importing events
const EventEmitter = require('events');

// Initializing event emitter instances
var asyncEmitter = new EventEmitter();

// Async function listening to myEvent
asyncEmitter.on('myEvent', (msg) => {
	setImmediate( () => {
		console.log("Message from async: " + msg);
	});
});

// Declaring listener fun to myEvent
var fun = (msg) => {
	console.log("Message from fun: " + msg);
};

// Listening to myEvent with fun
asyncEmitter.on('myEvent', fun);

// Triggering myEvent
asyncEmitter.emit('myEvent', "Event occurred");

module.exports = asyncEmitter;