import {
  Container,
  Text,
  Image,
  CloseModal,
  ModalOut,
  ModalIn,
  ContainerButton,
  Delete,
  Cancel,
  ButtonText,
  
} from "./styles";
import { Modal } from "react-native";
import React, { useState } from "react";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  handleRestart: () => void; // Ajuste aqui para que handleRestart seja uma função
}
const ModalConfirm: React.FC<Props> = ({handleRestart, isVisible, onClose }) => {

   

  return (
    <Container >
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <ModalOut >
          <ModalIn>
            
              {/* <CloseModal >
                <Image source={require("../../Img/exit.jpg")} />
              </CloseModal> */}
    

            <Text>Deseja mesmo reiniciar?</Text>
            <ContainerButton>
            <Cancel onPress={onClose}  >
                <ButtonText>Não</ButtonText>
              </Cancel>

              <Delete onPress={handleRestart}>
                <ButtonText>Sim</ButtonText>
              </Delete>
            </ContainerButton>
          </ModalIn>
        </ModalOut>
      </Modal>

    </Container>
  );
};
export default ModalConfirm;
