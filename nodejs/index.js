const express = require('express')
const app = express()
const port = 5555

app.get('/staj', (req, res) => {
  res.send('Hello World from Node.JS!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})