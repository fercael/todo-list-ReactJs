import React, { useEffect, useState } from 'react';
import Flexbox from '../Flexbox';
import ThemeSwitcher from '../ThemeSwitcher';

import { ITask } from './interfaces/task';
import { ITodoListProps } from './interfaces/todoList';

import { addNewTask } from './functions/addNewTask';


import { AddTask, CheckTask, CompletedTasks, Container, Input, Label, RemoveTask, Task, Title, UncompletedTasks } from './styles';

const TodoList: React.FC<ITodoListProps> = ({
  title = 'Lista de Tarefas',
  themeSwitcher
}) => {
  const [ taskList, setTaskList ] = useState<ITask[]>([])
  const [ newTask , setNewTask ] = useState('')
  let updatedTaskList: {id: number, text: string, status: boolean }[] = []

useEffect(()=>{
  setTaskList(updatedTaskList)
}, [])

  return (
    <Container>
      <ThemeSwitcher switchTheme={themeSwitcher}/>
      <Title>{title}</Title>
      <Flexbox>
        <Input placeholder='Digite uma tarefa...' value={newTask} onChange={e => setNewTask(e.target.value)}/>
        <AddTask onClick={() => addNewTask(updatedTaskList, 1, newTask, false)} />
      </Flexbox>
      <UncompletedTasks>
      {
          taskList.map(item => {
            if(item.status == false) {
              return (
                <Task key={item.id}>
                <Label>{item.id}</Label> 
                  {item.text}
                <Flexbox width='4rem' height='100%' justify='space-between' align='center'>
                  <CheckTask type='checkbox' />
                  <RemoveTask />
                </Flexbox>
              </Task>
              )
            }})
         }
      </UncompletedTasks>
      <CompletedTasks>
        {
          taskList.map(item => {
            if(item.status == true) {
              return (
                <Task key={item.id}>
                <Label>{item.id}</Label> 
                  {item.text}
                <Flexbox width='4rem' height='100%' justify='space-between' align='center'>
                  <CheckTask type='checkbox' />
                  <RemoveTask />
                </Flexbox>
              </Task>
              )
            }})
         }
      </CompletedTasks>
    </Container>
  );
}

export default TodoList;