# ZMQ-IPC sample #

This sample demonstrates how to use zeromq using IPC transport. Both pub/sub and push/pull model.

## Sys reqs ##

Tested using:

* MacOS High Sierra
* zeromq@4.6.0
* nodejs@8.11.2

## Init steps ##

* Run `npm install zeromq@4.6.0` at the zmq-ipc folder, the sample codes will find this module.
* No need to manually create the end point `/tmp/pipe`. It'll get auto created by whoever is the sender.

## Sample code notes ##

* can pass binary data as message, not only text

### pub/sub ###

* can run multiple subscribers
* note the way the publisher sends a message to a topic. it's just a simple array. the 1st element is the topic, 2nd is the message

### push/pull ###

* if multiple pull processes are ran, data is received round robin style
