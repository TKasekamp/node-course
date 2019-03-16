const fs = require('fs');

const fileName = '1-json.json';
const buffered = fs.readFileSync(fileName);

const data = JSON.parse(buffered.toString());

console.log(data);
const mydata = {...data, name: "Tõnis", age: 25};

fs.writeFileSync(fileName, JSON.stringify(mydata));
