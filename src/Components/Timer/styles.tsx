import  styled  from "styled-components/native"
import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  gap: 10px;
`;
export const Horus = styled.View`

`;
export const Mints = styled.View`

`;
export const Entre = styled.Text`
    font-size: 80px;
    

`;


export const ViewOpUp = styled(TouchableOpacity)`
    background-color: #f8f7f7;
    border-color: black;
    border-width: 0.5px;
    /* background-color: #ffff; */
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
`;
export const ViewOpDo = styled(TouchableOpacity)`
    background-color: #f8f7f7;
    /* background-color: #ffff; */
    border-color: black;
    border-width: 0.5px;
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    
`;


export const ButtonUp = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ButtonDown = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ViewText = styled.View`
  display: flex;
  flex-direction: row;
  
`;

export const NumberText = styled.Text`
  align-items: center;
  text-align: center;
  width: 90px;
  border-width: 0.5px;
  border-color: black;
  color: black;
  height: 70px;
  font-size: 60px;
  `