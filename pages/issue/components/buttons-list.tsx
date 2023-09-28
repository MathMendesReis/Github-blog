import styled from 'styled-components'
import ButtonDefault from '../../../components/button-default'
import { ArrowLeft, Share } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export default function ButtonsNav() {
  const navigate = useNavigate()
  const handleNavigationToHome = () => {
    navigate('/')
  }
  return (
    <NavContainer>
      <ButtonDefault
        textSpan="voltar"
        icon={<ArrowLeft />}
        attributes={{
          onClick: () => handleNavigationToHome(),
        }}
      />
      <ButtonDefault textSpan="github" icon={<Share />} />
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
