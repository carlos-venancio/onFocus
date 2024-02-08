import { openDatabase } from 'react-native-sqlite-storage';


// 1. Criaçaõ do banco de dados
const db = await openDatabase({
    name: 'onfocus'
})

// 2. Criação das tabela
db.transaction((tx) => {
    tx.executeSql(`CREATE TABLE tarefas(
                    pk_tarefaId INTEIRO PRIMARY KEY NOT NULL,
                    tituloTarefa TEXT NOT NULL,
                    dataInicio TEXT NOT NULL,
                    dataFinal TEXT NOT NULL,
                    desc TEXT NOT NULL,
                    status TEXT NOT NULL 
        );`, // O status deve ser "concluído", "cancelada" ou "pendente", "em breve"
        [],
        () => console.info("Tabela tarefas criada com sucesso"),
        error => console.error("Erro ao criar tabela de tarefas: " + error))  
})