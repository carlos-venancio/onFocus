import database from "../database/tarefas.database.mjs";

// CONSULTAR TODAS AS TAREFAS (e dividi-lás em listas)
function consultarTodasTarefas() {
  return database.executeSql(
    `SELECT * FROM tarefas WHERE status <> "conclúido" ORDER BY dataInicio`,
    [],
    (sqlTxn, res) => {
      // classifica em duas listas, "hoje" e "em breve"
      const tarefas = { hoje: [], emBreve: [] };
      console.log(tarefas)

      // objeto que facilita o consumo da data
      const dataAtual = new Date().toLocaleDateString();

      const { rows } = res;

      for (let i = 0; i < rows.length; i++) {
        const { tituloTarefa, dataInicio } = rows.item(i);

        // confere se a tarefa é de hoje (mesma data); caso sim, é classificada com 'hoje', senão 'emBreve'
        tarefas[
          dataInicio.toLocaleDateString() == dataAtual ? "hoje" : "emBreve"
        ].push({
          tituloTarefa,
          dataInicio,
        });
      }

      return tarefas; // resposta final
    },

    (error) => {
      console.log("Erro ao consultar dados:", error);
    }
  )
}

// INSERIR

function inserirTarefa({
  tituloTarefa,
  dataInicio,
  dataFinal,
  desc,
  status,
}) {
  // validação dos campos
  database.executeSql(
    `INSERT INTO tarefas (
            tituloTarefa,
            dataInicio,
            dataFinal,
            desc,
            status 
        ) VALUES (?,?,?,?,?)`,
    [tituloTarefa, dataInicio, dataFinal, desc, status],
    () => console.info("Tarefa adicionada com sucesso"),
    (error) => {
      console.log("Erro ao adicionar tarefa:", error);
    }
  );
}

// ALTERAR

function alterarTarefa({
  tituloTarefa,
  dataInicio,
  dataFinal,
  desc,
  status,
  pk_tarfeaId
}) {
  // validação dos campos
  database.executeSql(
    `UPDATE  tarefas 
     SET 
        tituloTarefa  = ?,
        dataInicio  = ?,
        dataFinal = ?,
        desc = ?,
        status = ?
    WHERE pk_tarefaId = ?`,
    [tituloTarefa, dataInicio, dataFinal, desc, status, pk_tarfeaId],
    () => console.info("Tarefa adicionada com sucesso"),
    (error) => {
      console.log("Erro ao adicionar tarefa:", error);
    }
  );
}


export default { consultarTodasTarefas, inserirTarefa, alterarTarefa }