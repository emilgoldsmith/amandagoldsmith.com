'use strict'

const app = require('express')();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send("Merry Christmas")
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT.toString());
})
