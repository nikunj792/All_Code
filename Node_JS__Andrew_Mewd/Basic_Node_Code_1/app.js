console.log('Started App.Js');

//Node InBuilt modules.
const fs = require('fs');
const os = require('os');

//Third Party Module.
const uniq = require('lodash/uniq');

//User Created Files
const notes = require('./notes.js');

//OS module to get the detail of Logged in User.
var user = os.userInfo();

//Module for appending Content in files.
fs.appendFile('./samplefiles/greeting.txt',`Hello ${JSON.stringify(user)}`,(err)=>{
    console.log('Appending is done in Greeting File');
});

fs.appendFile('./samplefiles/sample.txt',`Hello !${user.username} ! Your age is ${notes.age}`,(err)=>{
    console.log('Appending is done in Sample File is Done');
});

console.log(notes.addNotes());

var res = notes.add(3,8);
console.log(`Sum of two number is ${res}`);

//Using lodash module.
var array = ['Nikunj',1,'Nikunj',2,3,3,3,4,5,6];
console.log('Unique array is', uniq(array));


// You Can use fs.appendFileSync("FileName","text to append");
// os.userInfo() return logged in user.s