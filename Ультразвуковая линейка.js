var sonic = require('@amperka/ultrasonic').connect({trigPin: P9, echoPin: P10});

setInterval(function(){
    sonic.ping(function (err,val) {
        if (err) {
            console.log(err.msg);
        } else {
            console.log(val.toFixed(0), ' mm' + '\r\n');
        }
    }, 'mm');
}, 100);