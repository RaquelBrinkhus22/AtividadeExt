
// importa a biblioteca mysql2: interagir com o banco de dados MySQL
// precisa instalar - comando: npm install mysql2
const mysql = require('mysql2');

// configuração da conexão ao banco de dados
// parametros necessários - acessando localmente o banco de dados matematica
const connection = mysql.createConnection({
  host: 'localhost',  
  port: 3306,         
  user: 'root',       
  password: 'root', 
  database: 'matematica',
});

// teste da conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    //erro caso a conexão falhe
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  // sucesso caso a conexão seja estabelecida
  console.log('Conectado ao banco de dados!');
});

// Exporta o objeto de conexão
// = outros arquivos no projeto usem a mesma conexão importando este módulo.
module.exports = connection;
