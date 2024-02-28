import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import Task from './components/Task'; 
import Home from "./components/Home";
// import Timer from "./components/Timer"
import Botton from "./components/Botton";
import Modal from './components/Modal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Task" component={Task} options={{ title: 'Task' }} />
        <Stack.Screen name="Botton" component={Botton} options={{ title: 'Botton' }} />
        <Stack.Screen name="Modal" component={Modal} options={{ title: 'Modal' }} />
        {/* <Stack.Screen name="Timer" component={Timer} options={{ title: 'Timer' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Global: {
    top: 20,
  },
});
