const fs = require('fs');

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
    console.log('Note added')
  } else {
    console.log(`Note ${note.title} taken!`)
  }

}

const getNotes = () => {
  return loadNotes()
}

module.exports = {
  addNote,
  getNotes
};
