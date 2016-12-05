'use strict'

const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000

const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Merry Christmas Amanda!</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="static/css/styles.css">
    </head>
    <body>
      <img src="static/top-left.jpg" id="top-left" />
      <img src="static/top-right.jpg" id="top-right" />
      <img src="static/bottom-left.jpg" id="bottom-left" />
      <img src="static/bottom-right.jpg" id="bottom-right" />
    </body>
  </html>`

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.status(200).send(html)
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT.toString());
})
