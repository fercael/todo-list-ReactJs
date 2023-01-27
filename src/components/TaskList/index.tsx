import React, { useEffect, useState } from 'react';
import Flexbox from '../Flexbox';
import InputBar from '../InputBar';

import { TaskListProps } from './interfaces/taskList'

const TaskList: React.FC = () => {

  const [taskList , setTaskList ] = useState<TaskListProps>([{}])
  const addTask = (inputText: string = 'undefined') => {
    const newList = taskList
    newList.push({id: 1, isChecked: false, text: inputText})
    setTaskList(newList)
  }

  useEffect(()=>{
    console.log(taskList);
    
  }, [taskList])

  return (
    <Flexbox width='100%' height='100%' direction='column' gap='2rem'>
      <InputBar addTask={addTask}/>
    </Flexbox>
  );
}

export default TaskList;