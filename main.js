// 主进程
const { app, BrowserWindow, Menu, dialog } = require('electron')
const fs = require('fs')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 在主进程中允许集成nodejs
      // 注意: electron v10.0.0版本之后, remote默认不会开启, 需在BrowserWindow的配置处增加如下: 
      enableRemoteModule: true, // 开启remote
    },
    icon: path.join(__dirname, './favicon.ico'), // 设置图标
    fullscreen: false, // 全屏设置
  })
  // var menu = Menu.buildFromTemplate(null)
  // Menu.setApplicationMenu(menu)

  win.loadFile('index.html')
  // win.loadURL('https://github.com')
  // win.loadURL('https://www.baidu.com/')
  // win.loadURL('http://192.168.0.248:9530/')
  win.maximize()
  // win.show()
  // fs.writeFileSync('./test' + (Math.random()*100) +'.txt', '好好学习天天向上')
  // fs.writeFileSync('./test.txt', '好好学习天天向上')
  // fs.readFile('./test.txt', 'UTF-8', (err, data)=>{
  // 	if(err){
  //     console.log(err, 'err')
  //     // event.sender.send('asynchronous-reply', "读取失败");
  //   }else{
  //     console.log(data, 'err data')
  //     alert(data)
  //     // event.sender.send('asynchronous-reply', data);
  //   }    
  // })
  // fs.readFile(path.join(__dirname,'./test.txt'), 'utf8',(err, data)=>{
  // 	if(err){
  //     event.sender.send('asynchronous-reply', "读取失败");
  //   }else{
  //     event.sender.send('asynchronous-reply', data);
  //   }    
  // })
}
// const menu = Menu.buildFromTemplate([])
// Menu.setApplicationMenu(null)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
// app.on('closed', () => {
//   if (process.platform !== 'darwin') {
//     dialog.showMessageBox({
//       title: '友情提示',
//       message: '确定要关闭吗？'
//     }).then((res) => {
//       console.log(res)
//       // app.quit()
//     }).catch((req) => {
//       console.log(req)
//     })
//   }
// })

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
