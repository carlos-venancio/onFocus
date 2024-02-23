const sqlite3 = require('sqlite3').verbose();

// Abrindo a conexão com o banco de dados (criará o arquivo do banco de dados se não existir)
const db = new sqlite3.Database('./todo.db');

// Criando a tabela de tarefas se ela não existir
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS tarefas(
        pk_tarefaId INTEGER PRIMARY KEY AUTOINCREMENT,
        tituloTarefa VARCHAR(100) NOT NULL,
        dataInicio DATE NOT NULL,
        dataFinal DATE NOT NULL,
        descricao VARCHAR(500) NOT NULL,
        status TEXT NOT NULL
    )`);
});

// Exportando funções para serem utilizadas nos controladores
module.exports = {
    // Função para buscar todas as tarefas
    getAllTarefas: function(callback) {
        db.all('SELECT * FROM tarefas', (err, rows) => {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null, rows);
        });
    },

    // Função para adicionar uma nova tarefa
    addTarefa: function(tarefa, callback) {
        db.run(`INSERT INTO tarefas (tituloTarefa, dataInicio, dataFinal, descricao, status) VALUES (?, ?, ?, ?, ?)`,
            [tarefa.tituloTarefa, tarefa.dataInicio, tarefa.dataFinal, tarefa.descricao, tarefa.status],
            function(err) {
                if (err) {
                    console.error(err.message);
                    return callback(err);
                }
                callback(null, { id: this.lastID });
            });
    },

    // Função para excluir uma tarefa pelo ID
    deleteTarefa: function(id, callback) {
        db.run(`DELETE FROM tarefas WHERE pk_tarefaId = ?`, [id], function(err) {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null);
        });
    },

    // Função para atualizar o status de uma tarefa para cancelada pelo ID
    cancelTarefa: function(id, callback) {
        db.run(`UPDATE tarefas SET status = 'cancelada' WHERE pk_tarefaId = ?`, [id], function(err) {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null);
        });
    }
};
