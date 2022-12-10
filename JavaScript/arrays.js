// array literal - better
let arr = [1, 2, 5];

// from array class
let arr1 = new Array();

// length
console.log(arr.length);

// adding elements to ends
arr.push(8);
arr.pop();
arr.shift();
arr.unshift(4);
console.log();

// slicing the array
console.log(arr);
console.log(arr.slice(0, 2));
console.log(arr);
console.log();

//splicing
arr = [1,2,3,4,5,6];
console.log(arr.splice(4));  // remove everything from index 2
console.log(arr);
console.log(arr.splice(0, 1));  // remove one character from index 0
console.log(arr);
console.log(arr.splice(2, 0, 5, 6));  // remove zero characters from index 2 and adds 5, 6.
console.log(arr);
console.log();

// Adding an element at specified index using splice
console.log(arr);
console.log(arr.splice(2, 0, 7));  // Adds 7 at index 2.
console.log(arr);
console.log();

// checks index
console.log(arr.indexOf(7)); //firstIndexOf, lastIndexOf
console.log(arr.includes(7));
console.log(Array.toString(arr));
console.log(Array.isArray(arr));
console.log();


arr.reverse();
console.log(arr);

//sorting
arr.sort();
console.log(arr);
arr.sort().reverse(); // reverse sort

