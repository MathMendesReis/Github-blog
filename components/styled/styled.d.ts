import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      baseBackground: string
      baseText: string
    }
  }
}
