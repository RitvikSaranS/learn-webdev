let Animal = {
    legs: 4,
    hands: 2,
    horns: 2
}

let stringMSG = JSON.stringify(Animal);
console.log(stringMSG);
console.log(JSON.parse(stringMSG));