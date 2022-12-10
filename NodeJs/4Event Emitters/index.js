const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{};

const myEmitter = new MyEventEmitter();

myEmitter.on('myevent', (msg) => logEvents(msg));

myEmitter.emit('myevent', 'Ritvik');
myEmitter.emit('myevent', 'Karthik');
myEmitter.emit('myevent', 'Divya');