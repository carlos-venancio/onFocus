import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Bottons: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text}>Pausar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#f5f5f5',
  },
  button1: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#7EA2FF',
  },
  button2: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: '#D34646',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Bottons;
