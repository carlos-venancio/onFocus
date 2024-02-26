import tarefasDB from "../repositories/tarefas.database.js";

const app = {};

// Função para buscar todas as tarefas
app.get = () => {
  tarefasDB.getAllTarefas((err, tarefas) => {
    if (err) return { status: 500, error: "Erro ao excluir tarefa." };

    return tarefas;
  });
};

// O status deve ser "concluído", "cancelada" ou "pendente", "em breve"

// Função para adicionar uma nova tarefa
app.post = async (
  tituloTarefa,
  dataInicio,
  dataFinal,
  descricao,
  status = "pendente"
) => {
  const tarefa = {
    tituloTarefa,
    dataInicio,
    dataFinal,
    descricao,
    status,
  };
  console.log(tarefa);

  return await tarefasDB.addTarefa(tarefa, (err, result) => {
    console.log(result);
    if (err) {
      return { status: 500, error: "Erro ao excluir tarefa." };
    }
    return { id: result.id };
  });
};

// Função para excluir uma tarefa
app.delete = (id) => {
  tarefasDB.deleteTarefa(id, (err) => {
    if (err) {
      return { status: 500, error: "Erro ao excluir tarefa." };
    }
    return { message: "Tarefa excluída com sucesso." };
  });
};

// Função para cancelar uma tarefa
app.cancelar = (id) => {
  tarefasDB.cancelTarefa(id, (err) => {
    if (err) {
      return { status: 500, error: "Erro ao excluir tarefa." };
    }

    return { message: "Tarefa cancelada com sucesso." };
  });
};

export default app;

// // classifica em duas listas, "hoje" e "em breve"
// const tarefas = { hoje: [], emBreve: [] };
// console.log(tarefas)

// // objeto que facilita o consumo da data
// const dataAtual = new Date().toLocaleDateString();

// const { rows } = res;

// for (let i = 0; i < rows.length; i++) {
//   const { tituloTarefa, dataInicio } = rows.item(i);

//   // confere se a tarefa é de hoje (mesma data); caso sim, é classificada com 'hoje', senão 'emBreve'
//   tarefas[
//     new Date(dataInicio).toLocaleDateString() == dataAtual ? "hoje" : "emBreve"
//   ].push({
//     tituloTarefa,
//     dataInicio,
//   });
// }

// return tarefas; // resposta final
