import styled from 'styled-components'

export default function Subtitle({ text }: { text: string }) {
  return <BaseTitle>{text}</BaseTitle>
}

const BaseTitle = styled.h2`
  color: var(--base-subtitle, #c4d4e3);

  /* Title / Title S */
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
`
