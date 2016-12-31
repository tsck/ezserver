// Allows for colored logginng
require('colors');

const _createServer = require('./lib/createServer');

// Singleton server instance
let instance = null;

class EZServer {
  constructor(rootPath = './', logging = true) {
    this.rootPath = rootPath;
    this.logging = logging;
    if (instance === null) {
      instance = _createServer(this.rootPath, this.logging);
    }
  }

  start(port = 3000) {
    instance.listen(port, () => {
      if (this.logging) {
        console.log('Serving ' + this.rootPath.cyan + ' directory @ ' + `http://localhost:${port}`.cyan);
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
