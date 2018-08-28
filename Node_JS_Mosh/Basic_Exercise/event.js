const EventEmitter = require('events');
const emitter =new EventEmitter();
const logger = require('./logger');

//Register a Listener.{Order matters here listner will come first because when a
// event emit it will check all the listner synchrounously}
emitter.on('messageLogged', (arg)=>{
    console.log('Event Handler',arg);
})

emitter.on('logging', (args=>{
    console.log('Logging Event', args);
    logger.log(args)
}))
//Raise an Event.
emitter.emit('messageLogged',{id:1, url:'https://'});

logger('message');

