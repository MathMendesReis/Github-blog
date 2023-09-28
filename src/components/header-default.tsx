import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import { RouterPaths } from '../router/router'

export default function HeaderDefault() {
  return (
    <Header>
      <Link to={RouterPaths.home}>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </Link>
    </Header>
  )
}
const Header = styled.header`
  min-height: 18.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background: #04192f;
  padding-top: 46px;
`
