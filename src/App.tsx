import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Layout from "./components/Layout"
import GlobalStyles from "./styles/globalStyles"
import * as themes from "./styles/themes"

function App() {
  const [ theme, setTheme ] = useState(themes.lightTheme)
  const toggleTheme = () => {
    setTheme(theme.name == 'light' ? themes.darkTheme : themes.lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout toggleTheme={toggleTheme}/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
