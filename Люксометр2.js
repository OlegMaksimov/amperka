var sensor =  require('@amperka/light-sensor').connect(A3);

setInterval(function(){
    var lx = sensor.read('lx').toFixed(0);
    USB.write(lx + 'lx' + '\r\n');
},200);