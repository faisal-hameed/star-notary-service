const LevelDB = require('./level_db.js');

var GLOBALS = {
  'StarRegistry' : 'starRegistry',
  'ValidationWindow' : 300, // 300 sec = 5 min
  'MaxStoryLength' : 250, // 250 words
  'NotaryDB' : new LevelDB('./db/notary-db')
}

module.exports = GLOBALS;
