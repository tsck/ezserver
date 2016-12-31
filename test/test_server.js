const Server = require('../src/index');
const server = new Server({ rootPath: './public' });
server.start();
