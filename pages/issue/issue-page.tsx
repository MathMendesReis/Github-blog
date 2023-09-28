import styled from 'styled-components'
import { BoxProfilDefault } from '../../components/box-profile'
import { useParams } from 'react-router-dom'
import Title from '../main/components/title'
import Info from '../main/components/infoWithIcon'
import { Balloon, Calendar, GithubLogo } from '@phosphor-icons/react'
import useIssue from '../../service/useIssue'
import ButtonsNav from './components/buttons-list'
import { formatDate } from '../../utils/format-date'

export default function IssuesPage() {
  const params = useParams()
  const numberIssue = params.id as string
  const { responseIssue } = useIssue(numberIssue)
  if (!responseIssue) {
    return
  }

  return (
    <div>
      <ContainerInfo>
        <ButtonsNav />
        <Title text={responseIssue?.title} />
        <ContainerInfoWithIcon>
          <Info icon={<GithubLogo />} text={responseIssue.user.login} />
          <Info
            icon={<Calendar />}
            text={formatDate(responseIssue.created_at)}
          />
          <Info icon={<Balloon />} text={responseIssue.comments} />
        </ContainerInfoWithIcon>
      </ContainerInfo>

      <main>
        <ContainerArticle>
          <p>{responseIssue.body}</p>
        </ContainerArticle>
      </main>
    </div>
  )
}
const ContainerInfo = styled(BoxProfilDefault)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
`
const ContainerInfoWithIcon = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`
const ContainerArticle = styled.article`
  display: flex;
  padding: 40px 32px;
  width: 54rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  color: var(--base-text, #afc2d4);
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin: 0 auto;
  h1 {
    font-size: 32px;
  }
`
