import { useState } from "react";
import {Main, Header, Title, Logo, ButtonSheet, 
    Plus, Container, TitleText, TaskToday,
    ContainnerTask, DateClass, TaskName,
    CategoClass, Class, IconEnter, ClassEnter,
    Today, Before, ContainerSheet} from "./HomeStyles"
import {View,TouchableOpacity, Text} from "react-native"
import Styles from "./HomeStyles";    
import  Sheet  from '../Components/bottomSheet/index';
import  ModalDelete  from "../Components/modalDelete/index";
import { ScrollView } from "react-native";



export default function Home (){

    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };

  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };

    // função para ver se esta aberto 
    const [ isOpen, setIsOpen ] = useState(false)
    // ve se esta aberto e se esriver ele fecha ou o contrario
    // (sempre vai fazer o inverso do estado atual)
    function toggleSheet() {
        setIsOpen((prevState) => !prevState)
    }
    

    return(
        
            <Main >    
                <ScrollView>
                <Header
                >
                <Title>OnFocus</Title>
                <Logo
                    source={require('../Img/Logo.png')}
                />
                </Header>
                <Container>
                    <Today>
                        <TitleText>Hoje</TitleText>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={abrirModalDelete}><Text>aqui</Text></TouchableOpacity> 

                        <ModalDelete isVisible={modalDeleteVisible} onClose={fecharModalDelete} />
                        </View>
                        
                        <TaskToday>
                            <ContainnerTask style={Styles.Container} >
                            
                                <ClassEnter  >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask>
                            <ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask>
                            <ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask>
                            <ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask>
                            
                        </TaskToday>
                        
                    </Today>
                    <Before>
                        <TitleText>Em Breve</TitleText>
                        
                        <TaskToday>
                        <ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask><ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask><ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask><ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask><ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask><ContainnerTask style={Styles.Container}>
                                <ClassEnter >
                                    <Class>
                                        <DateClass>13:40</DateClass>
                                        <CategoClass>---</CategoClass>
                                    </Class>
                                    <TaskName>Exemplo de titulo</TaskName>
                                </ClassEnter>
                                <IconEnter source={require("../Img/enter.png")}/>
                            </ContainnerTask>
                        </TaskToday>
                    </Before>

                </Container>
                </ScrollView>
                <ContainerSheet>
                    <ButtonSheet  activeOpacity={1.7} onPress={toggleSheet} >
                        <Plus source={require('../Img/plus.png')}
                        
                        />
                    </ButtonSheet>
                </ContainerSheet>
                
                {/* ve se estiver aberto na função de cima para assim mostrar o botttom sheet */}
                {isOpen && <Sheet onClose={toggleSheet} />}
            </Main>
    ); 
}