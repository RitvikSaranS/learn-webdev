// catching error
try {
    console.log(hgh);
}catch(err){
    console.log(err.name);
    console.log();
    console.log(err.stack);
    console.log();
    console.log(err.message);
}

let a = 1;
try {
    if(a === 1) throw new Error('Number is one');
}catch(err){
    console.log(err.message);
}

