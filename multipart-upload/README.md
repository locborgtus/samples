# HTTP multipart upload demo

This code demonstrates how to setup a server and client to handle multipart POST uploads in node.js.

The code is separated into 2 parts, a server and a client. The client uploads an Ecel file to the server, and the server parses the data to ensure integrity.

First install the dependencies:

```bash
npm i
```

To run, open 2 terminals, and in each run:

```bash
npm run server
```

```bash
npm run client
```

In the server application, you should see some metadata populated into the HTTP request in the `req.file` object. At the end of server application, you should see `workbook loaded: true`, indicating that the uploaded Excel data is correct.
