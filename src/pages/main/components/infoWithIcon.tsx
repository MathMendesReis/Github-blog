import { ReactNode } from 'react'
import styled from 'styled-components'

interface InfoProps {
  icon: ReactNode
  text: string | number
}

export default function Info(props: InfoProps) {
  return (
    <Container>
      <p>{props.icon}</p>
      <p>{props.text}</p>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`
