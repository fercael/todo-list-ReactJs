import React, { useEffect, useState } from 'react';
import Flexbox from '../Flexbox';
import ThemeSwitcher from '../ThemeSwitcher';

import { ITask } from './interfaces/task';
import { ITodoListProps } from './interfaces/todoList';

import { generateTask } from './functions/generateTask';
import { deleteTask } from './functions/deleteTask';


import { AddTask, CheckTask, CompletedTasks, Container, Input, Label, RemoveTask, Task, Title, UncompletedTasks } from './styles';

const TodoList: React.FC<ITodoListProps> = ({
  title = 'Lista de Tarefas',
  themeSwitcher
}) => {
  const [ taskList, setTaskList ] = useState<ITask[]>([])
  const [ inputValue , setInputValue ] = useState('')
  const [ newTask, setNewTask ] = useState({})
  

useEffect(()=>{
  setTaskList([...taskList, newTask])
}, [newTask])
useEffect(()=>{
  setTaskList([...taskList])
},[taskList])

  return (
    <Container>
      <ThemeSwitcher switchTheme={themeSwitcher}/>
      <Title>{title}</Title>
      <Flexbox>
        <Input placeholder='Digite uma tarefa...' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <AddTask onClick={() => setNewTask(generateTask(taskList, inputValue))} />
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
                  <RemoveTask value={item.id} onClick={ e => deleteTask(taskList, e.button)}/>
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