import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Button } from "../Timer/styles";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalOut = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.096);
  
`;
export const ModalIn = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  height: 150px;
`;


export const CloseModal = styled(Button)`
    margin-left: 140px;
   
  
`;
export const Text = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;
export const Image = styled.Image`
  width: 30px;
  height: 20px;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Cancel = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5aa15d;
  border-radius: 10px;
  width: 84px;
  height: 39px;
`;
export const Delete = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d34646;
  border-radius: 10px;
  width: 84px;
  height: 39px;
`;
export const ButtonText = styled.Text`
font-size: 20px;
  color: white;
`;
