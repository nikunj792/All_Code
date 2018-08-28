const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app.use(express.json());

app.use(function(req, res, next){
    console.log('Logging');
    next();
})

app.use(function(req, res, next){
    console.log('Authentication ');
    next();
})
app.listen(3000,()=>{
    console.log('Started');
});


const customerSchema = new Schema({
    name:{
        type:String
    },
    id:{
        type:Number
    }
});

mongoose.connect("mongodb://localhost/customer");
const customer = mongoose.model('customer', customerSchema);

app.get('/api/customer',(req, res)=>{
    res.status(200).send('GET');

});

app.post('/api/customer',(req, res)=>{
    customer.create(req.body);
    res.status(200).send(req.body);
});
