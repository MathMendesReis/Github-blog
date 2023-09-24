import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

interface ThemeProps {
  children: ReactNode
  theme: DefaultTheme
}

export default function Theme({ children, theme }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
