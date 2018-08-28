console.log('Started Notes.Js');
//Adding the property in the exports Object.
// module.exports.age = '25';

module.exports.addNotes = () =>{
    console.log('addNotes is calling');
    return 'Hello';
}

module.exports.add = (num1, num2) =>{
    return(num1+num2);
}