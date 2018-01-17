const { resolve } = require('path');
const { appendFile, mkdir, stat } = require('fs-extra');

const logDir = resolve(__dirname, 'logs');
const logFile = resolve(logDir, 'app.log');

function log(file, msg) {
  const now = new Date();
  msg = `[${now.toISOString()}] ${msg}\n`;
  return appendFile(file, msg);
}

// ES8 (juin 2017), Node 8
console.time('Thread idle');
console.time('Done');
(async () => {
  try {
    try {
      const stats = await stat(logDir);
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

  }
  catch (err) {
    console.log(`Err : ${err.message}`);
  }
  console.timeEnd('Done');
})();
console.timeEnd('Thread idle');
