// Allows for colored logginng
require('colors');

const _createServer = require('./lib/createServer');

// Singleton server instance
let instance = null;

const defaultConfig = {
  rootPath: './',
  port: 3000,
  logging: true
};

class EZServer {
  constructor(config) {
    this.rootPath = config.rootPath ? config.rootPath : defaultConfig.rootPath;
    this.logging = config.logging ? config.logging : defaultConfig.logging;
    this.port = config.port ? config.port : defaultConfig.port;

    if (instance === null) {
      instance = _createServer(this.rootPath, this.logging);
    }
  }

  start() {
    instance.listen(this.port, () => {
      if (this.logging) {
        let logString = 'Serving ' + this.rootPath.cyan + ' directory @ ';
        logString += `http://localhost:${this.port}`.cyan;
        console.log(logString);
        console.log();
      }
    });
  }

  stop() {
    instance.close(() => {
      console.log('Server closed');
    });
  }
}

module.exports = EZServer;
