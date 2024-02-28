import tarefasDB from "../repositories/tarefas.database.js";
import { serverError, badRequestError } from "../utils/formatReponse.js";
import { validateTask } from "../utils/validate.js";

const app = {};

// Função para buscar todas as tarefas
app.get = () =>
  new Promise((resolve, reject) => {
    tarefasDB.getAllTarefas((err, todasTarefas) => {
      // evita a existencia de um erro de execução
      if (err) reject(serverError(`function get`, err));

      // classifica em duas listas, "hoje" e "em breve"
      const tarefas = { hoje: [], emBreve: [] };

      // variavel que facilita o consumo da data
      const dataAtual = new Date().toLocaleDateString();

      // loop que adiciona cada tarefa na sua respectiva lista
      todasTarefas.forEach((tarefa) => {
        // dados que serão retornados
        const { tituloTarefa, dataInicio } = tarefa;

        // separa a data para poder determinar o padrão de formatação
        let formatData =
          dataInicio.indexOf("/") > 0
            ? dataInicio.split("/")
            : dataInicio.split("-");

        // converte a data para o padrão americano (yyyy,mm,dd) invés de (dd,mm,yyyy)
        if (formatData[0].length < 4) {
          formatData.reverse();
        }
        // confere se a tarefa é de hoje (mesma data); caso sim, é classificada com 'hoje', senão 'emBreve'
        tarefas[
          new Date(formatData.join("/")).toLocaleDateString() == dataAtual
            ? "hoje"
            : "emBreve"
        ].push({
          tituloTarefa,
          dataInicio,
        });
      });

      resolve(tarefas);
    });
  });

// O status deve ser "concluído", "cancelada" ou "pendente", "em breve"

// Função para adicionar uma nova tarefa
app.post = (tituloTarefa, dataInicio, duracao, descricao) => {
  try {
    return new Promise((resolve, reject) => {
      const tarefa = validateTask(
        {
          tituloTarefa,
          dataInicio,
          duracao,
          descricao,
        },
        (err) => reject(badRequestError(err))
      );
      tarefasDB.addTarefa(tarefa, function (err, result) {
        err
          ? reject(serverError(`function post - ${tituloTarefa}`, err))
          : resolve({ id: result.id });
      });
    });
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
