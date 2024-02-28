# Conjuntos de funções para acessar o banco de dados (<font color='red'>Sqlite3</font>)

Pré-requisitos: **Ter o node instalado**

## Configurações iniciais 

1. Instale (ou garante que esteja instalado) a lib "sqlite3". 

~~~
npm i sqlite3 
~~~

2. Crie as pastas:
    - controller
    - backend
    - database 
    - repositories
    - utils

## Criando o banco e a tabela


## Função de adicionar

### Parametros


const sqlite3 = sqlite.verbose()

// abrir a conexão com o banco de dados 
export default async function iniciarBanco() {

  const db = new sqlite3.Database(`${process.cwd()}/backend/database/onFocus.db`,(err) => {
      
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


## Adicionar 

