import styled from 'styled-components'

type TheightProps = '7rem' | '3.25rem'
type TwidthProps = '22rem' | '38.25rem;'
export default function Paragraph({
  description,
  heightProps = '7rem',
  widthProps = '22rem',
}: {
  description: string
  heightProps?: TheightProps
  widthProps?: TwidthProps
}) {
  return (
    <Container heightProps={heightProps} widthProps={widthProps}>
      {description}
    </Container>
  )
}

interface ContainerProps {
  heightProps: TheightProps
  widthProps: TwidthProps
}
const Container = styled.p<ContainerProps>`
  color: ${({ theme }) => theme.colors.baseText};
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  width: ${({ widthProps }) => widthProps};
  flex-shrink: 0;
  height: ${({ heightProps }) => heightProps};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
`
