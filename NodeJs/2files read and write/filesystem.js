/*
Call back hell approach

const fs = require('fs');
const path = require('path');


// reading
fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', (err, data) => {
    if(err) throw err;
    else console.log(data);
});

// writing
fs.writeFile(path.join(__dirname, 'writing.txt'), 'Im a pro coder. ', (err) => {
    if(err) throw err;
    else console.log('Writing complete');
    fs.appendFile(path.join(__dirname, 'writing.txt'), '\nPro on basics', (err) => {
        if(err) throw err;
        else console.log('Appending complete');
        fs.rename(path.join(__dirname, 'writing.txt'), path.join(__dirname, 'renamed.txt'), (err) => {
            if(err) throw err;
            else console.log('Renaming complete');
        });
    });
});

process.on('uncaughtException', err => {
    console.error(err);
    process.exit(1);
})
*/

// Async await approach, to avoid callback hell

const fs = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try{ 
        const data = await fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8');
        await fs.writeFile(path.join(__dirname, 'written.txt'), data);
        await fs.appendFile(path.join(__dirname, 'written.txt'), "\nI'am a passionate programmer");
        await fs.rename(path.join(__dirname, 'written.txt'), path.join(__dirname, 'renamed.txt'));
    }catch(err){
        console.error(err);
    }
}

fileOps();