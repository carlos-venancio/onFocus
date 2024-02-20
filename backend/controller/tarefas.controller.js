import database from "../database/tarefas.database.js";

export function consultarTodasTarefas() {
  return database.executeSql(
    `SELECT * FROM tarefas WHERE status <> "conclúido" ORDER BY dataInicio`,
    [],
    (sqlTxn, res) => {
        // classifica em duas listas, "hoje" e "em breve" 
        const tarefas = { hoje: [], emBreve: []};

        // objeto que facilita o consumo da data
        const dataAtual = new Date().toLocaleDateString();

        const { rows } = res; 

        for (let i = 0; i < rows.length; i++) { 
            const { tituloTarefa,  dataInicio } = rows.item(i);

            // confere se a tarefa é de hoje (mesma data); caso sim, é classificada com 'hoje', senão 'emBreve'
            tarefas[dataInicio.toLocaleDateString() == dataAtual ? 'hoje' : 'emBreve'].push({
                tituloTarefa, dataInicio
            })        
        }
        return tarefas;
    
    },

        (error) => { console.log('Erro ao consultar dados:', error); } 
  )
}