import styled from 'styled-components';
import * as icons from '../../assets/images';

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  
  border: 2px solid var(${props => props.theme.colors.secondary});
  border-right: none;
  border-radius: 4px 0 0 4px;
  
  background: none;
  color: var(${props => props.theme.colors.text});

  outline: none;
  
  ::placeholder{
    padding: 0 0.5rem;
    color: var(${props => props.theme.colors.text});
    opacity: 70%;
  }
`;
export const AddTaskButton = styled.button`
  width: 4rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid var(${props => props.theme.colors.secondary});
  border-radius: 0 4px 4px 0;

  background: var(${props => props.theme.colors.secondary});

  :hover{
    cursor: pointer;
  }

  ::after{
    width:1rem;
    height: 1rem;
    content: url(${props => props.theme.name == 'light'? icons.plusLight : icons.plusDark });
  }
`;