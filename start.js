const {app, BrowserWindow} = require ('electron');
const path = require('path');
const url = require('url');

//init win
let win;

function createWindow(){
  //BrowserFenster wird geöffnet
  win = new BrowserWindow({width:800, height: 600, icon:__dirname+'/img/img.png'});

    //Index.html wird geladen
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));

    //Dev-Tools öffnen
   win.webContents.openDevTools();

   win.on('closed', () => {
     win = null;
   });
}

//Starte create window funktion
app.on('ready', createWindow);

//Verlasse, wenn alle Fenster geschlossen sind
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
})
