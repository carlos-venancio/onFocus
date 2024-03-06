import { getDBConnection } from "../database/initDB.js";

// inicia conexão com o banco de dados
const execute = await getDBConnection();

// vai exportar funções para serem utilizadas nos controladores
export default {
  // Função para buscar todas as tarefas
  getAllTarefas: async function (callback) {
    return await execute(
      "SELECT tituloTarefa, dataInicio FROM tarefas",
      [], // efeito (resposta) logo após a execução da função
      (rows) => callback(null, rows),
      (err) => {
        console.error(err.message);
        return callback(err);
      }
    );
  },

  // Função para buscar todos os dados de apenas uma tarefa
  getOneTarefa: async function (id, callback) {
    return await execute(
      `SELECT tituloTarefa, dataInicio, duracao, descricao, status FROM tarefas WHERE pk_tarefaId = ?`,
      [id],
      (row) => callback(null, row),
      (err) => {
        console.error(err.message);
        return callback(err);
      }
    )
  },

  // funcao para adicionar uma nova tarefa
  addTarefa: async function (tarefa, callback) {
    return await execute(
      `INSERT INTO tarefas (tituloTarefa, dataInicio, duracao, descricao, status) VALUES (?, ?, ?, ?, ?)`,
      [
        tarefa.tituloTarefa,
        tarefa.dataInicio,
        tarefa.duracao,
        tarefa.descricao,
        tarefa.status,
      ],
      () => callback(null, { id: this.lastID }),
      function (err) {
        if (err) {
          console.error(err.message);
          return callback(err);
        }
      }
    );
  },

  // função para alterar uma teraf pelo ID
  alterTarefa: async function (id, tarefa, callback) {
    return await execute(
      "UPDATE tarefas SET tituloTarefa = ?, dataInicio = ?, duracao = ?,descricao = ?, status = ? WHERE pk_tarefaId = ?",
      [...Object.values(tarefa), id],
      () => callback(null, { lineChanges: this.changes, newTask: tarefa }),
      function (err) {
        console.error(err.message);
        return callback(err);
      }
    );
  },

  // funcao para excluir uma tarefa pelo ID
  deleteTarefa: async function (id, callback) {
    return await execute(
      `DELETE FROM tarefas WHERE pk_tarefaId = ?`,
      [id],
      () => callback(null, { id: this.changes ? id : 0 }),
      function (err) {
        console.error(err.message);
        return callback(err);
      }
    );
  },

  // funcao para atualizar o status de uma tarefa para cancelada pelo ID
  cancelTarefa: async function (id, callback) {
    return await execute(
      `UPDATE tarefas SET status = 'cancelada' WHERE pk_tarefaId = ?`,
      [id],
      () => callback(null, { lines: this.changes }),
      (err) => callback(err)
    );
  },

  concluirTarefa: async function (id, callback) {
    return await execute(
      `UPDATE tarefas SET status = 'conclúido' WHERE pk_tarefaId = ?`,
      [id],
      () => callback(null, { lines: this.changes }),
      (err) => callback(err)
    );
  },
};
