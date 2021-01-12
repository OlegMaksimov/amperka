var SSID = 'TP-Link_9065';
var PASSWORD = '74742301';
var MQTT_HOST = '192.168.0.102'; // переодически меняется

var TOPIC = 'led';
var thermometer = require('@amperka/thermometer').connect(A4);

function mqttConnect() {
    mqtt = require('MQTT').connect({
        host:   MQTT_HOST,
    });
    mqtt.on('connected', function(){
        console.log('MQTT connected');
        mqtt.subscribe(TOPIC);
    });
    mqtt.on('disconnected', function(){
        console.log('MQTT disconnected');
        mqtt.subscribe(TOPIC);
    });
    mqtt.on('publish', function(pub) {
        if (pub.topic == TOPIC) {
            console.log('success');
            var message = JSON.parse(pub.message);
            if (message.content == 'Status') {
                var celsius = thermometer.read('C').toFixed(2);
                var content = "Привет";
                message.content = content;
                console.log(message.content);
            }
            mqtt.publish(TOPIC + 'Status', JSON.stringify(message));
        } else {
            console.log('fail');
        }
    });
}

var wifi = require('@amperka/wifi').setup(function (err) {
    wifi.connect(SSID, PASSWORD, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('connected to wifi');
            mqttConnect();
        }
    });
});

