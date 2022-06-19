const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Seja bem-vindo!")
})

app.get('/about', (req, res) => {
  res.send("About")
})


app.listen(8081, function() {
  console.log("server running in port: 8081!")
})