import React, { useState, useEffect } from 'react';
import { Container, ViewOpUp, ViewOpDo, ButtonUp, ButtonDown, ViewText, NumberText, Horus, Mints, Entre, DateTime, DateTimeText, Button } from "./styles"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";




export default function Timer  ()  {

  const [number, setNumber] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [increaseTimeout, setIncreaseTimeout] = useState<NodeJS.Timeout | null>(null);

  const delayDuration = 300;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState("");
  const [isHoursPickerVisible, setHoursPickerVisibility] = useState(false);
  const [chosenHours, setChosenHours] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
   

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setErrorMessage('');  // Limpar a mensagem de erro ao mostrar a modal
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
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
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        increaseHours();
      }, 150); // Intervalo de aumento

      setIncreaseTimeout(interval);
    }, delayDuration);

    setDelayTimeout(timeout);
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
              <ButtonUp          
              source={require('../../Img/upload.png')}
              />
          </ViewOpUp>

          <ViewText >
            <NumberText>{String(minutes).padStart(2, '0')}</NumberText>
          </ViewText>

          <ViewOpDo onPressIn={handlePressInMints} onPress={increaseMinutes} onPressOut={handlePressOutMints} >     
              <ButtonDown 
              source={require('../../Img/Down.png')}
              />
          </ViewOpDo>
        </Mints>
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
      </Container>
    );
  };






