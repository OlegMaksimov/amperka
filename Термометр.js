var thermometer = require('@amperka/thermometer')
    .connect(A3);

setInterval(function() {
    var celsius = thermometer.read('C');
    USB.write('<div style="font-size: 0.5em">'+'temperature'+'</div>'+celsius.toFixed(1)+'\r\n');
}, 1000);