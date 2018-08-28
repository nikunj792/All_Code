const EventEmitter = require('events');
const emitter =new EventEmitter();
const url = 'http://mylogger.io/log';

function log(message){
    console.log('Logger File',message);
    emitter.emit('logging',{message:'Logged In'});

}

module.exports.log = log;