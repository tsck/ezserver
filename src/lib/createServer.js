const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = require('mime-types');

// Allows for colored logginng
require('colors');

module.exports = function _createServer(rootPath, logging) {
  if (rootPath === undefined) {
    throw new Error('Function _createServer() must be passed a valid rootPath');
  }

  return http.createServer((req, res) => {
    let pathUrl = '';

    if (req.url === '/') {
      pathUrl = path.join(rootPath, 'index.html');
    } else {
      pathUrl = path.join(rootPath, req.url);
    }

    const contentType = mime.lookup(pathUrl);

    if (logging) {
      console.log('Request: ' + `${req.method}`.red + ' - ' + `${req.url}`.cyan + ` (${contentType})`);
    }

    fs.readFile(pathUrl, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end(`File ${pathUrl} not found`);
      } else {
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf-8');
      }
    });
  });
};
