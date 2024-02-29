import React from 'react';
import { ButtonText, Container, RestartButton, PauseButton } from './styled';

interface ButtonProps {
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <Container >
      <PauseButton activeOpacity={0.1} onPress={onPress}>
      <ButtonText>Pausar</ButtonText>
    </PauseButton>
      <RestartButton activeOpacity={0.1} onPress={onPress}>
      <ButtonText>Reiniciar</ButtonText>
    </RestartButton>
    </Container>
  );
};
export default Button; 