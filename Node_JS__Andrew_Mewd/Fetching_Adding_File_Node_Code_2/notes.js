console.log('Started Notes.Js');
var fs = require('fs');

var fetchNotes = () =>{
    try{
        var existingData = fs.readFileSync('./samplefiles/notes.json');        
        return JSON.parse(existingData);
    }
    catch(error){
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('./samplefiles/notes.json', JSON.stringify(notes));
};

var addNotes =(title, body)=>{
    var notes = fetchNotes();
    var flag = false;
    var note = {
        title,
        body
    };
    notes.forEach(element => {
        if(element.title===note.title){
            flag = true
            return flag
        }
        else{
            return flag
        }
    });
    
    if(!flag){
        notes.push(note);
        saveNotes(notes);
        return notes;        
    }    
}

var getNotes = (title) =>{
    console.log("All Notes", title);
}

var remove = (title) =>{
    var notes = fetchNotes();
    var filteredNote = notes.filter(note=>note.title !== title);
    saveNotes(filteredNote);
    return (notes.length !== filteredNote.length);
}
module.exports = {
    addNotes,
    getNotes,
    remove
}
