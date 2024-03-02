import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./src/Pages/Home";
import React from "react";
import { StatusBar } from "expo-status-bar";

import Task from "./src/Components/Task/Task";
import Botton from "./src/Components/editButton";
import Modal from "./src/Components/Task/Modal";
import ModalDelete from "./src/Components/modalDelete/index";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Sheet from "./src/Components/bottomSheet";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <GestureHandlerRootView styles={{ flex: 1 }}>
        <Home />
      </GestureHandlerRootView> */}
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{ title: "Task" }}
        />
        <Stack.Screen
          name="Botton"
          component={Botton}
          options={{ title: "Botton" }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ title: "Modal" }}
        />
        <Stack.Screen
          name="ModalDelete"
          component={ModalDelete}
          options={{ title: "ModalDelete" }}
        />
        <Stack.Screen
          name="Sheet"
          component={Sheet}
          options={{ title: "Sheet" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
