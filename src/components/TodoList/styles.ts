import styled from 'styled-components';

import * as icons from '../../assets/images';

export const Container = styled.main`
  width: 1216px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  @media( max-width: 1216px) {
    width: 768px;
  }
  @media( max-width: 768px) {
    width: 375px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  
  text-align: center;
  color: var(${props => props.theme.colors.title});
`;

export const Input = styled.input`
  width: 100%;
  max-width: 1008px;
  height: 2rem;
  padding: 0px 1rem;
  
  border: 2px solid var(${props => props.theme.colors.secondary});
  border-radius: 4px 0 0 4px;
  border-right: none;
  outline: none;
  
  background: var(${props => props.theme.colors.background});
  color: var(${props => props.theme.colors.text});
  
  ::placeholder {
    color: var(${props => props.theme.colors.text});
    opacity: 70%;
  }
`;

export const AddTask = styled.button`
  width: 4rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  border-radius: 0 4px 4px 0;
  
  background: var(${props => props.theme.colors.secondary});

  :hover {
    cursor: pointer;
  }
  ::after {
    content: url(${props => props.theme.name == 'light'? icons.plusLight : icons.plusDark});
  }
`;

export const RemoveTask = styled.button`
  border: transparent;
  background: transparent;
  :hover {
    cursor: pointer;
  }
`;

export const CheckTask = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  
  border: 2px solid var(${props => props.theme.colors.secondary});
  border-radius: 4px;
`;

export const Task = styled.li`
  height: 4rem;
  padding-right: 1rem;
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:1rem;
  
  font-size: 1.12rem;
  font-weight: 600;

  border-radius: 4px;
`;

export const Label = styled.span`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;
`;

export const UncompletedTasks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > li {
    border: 2px solid var(${props => props.theme.colors.primary});
    background: var(${props => props.theme.colors.primary});
    color: var(${props => props.theme.colors.background});
    > span {
      border-right: 2px solid var(${props => props.theme.colors.background});
      color: var(${props => props.theme.colors.background});
    }
    > div > button {
      ::after {
        content: url(${props => props.theme.name == 'light'? icons.trashDark : icons.trashLight});
      }
    }
  }
`;

export const CompletedTasks = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > li {
    border: 2px solid var(${props => props.theme.colors.subtitle});
    background: var(${props => props.theme.colors.background});
    color: var(${props => props.theme.colors.subtitle});
    > span {
      border-right: 2px solid var(${props => props.theme.colors.subtitle});
      color: var(${props => props.theme.colors.subtitle});
    }
    > div > button {
      ::after {
        content: url(${props => props.theme.name == 'light'? icons.trashDark : icons.trashLight});
      }
    }
  }
`;


