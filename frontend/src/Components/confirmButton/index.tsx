import React from 'react';
import { CustomButton, ButtonText } from './styled';

interface ConfirmProps {
  onPress: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ onPress }) => {
  return (
    <CustomButton activeOpacity={0.1} onPress={onPress}>
      <ButtonText>Iniciar</ButtonText>
    </CustomButton>
  );
};

export default Confirm;
