// Normal functions
function func1(){
    console.log('Hello World');
}
func1();

let func2 = function (a, b){
    console.log(`The sum is ${a + b}`);
}
func2(2, 3);


// Arrow functions
let func3 = (a, b) => console.log(`The product is ${a * b}`);
func3(5, 6);


// One parameter,  we can remove the parenthesis
// Comma operator returns the result of final operation
let func4 = a => (a *= 2, a + 1);
console.log(func4(9));


// Unlimited arguments
let func5 = function () {
    console.log(arguments);
}
func5(2, 1, 5, 6);

let func6 = (...args) => console.log(args);
func6(3, 1, 10, 6);


// Self invoking functions
(function (a){
    console.log(a);
})(5);