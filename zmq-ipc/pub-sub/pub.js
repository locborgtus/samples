const zmq = require('zmq'),
      sock = zmq.socket('pub');

sock.bindSync('ipc:///tmp/pipe');

setInterval(() => {
  sock.send(['foo', new Date().toISOString()]);
}, 1000);
