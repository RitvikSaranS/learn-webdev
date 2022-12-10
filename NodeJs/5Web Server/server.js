const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const { logFileEvent, logErrorEvent } = require('./logEvents');
const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{};
const fileLogEmitter = new MyEventEmitter();
const errorLogEmitter = new MyEventEmitter();

fileLogEmitter.on('filelog', (filePath) => logFileEvent(filePath));
errorLogEmitter.on('errorlog', (filePath, errMsg) => logErrorEvent(filePath, errMsg));

const PORT = process.env.PORT || 3502;

const readSend = async (filePath, res) => {
    // fs.readFile(filePath, 'utf-8', (err, data) => {
    //     res.end(data);
    // });
    try{
        const data = await fsPromises.readFile(filePath, 'utf8');
        res.end(data);
        fileLogEmitter.emit('filelog', filePath);
    }catch(err){
        console.error(err);
        errorLogEmitter.emit('errorlog', filePath, err.message);
        res.statusCode = 500;
        res.end();
    }
}

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    /* 
    // innefficient way to respond, will have to code every cases

    switch(req.url){
        case '/' : case 'index.html' : {
            res.statusCode = 200;
            const filePath = path.join(__dirname, 'views', 'index.html');
            fs.readFile(filePath, 'utf-8', (err, data) => {
                res.end(data);
            })
            break;
        }
    }
    */
    const extension = path.extname(req.url);

    let contentType;

    // getting the extension
    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    // ternary statements for setting filepath by url
    let filePath = 
        contentType === 'text/html' && req.url === '/'
            ? path.join(__dirname, 'views', 'index.html')
                : contentType === 'text/html' && req.url.slice(-1) === '/' 
                    ? path.join(__dirname, 'views', req.url, 'index.html')
                        : contentType === 'text/html' 
                            ? path.join(__dirname, 'views', req.url)
                                : path.join(__dirname, req.url);

    // if url doesnt have an extension

    if (!extension && req.url.slice(-1) !== '/') filePath += '.html';
    // serve the file if it exists otherwise serve 404
    if (fs.existsSync(filePath)) {
        res.statusCode = 200;
        readSend(filePath, res);
    }
    else {
        switch(path.parse(filePath).base){
            case 'oldpage.html' : {
                res.writeHead(301, {'Location' : path.join(__dirname, 'views', 'newpage.html')});
                res.end();
                break;
            }
            case 'www.home.com' : {
                res.writeHead(301, {'Location' : '/'});
                res.end();
                break;
            }
            default : {
                res.statusCode = 404;
                readSend(path.join(__dirname, 'views', '404.html'), res);
            }
        }
    }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));