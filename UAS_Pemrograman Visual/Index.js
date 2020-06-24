const electron = require("electron");
const { v4 : uuidv4 } = require('uuid');
uuidv4();

const {app, BrowserWindow, Menu, ipcMain} = electron;

let indexWindow;

app.on("ready", () => {
    indexWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Kasir"
    });

    indexWindow.loadURL(`file://${__dirname}/index.html`);
    indexWindow.on("closed", () => {

        app.quit();
        indexWindow = null;
    
    });

    ipcMain.on("appointment:index", (event, appointment) => {
        appointment["id"] = uuidv4();
        appointment["done"] = 0;
        allAppointment.push(appointment);
    });
});
