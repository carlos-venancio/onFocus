<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { Container, ViewOpUp, ViewOpDo, ButtonUp, ButtonDown, ViewText, NumberText, Horus, Mints, Entre, DateTime, DateTimeText, Button } from "./styles"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";




export default function Timer  ()  {
>>>>>>> main

  const [number, setNumber] = useState(0);
  const [minutes, setMinutes] = useState(0);

<<<<<<< HEAD
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
=======
  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [increaseTimeout, setIncreaseTimeout] = useState<NodeJS.Timeout | null>(null);

  const delayDuration = 300;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState("");
  const [isHoursPickerVisible, setHoursPickerVisibility] = useState(false);
  const [chosenHours, setChosenHours] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
   
>>>>>>> main

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setErrorMessage('');  // Limpar a mensagem de erro ao mostrar a modal
  };

<<<<<<< HEAD
  decreaseHours = () => {
    this.setState((prevState) => ({
      number: prevState.number > 0 ? prevState.number - 1 : 23,
    }));
=======
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
>>>>>>> main
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    if (date < new Date()) {
      setErrorMessage("Insira uma data válida");
    } else {
      setChosenDate(date);
      hideDatePicker();
    }
  };




  const showHoursPicker = () => {
    setHoursPickerVisibility(true);
  };

  const hideHoursPicker = () => {
    setHoursPickerVisibility(false);
  };

  const handleConfirmHours = (date) => {
    // console.warn("A date has been picked: ", date);
    setChosenHours(date);
    hideHoursPicker();
  };



  
  const increaseHours = () => {
    setNumber((prevNumber) => (prevNumber < 23 ? prevNumber + 1 : 0));
  };

  const decreaseHours = () => {
    setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 23));
  };

  const handlePressIn = () => {
    // Atraso antes de começar a aumentar
<<<<<<< HEAD
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
=======
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        increaseHours();
      }, 150); // Intervalo de aumento

      setIncreaseTimeout(interval);
    }, delayDuration);

    setDelayTimeout(timeout);
>>>>>>> main
  };

  const handlePressDes = () => {
    // Atraso antes de começar a diminuir
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        decreaseHours();
      }, 150); // Intervalo de diminuição

      setIncreaseTimeout(interval);
    }, delayDuration);

    setDelayTimeout(timeout);
  };

  const handlePressOut = () => {
    // Limpar os timeouts ao soltar o botão
    if (delayTimeout) {
      clearTimeout(delayTimeout);
      setDelayTimeout(null);
    }

    if (increaseTimeout) {
      clearInterval(increaseTimeout);
      setIncreaseTimeout(null);
    }
  };

  const increaseMinutes = () => {
    setMinutes((prevMinutes) => (prevMinutes < 59 ? prevMinutes + 1 : 0));
  };

  const decreaseMinutes = () => {
    setMinutes((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 59));
  };

  const handlePressInMints = () => {
    // Atraso antes de começar a aumentar
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        increaseMinutes();
      }, 150); // Intervalo de aumento

      setIncreaseTimeout(interval);
    }, delayDuration);

    setDelayTimeout(timeout);
  };

  const handlePressDesMints = () => {
    // Atraso antes de começar a diminuir
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        decreaseMinutes();
      }, 150); // Intervalo de diminuição

      setIncreaseTimeout(interval);
    }, delayDuration);

    setDelayTimeout(timeout);
  };

  const handlePressOutMints = () => {
    // Limpar os timeouts ao soltar o botão
    if (delayTimeout) {
      clearTimeout(delayTimeout);
      setDelayTimeout(null);
    }

    if (increaseTimeout) {
      clearInterval(increaseTimeout);
      setIncreaseTimeout(null);
    }
  };



<<<<<<< HEAD
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
=======
  
    return (

      <Container >
        <DateTime>
        <Horus >
          <ViewOpUp onPressIn={handlePressDes} onPress={decreaseHours} onPressOut={handlePressOut}
          >     
              <ButtonUp          
              source={require('../../Img/upload.png')}
              />
          </ViewOpUp>

          <ViewText >
            <NumberText >{String(number).padStart(2, '0')}</NumberText>
          </ViewText>

          <ViewOpDo onPressIn={handlePressIn} onPress={increaseHours} onPressOut={handlePressOut} 
          
          >         
              <ButtonDown 
              source={require('../../Img/Down.png')}
              />
          </ViewOpDo>
        </Horus>
        <Button  onPress={showDatePicker} >
                    {chosenDate ? <DateTimeText>{format(chosenDate, 'dd/MM/yyyy')}</DateTimeText> : <DateTimeText>Data</DateTimeText>}
                </Button>
                
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        
                    />
          </DateTime>

          <Entre>:</Entre>
          <DateTime>
        <Mints>
          <ViewOpUp onPressIn={handlePressDesMints} onPress={decreaseMinutes} onPressOut={handlePressOutMints}>     
>>>>>>> main
              <ButtonUp          
              source={require('../../Img/upload.png')}
              />
          </ViewOpUp>

          <ViewText >
<<<<<<< HEAD
            <NumberText>{String(this.state.minutes).padStart(2, '0')}</NumberText>
          </ViewText>

          <ViewOpDo onPressIn={this.handlePressInMints} onPress={this.increaseMinutes} onPressOut={this.handlePressOutMints} >     
=======
            <NumberText>{String(minutes).padStart(2, '0')}</NumberText>
          </ViewText>

          <ViewOpDo onPressIn={handlePressInMints} onPress={increaseMinutes} onPressOut={handlePressOutMints} >     
>>>>>>> main
              <ButtonDown 
              source={require('../../Img/Down.png')}
              />
          </ViewOpDo>
        </Mints>
<<<<<<< HEAD
=======
        <Button onPress={showHoursPicker} >
                    {chosenHours ? <DateTimeText>{format(chosenHours, 'HH:mm')}</DateTimeText> : <DateTimeText>Hora</DateTimeText>}                
                </Button>
                    <DateTimePickerModal
                        isVisible={isHoursPickerVisible}
                        mode="time"  
                        onConfirm={handleConfirmHours}
                        onCancel={hideHoursPicker}
                    />
            </DateTime>
>>>>>>> main
      </Container>
    );
  };






<<<<<<< HEAD

export default Timer;
=======
>>>>>>> main
