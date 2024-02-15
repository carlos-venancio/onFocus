import 'react-native-gesture-handler';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Home  from "./src/Pages/Home"
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView styles={{ flex: 1}}>
    <StatusBar style="light" backgroundColor='transparent' translucent/>
    <Home/>

    </GestureHandlerRootView>
    
  );
}


