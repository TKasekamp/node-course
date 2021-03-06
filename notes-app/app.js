const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');
const getNote = require('./src/notes').getNote;

const {addNote, listNotes, removeNote} = require('./src/notes');

yargs.version('1.1.0');

const commands = [
  {
    command: 'add',
    describe: 'add a new note',
    builder: {
      title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'note body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: argv => addNote({title: argv.title, body: argv.body})
  },
  {
    command: 'remove',
    describe: 'remove new note',
    builder: {
      title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
      },
    },
    handler: argv => removeNote(argv.title)
  },
  {
    command: 'list',
    describe: 'list all notes',
    handler: listNotes
  },
  {
    command: 'read',
    describe: 'read note',
    builder: {
      title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
      },
    },
    handler: argv => getNote(argv.title)
  }
];

commands.forEach(c => yargs.command(c));

yargs.parse();
