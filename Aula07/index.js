const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

// templete engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)

// conexão com o banco de dados
const sequelize = new Sequelize("teste", "root", "12345", {
  host: "localhost",
  dialect: 'mysql' 
})

// rotas
app.get("/cad", (req, res) => {
  res.render('form')
})

app.post("/add", (req, res) => {
  //req.body.title
  //require.body.content
  //req.setEncoding("texto")
  res.send(`Título: ${req.body.title} Conteúdo: ${req.body.content}`)
})





app.listen(8081, function (){
  console.log("server is running!")
})