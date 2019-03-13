const fs = require('fs');
const utils = require('./utils');
const {createNotes} = require('./notes')

const notes = 'notes.txt';
console.log(createNotes());

// fs.writeFileSync(notes, 'This file was created by node.js');

// fs.appendFileSync(notes, 'appended text');