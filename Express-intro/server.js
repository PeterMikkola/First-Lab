
const chalk = require('chalk')
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Go away hacker!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})