import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;


export const PauseButton = styled(TouchableOpacity)`
  background-color: #7EA2FF;
  width: 130px;
  height: 63px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
export const RestartButton = styled(TouchableOpacity)`
  background-color: #D34646;
  width: 130px;
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