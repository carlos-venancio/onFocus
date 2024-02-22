import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';



export const Main = styled.View`
    display: flex;
    background-Color: "#000";
    width: 100%;
    height: 100%;
    
`;
export const ButtonSheet = styled(TouchableOpacity)`
   margin-top: 74;
   margin-right: 32;
   align-self: flex-end;
    
`;
export const Header = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: blue ;
    
`;
export const Title = styled.Text`
    display: flex;
    background-color: blue ;
    font-size: 40;
    font-weight: bold;
    color: white;
    
`;
export const Logo = styled.Image`
   
    
`;