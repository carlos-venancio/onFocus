import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Button } from "../Timer/styles";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModlOut = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.096);
`;
export const ModalIn = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  gap: 20px;
`;
export const Text = styled.Text`
  font-size: 20px;
`;
export const Image = styled.Image`
  width: 40px;
  height: 20px;
`;
export const CloseModal = styled(Button)`
  display: flex;
  justify-content: right;
  align-items: start;
  background-color: aqua;
  
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
  color: white;
`;
