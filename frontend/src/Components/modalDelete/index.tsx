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
import api from '../../services/server'

interface Props {
  isVisible: boolean;
  onClose: () => void;
}
const ModalDelete: React.FC<Props> = ({ isVisible, onClose }, id ) => {

   const deletarTarefa = async (id:number) => {
    const response = await api.delete(`/${id}`);
    if (response.status != 200) console.error(response.data.err)
   }

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
    

            <Text>Deseja Excluir?</Text>
            <ContainerButton>
            <Cancel onPress={onClose}  >
                <ButtonText>Não</ButtonText>
              </Cancel>

              <Delete>
                <ButtonText>Sim</ButtonText>
              </Delete>
            </ContainerButton>
          </ModalIn>
        </ModalOut>
      </Modal>

    </Container>
  );
};
export default ModalDelete;
