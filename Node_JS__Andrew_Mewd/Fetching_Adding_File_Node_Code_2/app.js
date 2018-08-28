console.log('Started App.Js');

//Node InBuilt modules.
const fs = require('fs');
const os = require('os');

//Third Party Module.
const uniq = require('lodash/uniq');
const isUndefined = require('lodash/isUndefined');

//For taking the command line arguments
const yargs = require('yargs');

//User Created Files
const notes = require('./notes.js');

//OS module to get the detail of Logged in User.
var user = os.userInfo();

//For taking the command line argument.
const argv = yargs.argv;
// var command = process.argv[2];
var command = argv._[0];

console.log(`with out Yargs ===> ${command}`);
console.log('Yargs ===>', JSON.stringify(argv));

if(command === 'add'){
   var note = notes.addNotes(argv.title, argv.body);
   if(!isUndefined(note)){
       console.log("Successfully Created")
   }
   else{
       console.log("Please Enter Unique Title");
   }
}
else if(command === 'list'){
    notes.getNotes(argv.title);
}
else if(command === 'remove'){
   var flag = notes.remove(argv.title);
   var message = flag ? 'Removed':'Not Removed';
   console.log(message);
}
else{
    console.log("Command not recognized");
}



