const chalk = require('chalk')
const validator = require('validator');
const yargs = require('yargs');

const {createNotes} = require('./notes')
console.log(createNotes());

const commands = [
  {
    command: 'add',
    describe: 'add a new note',
    handler: () => console.log('adding new note')
  },
  {
    command: 'remove',
    describe: 'remove new note',
    handler: () => console.log('removing new note')
  },
  {
    command: 'list',
    describe: 'list all notes',
    handler: () => console.log('listing notes')
  },
  {
    command: 'read',
    describe: 'read note',
    handler: () => console.log('reading notes')
  }
]

yargs.version('1.1.0')

commands.forEach(c => yargs.command(c))

console.log(yargs.argv)
