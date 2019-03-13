const chalk = require('chalk')
const validator = require('validator');
const {createNotes} = require('./notes')
console.log(createNotes());

console.log(validator.isEmail('asd@ad.com'));
console.log(validator.isURL('ads'));

console.log(`${chalk.green('Success!')} ${chalk.red.inverse.bold('bold')}`)

const log = console.log;
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
