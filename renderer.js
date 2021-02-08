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
const { Menu, MenuItem, dialog } = electron.remote
let savetxt = document.querySelector('#savetxt');
let updateTxt = document.querySelector('#updateTxt');

savetxt.onclick = function(e) {
  let data = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
  console.log(data, 'data')
  window.location.href = data.url
}
updateTxt.onclick = function(e) {
  let data = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
  console.log(data, 'data')
  window.location.href = data.url
}

// const menu = new Menu()
// menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
// menu.append(new MenuItem({ type: 'separator' }))
// menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))

// window.addEventListener('contextmenu', (e) => {
//   e.preventDefault()
//   menu.popup({ window: remote.getCurrentWindow() })
// }, false)