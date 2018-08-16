const zmq = require('zeromq'),
      sock = zmq.socket('sub');

sock.connect('ipc:///tmp/pipe');
sock.subscribe('foo');

sock.on('message', function(topic, msg) {
  console.log(`sub: ${msg}`);
});
