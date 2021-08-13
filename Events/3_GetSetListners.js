var EventEmitter = require('events');

var gsEmitter1 = new EventEmitter();
var gsEmitter2 = new EventEmitter();

console.log('Default Max listners of EventEmitter1:-'+gsEmitter1.getMaxListeners());
console.log('Default Max listners of EventEmitter2:-'+gsEmitter2.getMaxListeners());

EventEmitter.defaultMaxListeners = 2;

console.log('Default Max listners of EventEmitter1:-'+gsEmitter1.getMaxListeners());
console.log('Default Max listners of EventEmitter2:-'+gsEmitter2.getMaxListeners());

gsEmitter1.setMaxListeners(5);

console.log('Default Max listners of EventEmitter1:-'+gsEmitter1.getMaxListeners());
console.log('Default Max listners of EventEmitter2:-'+gsEmitter2.getMaxListeners());

var fun1 = (msg) => {
    console.log("Message from Function1:-"+msg);
};

var fun2 = (msg) => {
    console.log("Message from Function2:-"+msg);
};

// Listening to myEvent1 with 3 instance of fun1
for(var i = 0; i < 3; i++) {
    gsEmitter1.addListener('myEvent1', fun1)
}
  
// Listening to myEvent2 with 3 instance of fun2
for(var i = 0; i < 3; i++){
    gsEmitter2.addListener('myEvent2', fun2)
}

// Emitting myEvent1 and myEvent2
gsEmitter1.emit('myEvent1', 'Event1 occurred');
gsEmitter2.emit('myEvent2', 'Event2 occurred');

module.exports.gsEmits = [gsEmitter1,gsEmitter2];