import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;

    background: var(${props => props.theme.colors.background});

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  :root {
    --light-orange: #F25431;
    --dark-orange: #6A1907;
    
    --light-blue: #31CFF2;
    --dark-blue: #07586A;

    --bg-light: #EBE2E0;
    --bg-dark: #1F1614;

    --sub-light: #D7C5C1;
    --sub-dark: #5D423C;

    --txt-light: #C3A8A2;
    --txt-dark: #7C5850;
  }
`;