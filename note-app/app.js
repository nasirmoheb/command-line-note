//requiring modules
const { log } = require('console');
const yargs = require('yargs');
var notes = require('./notes.js');

var argv = yargs.argv;

/* --Instruction--
    1. How can we add alias to our commands?
    2.Give the user feedback if the command is not completely provided. For example, if someone want to add a note with title only.
    3. Hint: use yarqs options.
*/

var command = argv._[0];

if (command == 'add') {
  note = notes.addNotes(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note already exist.');
  }
} else if (command === 'read') {
  /* --Instruction--
        1. Get a title from the command line and pass to the getNote() function inside notes.js.
        2. Print the note if the note is found
        3. Print 'Note note found.'
       
    */

  /* --Code--
      write your code here
    */
  const note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note note found.');
  }
} else if (command === 'list') {
  allNotes = notes.getAll();

  /* --Instruction--
        1. Print the number of notes (How many notes exist in the file.)
    */

  /* --Code---
        write your code here
    */

  allNotes.forEach((note) => {
    notes.logNote(note);
  });
} else if (command === 'remove') {
  /* --Instruction--
        1. Get a title from the command line
        2. Pass the title to removeNote function in notes.js
        3. Give use the feedback wether or not the note was removed.
    */
  /* --Code---
        write your code here
    */
  const feedback = notes.removeNote(argv.title);
  if (feedback) {
    console.log('Note removed');
  } else {
    console.log('Note does not removed');
  }
} else {
  console.log('command is not recognized.');
}
