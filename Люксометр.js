var sensor =  require('@amperka/light-sensor').connect(A3);

setInterval(function(){
    var lx = sensor.read('lx').toFixed(0);
    var time = getTime().toFixed(0);
    console.log(time, 'sec','->',lx,'lx');
},1000);