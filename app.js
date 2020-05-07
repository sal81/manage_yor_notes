const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs')
const notes = require('./notes.js');

const log = console.log;


// add, remove, read, list

//add
yargs.command( {
    command : "add",
    describe : "Adding a note!",
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : "string"
        },
        body : {
            describe : "Note body",
            demandOption : true,
            type : "string"
        },

    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        // log(chalk.magenta("Title : ")+ argv.title)
        // log(chalk.magenta("Body : ")+ argv.body)
    }
})

//remove
yargs.command({
    command : "remove",
    describe : "Removing a note!",
    builder : {
        title : {
            describe : "Remove Note",
            type : "string"

        },

    },
    handler(argv){
        // log(chalk.yellow("Removing new note!"))
        notes.removeNote(argv.title)
    }
})

//list
yargs.command({
    command : "list",
    describe: "Listing a note!",
    handler(){
        notes.listNote()
    }
})

//read
yargs.command({
    command : "read",
    describe: "Reading a note!",
    builder : {
        title : {
            describe : "Read Note",
            demandOption : true,
            type : "string"
        },
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


//log(process.argv);
yargs.parse()

