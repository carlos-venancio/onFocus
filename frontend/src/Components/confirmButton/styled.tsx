import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


export const CustomButton = styled(TouchableOpacity)`
  background-color: #5aa15d;
  width: 200px;
  height: 63px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  width: 200px;
  color: white;
  font-size: 20px;
`;