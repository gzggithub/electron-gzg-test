// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// 渲染进程
const fs = require('fs')
const path = require('path')
const electron = require('electron')
const { dialog } = electron.remote
let savetxt = document.querySelector('#savetxt');
let gettxt = document.querySelector('#gettxt');
fs.writeFileSync('./test.txt', '好好学习天天向上')

gettxt.onclick = function(e) {
  fs.readFile('./test.txt', 'UTF-8', (err, data)=>{
    if(err){
      console.log(err, 'err')
      // event.sender.send('asynchronous-reply', "读取失败");
    }else{
      console.log(data, 'err data')
      alert(data)
      // event.sender.send('asynchronous-reply', data);
      // dialog.showMessageBoxSync({
      //   title: '读取文件',
      //   message: data
      // })
    }    
  })
  // const root = fs.readdirSync('/') // 读取当前项目文件所在目录文件
  // console.log(root)
  // fs.writeFileSync('./test.txt', '好好学习天天向上')
  // fs.writeFileSync(path.join(__dirname, "./test.txt"), '好好学习天天向上')
  // fs.writeFile(path.join(__dirname, "../test.txt"), '好好学习天天向上')
  // dialog.showSaveDialog({
  //   title:'保存文件',
  //   // defaultPath: '' // 默认地址
  // }).then((res)=>{
  //   console.log(res)
  //   fs.writeFileSync(res.filePath, '好好学习天天向上')
  // }).catch((req)=>{
  //   console.log(req)
  // })
}