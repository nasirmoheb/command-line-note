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
  var notes = fetchNote();
  var note = {
    title,
    body,
  };

  /* --instruction
        check if a note already exists?
        if yes; then return 'true'
        if not; save the note. and print the newly added note.
    */

  /* --code
            write your code here
        */

  for (let n of notes) {
    if (n.title === title) {
      return false;
    }
  }

  notes.push(note);
  saveNote(notes);
  return note;
};

var getAll = () => {
  return fetchNote();
};

var getNote = (title) => {
  /* --Instruction--
        1. Fetch the notes
        2. Filter notes get the one with title of argument
        3. Return the note if found it.
    */

  /* --Code--
      write your code here
    */

  const notes = fetchNote();
  for (let note of notes) {
    if (note.title === title) {
      return note;
    }
  }
};

var removeNote = (title) => {
  /* --Instruction--
        1. fetch the notes
        2. filter notes, remove the one with title of the argument.
        3. save new notes array.
      */
  /* --Code--
      write your code here
    */
  const notes = fetchNote();

  for (let note of notes) {
    if (title === note.title) {
      notes.splice(notes.indexOf(notes), 1);
      saveNote(notes);
      return true;
    }
  }
};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNotes,
  getAll,
  logNote,
  getNote,
  removeNote,
};
