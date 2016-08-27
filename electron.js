'use scrict';

const remote = require('electron').remote;
const main = remote.require('./window.js');

var CloseWindow = (function() {
  remote.getCurrentWindow().close();
});
