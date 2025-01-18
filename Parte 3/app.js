// importacao do framework Express = criação de servidores e rotas no Node.js
const express = require('express');

// importacao da conexão com o banco de dados, definida no arquivo "db.js"
const connection = require('./db');

// importacao do middleware CORS, permite que requisições sejam feitas de outras origens (domínios diferentes)
const cors = require('cors');

// aplicação Express
const app = express();

// Configurações globais da aplicação

// Permite requisições de qualquer origem
app.use(cors());

// Middleware para servir arquivos estáticos da pasta "public"
// hospedar imagens diretamente
app.use(express.static('public'));

// Rotas da API:
// Cada rota = consulta a uma tabela específica = retorna dados como JSON

// Rota para a tabela "areas"
app.get('/areas', (req, res) => {
  connection.query('SELECT * FROM areas', (err, results) => {
    if (err) {
      // Retorna erro 500 se a consulta falhar.
      res.status(500).send('Erro ao consultar a tabela areas.');
      return;
    }
    // Retorna os resultados da consulta como JSON.
    res.json(results);
  });
});

// Rota para a tabela "subareas"
app.get('/subareas', (req, res) => {
  connection.query('SELECT * FROM subareas', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao consultar a tabela subareas.');
      return;
    }
    res.json(results);
  });
});

// Rota para a tabela "conteudos"
app.get('/conteudos', (req, res) => {
  connection.query('SELECT * FROM conteudos', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao consultar a tabela conteudos.');
      return;
    }
    res.json(results);
  });
});

// Rota para a tabela "explicacoes"
app.get('/explicacoes', (req, res) => {
  connection.query('SELECT * FROM explicacoes', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao consultar a tabela explicacoes.');
      return;
    }
    res.json(results);
  });
});

// Rota para a tabela "exemplos"
app.get('/exemplos', (req, res) => {
  connection.query('SELECT * FROM exemplos', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao consultar a tabela exemplos.');
      return;
    }
    res.json(results);
  });
});

// Rota para a tabela "exercicios"
app.get('/exercicios', (req, res) => {
  connection.query('SELECT * FROM exercicios', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao consultar a tabela exercicios.');
      return;
    }
    res.json(results);
  });
});

// Rota para a tabela "tipos"
app.get('/tipos', (req, res) => {
  connection.query('SELECT * FROM tipos', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao consultar a tabela tipos.');
      return;
    }
    res.json(results);
  });
});

// Inicialização do servidor: rodar na porta 
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
