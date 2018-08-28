const http = require('http');

const server = http.createServer();

server.on('connection',(socket)=>{
    console.log('Started');
});
server.listen('3000');