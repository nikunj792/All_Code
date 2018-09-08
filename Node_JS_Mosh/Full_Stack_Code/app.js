const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.listen(3000,()=>console.log('Started'));

const numberSchema ={
    intNumber:{
        type: Number
    },
    floatNumber:{
        type:Number
    }
}

mongoose.connect('mongodb://localhost/number');
const numberArray = mongoose.model('number',numberSchema);

app.get('/getNum',(req, res)=>{
    numberArray.find({}).then(data=>
        res.status(200).send({data}))
});

app.post('/postNum',(req,res)=>{
    const num = new numberArray({intNumber: req.body.input})
    num.save();
    res.status(200).send({value:req.body.input});
})