// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.$ = window.jQuery = require('jquery')
let serialport = require('serialport');
let port = null;
serialport.list((err, ports) => {
    for (let item of ports) {
        $('.com').append(`<option>${item.comName}</option>`);
    }
    console.log(ports);
});