import styled from 'styled-components'

export default function Avatar({ image }: { image: string }) {
  return (
    <Container>
      <img src={image} alt="" />
    </Container>
  )
}
const Container = styled.figure`
  width: 9.25rem;
  height: 9.25rem;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
`
