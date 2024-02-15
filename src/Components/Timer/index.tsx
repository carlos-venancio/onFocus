import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface State {
  number: number;
}



class NumberSelector extends Component<{}, State> {

  private increaseTimeout: NodeJS.Timeout | null = null;
  private delayTimeout: NodeJS.Timeout | null = null;
  private delayDuration = 300; // Tempo de atraso em milissegundos (1 segundo)


  constructor(props: {}) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  increaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number < 23 ? prevState.number + 1 : 0,

    }));
  };

  decreaseNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number > 0 ? prevState.number - 1 : 23,
    }));
  };

  handlePressIn = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.increaseNumber();
      }, 150); // Intervalo de aumento
    }, this.delayDuration);
  };
  handlePressDes = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.decreaseNumber();
      }, 150); // Intervalo de aumento
    }, this.delayDuration);
  };

  handlePressOut = () => {
    // Limpar os timeouts ao soltar o botão
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
      this.delayTimeout = null;
    }
    if (this.increaseTimeout) {
      clearInterval(this.increaseTimeout);
      this.increaseTimeout = null;
    }
  };



  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.increaseNumber} style={styles.buttonIn} onPressOut={this.handlePressOut} onPressIn={this.handlePressIn}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
        <View style={styles.viewText}>
          <Text style={styles.numberText}>{String(this.state.number).padStart(2, '0')}</Text>
        </View>

        <TouchableOpacity style={styles.buttonDes} onPressIn={this.handlePressDes} onPress={this.decreaseNumber} onPressOut={this.handlePressOut}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
  },
  buttonIn: {
    backgroundColor: 'blue',
    width: 70,
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  buttonDes: {
    backgroundColor: 'blue',
    width: 70,
    padding: 10,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: 'white',
    fontSize: 18,
  },
  viewText:{
    display: 'flex',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  numberText: {
    textAlign: "center",
    width: 70,
    borderWidth: 1,
    // borderTop: none,
    // borderBottom: none,
    borderRightColor: "black",
    borderLeftColor: "black",
    height: 50,
    fontSize: 50,
  },
});

export default NumberSelector;
