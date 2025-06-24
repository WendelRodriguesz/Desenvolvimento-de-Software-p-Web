const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let alunos = [
  { id: 1, nome: 'João', curso: 'Engenharia de software', ira: 7.5 },
  { id: 2, nome: 'Maria', curso: 'Ciência da Computação', ira: 8.2 },
  { id: 3, nome: 'Ana', curso: 'Design Digital', ira: 6.9 }
];
let proximoId = 4;

app.get('/alunos', (req, res) => {
  res.json(alunos);
});

app.post('/alunos', (req, res) => {
  const { nome, curso, ira } = req.body;
  const novoAluno = { id: proximoId++, nome, curso, ira };
  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

app.put('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, curso, ira } = req.body;
  const aluno = alunos.find(a => a.id === id);
  if (aluno) {
    aluno.nome = nome;
    aluno.curso = curso;
    aluno.ira = ira;
    res.json(aluno);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

app.delete('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = alunos.findIndex(a => a.id === id);
  if (index !== -1) {
    const apagado = alunos.splice(index, 1);
    res.json(apagado[0]);
  } else {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
