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
    });
    $('#received-window').text(`OpenPort: ${COM}, BaudRate: ${BaudRate}`);
    port.on('data', data => {
        console.log(`DATA: ${data}`);
        $('#received-window').append(data.toString());
    });
}); 

$('#End').click(() => {
    $("#End").css("display","none");
    $("#Start").css("display","block");
    if (port){
        port.close();
    }
});

$('#SendData').click(() => {
    var sendData = $('#sent-window').val();
    if (port != {} && port != null) {
        port.write(sendData);
        //alert(sendData);
    }
});
