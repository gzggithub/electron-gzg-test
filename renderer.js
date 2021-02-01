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
// let gettxt = document.querySelector('#gettxt');

savetxt.onclick = function(e) {
  let data = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
  console.log(data, 'data')
  window.location.href = data.url
}
