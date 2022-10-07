/*
const os = require ('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem', os.freemem(), 'bytes');
console.log('total mem', os.totalmem(), 'bytes');

*/

//const fs = require('fs');

/*
fs.writeFile('./texto.txt', 'linea uno', function (err){
    if (err){
        console.log(err);
    }
    console.log('archivo creado');
});

console.log('ultima linea de codigo');
*/

/*
fs.readFile('./texto.txt', function (err, data){
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
*/
/*
const http = require('http');

const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hola Grover desde Nodejs</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.cyan);
});
*/

const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Grover desde Express y Nodejs</h1>');
    res.end();
});

server.listen(3000, () => { console.log('Server on port 3000'.red)});