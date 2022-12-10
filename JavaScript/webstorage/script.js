import printing from './modules.js'
import {printName as nameprint} from './modules.js'
// import { printName } from './modules';
const user = {
    userName: 'Ritvik',
    email: 'code@gmail.com',
    greet: () => {
        console.log(`Hey it is ${this.userName}`)
    }
}
// sessionStorage.setItem('sessionStore', user);
// const store = sessionStorage.getItem('sessionStore');
// console.log(store);  
// gives [object Object] it tried to convert user to a string.

// to store effectively use JSON.stringify, JSON.parse converts json to js object

sessionStorage.setItem('sessionStore', JSON.stringify(user));
const store = JSON.parse(sessionStorage.getItem('sessionStore'));
console.log(store); 

// wont be able to retrieve functions
nameprint();
printing();

// higher order functions

const arr = [1,2,3,4,5];

// do something to the elements
arr.forEach((element) => {
    console.log(element);
});

// returns element with that satisfies the condition
console.log(arr.filter((element) => {
    return element === 2;
}));

// returns in the form of an array, ignores empty elements.
console.log(
    arr.map((element) => {
        return element;
    })
);

// sum is the accumulator return values are stored in sum in each call
console.log(
    arr.reduce((sum, element) => {
        return sum + element;
    })
);

const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if(!error) resolve("resolved");
    else reject('rejected');
});

myPromise.then(value => {console.log(value)}).catch(err => console.error(err));