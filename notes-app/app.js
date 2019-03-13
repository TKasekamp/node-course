const chalk = require('chalk')
const validator = require('validator');
const {createNotes} = require('./notes')
console.log(createNotes());

console.log(validator.isEmail('asd@ad.com'));
console.log(validator.isURL('ads'));

console.log(`${chalk.green('Success!')} ${chalk.bold('bold')}`)

