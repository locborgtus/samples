# Simple http-proxy-middleware demo

## Basic concept

**The concept is to host multiple backends on a single server using just 1 DNS name and 1 single port. This is also known as a reverse proxy.** 

In this demo, we use the `http-proxy-middleware` module to bring up a reverse proxy application that forwards HTTP requests to 2 local backend applications on different ports.

* Backend 1 is `localhost:6000`
* Backend 2 is `localhost:6001`
* Proxy is `0.0.0.0:3000`

Backend 1 and 2 are hidden from the outside world. To access them, we have to go through the proxy.

The proxy can forward requests to localhost (if the backends are lightweight) or to remote servers. For remote servers, the DNS server names become much less important because they are never exposed to the users, only to the DevOps admins.

The proxy works by mapping certain paths in the URL to route to a different server. In this demo, `/target1` and `/target1` maps to server 1 and server 2 respectively. The code is in `proxy.js`.

`target1.js` and `target2.js` is the basic express hello world application.

## Run

On 3 separate terminals, run:

```sh
DEBUG=* node proxy.js
```

```sh
DEBUG=* node target1.js
```

```sh
DEBUG=* node target2.js
```

## Test commands

```sh
curl http://localhost:3000/target1
# Hello World from target 1

curl http://localhost:3000/target2
# Hello World from target 2

# no path rewrite, so the target server has to understand the URL path
curl http://localhost:3000/target1x
# Hello World from target 1x path
```

In order for the proxying to work, the API paths have to be made compatible. There are 2 options (in `proxy.js`):

1. If there is no agreed upon path prefix, use pathRewrite to remove the base path (see /target1 option)
1. If there is an agreed upon path prefix, simply use the option `{ target: 'http://target-host' }` (see /target1x example)

I haven't discovered a good rationale for picking either one yet, but 1 feels more flexible.
