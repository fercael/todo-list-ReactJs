import React from 'react';
import { IFlexbox } from './interfaces/flexbox';

import { Wrapper } from './styles';

const Flexbox: React.FC<IFlexbox> = ({
  direction,
  justify,
  align,
  gap,
  width,
  height,
  padding,
  children
}) => {
  return (
    <Wrapper direction={direction} justify={justify} align={align} gap={gap} width={width} height={height} padding={padding}>
      {children}
    </Wrapper>
  );
}

export default Flexbox;