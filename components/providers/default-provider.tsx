import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDefaulf } from '../styled/default-theme'
import { GlobalStyle } from '../styled/global-styled'

export function DefaultProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={themeDefaulf}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
