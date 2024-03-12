import React, { useState, useEffect } from "react";
import {
  Container,
  ViewOpUp,
  ViewOpDo,
  ButtonUp,
  ButtonDown,
  ViewText,
  NumberText,
  Horus,
  Mints,
  Entre,
  DateTime,
  DateTimeText,
  Button,
} from "./styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

export default function Timer({ timers }) {

  type controlTime = {
    hours: number;
    minuts: number;
    date: string;
    timedate: string;
  };

  const handleTimers = (newsValues: controlTime) => {
    timers.duration = `${newsValues.hours}:${newsValues.minuts}`;
    timers.dataInicio = `${newsValues.date}, ${newsValues.timedate}`;
  };

  const dates: controlTime = { hours: 0, minuts: 0, date: "", timedate: "" };

  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [increaseTimeout, setIncreaseTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const delayDuration = 300;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isHoursPickerVisible, setHoursPickerVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setErrorMessage(""); // Limpar a mensagem de erro ao mostrar a modal
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // console.warn("A date has been picked: ", date);
    if (date < new Date()) {
      setErrorMessage("Insira uma data válida");
    } else {
      dates.date = date.toLocaleDateString();
      hideDatePicker();
    }
  };

  const showHoursPicker = () => {
    setHoursPickerVisibility(true);
  };

  const hideHoursPicker = () => {
    setHoursPickerVisibility(false);
  };

  const handleConfirmHours = (date: Date) => {
    // console.warn("A date has been picked: ", date);
    dates.timedate = date.toLocaleTimeString();
    hideHoursPicker();
  };

  const increaseHours = () => {
    dates.hours = ((prevNumber) => (prevNumber < 23 ? prevNumber + 1 : 0))();
  };

  const decreaseHours = () => {
    dates.hours = ((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 23))();
  };

  const handlePress = (action: any) => {
    // Atraso antes de começar a aumentar
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        action();
      }, 150); // Intervalo de aumento

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
    dates.minuts = ((prevMinutes) => (prevMinutes < 59 ? prevMinutes + 1 : 0))();
  };

  const decreaseMinutes = () => {
    dates.minuts = ((prevMinutes) => (prevMinutes > 0 ? prevMinutes - 1 : 59))();
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

  useEffect(() => {
    handleTimers(dates)
  },[dates])

  return (
    <Container>
      <DateTime>
        <Horus>
          <ViewOpUp
            onPressIn={() => handlePress(decreaseHours())}
            onPress={decreaseHours}
            onPressOut={handlePressOut}
          >
            <ButtonUp source={require("../../Img/upload.png")} />
          </ViewOpUp>

          <ViewText>
            <NumberText>{String(dates.hours).padStart(2, "0")}</NumberText>
          </ViewText>

          <ViewOpDo
            onPressIn={() => handlePress(increaseHours())}
            onPress={increaseHours}
            onPressOut={handlePressOut}
          >
            <ButtonDown source={require("../../Img/Down.png")} />
          </ViewOpDo>
        </Horus>
        <Button onPress={showDatePicker}>
          {Date ? (
            <DateTimeText>{format(dates.date, "dd/MM/yyyy")}</DateTimeText>
          ) : (
            <DateTimeText>Data</DateTimeText>
          )}
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
          <ViewOpUp
            onPressIn={() => handlePress(decreaseMinutes())}
            onPress={decreaseMinutes}
            onPressOut={handlePressOutMints}
          >
            <ButtonUp source={require("../../Img/upload.png")} />
          </ViewOpUp>

          <ViewText>
            <NumberText>{String(dates.minuts).padStart(2, "0")}</NumberText>
          </ViewText>

          <ViewOpDo
            onPressIn={() => handlePress(increaseMinutes())}
            onPress={increaseMinutes}
            onPressOut={handlePressOutMints}
          >
            <ButtonDown source={require("../../Img/Down.png")} />
          </ViewOpDo>
        </Mints>
        <Button onPress={showHoursPicker}>
          {dates.timedate ? (
            <DateTimeText>{format(dates.timedate, "HH:mm")}</DateTimeText>
          ) : (
            <DateTimeText>Hora</DateTimeText>
          )}
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
}
