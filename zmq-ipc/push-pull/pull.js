const zmq = require('zeromq'),
      sock = zmq.socket('pull');

sock.connect('ipc:///tmp/pipe');

sock.on('message', function(msg) {
  console.log(`pull: ${msg}`);
});
