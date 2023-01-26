import styled from 'styled-components';
import { IFlexbox } from './interfaces/flexbox';

export const Wrapper = styled.div<IFlexbox>`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  gap: ${props => props.gap};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
`;
