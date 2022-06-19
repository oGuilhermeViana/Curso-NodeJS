const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', '12345', {
  host: "localhost",
  dialect: 'mysql'
})

// postagens
const Posts = sequelize.define('posts', {
  title: {
    type: Sequelize.STRING
  },

  content: {
    type: Sequelize.TEXT
  }
});

const Users = sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },
  surname: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})
/* 
Posts.create({
  title: "My title!!!",
  content: "Olha um cassaco"
}) */

Users.create({
  name: 'Guilherme',
  surname: 'Viana',
  age: 23,
  email: 'gui@email.com'
})



//Posts.sync({force: true})
//Users.sync({force: true})


// verificando se conectou com o banco de dados
sequelize.authenticate().then(function() {
  console.log('successfully connected')
}).catch(function(err) {
  console.log(`Falha ao se conectar: ${err}`)
})