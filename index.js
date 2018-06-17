/**
 * Imports > require. Sobald wir ES6/7 arbeiten also Pseudo OOP dann immer Import!
 * Funktioniert wie require man kann seine eigenen Module requiren oder
 * wie unten einfach direkt aus den node_modules.
 */

import {app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

/**
 * Damit alles sauber bleibt eine Klasse.
 */
class Calculator {

  constructor() {
    // Als Beispiel wie das aussehen könnte.
    this.win = {};
  }

  /**
   * _ beginnende funktionen zeigen eine private methode.
   * In diesem kleinen projekt natürlich overkill aber was solls.
   * @return {void}
   */
  _openWindow() {
    //BrowserFenster wird geöffnet
    this.win = new BrowserWindow({width:800, height: 600, icon:__dirname+'/img/img.png'});

    //Index.html wird geladen
    this.win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    );

    //Dev-Tools öffnen
    this.win.webContents.openDevTools();

    this.win.on('closed', () => {
      this.win = null;
    });
  }
  /**
   * Wie open window nur dass hier APP direkt angesprochen wird, man könnte hier multiple threads starten etc.
   * @return {void}
   */
  _runApp() {
    //Starte create window funktion
    app.on('ready', this._openWindow);

    //Verlasse, wenn alle Fenster geschlossen sind
    app.on('window-all-closed', () => {
      if(process.platform !== 'darwin'){
        app.quit();
      }
    });
  }

  /**
   * symbolisch main methode. Hätte man auch direkt im Constructor machen können.
   * @return {void}
   */
  main() {
    this._runApp();
  }

}

// damit wir starten können
const Calc = new Calculator();
Calc.main();