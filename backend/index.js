// Ficara os usos e validação dos dados
const express = require('express');
const bodyParser = require('body-parser');
const tarefasDB = require('./database/tarefas2.database');

const app = express();
const port = 3000;

// vai analisar o corpo das requisições como JSON
app.use(bodyParser.json());

// a rota para buscar todas as tarefas
app.get('/tarefas', (req, res) => {
    tarefasDB.getAllTarefas((err, tarefas) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar tarefas.' });
        }
        res.json(tarefas);
    });
});

// rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    tarefasDB.addTarefa(novaTarefa, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao adicionar tarefa.' });
        }
        res.json({ id: result.id });
    });
});

// rota para excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const tarefaId = req.params.id;
    tarefasDB.deleteTarefa(tarefaId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir tarefa.' });
        }
        res.json({ message: 'Tarefa excluída com sucesso.' });
    });
});

// rota para cancelar uma tarefa
app.put('/tarefas/:id/cancelar', (req, res) => {
    const tarefaId = req.params.id;
    tarefasDB.cancelTarefa(tarefaId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao cancelar tarefa.' });
        }
        res.json({ message: 'Tarefa cancelada com sucesso.' });
    });
});

// inciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

