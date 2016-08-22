const zmq = require('zmq'),
      sock = zmq.socket('pull');

sock.connect('ipc:///tmp/pipe');

sock.on('message', function(msg) {
  console.log(`pull: ${msg}`);
});
