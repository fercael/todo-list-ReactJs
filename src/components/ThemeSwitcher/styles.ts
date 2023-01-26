import styled from 'styled-components';
import * as icons from '../../assets/images';

export const Wrapper = styled.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
  }
  ::after{
    content: url(${props => props.theme.name == 'light'? icons.moon : icons.sun});
  }
`;
