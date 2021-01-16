'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { pathToFileURL } from 'url'

const isDevelopment = process.env.NODE_ENV !== 'production'

let mainWindow: BrowserWindow | null

function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: { nodeIntegration: true },
    frame: false,
    icon: path.join(__static, 'logo.png')
  })

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    window.loadURL(pathToFileURL(path.join(__dirname, 'index.html')).toString())
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})

ipcMain.handle('minimize', () => {
  mainWindow && mainWindow.minimize()
})

ipcMain.handle('maximize', () => {
  if (!mainWindow) return
  mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize()
})

ipcMain.handle('close', () => {
  mainWindow && mainWindow.close()
})
