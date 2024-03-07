import React, { useState, useEffect, useRef } from "react";
import { CustomButton, ButtonText } from "../bottomSheet/styles";
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

} from "../Timer/styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { ButtonText1, Container1, RestartButton, PauseButton, Data } from "./styles2";
import { View } from "react-native";

import ModalConfirm from "../modalConfirm";

import { Des, Insert } from "../Task/Styles";







const Timer: React.FC = () => {
  const [time, setTime] = useState({
    minutes: 1,
    seconds: 10,
  });

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  
  const initialTime = useRef({
    minutes: 1,
    seconds: 10,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.minutes === 0 && prevTime.seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            // Pode-se definir outras ações quando a contagem chegar a zero
            return prevTime;
          } else if (prevTime.seconds === 0) {
            return {
              minutes: prevTime.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              ...prevTime,
              seconds: prevTime.seconds - 1,
            };
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const formatTimeValue = (value: number) => {
    return value < 10 ? "0" + value : value;
  };

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setShowStartButton(false); // Oculta o botão "Iniciar"
  };

  const handlePause = () => {
    setIsPaused((prevState) => !prevState); // Inverte o estado de pausa
  };


  const handleRestart = () => {
    setTime(initialTime.current);
    setIsActive(true);
    setIsPaused(false);
    setShowStartButton(false); // Garante que o botão "Iniciar" permaneça oculto após reiniciar
    setModalDeleteVisible(false); // Fecha o modal de confirmação ao reiniciar
  };

  const abrirModal = () => {
    setModalDeleteVisible(true);
  };

  const fecharModal = () => {
    setModalDeleteVisible(false);
  };


  const pauseButtonText = isPaused ? "Continuar" : "Pausar";
  return (
    <Container >



      <View style={{ display: "flex", flexDirection: 'column' }}>

        <Data>
          <DateTime>
            <Horus>
              <ViewOpUp></ViewOpUp>
              <ViewText>
                <NumberText>{formatTimeValue(time.minutes)}</NumberText>
              </ViewText>
              <ViewOpDo></ViewOpDo>
            </Horus>
          </DateTime>
          <Entre>:</Entre>
          <DateTime>
            <Mints>
              <ViewOpUp></ViewOpUp>
              <ViewText>
                <NumberText>{formatTimeValue(time.seconds)}</NumberText>
              </ViewText>
              <ViewOpDo></ViewOpDo>
            </Mints>
          </DateTime>
        </Data>


        <Insert>
          <Des
            multiline={true}
            numberOfLines={4}
            maxLength={150}
            placeholder="Digite aqui..."
            textAlignVertical="top"
          />
        </Insert>

        {showStartButton && ( // Renderiza o botão "Iniciar" se showStartButton for true
          <CustomButton activeOpacity={0.1} onPress={handleStart}>
            <ButtonText>Iniciar</ButtonText>
          </CustomButton>
        )}
        {/* Renderiza os botões "Pausar" e "Reiniciar" quando isActive for true */}
        {isActive && (
          <Container1>
            <PauseButton activeOpacity={0.1} onPress={handlePause}>
              <ButtonText1>{pauseButtonText}</ButtonText1>
            </PauseButton>
            <RestartButton activeOpacity={0.1} onPress={abrirModal}>
              <ButtonText>Reiniciar</ButtonText>
            </RestartButton>
          </Container1>
        )}
          
        <ModalConfirm
          isVisible={modalDeleteVisible}
          onClose={fecharModal}
          handleRestart={handleRestart}
        />
        
      </View>

    </Container>
  );
};

export default Timer;
