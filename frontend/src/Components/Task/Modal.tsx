import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image ,Modal} from 'react-native';

export default function App() {

const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Modal" onPress={toggleModal} />

      <Modal visible={isModalVisible} >
        <View style={styles.modalContainer}>

          <TouchableOpacity onPress={toggleModal} style={styles.exitContainer}>
            <Image source={require("../../Img/exit.jpg")} style={styles.exitImage} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Deseja mesmo sair?</Text>
          <Text style={styles.subTitle}>Após sair você perdera todo seu progesso e seu tempo será reiniciado, deseja mesmo encerrar essa atividade?</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Continuar"
                onPress={() => {
                  console.log('Botão Continuar');
                }}
                color="#5AA15D"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Sair"
                onPress={() => {
                  console.log('Botão Sair');
                }}
                color="#D34646"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '45%',
  },
  exitContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  exitImage: {
    width: 30,
    height: 30,
  },
});