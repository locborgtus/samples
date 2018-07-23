const express = require('express');
const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const XLSX = require('xlsx');

const port = 3000;

let app = express(); 

app.post('/upload', upload.single('excel'), (req, res) => {
  let workBook = XLSX.read(req.file.buffer);

  // req.file is created from multer
  console.log(req.file);

  console.log(`workbook loaded: ${Object.keys(workBook).length > 0}`);

  res.status(200).send();
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`listening on port ${port}`);
});
