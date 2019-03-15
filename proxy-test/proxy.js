const express = require('express');
const proxy = require('http-proxy-middleware');
 
// proxy middleware options
const options1 = {
  target: 'http://localhost:6000', // target host
  pathRewrite: {
    '^/target1': '/' // remove base path
  },
};

const options2 = {
  target: 'http://localhost:6001', // target host
  pathRewrite: {
    '^/target2': '/' // remove base path
  },
};
 
// create the proxies
const p1 = proxy(options1)
const p2 = proxy(options2)
const p1x = proxy({ target: 'http://localhost:6000' }); // no path rewrite
 
// mount proxies
const app = express()
app.use('/target1', p1)
app.use('/target2', p2)
app.use('/target1x', p1x)
app.listen(3000)
