let a = 1;

// checks condition before executing
while(a < 1){
    console.log("while loop");
    a++;
}


// condition is checked after executing one time
// executes atleast once
do {
    console.log("do while loop");
    a++;
}while(a < 1)


// for of loop if index doesn't matter
let array = [8, 2, 3, 4];
for(let i of array){
    console.log(i)
}