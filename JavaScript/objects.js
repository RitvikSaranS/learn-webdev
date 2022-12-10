// sample object
let user = {
    userId: '55fefef',
    userName: 'Ritvik',
    isLogged: true,
    isAdmin: false,
    'email id': 'xyz@a.com', 
    greet: function () {console.log(`Hello i'am ${this.userName}`);}
};
console.log(user, user.userId, user["email id"]);
user.greet(); 

// keys
console.log(Object.keys(user));

// values
console.log(Object.values(user));

//  checks is a property exists
console.log(user.hasOwnProperty("isLogged"));

// deleting a property
delete user.isAdmin;
console.log(user);

// Inheritance
let Animal = {
    legs: 4,
    hands: 2,
    horns: 2
}

let dog = Object.create(Animal);
dog.hands = 0;
dog.horns = 0;

let deer = Object.create(Animal);
deer.hands = 0;
deer.horns = 2;

console.log(dog.legs, dog.hands, dog.horns);
console.log(deer.legs, deer.hands, deer.horns);
