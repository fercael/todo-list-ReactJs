import { ThemeProvider } from "styled-components"
import Layout from "./components/Layout"
import GlobalStyles from "./styles/globalStyles"
import * as themes from "./styles/themes"

function App() {
  return (
    <ThemeProvider theme={themes.lightTheme}>
      <Layout/>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App
