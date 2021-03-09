//requiring modules
const yargs = require('yargs');
var notes = require('./notes.js')


var argv = yargs.argv;

/* Instruction

*/

// Getting the first command after node index.js
var command = argv._[0];

if(command == 'add'){
    note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note)
    }else{
        console.log('Note already exist.');
    }
}

else if(command === 'read'){

    /* --Instruction--
        1. Get a title from the command line and pass to the getNote() function inside notes.js.
        2. Print the note if the note is found
        3. Print 'Note note found.'
       
    */

    /* --Code--
      write your code here
    */
}
else if(command === 'list'){
    allNotes = notes.getAll();


    /* --Instruction--
        1. Print the number of notes (How many notes exist in the file.)
    */


    /* --Code---
        write your code here
    */

    allNotes.forEach((note) => {
        notes.logNote(note)
    });
}
else if(command === 'remove'){

    /* --Instruction--
        1. Get a title from the command line
        2. Pass the title to removeNote function in notes.js
        3. Give use the feedback wether or not the note was created.
    */

    
    /* --Code---
        write your code here
    */


}
else{
    console.log('command is not recognized.')
}

