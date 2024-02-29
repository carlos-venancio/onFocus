import {StyleSheet,Platform} from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#07121B",
      alignItems: "center",
      justifyContent: "center"
    },
    button: {
      borderWidth: 10,
      borderColor: "#89AAFF",
      width: screen.width / 2,
      height: screen.width / 2,
      borderRadius: screen.width / 2,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30
    },
    buttonStop: {
      borderColor: "#FF851B"
    },
    buttonText: {
      fontSize: 45,
      color: "#89AAFF"
    },
    buttonTextStop: {
      color: "#FF851B"
    },
    timerText: {
      color: "#fff",
      fontSize: 90
    },
    picker: {
      flex: 1,
      maxWidth: 100,
      ...Platform.select({
        android: {
          color: "#fff",
          backgroundColor: "rgba(92, 92, 92, 0.206)",
        }
      })
    },
    pickerItem: {
      color: "#fff",
      fontSize: 20,
      ...Platform.select({
        android: {
          marginLeft: 10,
          marginRight: 10,
        }
      })
    },
    pickerContainer: {
      flexDirection: "row",
      alignItems: "center"
    }
  });