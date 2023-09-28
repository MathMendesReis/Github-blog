import styled from 'styled-components'
import { formatDate } from '../utils/format-date'

interface DateCreatedProps {
  createdAt: string
}
export default function DateCreated({ createdAt }: DateCreatedProps) {
  return <Date>{formatDate(createdAt)}</Date>
}

const Date = styled.p`
  width: auto;
  height: auto;
  color: var(--base-span, #7b96b2);
  font-family: Nunito;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`
