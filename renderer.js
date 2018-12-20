// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// window.$ = window.jQuery = require('jquery')
// let serialport = require('serialport');
// let port = null;
// serialport.list((err, ports) => {
//     for (let item of ports) {
//         $('.com').append(`<option>${item.comName}</option>`);
//     }
//     console.log(ports);
// });

window.$ = window.jQuery = require('jquery')
let serialport = require('serialport');
let port = null;

$("#Port").on("mousedown", function(){
    //$(this).empty();
    serialport.list((err, ports) => {
        $(this).empty();
        for (let item of ports) {
            //console.log(item.comName);
            $(this).append(`<option>${item.comName}</option>`);
        }
    })
});

$('#Start').click(() => {
    $("#Start").css("display","none");
    //$("#StartMsg").show().delay(300).hide(10);
    $("#End").css("display","block");

    let COM = $('#Port option:selected').val();
    let BaudRate = $('#BaudRate option:selected').val();
    let StopBits = $('#StopBits option:selected').val();
    let Parity = $('#Parity option:selected').val();
    //alert([COM, BaudRate, StopBits, Parity]);
    port = new serialport(COM, {
        baudRate:parseInt(BaudRate),
        stopBits:parseInt(StopBits),
        parity:Parity
    })
}); 

$('#End').click(() => {
    $("#End").css("display","none");
    //$("#EndMsg").show().delay(300).hide(10);
    $("#Start").css("display","block");

    if (port){
        port.close();
    }
});

$('#SendData').click(() => {
    // alert("send");
    var sendData = $('#Data').val();
    if (port != {} && port != null) {
        //console.log(`SendData: ${sendData}`);
        port.write(sendData);
        //alert(sendData);
    }
});

$('#DropData').click(() => {
    //alert("drop");
    $('#Data').val('');
});