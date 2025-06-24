const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const alunos = [
  { nome: 'João', curso: 'Engenharia', ira: 7.5 },
  { nome: 'Maria', curso: 'Computação', ira: 8.2 },
  { nome: 'Ana', curso: 'Design', ira: 6.9 }
];

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
