import React from 'react';
import Flexbox from '../Flexbox';
import ThemeSwitcher from '../ThemeSwitcher';
import { ITodoListProps } from './interfaces/todoList';

import { AddTask, CheckTask, CompletedTasks, Container, Input, Label, RemoveTask, Task, Title, UncompletedTasks } from './styles';

const TodoList: React.FC<ITodoListProps> = ({
  title = 'Lista de Tarefas',
  themeSwitcher
}) => {
  return (
    <Container>
      <ThemeSwitcher switchTheme={themeSwitcher}/>
      <Title>{title}</Title>
      <Flexbox>
        <Input placeholder='Digite uma tarefa...' />
        <AddTask />
      </Flexbox>
      <UncompletedTasks>
        <Task>
          <Label>2</Label>
          Incompleta
          <Flexbox width='4rem' height='100%' justify='space-between' align='center'>
            <CheckTask type='checkbox' />
            <RemoveTask />
          </Flexbox>
        </Task>
      </UncompletedTasks>
      <CompletedTasks>
        <Task>
          <Label>1</Label> 
          Completa
          <Flexbox width='4rem' height='100%' justify='space-between' align='center'>
            <CheckTask type='checkbox' />
            <RemoveTask />
          </Flexbox>
        </Task>
      </CompletedTasks>
    </Container>
  );
}

export default TodoList;