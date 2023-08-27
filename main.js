const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const contextMenu = require('electron-context-menu');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    // width: 300,
    // minWidth: 300,
    // height: 515,
    frame: false,
    height: 130,
    width: 220,
    // maxWidth: 220,
    maxHeight: 130,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    icon: path.join(__dirname, 'assets/hdn-bond.png'),
  });

  win.setMenu(null);

  // and load the index.html of the app.
  win.loadFile('src/index.html');

  // Open the DevTools.
  // win.webContents.openDevTools();

  let isCompactMode = false;
  let isDarkTheme = true;

  contextMenu({
    prepend: (defaultActions, params, browserWindow) => [
      {
        label: 'Always on Top',
        type: 'checkbox',
        checked: win.isAlwaysOnTop(),
        click: (menuItem, browserWindow) => {
          win.setAlwaysOnTop(!win.isAlwaysOnTop());
        },
      },
      {
        label: isCompactMode ? 'Expanded Mode' : 'Compact Mode',
        click: () => {
          if (isCompactMode) {
            win.setSize(220, 130);
          } else {
            win.setSize(130, 45);
          }
          isCompactMode = !isCompactMode;
        },
      },
      {
        label: isDarkTheme ? 'Light Theme' : 'Dark Theme',
        click: (menuItem, browserWindow) => {
          isDarkTheme = !isDarkTheme;
          win.webContents.send('toggle-theme', isDarkTheme ? 'dark' : 'light');
        },
      },
      {
        label: 'Stick top right',
        click: (menuItem, browserWindow) => {
          const { width } = screen.getPrimaryDisplay().workAreaSize;
          win.setPosition(width - win.getBounds().width, 0);
        },
      },
      {
        label: 'Devtools',
        click: () => {
          win.webContents.openDevTools();
        },
      },
      {
        label: 'Exit',
        click: () => {
          app.quit();
        },
      },
    ],
  });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
