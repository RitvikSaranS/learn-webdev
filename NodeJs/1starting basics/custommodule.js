const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a/b; 

// another way to export
// exports.add = (a, b) => a + b;
// exports.multiply = (a, b) => a * b;
// exports.divide = (a, b) => a/b;

module.exports = {add, multiply, divide};