/* Window */
const electron = require('electron');
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 450,
        frame: false
    });

    win.loadURL(`file://${__dirname}/index.html`);

    // win.webContents.openDevTools();
});
