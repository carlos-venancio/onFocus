import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true)
SQLite.enablePromise(true)

export default async function iniciarBanco() {
  // 1. Criação do banco de dados
  const db = await SQLite.openDatabase({
    name: "onfocus.db",
    location: 'default',
  })
  
  // 2. Criação das tabela
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tarefas(
                          pk_tarefaId INTEIRO PRIMARY KEY,
                          tituloTarefa TEXT NOT NULL,
                          dataInicio TEXT NOT NULL,
                          dataFinal TEXT NOT NULL,
                          desc TEXT NOT NULL,
                          status TEXT NOT NULL 
              );`, // O status deve ser "concluído", "cancelada" ou "pendente", "em breve"
      [],
      () => console.log("Tabela tarefas criada com sucesso"),
      (error) => console.error("Erro ao criar tabela de tarefas: " + error)
    );
  });
}


export async function executarTarefa(tarefa) {
  // 1. Abre o banco de dados 
  const db = await SQLite.openDatabase({
    name: "onfocus.db",
    location: 'default'
  })

  // 2. Executa a ação
  tarefa(db);

  // 3. Fecha a conexão
  db.close(
    () => console.info('Banco fechado'), 
    error => console.error('Erro ao fechar o banco', error))
} 
