const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => res.send('Hello World from target 1!\n'))

// handling no path rewrite
app.get('/target1x', (req, res) => res.send('Hello World from target 1x path!\n'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
