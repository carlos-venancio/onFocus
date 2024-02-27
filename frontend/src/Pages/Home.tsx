import { useEffect, useState } from "react"
import { Button, Text } from "react-native";
import { MaterialCommunityIcons} from "@expo/vector-icons"
import {Main, Header, Title, Logo, ButtonSheet} from "./HomeStyles"
import  Sheet  from '../Components/bottomSheet/index';
// import iniciarBanco from '../../../backend/database/tarefas.database.mjs';

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