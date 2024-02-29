import React, { useState } from "react";
import Button from "../editButton/index";
import Confirm from "../confirmButton"
import ModalDelete from "../modalDelete/index";
import Timer from '../Timer/index';


import { Main, VoltarButton, ImageVoltar,ContainerEdit, 
  ImageEdit, ButtonDelete, ContainerTitle, Title, Container,
   Horus, DateTime, ViewText, NumberText, Entre, Mints, Insert, 
   Des, ContainerMain, ContainerMix, ContainerVoltar, HorusText,
    ButtonEdit, ContainerButton } from "./Styles";


interface TaskProps {
  navigation: any; 
}

const Task: React.FC<TaskProps> = ({ navigation }) => {

  const [useButton, setUseButton] = useState(true);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIcon, setEditIcon] = useState(require("../../Img/edit.png"));
  const [text, setText] = useState("");

  const handleEditPress = () => {
    setEditMode(!editMode);
    setEditIcon(
      editMode
        ? require("../../Img/edit.png") 
        : require("../../Img/check.png") 
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
  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handlePress = () => {
    navigation.navigate("Home");
  };
 

  return (

      <Main >
        <ContainerMain>

        <ContainerVoltar>
          <VoltarButton onPressIn={handlePress}>
            <ImageVoltar
              source={require("../../Img/voltar.png")}
            />
          </VoltarButton>
        </ContainerVoltar>

        <ContainerMix>

              <ContainerEdit >
                <ButtonEdit onPress={handleEditPress}>
                  <ImageEdit
                    
                    source={editIcon}
                  />
                </ButtonEdit>
                <ButtonDelete onPress={abrirModalDelete}>
                    <ImageEdit
                    
                    source={require("../../Img/lixo.png")}
                  />
                  <ModalDelete
                        isVisible={modalDeleteVisible}
                        onClose={fecharModalDelete}
                      />

                </ButtonDelete>
              </ContainerEdit>

          <Title maxLength={40} editable={editMode} placeholder="Digite o titulo"></Title>

        </ContainerMix>

        <ContainerTitle >
        
        </ContainerTitle>

        <Timer/>

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
                value={text}
                onChangeText={handleTextChange}
                textAlignVertical="top"
                style={{ 
                    borderColor: editMode ? '#ccc' : '#ccc', 
                
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
      </Main>
  );
};

export default Task;
