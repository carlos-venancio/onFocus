import { openDatabase } from 'react-native-sqlite-storage';

export async function iniciarBanco () {

    // 1. Criação do banco de dados
    const db = await openDatabase({
        name: 'onfocus'
    });
    
    // 2. Criação das tabela
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS tarefas(
                        pk_tarefaId INTEIRO PRIMARY KEY,
                        tituloTarefa TEXT NOT NULL,
                        dataInicio TEXT NOT NULL,
                        dataFinal TEXT NOT NULL,
                        desc TEXT NOT NULL,
                        status TEXT NOT NULL 
            );`, // O status deve ser "concluído", "cancelada" ou "pendente", "em breve"
            [],
            () => console.info("Tabela tarefas criada com sucesso"),
            error => console.error("Erro ao criar tabela de tarefas: " + error))  
    });

    return db;
}
