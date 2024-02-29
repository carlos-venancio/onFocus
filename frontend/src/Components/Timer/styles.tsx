import  styled  from "styled-components/native"
<<<<<<< HEAD
=======
import { StyleSheet } from 'react-native';
>>>>>>> main
import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
<<<<<<< HEAD
  justify-content: space-around;
  padding: 16px;
=======
  justify-content: center;
>>>>>>> main
  gap: 10px;
`;
export const Horus = styled.View`

`;
export const Mints = styled.View`

`;
export const Entre = styled.Text`
<<<<<<< HEAD
    font-size: 80px;
    

=======
    margin-bottom: 65px;
    font-size: 80px;
>>>>>>> main
`;


export const ViewOpUp = styled(TouchableOpacity)`
<<<<<<< HEAD
    background-color: #f8f7f7;
    border-color: black;
    border-width: 0.5px;
    /* background-color: #ffff; */
=======
    background-color:  #ffff;
>>>>>>> main
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    
`;
export const ViewOpDo = styled(TouchableOpacity)`
    background-color: #f8f7f7;
    /* background-color: #ffff; */
    border-color: black;
    border-width: 0.5px;
=======
    border-width: 1px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-color: #585353b1;
    border-bottom-width:0.5px ;
    
`;
export const ViewOpDo = styled(TouchableOpacity)`
    background-color: #fff;
>>>>>>> main
    width: 90px;
    height: 30px;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
=======
    border-width: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-color: #585353b1;
    border-top-width:0.5px ;
   
>>>>>>> main
    
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
<<<<<<< HEAD
  border-width: 0.5px;
  border-color: black;
  color: black;
  height: 70px;
  font-size: 60px;
  `
=======
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
>>>>>>> main
