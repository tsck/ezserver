const _createServer = require('./createServer');

// Singleton server instance
let instance = null;

class EZServer {
  constructor() {
    if (instance === null) {
      instance = _createServer();
    }
  }

  start(port = 3000) {
    instance.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  }

  stop() {
    instance.close(() => {
      console.log(`Server closed`);
    });
  }
};

module.exports = EZServer;
