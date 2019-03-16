const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

const {createNotes} = require('./notes');
console.log(createNotes());

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
    handler: argv => console.log('adding new note', argv.title, argv.body)
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
];

commands.forEach(c => yargs.command(c));

yargs.parse();
