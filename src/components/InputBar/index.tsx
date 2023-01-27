import React, { useState } from 'react';
import Flexbox from '../Flexbox';
import { IInputBar } from './interface/inputBar';
import { AddTaskButton, Input } from './styles';

const InputBar: React.FC<IInputBar> = ({
  addTask,
}) => {
  const [ text, setText ] = useState('')
  const placeholder = 'Digite uma tarefa...'
  return (
    <Flexbox width='100%'>
      <Input type={'text'} placeholder={placeholder} value={text} onChange={e => setText(e.target.value)}/>
      <AddTaskButton onClick={e => addTask(text)}/>
    </Flexbox>
  );
}

export default InputBar;