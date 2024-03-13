import React, { useState, useRef } from "react";
import Button from "../editButton/index";
import { Text } from 'react-native'
import Confirm from "../confirmButton";
import ModalDelete from "../modalDelete/index";
import Timer from "../Timer/index";

import {
  Main,
  VoltarButton,
  ImageVoltar,
  ContainerEdit,
  ImageEdit,
  ButtonDelete,
  ContainerTitle,
  Title,
  Container,
  Horus,
  DateTime,
  ViewText,
  NumberText,
  Entre,
  Mints,
  Insert,
  Des,
  ContainerMain,
  ContainerMix,
  ContainerVoltar,
  HorusText,
  ButtonEdit,
  ContainerButton,
} from "./Styles";
import Edit from "../bottomEdit";
import { useEffect } from "react";
import api from "../../services/server";

interface TaskProps {
  navigation: any;
  route: any;
}

const Task: React.FC<TaskProps> = ({ navigation, route }) => {
  const { id } = route.params;
  const [timers,setTimers] = useState({ duration: "", dataInicio: "" });

  const [useButton, setUseButton] = useState(true);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIcon, setEditIcon] = useState(require("../../Img/edit.png"));
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const [loading, setLoading] = useState(true)

  // função para ver se esta aberto
  const [isOpen, setIsOpen] = useState(false);
  // ve se esta aberto e se esriver ele fecha ou o contrario
  // (sempre vai fazer o inverso do estado atual)
  function toggleSheet() {
    setIsOpen((prevState) => !prevState);
  }

  async function buscarTarefa() {
    let response = await api.get(`/${id}`)
    if (response.status != 200) console.warn(response.data.error)
    
    // passagem dos valores iniciais
    setTitle(response.data.tituloTarefa)
    setDescribe(response.data.descricao)
    setTimers({duration: response.data.duracao,dataInicio: response.data.dataInicio})

    console.log(response.data)
    console.log(timers)
    setLoading(false)
  }

  
  
  const handleEditPress = () => {
    setEditMode(!editMode);
    setEditIcon(
      editMode ? require("../../Img/edit.png") : require("../../Img/check.png")
      );
  };
  
  const toggleButton = () => {
    setUseButton(!useButton);
  };

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };
  
  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };

  
  const handlePress = () => {
    navigation.navigate("Home");
  };
  
  
  useEffect(() => {
    console.log(id);
    buscarTarefa()
  },[]);
  
  if (loading) {
    return (
      <Text>Carregando</Text>
      )
    }
    
    return (
      <Main>
      <ContainerMain>
        <ContainerVoltar>
          <VoltarButton onPressIn={handlePress}>
            <ImageVoltar source={require("../../Img/voltar.png")} />
          </VoltarButton>
        </ContainerVoltar>

        <ContainerMix>
          <ContainerEdit>
            <ButtonEdit onPress={toggleSheet}>
              <ImageEdit source={editIcon} />
            </ButtonEdit>
            <ButtonDelete onPress={abrirModalDelete}>
              <ImageEdit source={require("../../Img/lixo.png")} />
              <ModalDelete
                isVisible={modalDeleteVisible}
                onClose={fecharModalDelete}
              />
            </ButtonDelete>
          </ContainerEdit>

          <Title
            maxLength={40}
            editable={editMode}
            placeholder="Digite o titulo"
            value={title}
            onChangeText={(event) => setTitle(event)}
          ></Title>
        </ContainerMix>

        <ContainerTitle></ContainerTitle>

        <Timer timers={timers}/>

        {/* <Container >
            <DateTime>
              <Horus >
                <ViewText >
                  <NumberText >10</NumberText>
                  <HorusText >Horas</HorusText>
                </ViewText>
              </Horus>   
            </DateTime>
              <Entre>:</Entre>
            <DateTime>
                <Mints>
                  <ViewText >
                    <NumberText>20</NumberText>
                    <HorusText >Minutos</HorusText>
                  </ViewText>            
                </Mints>
            </DateTime>
      </Container> */}
        <Insert>
          <Des
            multiline={true}
            numberOfLines={4}
            editable={editMode}
            maxLength={150}
            placeholder="Digite aqui..."
            value={describe}
            onChangeText={(event) => setDescribe(event)}
            textAlignVertical="top"
            style={{
              borderColor: editMode ? "#ccc" : "#ccc",
            }}
          />
        </Insert>

        <ContainerButton>
          {useButton ? (
            <Confirm onPress={toggleButton} />
          ) : (
            <Button onPress={toggleButton} />
          )}
        </ContainerButton>
      </ContainerMain>
      {isOpen && <Edit onClose={toggleSheet} />}
    </Main>
  );
};

export default Task;
