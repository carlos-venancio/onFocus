import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

interface HomeProps {
  navigation: any; // Tipar corretamente conforme a definição de navigation
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Task");
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.voltarIcon}
          source={require("../assets/Voltar.jpg")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  voltarIcon: {
    width: 39,
    height: 40,
    overflow: "hidden",
  },
});

export default Home;
