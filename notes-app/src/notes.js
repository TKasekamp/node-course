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
  const duplicateNote = notes.find(n => n.title === note.title)

  if (!duplicateNote) {
    writeNotes([...notes, note])
    console.log(chalk.green('Note added'))
  } else {
    console.log(chalk.red(`Note ${note.title} taken!`))
  }

}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(`${chalk.bold('Note:')} ${note.title}`)
  })
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

const getNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(n => n.title === title);
  if (note) {
    console.log(`${chalk.green.bold(`Found note`)} title: ${note.title} body: ${note.body}`)
  } else {
    console.log(chalk.red(`No note found!`))
  }

}

module.exports = {
  addNote,
  getNote,
  listNotes,
  removeNote
};
