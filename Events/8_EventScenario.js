const EventEmitter = require('events');

var eventEmitter = new EventEmitter();

eventEmitter.on('doorOpen',ringBell);

function ringBell() {
    console.log('ring ring ring...');
}

eventEmitter.emit('doorOpen');

module.exports = eventEmitter;