import React from 'react';
import styled from 'styled-components/native';

import { IText } from '../../types/types';

/**
 * Renders a text
 *
 * @example
 * <Text color="lightgray" weight="bold" spacing={0.8}>Hello World</Text>
 */

const Text: React.FC<IText> = ({
  size = 16,
  color,
  align,
  weight,
  lineHeight,
  spacing,
  style,
  children,
}) => {
  return (
    <StyledText
      weight={weight}
      color={color}
      align={align}
      size={size}
      lineHeight={lineHeight}
      spacing={spacing}
      style={{ ...style }}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<IText>`
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  font-size: ${props => (props.size ? props.size + 'px' : '16px')};
  color: ${props => (props.color ? props.color : '#fff')};
  text-align: ${props => (props.align ? props.align : 'left')};
  ${props => (props.lineHeight ? `line-height:${props.lineHeight}px` : null)};
  ${props => (props.spacing ? `letter-spacing:${props.spacing}px` : null)};
`;

export default Text;
