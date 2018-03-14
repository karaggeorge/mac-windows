const getWindows = require('.').getWindows;
const activateWindow = require('.').activateWindow;

getWindows().then(data => {
  console.log(data);
});

activateWindow('Finder').then(() => {
  console.log('Activated');
});
