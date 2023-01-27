import React from 'react';
import Flexbox from '../Flexbox';
import TaskList from '../TaskList';
import ThemeSwitcher from '../ThemeSwitcher';
import { ILayout } from './interfaces/layout';

import { Container, PageTitle } from './styles';

const Layout: React.FC<ILayout> = ({
  toggleTheme
}) => {
  return (
    <Container>
      <Flexbox width='100%' height='4rem' justify='flex-end' align='center' >
        <ThemeSwitcher switchTheme={toggleTheme}/>
      </Flexbox>
      <PageTitle>Lista de Tarefas</PageTitle>
      <TaskList/>
    </Container>
  );
}

export default Layout;