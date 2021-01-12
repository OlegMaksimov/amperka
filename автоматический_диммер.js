var led = require('@amperka/led') 
  .connect(P1)
  .turnOn();
 
var sensor = require('@amperka/light-sensor') 
  .connect(A3);
 
setInterval(function() {
  var luxes = sensor.read('lx'); 
  var level = 1 - luxes / 50; led.brightness(level);
}, 10);