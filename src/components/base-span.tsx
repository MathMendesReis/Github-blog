import styled from 'styled-components'

export default function Span({ text }: { text: string }) {
  return <BaseTitle>{text}</BaseTitle>
}

const BaseTitle = styled.h2`
  color: var(--base-span, #7b96b2);
  text-align: right;

  /* Text/Text S */
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`
