const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.listen(3000,()=>console.log('Started'));

const voiceSchema ={
    voiceData:{
        type: String
    }
}

mongoose.connect('mongodb://localhost/voice');
// const voice = mongoose.model('voice',voiceSchema);

app.get('/getNum',(req, res)=>{
    const data ={
        val:'nikunj1'
    }
    // voice.find({}).then(data=>console.log('sdsa', data));
    res.status(200).send({data});
});

// app.post('/getPost',(req, res)=>{
//     console.log('aaa', req.body);
//    // res.status(200).send({data});
// });