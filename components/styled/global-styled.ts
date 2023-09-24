import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background-color: ${(props) => props.theme.colors.baseBackground};
  color: ${(props) => props.theme.colors.baseText};
  font-weight: 400;
  font-size: 1rem;

}
`
