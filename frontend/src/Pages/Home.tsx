import { useEffect, useState } from "react";
import {
  Main,
  Header,
  Title,
  Logo,
  ButtonSheet,
  Plus,
  Container,
  TitleText,
  TaskToday,
  ContainnerTask,
  DateClass,
  TaskName,
  CategoClass,
  Class,
  IconEnter,
  ClassEnter,
  Today,
  Before,
  ContainerSheet,
  ScrollView,
} from "./HomeStyles";
import Styles from "./HomeStyles";
import Sheet from "../Components/bottomSheet/index";
import api from "../services/server";

export default function Home({ navigation }) {
  const [tarefas, settarefas] = useState<any>({});

  const buscarTarefas = async (): Promise<void> => {
    const response = await api.get("/");
    if (response.status == 200) settarefas(response.data);
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  const handlePress = () => {
    navigation.navigate("Task");
  };

  // função para ver se esta aberto
  const [isOpen, setIsOpen] = useState(false);
  // ve se esta aberto e se esriver ele fecha ou o contrario
  // (sempre vai fazer o inverso do estado atual)
  function toggleSheet() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <Main>
      <ScrollView>
        <Header>
          <Title>OnFocus</Title>
          <Logo source={require("../Img/Logo.png")} />
        </Header>
        <Container>
          <Today>
            <TitleText>Hoje</TitleText>

            <TaskToday>
              {tarefas.hoje.forEarch((tarefa: any) => {
                return (
                  <ContainnerTask
                    style={Styles.Container}
                    onPress={handlePress}
                  >
                    <ClassEnter>
                      <Class>
                        <DateClass>{tarefa.dataInicio}</DateClass>
                        <CategoClass>---</CategoClass>
                      </Class>
                      <TaskName>{tarefa.tituloTarefa}</TaskName>
                    </ClassEnter>
                    <IconEnter source={require("../Img/enter.png")} />
                  </ContainnerTask>
                );
              })}
            </TaskToday>
          </Today>
          <Before>
            <TitleText>Em Breve</TitleText>

            <TaskToday>
            {tarefas.emBreve.forEarch((tarefa) => {
                return (
                  <ContainnerTask
                    style={Styles.Container}
                    onPress={handlePress}
                  >
                    <ClassEnter>
                      <Class>
                        <DateClass>{tarefa.dataInicio}</DateClass>
                        <CategoClass>---</CategoClass>
                      </Class>
                      <TaskName>{tarefa.tituloTarefa}</TaskName>
                    </ClassEnter>
                    <IconEnter source={require("../Img/enter.png")} />
                  </ContainnerTask>
                );
              })}
            </TaskToday>
          </Before>
        </Container>
      </ScrollView>
      <ContainerSheet>
        <ButtonSheet activeOpacity={1.7} onPress={toggleSheet}>
          <Plus source={require("../Img/plus.png")} />
        </ButtonSheet>
      </ContainerSheet>

      {/* ve se estiver aberto na função de cima para assim mostrar o botttom sheet */}
      {isOpen && <Sheet onClose={toggleSheet} />}
    </Main>
  );
}
