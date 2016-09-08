'use strict'

const request = require('request');
const fs = require('fs');
const file = '../data/random';

const stats = fs.statSync(file);

// the headers are important
// octet-stream for binary data
// for some servers (like python flask), content-length matters

request.post({
  headers: {
    'content-type': 'application/octet-stream',
    'content-length': stats.size
  },
  body: fs.createReadStream(file),
  uri: 'http://localhost:3000/data',
}, (err, res, body) => {
  if (err) console.log(err);
  console.log(`server: ${body}`);
});
