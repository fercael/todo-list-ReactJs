import React from 'react';
import { IThemeSwitcher } from './interfaces/themeSwitcher';

import { Wrapper } from './styles';

const ThemeSwitcher: React.FC<IThemeSwitcher> = ({
  switchTheme
}) => {
  return (
    <Wrapper onClick={switchTheme}/>
  );
}

export default ThemeSwitcher;