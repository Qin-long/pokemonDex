const http = require('http');
const app = require('./app');
const sqlite3 = require('sqlite3').verbose();
global.db = new sqlite3.Database('/E:/Download/pokemon-wikibase.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Could not connect to database:', err.message);
  } else {
    console.log('Connected to database');
  }
});
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);