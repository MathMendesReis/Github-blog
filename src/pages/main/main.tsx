import Profile from './components/profile'
import Infos from './components/info'
import InputSearch from './components/input-search-publi'
import ListIssus from './components/list-issues'
import styled from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import { useForm } from 'react-hook-form'
import z from 'zod'
import useFilter from '../../hooks/useFilter'

const schema = z.object({
  search: z.string(),
})
type Schema = z.infer<typeof schema>

export default function Home() {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  })
  const { setSearch } = useFilter()
  const onSubmit = (data: Schema) => setSearch(data.search)

  return (
    <div>
      <Profile />
      <Infos />
      <form onChange={handleSubmit(onSubmit)}>
        <InputSearch
          inputAttributes={{
            placeholder: 'Buscar conteúdo',
            ...register('search'),
          }}
        />
      </form>
      <ContainerListIssues>
        <ListIssus />
      </ContainerListIssues>
    </div>
  )
}

const ContainerListIssues = styled.section`
  width: 54rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  min-height: 50vh;
  @media (max-width: 872px) {
    width: 100%;
    align-items: center;
  }
`
