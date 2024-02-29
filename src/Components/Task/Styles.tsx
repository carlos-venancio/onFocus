import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Main = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    
`;
export const ContainerMain = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
    
    
`;
export const ContainerVoltar = styled.View`
    margin-right: 280px;
  
`;

export const VoltarButton = styled(TouchableOpacity)`
    display: flex;
    width: 50px;
`;
export const ImageVoltar = styled.Image`
    width: 50px;
    height: 40px;
`;
export const ContainerMix = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  /* gap: 20px; */

`;
export const ContainerEdit = styled.View`
   display: flex;
   flex-direction: row;
   justify-content:  center;
   gap: 10px;
   margin-left: 230px;
`;
export const ImageEdit = styled.Image`
    width: 35px;
    height: 35px;
`;
export const ButtonDelete = styled(TouchableOpacity)`
    width: 35px;
    height: 35px;
`;
export const ButtonEdit = styled(TouchableOpacity)`
    width: 35px;
    height: 35px;
`;
export const ContainerTitle = styled.View`
   display: flex;
   justify-content: center;
`;
export const Title = styled.TextInput`
   margin-top: 20px;
  color: #000;
  width: 300px;
  height: 50px;
  border: 0.5px;
  border-color: #000;
  text-align: left;
  font-size: 29px;
  padding-left: 15px;
  border-radius: 15px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 5px;
`;
export const Horus = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  color: black;
  height: 140px;
  border-width: 1px;
  border-radius: 20px;
  border-color: #585353b1;

`;
export const Mints = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  color: black;
  height: 140px;
  border-width: 1px;
  border-radius: 20px;
  border-color: #585353b1;

`;
export const Entre = styled.Text`   
    margin-bottom: 20px;
    font-size: 80px;
`;


export const ViewOpUp = styled(TouchableOpacity)`
    background-color:  #ffff;
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-color: #585353b1;
    border-bottom-width:0.5px ;
    
`;
export const ViewOpDo = styled(TouchableOpacity)`
    background-color: #fff;
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-color: #585353b1;
    border-top-width:0.5px ;
   
    
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
  flex-direction: column;
  justify-content: center;
  
  align-items: end;

  
`;

export const NumberText = styled.Text`
text-align: center;
font-size: 65px;
font-weight: 500;
  

  `;
export const HorusText = styled.Text`
text-align: center;
font-size: 25px;
font-weight: 400;
  

  `;
  export const DateTimeText = styled.Text`
  display: flex;
  font-size: 16px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 0.5px;
  border-color: black;
  border-radius: 7px;
`;
export const DateTime = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Button = styled(TouchableOpacity)`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;
export const Insert = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 60px;
`;

export const Des = styled.TextInput`
  font-size: 19px;
  width: 250px;
  height: 150px;
  border-width: 0.5px;
  border-color: #ccc;
  border-radius: 7px;
  padding: 8px;
 
`;
export const ContainerButton = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 100px;

`;
