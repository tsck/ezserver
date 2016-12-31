# EZServer

[![travis build](https://img.shields.io/travis/tsck/ezserver.svg)](https://travis-ci.org/tsck/ezserver)
[![version](https://img.shields.io/npm/v/ezserver.svg)](https://www.npmjs.com/package/ezserver)
[![license](https://img.shields.io/github/license/tsck/ezserver.svg)](https://github.com/tsck/ezserver/blob/master/LICENSE)

EZServer is a simple static server.

## Download
```bash
$ npm install --save ezserver
```
## Usage
```javascript
const EZServer = require('ezserver');
let server = new EZServer();

// start server (port will default to 3000 in none given)
server.start(3000);

// stop server
server.stop();
```
