const zmq = require('zmq'),
      sock = zmq.socket('push');

sock.bindSync('ipc:///tmp/pipe');

setInterval(() => {
  sock.send(new Date().toISOString());
}, 1000);
