const chalk = require('chalk')
const validator = require('validator');
const yargs = require('yargs');

const {createNotes} = require('./notes')
console.log(createNotes());

const val = () => {
  console.log(validator.isEmail('asd@ad.com'));
  console.log(validator.isURL('ads'));
}

const printChalk = () => {
  console.log(`${chalk.green('Success!')} ${chalk.red.inverse.bold('bold')}`)

  const log = console.log;
  log(chalk.keyword('orange')('Yay for orange colored text!'));
  log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
  log(chalk.hex('#DEADED').bold('Bold gray!'));
}

// const command = process.argv[2]
//
// if (command === 'add') {
//   console.log('adding note')
// } else if (command === 'remove') {
//   console.log('Removing note')
// }

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'add a new note',
  handler: () => console.log('adding new note')
})

yargs.command({
  command: 'remove',
  describe: 'remove new note',
  handler: () => console.log('removing new note')
})

console.log(yargs.argv)

