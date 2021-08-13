var EventEmit = require('./1_InitEventEx');
var rmvEventEmit = require('./2_RemoveListener');
var gsEmits = require('./3_GetSetListners');

// Triggering myEvent
EventEmit.emit('MyEvent','My First Event');

var first = gsEmits[0];
console.log(first);