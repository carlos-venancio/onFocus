import tarefasDB from "../repositories/tarefas.database.js";
import { serverError, badRequestError } from "../utils/formatReponse.js";
import { validateTask } from "../utils/validate.js";

const app = {};

// Função para buscar todas as tarefas
app.getAll = (req, res) => {
  tarefasDB.getAllTarefas((err, todasTarefas) => {
    console.log(todasTarefas);
    // evita a existencia de um erro de execução
    if (err) res.status(500).json(serverError(`function get`, err));

    // classifica em duas listas, "hoje" e "em breve"
    const tarefas = { hoje: [], emBreve: [] };

    // variavel que facilita o consumo da data
    const dataAtual = new Date().valueOf();

    // loop que adiciona cada tarefa na sua respectiva lista
    todasTarefas.forEach((tarefa) => {
      // separa a data para poder determinar o padrão de formatação
      let formatData =
        tarefa.dataInicio.indexOf("/") > 0
          ? tarefa.dataInicio.split("/")
          : tarefa.dataInicio.split("-");

      // converte a data para o padrão americano (yyyy,mm,dd) invés de (dd,mm,yyyy)
      if (formatData[0].length < 4) {
        formatData.reverse();
      }
      // confere se a tarefa é de hoje (mesma data); caso sim, é classificada com 'hoje', senão 'emBreve'
      tarefas[
        new Date(formatData.join("/")).valueOf() > dataAtual
          ? "emBreve"
          : "hoje"
      ].push(tarefa);
    });

    res.status(200).json(tarefas);
  });
};

// Função que retorna uma tarefa
app.getOne = (req, res) =>
  tarefasDB.getOneTarefa(req.params.id, (err, tarefa) => {
    // evita a existencia de um erro de execução
    if (err) res.status(500).json(serverError(`function get`, err));

    res.status(200).json(tarefa);
  });

// Função para adicionar uma nova tarefa
app.post = (req,res) => {

    const { tituloTarefa, dataInicio, duracao, descricao } = req.body;
    // valida os campos e adiciona o status
    const tarefa = validateTask(
      {
        tituloTarefa,
        dataInicio,
        duracao,
        descricao,
      },
      (err) => res.status(400).json(badRequestError(err))
    );
    // executa a função de manipulação passando os dados e a função de callback (o que deve acontecer quando a função terminar de executar)
    tarefasDB.addTarefa(tarefa, function (err, result) {
      err
        ? res.status(500).json(serverError(`function post - ${tituloTarefa}`, err))
        : res.status(200).json({ id: result.id });
    });
    
  }

// Função para excluir uma tarefa
app.delete = (req,res) => {
    tarefasDB.deleteTarefa(req.params.id, function (err, result) {
      if (err) {
        res.status(500).json(serverError(`function delete - ${req.params.id}`, err));
      }
      return result.id
        ? res.status(200).json(result)
        : res.status(404).json({ message: "Informe uma tarefa válida" });
    })
};

// Função para cancelar uma tarefa
app.cancelar = (req,res) => {
    tarefasDB.cancelTarefa(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json(serverError(`function cancel - ${req.params.id}`, err));
      }
     res.status(200).json({ linesChange: result.lines });
    });
};

// Função para alterar uma tarefa
app.alterar = (req,res) => {
  const { tituloTarefa, dataInicio, duracao, descricao} = req.body;
    const tarefa = validateTask(
      {
        tituloTarefa,
        dataInicio,
        duracao,
        descricao,
      },
      (err) => res.status(400).json(badRequestError(err))
    );
    tarefasDB.alterTarefa(req.params.id, tarefa, function (err, result) {
      err
        ? res.status(500).json(serverError(`function put - ${tituloTarefa}`, err))
        : res.status(200).json(result);
    });
};

// Função para concluir uma tarefa
app.concluir = (req,res) => {
    tarefasDB.concluirTarefa(req.params.id, (err, result) => {
      if (err) {
        res.status(500).json(serverError(`function concluir - ${id}`, err));
      }
     res.status(200).json({ linesChange: result.lines });
    });

};

export default app;
