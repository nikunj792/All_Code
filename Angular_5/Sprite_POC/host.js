var express = require('express');
var app = express();
app.use(express.static('svg_sprite'));
var port = 3000;
app.listen(port,()=>{console.log('server started at port',port);});

app.get('/getData',(req,res)=>{
    //DB Call
    res.send('Hi I am get');
})