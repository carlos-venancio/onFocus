import tarefasDB from "../repositories/tarefas.database.js";
import { serverError } from "../utils/formatReponse.js";

const app = {};

// Função para buscar todas as tarefas
app.get = () =>
  new Promise((resolve, reject) => {
    tarefasDB.getAllTarefas((err, todasTarefas) => {
      if (err) reject(serverError(`function get`, err));

      // classifica em duas listas, "hoje" e "em breve"
      const tarefas = { hoje: [], emBreve: [] };
      console.log(tarefas);

      // objeto que facilita o consumo da data
      const dataAtual = new Date().toLocaleDateString();

      for (let i = 0; i < todasTarefas.length; i++) {
        const { tituloTarefa, dataInicio } = rows.item(i);

        // confere se a tarefa é de hoje (mesma data); caso sim, é classificada com 'hoje', senão 'emBreve'
        tarefas[
          new Date(dataInicio).toLocaleDateString() == dataAtual
            ? "hoje"
            : "emBreve"
        ].push({
          tituloTarefa,
          dataInicio,
        });
      }

      return tarefas; // resposta final
      resolve(tarefas);
    });
  });

// O status deve ser "concluído", "cancelada" ou "pendente", "em breve"

// Função para adicionar uma nova tarefa
app.post = (
  tituloTarefa,
  dataInicio,
  duracao,
  descricao,
  status = "pendente"
) => {
  const tarefa = { tituloTarefa, dataInicio, duracao, descricao, status };

  try {
    return new Promise((resolve, reject) =>
      tarefasDB.addTarefa(tarefa, function (err, result) {
        err
          ? reject(serverError(`function post - ${tituloTarefa}`, err))
          : resolve({ id: result.id });
      })
    );
  } catch (err) {
    return serverError(err);
  }
};

// Função para excluir uma tarefa
app.delete = (id) => {
  try {
    return new Promise((resolve, reject) =>
      tarefasDB.deleteTarefa(id, function (err, result) {
        if (err) {
          reject(serverError(`function delete - ${id}`, err));
        }
        return result.id
          ? resolve(result)
          : resolve({ message: "Informe uma tarefa válida" });
      })
    );
  } catch (err) {
    return serverError(`function delete - ${id}`, err);
  }
};

// Função para cancelar uma tarefa
app.cancelar = (id) => {
  try {
    return new Promise((resolve, reject) => {
      tarefasDB.cancelTarefa(id, (err, result) => {
        if (err) {
          reject(serverError(`function cancel - ${id}`, err));
        }
        resolve({ linesChange: result.lines });
      });
    });
  } catch (err) {
    return serverError(err);
  }
};

export default app;
