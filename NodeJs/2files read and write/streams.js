const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'sample.txt'), {encoding: 'utf-8'});

const writeStream = fs.createWriteStream(path.join(__dirname, 'writestream.txt'));

/*
// listening for data, then write when arrived
readStream.on('data', (data) => {
    writeStream.write(data);
});
*/

// more easier approach
readStream.pipe(writeStream);

 