const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views')

const env =process.env.NODE_ENV; // For environment check.
app.get('env'); // Same for environment check.

// console.log('process', env);
// console.log('using get', app.get('env')); // Will return you development, if not set any environment.
app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
if(app.get('env') ==='development'){
app.use(morgan('tiny'));
console.log('Morgan is enabled');
}

const courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
    {id: 4, name:'course4'}
]

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


// app.get('/api/courses',(req, res)=>{
//     res.status(200).send(courses);

// });

app.get('/api/courses',(req, res)=>{
    res.render('index',{title:'My title', message:'Hello'});

});

app.post('/api/courses',(req, res)=>{
    customer.create(req.body);
    res.status(200).send(req.body);
});
