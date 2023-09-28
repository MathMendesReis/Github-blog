import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDefaulf } from '../styled/default-theme'
import { GlobalStyle } from '../styled/global-styled'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FilterContextProvider from '../context/filter-context'

export function DefaultProvider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={themeDefaulf}>
      <FilterContextProvider>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </FilterContextProvider>
    </ThemeProvider>
  )
}
