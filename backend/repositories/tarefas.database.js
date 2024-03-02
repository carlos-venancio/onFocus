import iniciarBanco from "../database/initDB.js";

// inicia conexão com o banco de dados
const db = await iniciarBanco();

// vai exportar funções para serem utilizadas nos controladores
export default {
  // Função para buscar todas as tarefas
  getAllTarefas: function (callback) {
    db.all("SELECT pk_tarefaId, dataInicio FROM tarefas ORDER BY dataInicio ASC", (err, rows) => {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      // efeito (resposta) logo após a execução da função
      callback(null, rows);
    });
  },

  // Função para buscar todos os dados de apenas uma tarefa
  getOneTarefa: function (id, callback) {
    db.get(
      `SELECT * FROM tarefas WHERE pk_tarefaId = ?`,
      [id],
      (err, row) => {
        if (err) {
          console.error(err.message);
          return callback(err);
        }
        // retorna a tarefa(row)
        callback(null, row);
      }
    );
  },

  // funcao para adicionar uma nova tarefa
  addTarefa: async function (tarefa, callback) {
    db.run(
      `INSERT INTO tarefas (tituloTarefa, dataInicio, duracao, descricao, status) VALUES (?, ?, ?, ?, ?)`,
      [
        tarefa.tituloTarefa,
        tarefa.dataInicio,
        tarefa.duracao,
        tarefa.descricao,
        tarefa.status,
      ],
      function (err) {
        if (err) {
          console.error(err.message);
          return callback(err);
        }
        // efeito (resposta) logo após a execução da função
        callback(null, { id: this.lastID });
      }
    );
  },

  // função para alterar uma teraf pelo ID
  alterTarefa: async function (id, tarefa, callback) {
    db.run(
      "UPDATE tarefas SET tituloTarefa = ?, dataInicio = ?, duracao = ?,descricao = ?, status = ? WHERE pk_tarefaId = ?",
      [...Object.values(tarefa), id],
      function (err) {
        if (err) {
          console.error(err.message);
          return callback(err);
        }
        // efeito (resposta) logo após a execução da função
        callback(null, { lineChanges: this.changes, newTask: tarefa });
      }
    );
  },

  // funcao para excluir uma tarefa pelo ID
  deleteTarefa: async function (id, callback) {
    db.run(`DELETE FROM tarefas WHERE pk_tarefaId = ?`, [id], function (err) {
      if (err) {
        console.error(err.message);
        return callback(err);
      }
      // efeito (resposta) logo após a execução da função
      callback(null, { id: this.changes ? id : 0 });
    });
  },

  // funcao para atualizar o status de uma tarefa para cancelada pelo ID
  cancelTarefa: async function (id, callback) {
    console.log(id);
    db.run(
      `UPDATE tarefas SET status = 'cancelada' WHERE pk_tarefaId = ?`,
      [id],
      function (err) {
        // efeito (resposta) logo após a execução da função
        return err ? callback(err) : callback(null, { lines: this.changes });
      }
    );
  },

  concluirTarefa: async function (id, callback) {
    console.log(id);
    db.run(
      `UPDATE tarefas SET status = 'conclúido' WHERE pk_tarefaId = ?`,
      [id],
      function (err) {
        // efeito (resposta) logo após a execução da função
        return err ? callback(err) : callback(null, { lines: this.changes });
      }
    );
  },
};
