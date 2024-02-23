import { useEffect, useState } from "react"
import { Button, Text } from "react-native";
import { MaterialCommunityIcons} from "@expo/vector-icons"
import {Main, Header, Title, Logo, ButtonSheet} from "./HomeStyles"
import  Sheet  from '../Components/bottomSheet/index';
// import iniciarBanco from '../../../backend/database/tarefas.database.mjs';
import controller from '../../../backend/controller/tarefas.controller.mjs';
import SQLite from "react-native-sqlite-storage";


function iniciarBanco():void {
  // 1. Criação do banco de dados
  const db = SQLite.openDatabase({
    name: "onfocus.db",
    location: 'default',
  })
  
  console.log('teste')
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
      (error: string) => console.error("Erro ao criar tabela de tarefas: " + error)
    );

    return
  });
}

const buscarTarefasIniciais = async () => await controller.consultarTodasTarefas()

export default function Home (){

    // função para ver se esta aberto 
    const [ isOpen, setIsOpen ] = useState(false)
    // ve se esta aberto e se esriver ele fecha ou o contrario
    // (sempre vai fazer o inverso do estado atual)
    function toggleSheet() {
        setIsOpen((prevState) => !prevState)
    }

    const [ tarefas, setTarefas ] = useState(buscarTarefasIniciais.length);

    useEffect(() => {
        iniciarBanco()
    },[])
    

    return(
        
            <Main >
                
                <Header>
                <Title>OnFocus</Title>
                <Logo
                    source={require('../Img/Logo.png')}
                />
                </Header>
                <ButtonSheet  activeOpacity={0.7} onPress={toggleSheet}>
                    <MaterialCommunityIcons name="menu" size={24} color="#F1A"/>
                </ButtonSheet>
                <Button title="criar tarefa" onPress={() => {
                    controller.inserirTarefa({tituloTarefa: 'Teste', dataInicio: '10/02/2024', dataFinal: '10/02/2024', desc: 'teste teste',status: 'pendente'})
                    setTarefas(buscarTarefasIniciais.length)
                    }}></Button>
                <Text>{tarefas}</Text>
                {/* ve se estiver aberto na função de cima para assim mostrar o botttom sheet */}
                {isOpen && <Sheet onClose={toggleSheet} />}
            </Main>
    ); 
}