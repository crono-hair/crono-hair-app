import React from 'react';
import styled from 'styled-components/native';

import { ISpacer } from '../../types/types';

/**
 * Component for spacing (margin and padding)\
 * "m" refers to margin\
 * "p" refers to padding
 * ____________________________________________
 *
 * Use "t", "r", "b", "l", "y" or "x" to specify the spacing direction\
 * **First example**: same of `margin-top: 12px`\
 * **Second example**: same of `padding: 8px 0px`\
 * **Third example**: same of `padding: 10px`
 *
 * @example <Spacer mt={12} />
 * @example <Spacer py={8} />
 * @example <Spacer p={10} />
 */

const Spacer: React.FC<ISpacer> = ({
  p,
  pt,
  pr,
  pb,
  pl,
  py,
  px,
  m,
  mt,
  mr,
  mb,
  ml,
  my,
  mx,
  children,
}) => {
  return (
    <StyledView
      p={p}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      py={py}
      px={px}
      m={m}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      my={my}
      mx={mx}>
      {children}
    </StyledView>
  );
};

const StyledView = styled.View<ISpacer>`
  ${props => props.p && `padding: ${props.p}px`};
  ${props =>
    props.pt
      ? `padding-top: ${props.pt}px`
      : props.py
      ? `padding-top: ${props.py}px`
      : null};
  ${props =>
    props.pr
      ? `padding-right: ${props.pr}px`
      : props.px
      ? `padding-right: ${props.px}px`
      : null};
  ${props =>
    props.pb
      ? `padding-bottom: ${props.pb}px`
      : props.py
      ? `padding-bottom: ${props.py}px`
      : null};
  ${props =>
    props.pl
      ? `padding-left: ${props.pl}px`
      : props.px
      ? `padding-left: ${props.px}px`
      : null};

  ${props => props.m && `margin: ${props.m}px`};
  ${props =>
    props.mt
      ? `margin-top: ${props.mt}px`
      : props.my
      ? `margin-top: ${props.my}px`
      : null};
  ${props =>
    props.mr
      ? `margin-right: ${props.mr}px`
      : props.mx
      ? `margin-right: ${props.mx}px`
      : null};
  ${props =>
    props.mb
      ? `margin-bottom: ${props.mb}px`
      : props.my
      ? `margin-bottom: ${props.my}px`
      : null};
  ${props =>
    props.ml
      ? `margin-left: ${props.ml}px`
      : props.mx
      ? `margin-left: ${props.mx}px`
      : null};
`;

export default Spacer;
