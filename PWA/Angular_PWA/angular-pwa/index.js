var express = require('express');
var app = express();
app.use(express.static('src'));
app.listen(3000,()=>console.log('I am started'));

app.get('/get',(req,res)=>{
    const data = {
        name:'Nikunj Agarwal'
    }
    res.status(200).send({title:'My title', message:'Hello'});
})