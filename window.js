/* Window */
'use strict';

const electron = require('electron');
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 1600,
    height: 900,
    frame: false
  });

  win.loadURL(`file://${__dirname}/index.html`);

  // win.webContents.openDevTools();
});
