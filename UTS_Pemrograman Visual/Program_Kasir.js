const electron = require("electron");
const { v4 : uuidv4 } = require('uuid');
uuidv4();

const {app, BrowserWindow, Menu, ipcMain} = electron;

let kasirWindow;

app.on("ready", () => {
    kasirWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Kasir"
    });

    kasirWindow.loadURL(`file://${__dirname}/kasir.html`);
    kasirWindow.on("closed", () => {

        app.quit();
        kasirWindow = null;
    
    });

    ipcMain.on("appointment:kasir", (event, appointment) => {
        appointment["id"] = uuidv4();
        appointment["done"] = 0;
        allAppointment.push(appointment);
    });
});