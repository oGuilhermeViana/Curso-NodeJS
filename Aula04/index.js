let express = require('express')
const app = express()

// ROTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/html/about.html')
})

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + '/html/blog.html')
})

// rotes with params
app.get("/hello/:name/:occupation", (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>
  <h2>Your occupation: ${req.params.occupation}</h2>`)
  
})


// access the server
app.listen(8081, function () {
  console.log('server rum in url http://localhost:8081')
})