// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var serialport = require('serialport');

serialport.list(function(err, ports) {
    console.log(ports);
});