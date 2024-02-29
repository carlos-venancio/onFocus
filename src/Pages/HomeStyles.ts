import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native";

export const Main = styled.View`
  display: flex;
  width: 100%;
 
`;
export const ScrollView = styled.ScrollView`
  background-color: white;
 
`;
export const Plus = styled.Image`
  width: 70px;
  height: 70px;
`;
export const ContainerSheet = styled.View`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: "50%";
  align-self: "center";
  position: "absolute";
  bottom: 50px;

`;
export const ButtonSheet = styled(TouchableOpacity)`
  bottom: 60px;
`;
export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 80px;
`;
export const Title = styled.Text`

  display: flex;
  font-size: 55px;
  font-weight: bold;
  color: black;
`;
export const Logo = styled.Image`
  width: 60px;
  height: 60px;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-top: 65px;
  margin-bottom: 20px;
`;
export const Today = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  `;
export const Before = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  `;

export const TitleText = styled.Text`
  margin-left: 20px;
  color: #5aa15d;
  font-size: 22px;
  font-weight: bold;
`;
export const TaskToday = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ContainnerTask = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  border-color: #8b8484;
  border-width: 0.5px;
  width: 323px;
  height: 70px;
`;

export const Class = styled.View`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const DateClass = styled.Text`
  font-size: 12px;
`;
export const CategoClass = styled.Text`
  font-size: 12px;
`;
export const ClassEnter = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
export const TaskName = styled.Text`
  font-size: 25px;
`;
export const IconEnter = styled.Image`
  width: 50px;
  height: 50px;
`;
const Styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ffffff',
    padding: 16,
    elevation: 4,
  },
  
})
export default Styles;