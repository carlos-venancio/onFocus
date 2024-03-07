import React from "react";
import { Modal } from "react-native";
import {
  Container,
  Text,
  CloseModal,
  ModalOut,
  ModalIn,
  ContainerButton,
  Delete,
  Cancel,
  ButtonText,
} from "./styles";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  handleRestart: () => void;
}

const ModalConfirm: React.FC<Props> = ({ handleRestart, isVisible, onClose }) => {
  return (
    <Container>
      <Modal visible={isVisible} animationType="fade" transparent={true} onRequestClose={onClose}>
        <ModalOut>
          <ModalIn>
            <Text>Deseja mesmo reiniciar?</Text>
            <ContainerButton>
              <Cancel onPress={onClose}>
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
