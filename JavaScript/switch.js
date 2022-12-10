// To return something from switching, put it inside a function


let birthNum = 1;
switch(birthNum % 8){
    case 1 : case 4 : {
        console.log('Lower birth');
        break;
    }
    case 2 : case 5 : {
        console.log('Middle birth');
        break;
    }
    case 3 : case 6 : {
        console.log('Upper birth');
        break;
    }
    case 7 : {
        console.log('Side lower birth');
        break;
    }
    case 7 : {
        console.log('Side lower birth');
        break;
    }
    default: {
        console.log("Invalid birth number");
        break;
    }
    
}
