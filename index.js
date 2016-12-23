'use strict'

const express = require('express')
const app = express();
const path = require('path');
const config = require('./config.js');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
// Insert name in title
html = html.replace(/##PREFERRED_NAME##/g, config.preferred_name);

const page1 = fs.readFileSync(path.join(__dirname, 'static/card page 1.svg'), 'utf8');
const page2 = fs.readFileSync(path.join(__dirname, 'static/card page 2.svg'), 'utf8');
// Insert svg for for card
html = html.replace('##CARD_PAGE_1##', page1);
html = html.replace('##CARD_PAGE_2##', page2);

// Insert reindeer svg as variable clientside
const reindeer = fs.readFileSync(path.join(__dirname, 'static/reindeer.svg'), 'utf8');
const body_match = /<body .*?>/.exec(html);
const insert_index = body_match[0].length + body_match.index;
html = html.substring(0, insert_index)
  +'<script>"use strict";const reindeer=`'+reindeer+'`;</script>'
  +html.substring(insert_index);

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.status(200).send(html);
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT.toString());
})
