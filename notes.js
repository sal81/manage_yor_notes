//import package
const chalk = require('chalk');
const fs = require('fs')
//define getnotes
// const getNotes = () => {
//     return "Your notes.....";
//     }
    //function to add  a note
     const addNote = (title,body)  => {
         const notes = loadNotes()
         //check duplicates
         const duplicateNotes = notes.find((note) => note.title === title)
         debugger
         //enter values to json
         if (!duplicateNotes){
            notes.push({
                title: title,
                body: body,
   
            })
           saveNotes(notes)
           console.log(chalk.green("This title is not taken."))

         }
         else{
            console.log(chalk.red("This title is taken."))
         }


    }

    //remove notes function
    const removeNote = (title) => {
        const notes = loadNotes()
        const notesToKeep = notes.filter((note) => note.title !== title)
            
        if (notesToKeep.length < notes.length){
            console.log(chalk.bgRed("Node " + title + " removed."))
            saveNotes(notesToKeep)
        }
        else{
            console.log(chalk.bgGreen("No Node to remove."))
        }
        
        
            
        
    }

    //list the nodes

    const listNote = (title,body) => {
        const notes = loadNotes()
        console.log(chalk.blueBright("List Of Notes"))
        notes.forEach((note) => {
            console.log(chalk.greenBright(note.title +" : "+ note.body))

        })
        }

    //read note
    const readNote = (title) =>{
        const notes = loadNotes()
        const notesToRead = notes.find((note) => note.title ===title)
        if (notesToRead){
        console.log(chalk.blue("Title : " , notesToRead.title))
        
        console.log(chalk.redBright("Body : " , notesToRead.body))
        }
        else{
            console.log(chalk.bgRed("Note not Found!"))
        }


    }

    



   //loading notes data from notes.json with try catch
    const loadNotes = () => {
        try{
            const dataBuffer = fs.readFileSync("notes.json")
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        }
        catch (e) {
            return []
        }
    }

        //write files to notes.json
        const saveNotes = (notes) => {
            const JSONdata = JSON.stringify(notes)
            fs.writeFileSync("notes.json",JSONdata)
    
        }


//modules for use in other scripts
module.exports = {
    // getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote

}