const fs = require('fs');

var fetchNote = () => {
    try {

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);

    } catch (error) {
       return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNotes = (title, body) => {
    var notes = fetchNote()
    var note = {
        title,
        body
    };
 
    /*
        check if a note already exists?
        if yes; then return 'true'
        if not; save the note. and print Note already exist.
    */

    saveNote(notes)
    return note;
    
}

var getAll = () => {
    return fetchNote();
}

var getNote = (title) => {
    // fetch the notes
    // filter notes, get the one with title of argument
    // print the note
  
};

var removeNote = (title) => {
    // fetch the notes
    // filter notes, remove the one with title of the argument.
    // save new notes array.

    /*
        write you code here.

    */
   
};

var logNote = (note) =>{
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNotes,
    getAll,
    logNote
}
