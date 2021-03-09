//requiring modules
const yargs = require('yargs');
var notes = require('./notes.js')


var argv = yargs.argv;

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
  /*
    write your code here

  */
}
else if(command === 'list'){
    allNotes = notes.getAll();


    //Print the number of notes (How many notes exist in the file.).

    /*
        your code here
    */

    allNotes.forEach((note) => {
        notes.logNote(note)
    });
}
else if(command === 'remove'){
   /*
        write your code here

   */
}
else{
    console.log('command is not recognized.')
}

