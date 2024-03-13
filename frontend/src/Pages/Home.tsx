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

  const [tarefas, setTarefas] = useState<any>({});

  const buscarTarefas = async (): Promise<void> => {
    const response = await api.get("/");
    console.log(response.data)
    if (response.status == 200) setTarefas(response.data);
  };

  useEffect(() => {
    console.log(navigation)
    buscarTarefas();
    console.log(tarefas)
  }, []);

  

  const handlePress = (idTask: number) => {
    navigation.navigate("Task", { id: idTask });
  };

  // função para ver se esta aberto
  const [isOpen, setIsOpen] = useState(false);
  // ve se esta aberto e se esriver ele fecha ou o contrario
  // (sempre vai fazer o inverso do estado atual)
  function toggleSheet() {
    setIsOpen((prevState) => !prevState);
  }

  if (Object.entries(tarefas).length < 1) {
    return (
      <Title> Carregando </Title>
    )
  }

  else {
    console.log(tarefas.hoje)
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
                  {/* <ContainnerTask
                    style={Styles.Container}
                    onPress={handlePress}
                  >
                    <ClassEnter>
                      <Class>
                        <DateClass>13:00</DateClass>
                        <CategoClass>---</CategoClass>
                      </Class>
                      <TaskName>Teste</TaskName>
                    </ClassEnter>
                    <IconEnter source={require("../Img/enter.png")} />
                  </ContainnerTask> */}
              {tarefas.hoje.map((tarefa: any) => {
                return (
                  <ContainnerTask
                    style={Styles.Container}
                    onPress={() => handlePress(Number(tarefa.pk_tarefaId))}
                    key={tarefa.pk_tarefaId}
                  >
                    <ClassEnter>
                      <Class>
                        <DateClass>{tarefa.dataInicio}</DateClass>
                        <CategoClass></CategoClass>
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
            {tarefas.emBreve.map((tarefa: any) => {
                return (
                  <ContainnerTask
                    style={Styles.Container}
                    onPress={() => handlePress(Number(tarefa.pk_tarefaId))}
                    key={tarefa.pk_tarefaId}
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
