import iniciarBanco from "../database/initDB.js";


const db = await iniciarBanco();

// vai exportar funções para serem utilizadas nos controladores
export default {
    // Função para buscar todas as tarefas
    getAllTarefas: 
     function(callback) {
        db.all('SELECT * FROM tarefas', (err, rows) => {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null, rows);
        });
    },

    // funcao para adicionar uma nova tarefa
    addTarefa: async function(tarefa, callback) {
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
    deleteTarefa: async function(id, callback) {
        db.run(`DELETE FROM tarefas WHERE pk_tarefaId = ?`, [id], function(err) {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null);
        });
    },

    // funcao para atualizar o status de uma tarefa para cancelada pelo ID
    cancelTarefa: async function(id, callback) {
        db.run(`UPDATE tarefas SET status = 'cancelada' WHERE pk_tarefaId = ?`, [id], function(err) {
            if (err) {
                console.error(err.message);
                return callback(err);
            }
            callback(null);
        });
    }
};
