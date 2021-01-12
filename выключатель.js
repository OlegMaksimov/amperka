var led = require('@amperka/led')
  .connect(P1);
 
var button = require('@amperka/button')
  .connect(P3);
 
function myCoolButtonHandler() {
  led.toggle();
}
 
button.on('press', myCoolButtonHandler);