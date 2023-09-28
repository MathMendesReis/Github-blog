import { ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
  textSpan: string
  icon?: ReactNode
}

export default function ButtonDefault({
  attributes,
  textSpan,
  icon,
}: ButtonProps) {
  return (
    <ContainerButton {...attributes}>
      {icon && <IconStyled>{icon}</IconStyled>}
      <span>{textSpan}</span>
    </ContainerButton>
  )
}

const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  span {
    color: var(--brand-blue, #3294f8);
    font-family: Nunito;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:active {
    transform: scale(0.8);
  }
`

const IconStyled = styled.div`
  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: var(--brand-blue, #3294f8);
  }
`
