import { useState } from "react"
import { ThemeProvider } from "styled-components"
import TodoList from "./components/TodoList"
import GlobalStyles from "./styles/globalStyles"
import * as themes from "./styles/themes"

function App() {
  const [ theme, setTheme ] = useState(themes.lightTheme)
  const toggleTheme = () => {
    setTheme(theme.name == 'light' ? themes.darkTheme : themes.lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <TodoList themeSwitcher={toggleTheme}/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
