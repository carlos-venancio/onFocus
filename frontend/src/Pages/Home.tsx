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
import Sqlite from "react-native-sqlite-storage";
// import controller from '../../../backend/controller/tarefas.controller.js'




export default function Home({ navigation }) {
  Sqlite.enablePromise(true)
Sqlite.DEBUG(true)

const db = Sqlite.openDatabase(
  {
    name: "onFocus.db",
    location: "default",
  },
  () => console.log("sucess"),
  (err) => console.error(err)
);

const iniciarTabela = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS tarefas(
                pk_tarefaId INTEGER PRIMARY KEY AUTOINCREMENT,
                tituloTarefa TEXT,
                dataInicio TEXT,
                duracao TEXT,
                descricao TEXT,
                status TEXT
            )`,
      [],
      () => console.log('Tabela "tarefas" criada com sucesso'),
      (err) => console.error('Erro ao criar a tabela "tarefas":', err)
    )
  });
}

const getTasks = async () => {
  const tarefas = await db.transaction((tx) => {
    tx.executeSql(
      "Select * from tarefas",
      [],
      () => console.log('Consulta realizada'),
      err => console.error(err)
    );

    console.log(tarefas)
  })
};

useEffect(() => {
  iniciarTabela()
  getTasks()
},[])

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
              <ContainnerTask style={Styles.Container} onPress={handlePress}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>

              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
            </TaskToday>
          </Today>
          <Before>
            <TitleText>Em Breve</TitleText>

            <TaskToday>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
              <ContainnerTask style={Styles.Container}>
                <ClassEnter>
                  <Class>
                    <DateClass>13:40</DateClass>
                    <CategoClass>---</CategoClass>
                  </Class>
                  <TaskName>Exemplo de titulo</TaskName>
                </ClassEnter>
                <IconEnter source={require("../Img/enter.png")} />
              </ContainnerTask>
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
