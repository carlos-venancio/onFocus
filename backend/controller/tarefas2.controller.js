const express = require('express');
const bodyParser = require('body-parser');
const tarefasDB = require('./tarefas2.database');

const app = express();
const port = 3000;

// Analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para buscar todas as tarefas
app.get('/tarefas', (req, res) => {
    tarefasDB.getAllTarefas((err, tarefas) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar tarefas.' });
        }
        res.json(tarefas);
    });
});

// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    tarefasDB.addTarefa(novaTarefa, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao adicionar tarefa.' });
        }
        res.json({ id: result.id });
    });
});

// Rota para excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const tarefaId = req.params.id;
    tarefasDB.deleteTarefa(tarefaId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir tarefa.' });
        }
        res.json({ message: 'Tarefa excluída com sucesso.' });
    });
});

// Rota para cancelar uma tarefa
app.put('/tarefas/:id/cancelar', (req, res) => {
    const tarefaId = req.params.id;
    tarefasDB.cancelTarefa(tarefaId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao cancelar tarefa.' });
        }
        res.json({ message: 'Tarefa cancelada com sucesso.' });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
