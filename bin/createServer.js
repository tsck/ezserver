const http = require('http');
const fs = require('fs');
const path = require('path');
const util = require('util');

const mime = require('mime-types');

module.exports = function _createServer() {
  return http.createServer((req, res) => {
    let pathUrl = '';

    if (req.url === '/') {
      pathUrl = path.join('./', 'index.html');
    } else {
      pathUrl = path.join('./', req.url);
    }

    const contentType = mime.lookup(pathUrl);

    util.log(`${req.method}: ${req.url} (${contentType})`);

    fs.readFile(pathUrl, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end(`404 File not found @ ${pathUrl}`);
      } else {
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf-8');
      }
    });
  });
};
