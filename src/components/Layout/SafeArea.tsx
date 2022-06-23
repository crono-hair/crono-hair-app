import React from 'react';
import { StatusBar, View } from 'react-native';
import styled from 'styled-components/native';

import { ISafeArea } from '../../types/components';

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
