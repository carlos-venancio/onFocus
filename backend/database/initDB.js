import sqlite from 'sqlite3'

// habilitar logs detalhados 
const sqlite3 = sqlite.verbose()

export default async function iniciarBanco() {
  
  // abrir a conexão com o banco de dados (cria caso não exista) 
  const db = new sqlite3.Database(`${import.meta.dirname}\\onFocus.db`,(err) => {
    // import.meta.dirname é usado para saber o nome do diretório atual
      
      if (err) return console.error(err.message);
  
      console.log('Connected to the SQlite database.');
    })
  
  // criar a tabela de tarefas de maneira sincrona se ela não existir
  db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS tarefas(
          pk_tarefaId INTEGER PRIMARY KEY AUTOINCREMENT,
          tituloTarefa TEXT,
          dataInicio TEXT,
          duracao TEXT,
          descricao TEXT,
          status TEXT
      )`);
      console.log('Table created with sucess')
  });
  
  console.log('initDB finish')

  return db
}
