var EventEmitter = require('events');

var listerEmit = new EventEmitter();

var fun1 = (msg)=>{
    console.log('Message from Function1:-'+msg);
}

var fun2 = (msg) => {
    console.log('Message from Function2:-'+msg);
}

listerEmit.addListener('MyEvent',fun1);

listerEmit.prependListener('MyEvent',fun2);

console.log(listerEmit.listeners('MyEvent'));

console.log(listerEmit.listenerCount('MyEvent'));

listerEmit.emit('MyEvent','Error Occured..');

module.exports = listerEmit;