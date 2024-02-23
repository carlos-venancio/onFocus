const sqlite3 = require('sqlite3').verbose();

// abrir a conexão com o banco de dados 
const db = new sqlite3.Database('./todo.db');

// criar a tabela de tarefas se ela não existir
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

// vai exportar funções para serem utilizadas nos controladores
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

    // funcao para adicionar uma nova tarefa
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

    // funcao para excluir uma tarefa pelo ID
    deleteTarefa: function(id, callback) {
        db.run(`DELETE FROM tarefas WHERE pk_tarefaId = ?`, [id], function(err) {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null);
        });
    },

    // funcao para atualizar o status de uma tarefa para cancelada pelo ID
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
