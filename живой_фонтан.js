var button = require('@amperka/button').connect(A1);
var pump = require('@amperka/power-control').connect(P11);

button.on('press', function() {
    pump.toggle();
});