const { resolve } = require('path');
const { appendFile, mkdir, stat } = require('fs');

const logDir = resolve(__dirname, 'logs');
const logFile = resolve(logDir, 'app.log');

function log(file, msg, cb) {
  const now = new Date();
  msg = `[${now.toISOString()}] ${msg}\n`;
  appendFile(file, msg, cb);
}

console.time('Thread idle');
console.time('Done');
stat(logDir, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    if (err.code === 'ENOENT') {
      return mkdir(logDir, (err) => {
        if (err) {
          return console.log(`Err : ${err.message}`);
        }
        next();
      });
    }
    return console.log(`Err : ${err.message}`);
  }
  next();
});
console.timeEnd('Thread idle');

// Callback Hell / Pyramid of Doom
function next() {
  log(logFile, 'Ligne 1', (err) => {
    if (err) {
      return console.log(`Err : ${err.message}`);
    }
    log(logFile, 'Ligne 2', (err) => {
      if (err) {
        return console.log(`Err : ${err.message}`);
      }
      log(logFile, 'Ligne 3', (err) => {
        if (err) {
          return console.log(`Err : ${err.message}`);
        }
        log(logFile, 'Ligne 4', (err) => {
          if (err) {
            return console.log(`Err : ${err.message}`);
          }
          log(logFile, 'Ligne 5', (err) => {
            if (err) {
              return console.log(`Err : ${err.message}`);
            }
            console.timeEnd('Done');
          });
        });
      });
    });
  });
}
