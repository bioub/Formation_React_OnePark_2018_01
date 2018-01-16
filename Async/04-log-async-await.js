const { resolve } = require('path');
const { appendFile, mkdir, stat } = require('fs-extra');

const logDir = resolve(__dirname, 'logs');
const logFile = resolve(logDir, 'app.log');

function log(file, msg) {
  const now = new Date();
  msg = `[${now.toISOString()}] ${msg}\n`;
  return appendFile(file, msg);
}

(async () => {
  try {
    try {
      await stat(logDir);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await mkdir(logDir);
      }
      else {
        throw err;
      }
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.log('Done');
  }
  catch (err) {
    console.log(`Err : ${err.message}`);
  }

})();
