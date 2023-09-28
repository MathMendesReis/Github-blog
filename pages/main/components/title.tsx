import styled from 'styled-components'

export default function Title({ text }: { text: string }) {
  return <Container>{text}</Container>
}
const Container = styled.h1`
  color: ${({ theme }) => theme.colors.baseTitle};

  font-family: Nunito;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`
