const express = require('express')
const app = express()
const port = 6001

app.get('/', (req, res) => res.send('Hello World from target 2!\n'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
