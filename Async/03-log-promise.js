const { resolve } = require('path');
const { appendFile, mkdir, stat } = require('fs-extra');

const logDir = resolve(__dirname, 'logs');
const logFile = resolve(logDir, 'app.log');

function log(file, msg) {
  const now = new Date();
  msg = `[${now.toISOString()}] ${msg}\n`;
  return appendFile(file, msg);
}

stat(logDir)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .catch((err) => {
    console.log(`Err : ${err.message}`);
  });
