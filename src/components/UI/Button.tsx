import React from 'react';
import styled from 'styled-components/native';
import Text from '../Typography/Text';

import { IButton } from '../../types/components';

const Button: React.FC<IButton> = ({ text, onPress }) => {
  return (
    <StyledButton onPress={onPress} text={text}>
      <Text size={18} weight="bold" spacing={1}>
        {text}
      </Text>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<IButton>`
  background-color: #ff9f1c;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
`;

export default Button;
