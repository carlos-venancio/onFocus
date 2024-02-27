import  styled  from "styled-components/native"
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Horus = styled.View`

`;
export const Mints = styled.View`

`;
export const Entre = styled.Text`
    margin-bottom: 65px;
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
  flex-direction: row;
  
`;

export const NumberText = styled.Text`
  align-items: center;
  text-align: center;
  width: 90px;
  color: black;
  height: 70px;
  font-size: 60px;
  border-width: 1px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-color: #585353b1;

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


// const Styles = StyleSheet.create({
//     Container: {
//       padding: 16,
//       elevation: 4,
//     },
//     ViewDown: {
//       // padding: 16,
//       elevation: 40,
//       shadowOffset: { width: 0, height: -20000 },
//     },
    
// })
// export default Styles;