'use strict'

const express = require('express')
const app = express();
const path = require('path');
const config = require('./config.js');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
// Insert name in title
html = html.replace('##PREFERRED_NAME##', config.preferred_name);

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.status(200).send(html);
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT.toString());
})
