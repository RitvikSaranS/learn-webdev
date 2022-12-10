const fs = require('fs');
const path = require('path');

// if the directory exists it doesnt create, else creates
if(!fs.existsSync('./newdir')){
    fs.mkdir('./newdir', err => {
        console.error(err);
    });
}else {
    fs.rmdir('./newdir', err => {
        console.error(err);
    });
}