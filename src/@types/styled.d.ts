import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    colors:{
      primary: string,
      secondary: string,
      background: string,
      title: string,
      subtitle: string,
      text: string
    }
  }
}