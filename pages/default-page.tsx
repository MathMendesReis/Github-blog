import styled from 'styled-components'
import HeaderDefault from '../components/header-default'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
  return (
    <Container>
      <HeaderDefault />
      <Outlet />
    </Container>
  )
}
const Container = styled.div``
