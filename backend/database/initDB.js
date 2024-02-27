import sqlite from 'sqlite3'

const sqlite3 = sqlite.verbose()

// abrir a conexão com o banco de dados 
export default async function iniciarBanco() {

  const db = new sqlite3.Database('./backend/database/onFocus.db',(err) => {
      
      if (err) return console.error(err.message);
  
      console.log('Connected to the SQlite database.');
    })
  
  // criar a tabela de tarefas se ela não existir
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
