const {app ,BrowserWindow} = require("electron"); 


const createWindow =  () => {
    const windows = new BrowserWindow({
        width:800, 
        height:600
    }) 
   // windows.loadFile("./index.html"); 
   windows.loadFile("./index.html"); 
}
app.whenReady().then(() => {
    createWindow(); 
})
console.log("hola desde Electron");


