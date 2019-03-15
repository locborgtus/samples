# Simple http-proxy-middleware demo

## Basic concept
The concept is to use the `http-proxy-middleware` module to bring up a simple proxy application that proxy requests to 2 local servers on different ports.

Server 1 is localhost:6000
Server 2 is localhost:6001
Proxy is localhost:3000

Server 1 and 2 are essentially hidden from the outside world. To access them, we have to go through the proxy.

The proxy works by mapping certain URLs to a particular proxy. In this case, `target1` and `target1` maps to server 1 and server 2 respectively. Look at `proxy.js`.

## Run

On 3 separate terminals, run:

```sh
node proxy.js
```

```sh
node target1.js
```

```sh
node target2.js
```

## Test commands

```sh
curl http://localhost:3000/target1
# Hello World from target 1

curl http://localhost:3000/target2
# Hello World from target 2
```

In order for the proxying to work, the API paths have to be made compatible. There are 2 options:

* If there is no agreed upon path prefix, use pathRewrite to remove the base path (see /target1 option)
* If there is an agreed upon path prefix, simply use the option `{ target: 'http://target-host' }` (see /target1x example)

It feels like pathRewrite is more flexible. It can potentially let us proxy multiple instances of the same app.
