const fs = require('fs');
const chalk = require('chalk');

const filePath = 'notes.json';

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync(filePath)
    return JSON.parse(databuffer.toString())
  } catch (e) {
    return []
  }
}

const writeNotes = (notes) => {
  fs.writeFileSync(filePath, JSON.stringify(notes));
}

const addNote = (note) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(n => n.title === note.title)

  if (duplicateNotes.length === 0) {
    writeNotes([...notes, note])
    console.log(chalk.green('Note added'))
  } else {
    console.log(chalk.red(`Note ${note.title} taken!`))
  }

}

const getNotes = () => {
  return loadNotes()
}

const removeNote = (title) => {
  const notes = loadNotes()

  const filteredNotes = notes.filter(n => n.title !== title)
  if (notes.length === filteredNotes.length) {
    console.log(chalk.red.inverse(`Found no notes to remove!`))
  } else {
    console.log(chalk.green.inverse(`Removing note ${title}`))
  }
  writeNotes(filteredNotes)
}

module.exports = {
  addNote,
  getNotes,
  removeNote
};
