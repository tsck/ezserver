#!/usr/bin/env node

var mime    = require('mime-types'),
    http    = require('http'),
    fs      = require('fs'),
    path    = require('path'),
    util    = require('util');

function start() {
    const PORT = 3000;

    http.createServer((req, res) => {
        let pathUrl = '';

        if (req.url === '/') {
            pathUrl = path.join(__dirname, 'index.html');
        } else {
            pathUrl = path.join(__dirname, req.url);
        }

        let contentType = mime.lookup(pathUrl);
    
        util.log(`${req.method}: ${req.url} (${contentType})`);

        fs.readFile(pathUrl, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end(`Error: Issue opening requested file: ${err}`);
            } else {
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content, 'utf-8');
            }
        });
    }).listen(PORT, () => {
        console.log(`Server listening at http:\/\/localhost:${PORT}`);   
    });
}

start();

module.exports = start;
