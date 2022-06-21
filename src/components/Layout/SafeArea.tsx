import React from 'react';
import { StatusBar, View } from 'react-native';
import styled from 'styled-components/native';

interface ISafeArea {
  statusBarBgColor?: string;
  barStyle?: 'light' | 'dark';
  bgColor?: string;
  children: React.ReactChild | React.ReactChild[];
}

const SafeArea: React.FC<ISafeArea> = ({
  barStyle = 'light',
  statusBarBgColor = '#22223b',
  bgColor = '#22223b',
  children,
}) => {
  return (
    <StyledSafeArea bgColor={bgColor}>
      <StatusBar
        barStyle={`${barStyle}-content`}
        backgroundColor={statusBarBgColor}
      />
      <View>{children}</View>
    </StyledSafeArea>
  );
};

const StyledSafeArea = styled.SafeAreaView<ISafeArea>`
  background-color: ${props => props.bgColor};
  flex: 1;
`;

export default SafeArea;
