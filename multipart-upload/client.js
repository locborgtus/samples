const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

let filename = 'demo.xlsx';

let form = new FormData();
form.append('excel',
            fs.createReadStream(filename),
            { filename: filename });

// use axios - note the headers are created from the form
axios.post('http://localhost:3000/upload', form, { headers: form.getHeaders() })
  .then(response => {
    console.log(response.status);
  })
  .catch(error => {
    if (error.response) {
      console.log(error.response);
    }
    console.log(error.message);
  });

/*
// use the built-in submit function in the form-data module
form.submit('http://localhost:3000/foo', (req, res) => {
  console.log(res.statusCode);
});
*/
