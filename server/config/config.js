const path = require('path');

const config = {
  rootPath: path.join(__dirname, '/..'),
  db: 'mongodb://corpse_mongo:27017',
};

module.exports = config;
