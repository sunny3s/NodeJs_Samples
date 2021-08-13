const EventEmitter = require("events");

var rmv_event_Emitter = new EventEmitter();

var fun1 = (msg) => {
    console.log("Message from Function1:-"+msg);
};

var fun2 = (msg) => {
    console.log("Message from Function2:-"+msg);
};

rmv_event_Emitter.on('MyEvent',fun1);
rmv_event_Emitter.on('MyEvent',fun1);
rmv_event_Emitter.on('MyEvent',fun2);

rmv_event_Emitter.emit('MyEvent','argument occurred..');
rmv_event_Emitter.removeListener('MyEvent',fun1);
rmv_event_Emitter.emit('MyEvent','argument occurred 2..');

rmv_event_Emitter.removeAllListeners('MyEvent');
rmv_event_Emitter.emit('MyEvent','argument occurred 3..');

module.exports = rmv_event_Emitter;