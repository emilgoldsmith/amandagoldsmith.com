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
    <body id="body">
      <script src="static/src.js"></script>
      <img src="static/top-left.jpg" id="top-left" class="absolute top-image left-image" />
      <img src="static/top-right.jpg" id="top-right" class="absolute top-image right-image" />
      <img src="static/bottom-left.jpg" id="bottom-left" class="absolute bottom-image left-image" />
      <img src="static/bottom-right.jpg" id="bottom-right" class="absolute bottom-image right-image" />
      <button class="absolute unwrap-button" id="unwrap-button" onclick="unwrap()">Click Me!</button>
      Merry Christmas!
    </body>
  </html>`;

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
  res.status(200).send(html)
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT.toString());
})
