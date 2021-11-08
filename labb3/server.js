const express = require('express');
const app = express();
const chalk = require('chalk');
const sharp = require('sharp');

app.get('/', (req, res) => {
  res.send('Go away hacker!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})