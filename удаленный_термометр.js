var SSID = 'NBN135';
var PASSWORD = '29091993';
var NAME = 'MY_KEY';

var temp = require('@amperka/thermometer').connect(A2);
var dweet = require('@amperka/dweetio').connect(NAME);

function run() {
    setInterval(function() {
        dweet.send({
            temperature: temp.read('C')
        });
    }, 1000);
}

var wifi = require('@amperka/wifi').setup(function(err) {
    wifi.connect(SSID, PASSWORD, function(err) {
        print('Click this link', dweet.follow());
        run();
    });
});