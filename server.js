const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    console.log(`Incoming request: ${req.url}`);
    var path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/styles.css':
            path += 'styles.css';
            break;
        case '/img/Pi-symbol.png':
            path += 'img/Pi-symbol.png';
            break;
        case '/script.js':
            path += 'script.js';
            break;
        default:
            path += '404.html';
            break;
    }
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })
})

server.listen(80, '0.0.0.0', ()=>{
    console.log("Listening to port");
})