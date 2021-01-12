var servo = require('@amperka/servo').connect(P13);
var button = require('@amperka/button').connect(P1);

button.on('press', function() {
   servo.write(30);
});

button.on('release', function() {
    servo.write(150);
});