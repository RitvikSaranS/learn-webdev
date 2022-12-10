// Swapping numbers
let a = 2, b  = 3;
console.log(a, b);
[b, a] = [a, b];  //destructuring assignment
console.log(a, b);

// destructuring objects to get its values
const obj = {
    first: 2,
    second: 6
}
let { first, second } = obj; 
console.log(first, second);

let {first: c, second: d} = obj;
console.log(c, d);
 
// using functions with destructuring 
// destrutures the object and pulls out the second number
let secondNum = function ({second}) {
    console.log(`second number is ${second}`);
}
secondNum(obj);
