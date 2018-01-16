const { resolve } = require('path');
const { appendFileSync, mkdirSync, statSync } = require('fs');

const logDir = resolve(__dirname, 'logs');
const logFile = resolve(logDir, 'app.log');

function log(file, msg) {
  const now = new Date();
  msg = `[${now.toISOString()}] ${msg}\n`;
  appendFileSync(file, msg);
}

try {
  try {
    statSync(logDir);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      mkdirSync(logDir);
    }
    else {
      throw err;
    }
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.log('Done');
}
catch (err) {
  console.log(`Err : ${err.message}`);
}
