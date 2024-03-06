import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

// nomeando const para o tamanho para não usar numeros aleatorios e me perder na leitura
// o tamanho da objeto sera do tamanho de uma "window" que vem de uma libary
const DIMENSIONS = Dimensions.get("window");

// Tamanho da altura
export const SHEET_HEIGHT = 770;

// Responsavel por definir o limite até onde vai o Bottom Sheet
export const SHEET_OVER_DRAG = 20;

export const styles = StyleSheet.create({
  Detector: {
    width: DIMENSIONS.width,
    height: SHEET_HEIGHT,
    backgroundColor: "white",
    position: "absolute",
    bottom: -SHEET_OVER_DRAG * 2.3,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    elevation: 30,
    borderTopWidth: 1,
    borderTopColor: "white",
    borderRadius: 50,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    margin: 24,
  },
  DragIcon: {
    marginTop: 16,
    alignSelf: "center",
  },
});

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
  justify-content: center;
  align-items: center;
`;


export const Main = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Insert = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
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
export const Text = styled.Text`
  text-align: center;
  color: black;
  font-size: 20px;
`;
