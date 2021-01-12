var buzzer = require('@amperka/buzzer')
  .connect(P5) 
  .turnOn();
 
var pot = require('@amperka/pot') 
  .connect(A0);
 
setInterval(function() {
  var freq = 20 + 4000 * pot.read(); 
  buzzer.frequency(freq);
}, 10);