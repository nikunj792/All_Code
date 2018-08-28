// var obj ={
//     name: "nikunj"
// };

// var stringObj = JSON.stringify(obj);
// console.log("type of ", typeof(stringObj));
// console.log("String is ", stringObj);

// var personString = '{"name":"Nikunj","age":25}';

// var person = JSON.parse(personString);

// console.log("type of ", typeof(person));
// console.log("Object is ", person);

const fs = require('fs');

var orginalNote = {
    title: "Some Title",
    body: "Some Body"
};

var orginalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('notes.json', orginalNoteString);
var readingFromFile = fs.readFileSync('notes.json');
console.log("Reading From Notes Json", JSON.parse(readingFromFile));

 