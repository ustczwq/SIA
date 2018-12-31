const {BrowserWindow} = require('electron').remote
const newWindowBtn = document.getElementById('new-window')

const path = require('path')

var widthSelected = document.getElementById('Width')
const heightSelected = document.getElementById('Height')

newWindowBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, '../../../sections/windows/display.html')
  let win = new BrowserWindow({ frame: false })
  
  var widthIndex = widthSelected.selectedIndex
  var heightIndex = heightSelected.selectedIndex
  var width = widthSelected.options[widthIndex].value
  var height = heightSelected.options[heightIndex].value
  win.setSize(8*parseInt(width), 8*parseInt(height))

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})
