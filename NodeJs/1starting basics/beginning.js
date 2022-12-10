const os = require('os');
const path = require('path');
const {add, multiply, divide} = require('./custommodule');

// os
console.log(os.type());
console.log(os.homedir());
console.log(os.version());

console.log(__dirname);
console.log(__filename);

// path
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// importing from custom module
console.log(add(2, 4));
console.log(multiply(2, 6));
console.log(divide(8, 2));