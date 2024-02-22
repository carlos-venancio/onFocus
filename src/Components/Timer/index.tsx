import React, { Component } from 'react';
import {Container, ViewOpUp, ViewOpDo, ButtonUp,ButtonDown, ViewText, NumberText, Horus, Mints, Entre } from "./styles"

interface State {
  number: number;
  minutes: number;
}



class Timer extends Component<{}, State> {

  private increaseTimeout: NodeJS.Timeout | null = null;
  private delayTimeout: NodeJS.Timeout | null = null;
  private delayDuration = 500; // Tempo de atraso em milissegundos (1 segundo)


  constructor(props: {}) {
    super(props);
    this.state = {
      number: 0,
      minutes: 0,
    };
  }

  increaseHours = () => {
    this.setState((prevState) => ({
      number: prevState.number < 23 ? prevState.number + 1 : 0,

    }));
  };

  decreaseHours = () => {
    this.setState((prevState) => ({
      number: prevState.number > 0 ? prevState.number - 1 : 23,
    }));
  };

  handlePressIn = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.increaseHours();
      }, 150); // Intervalo de aumento
    }, this.delayDuration);
  };
  handlePressDes = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.decreaseHours();
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



  increaseMinutes = () => {
    this.setState((prevState) => ({
      minutes: prevState.minutes < 59 ? prevState.minutes + 1 : 0,
    }));
  };

  decreaseMinutes = () => {
    this.setState((prevState) => ({
      minutes: prevState.minutes > 0 ? prevState.minutes - 1 : 59,
    }));
  };

  handlePressInMints = () => {
    // Atraso antes de começar a aumentar
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.increaseMinutes();
      }, 150); // Intervalo de aumento
    }, this.delayDuration);
  };

  handlePressDesMints = () => {
    // Atraso antes de começar a diminuir
    this.delayTimeout = setTimeout(() => {
      this.increaseTimeout = setInterval(() => {
        this.decreaseMinutes();
      }, 150); // Intervalo de diminuição
    }, this.delayDuration);
  };

  handlePressOutMints = () => {
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
      <Container >
        <Horus>
          <ViewOpUp onPressIn={this.handlePressDes} onPress={this.decreaseHours} onPressOut={this.handlePressOut}>     
              <ButtonUp          
              source={require('../../Img/upload.png')}
              />
          </ViewOpUp>

          <ViewText >
            <NumberText>{String(this.state.number).padStart(2, '0')}</NumberText>
          </ViewText>

          <ViewOpDo onPressIn={this.handlePressIn} onPress={this.increaseHours} onPressOut={this.handlePressOut} >     
              <ButtonDown 
              source={require('../../Img/Down.png')}
              />
          </ViewOpDo>
        </Horus>

          <Entre>:</Entre>

        <Mints>
          <ViewOpUp onPressIn={this.handlePressDesMints} onPress={this.decreaseMinutes} onPressOut={this.handlePressOutMints}>     
              <ButtonUp          
              source={require('../../Img/upload.png')}
              />
          </ViewOpUp>

          <ViewText >
            <NumberText>{String(this.state.minutes).padStart(2, '0')}</NumberText>
          </ViewText>

          <ViewOpDo onPressIn={this.handlePressInMints} onPress={this.increaseMinutes} onPressOut={this.handlePressOutMints} >     
              <ButtonDown 
              source={require('../../Img/Down.png')}
              />
          </ViewOpDo>
        </Mints>
      </Container>
    );
  }
}



export default Timer;