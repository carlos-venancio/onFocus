import {
  Container,
  Text,
  Image,
  CloseModal,
  ModlOut,
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
}
const ModalDelete: React.FC<Props> = ({ isVisible, onClose }) => {
  return (
    <Container>
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <ModlOut>
          <ModalIn>

            <CloseModal
              onPress={onClose}
            >
              <Image source={require("../../Img/exit.jpg")} />
            </CloseModal>

            <Text>Deseja Excluir?</Text>
            <ContainerButton>
              <Delete>
                <ButtonText>Sim</ButtonText>
              </Delete>

              <Cancel onPress={onClose}>
                <ButtonText>Não</ButtonText>
              </Cancel>

            </ContainerButton>
          </ModalIn>
        </ModlOut>
      </Modal>
      
    </Container>
  );
};
export default ModalDelete;
