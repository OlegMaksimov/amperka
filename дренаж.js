var pump = require('@amperka/power-control').connect(P11);
var level = require('@amperka/water-level').connect(P0);
pump.turnOn();
level.on('down',function(){
    print('Water level is low');
    pump.turnOff();
});

setInterval(function () {
    var value = analogRead(A0);
    print(value);
}, 200);