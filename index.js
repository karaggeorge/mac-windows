const childProcess = require('child_process');
const path = require('path');

function getWindows(onScreenOnly = true) {
  const dir = __dirname;
  const app = path.join(dir, 'scripts/MacWindows');
  return new Promise(resolve => {
    childProcess.execFile(app, [onScreenOnly], (err, stdout) => {
      if (err) {
        resolve(err);
      } else {
        resolve(stdout);
      }
    });
  });
}

function activateWindow(windowName) {
  const dir = __dirname;
  const app = path.join(dir, 'scripts/ActivateWindow');
  return new Promise((resolve, reject) => {
    childProcess.execFile(app, [windowName], err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

exports.getWindows = function (opts = {}) {
  return getWindows(opts.onScreenOnly)
    .then(data => JSON.parse(data))
    .then((windows = []) => {
      if (opts.showAllWindows) {
        return windows;
      }

      return windows.filter((win, index) => {
        const firstWithName = windows.findIndex(w => w.name && w.ownerName === win.ownerName);
        return firstWithName === -1 ? windows.findIndex(w => w.ownerName === win.ownerName) === index : firstWithName === index;
      });
    })
    .catch(() => []);
};

exports.activateWindow = activateWindow;
