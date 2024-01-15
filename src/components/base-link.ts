import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const BaseLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 854px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
