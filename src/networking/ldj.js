const events = require('events');
const util = require('util');

//client constructor
LDJClient = (stream) => {
    events.EventEmitter.call(this);
    util.inherits(LDJClient, events.EventEmitter);
};