/* eslint-disable camelcase */
import styled from 'styled-components'
import Title from './title'
import Paragraph from './paragraph'
import { BaseLink } from '../../../components/base-link'
import DateCreated from '../../../components/date'


export default function Post({
  title,
  description,
  number,
  created_at,
}: {
  title: string
  description: string
  number: number
  created_at: string
}) {
  const idToString = number.toString()

  return (
    <BaseLink to={`issue/${idToString}`} title="clique para ler mais">
      <CardPost>
        <ContainerParagraphWithDate>
          <Title text={title} />
          <DateCreated createdAt={created_at} />
        </ContainerParagraphWithDate>
        <Paragraph description={description} heightProps='7rem' />
      </CardPost>
    </BaseLink>
  )
}

const CardPost = styled.li`
  width: 26rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--base-post, #112131);
  list-style: none;
  padding: 32px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
    transition: all 1s;
  }

  @media (max-width: 422px) {
    width: 100%;
  }
`
const ContainerParagraphWithDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  flex-wrap: wrap;
`
