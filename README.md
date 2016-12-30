# Kwik-E-Serve

[![travis build](https://img.shields.io/travis/tsck/kwik-e-serve.svg)](https://travis-ci.org/tsck/kwik-e-serve)
[![version](https://img.shields.io/npm/v/kwik-e-serve.svg)](https://www.npmjs.com/package/kwik-e-serve)
[![license](https://img.shields.io/github/license/tsck/kwik-e-serve.svg)](https://github.com/tsck/kwik-e-serve/blob/master/LICENSE)

Kwik-E-Serve is a simple static server.

## Download
```bash
$ npm install --save kwik-e-serve
```
## Usage
```javascript
const Server = require('kwik-e-serve');
let server = new Server();

// start server (port will default to 3000 in none given)
server.start(3000);

// stop server
server.stop();
```
