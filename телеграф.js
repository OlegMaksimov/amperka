var buzzer = require('@amperka/buzzer')
  .connect(P5);
 
var button = require('@amperka/button')
  .connect(P3);
 
button.on('press', function() {
  buzzer.turnOn();
});
 
button.on('release', function() {
  buzzer.turnOff();
});