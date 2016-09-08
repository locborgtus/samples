'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const crypto = require('crypto');

app.use(bodyParser.raw({limit: '50mb'}));

app.post('/data', function (req, res) {
  if (req.get('content-type') != 'application/octet-stream') {
    console.log(`bad post mime type: ${req.get('content-type')}`);
    return res.status(400).send('set mime type to application/octet-stream');
  }

  let chksum = crypto.createHash('md5').update(req.body).digest('hex');
  let str = `POST body length: ${req.body.length} hash: ${chksum}`;

  console.log(str);
  res.send(str);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
