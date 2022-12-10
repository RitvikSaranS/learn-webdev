
class Mobile {
    constructor(length, cameras) {
        this.length = length;
        this.cameras = cameras;
        // this.#password = password;
    }
    takePicture = function () {
        console.log('took the picture');
    }
}

class Redmi extends Mobile {
    #password; // private field whould be declared first
    constructor(length, cameras, internet, password) {
        super(length, cameras); // constuctor of the parent class
        this.internet = internet;
        this.#password = password;
    }
    getPassword = function(){
        console.log(this.#password);
    }
}

const redmiPhone = new Redmi(10, 2, true, 123);
redmiPhone.takePicture();
console.log(redmiPhone.cameras);
console.log(redmiPhone.length);
console.log(redmiPhone.internet);
console.log(redmiPhone.password); //undefined
redmiPhone.getPassword(); // will return the password