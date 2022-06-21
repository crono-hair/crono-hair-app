import React from 'react';
import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import Text from '../Typography/Text';

interface IInput extends TextInputProps {
  placeholder: string;
  label?: string;
}

const Input: React.FC<IInput> = ({
  label,
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
}) => {
  return (
    <>
      {label ? (
        <Text size={14} color="#fff">
          {label}
        </Text>
      ) : null}
      <StyledInput
        secureTextEntry={secureTextEntry}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </>
  );
};

const StyledInput = styled.TextInput<IInput>`
  font-size: 16px;
  background-color: #313553;
  border-radius: 12px;
  padding: 12px;
`;

export default Input;
