// import "react-native-gesture-handler";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Home from "./src/Pages/Home";
// import React from "react";
// import { StatusBar } from "expo-status-bar";

// import Task from "./components/Task";
// import Home from "./components/Home";
// import Botton from "./components/Botton";
// import Modal from "./components/Modal";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <GestureHandlerRootView styles={{ flex: 1 }}>
//         <StatusBar style="light" backgroundColor="transparent" translucent />
//         <Home />
//       </GestureHandlerRootView> */}

//       <Stack.Navigator
//         initialRouteName="Modal"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: "Home" }}
//         />
//         <Stack.Screen
//           name="Task"
//           component={Task}
//           options={{ title: "Task" }}
//         />
//         <Stack.Screen
//           name="Botton"
//           component={Botton}
//           options={{ title: "Botton" }}
//         />
//         <Stack.Screen
//           name="Modal"
//           component={Modal}
//           options={{ title: "Modal" }}
//         />
//         {/* <Stack.Screen name="Timer" component={Timer} options={{ title: 'Timer' }} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
