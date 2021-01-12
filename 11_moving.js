var led = require('@amperka/led').connect(P4);
var servo = require('@amperka/servo').connect(P13).write(90);
var button = require('@amperka/button').connect(P0);
var buzzer = require('@amperka/buzzer').connect(P6).frequency(50);

var closed = false;

button.on('press', function(){
    closed = !closed;
    if (closed) {
        buzzer.beep(1,0.5);
        led.blink(1,0.5);
        servo.write(0);
    } else {
        buzzer.turnOff();
        led.turnOff();
        servo.write(90);
    }
});