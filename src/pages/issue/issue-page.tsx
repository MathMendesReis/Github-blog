import styled from 'styled-components'
import { BoxProfilDefault } from '../../components/box-profile'
import { useParams } from 'react-router-dom'
import Title from '../main/components/title'
import Info from '../main/components/infoWithIcon'
import { Balloon, Calendar, GithubLogo } from '@phosphor-icons/react'
import useIssue from '../../service/useIssue'
import ButtonsNav from './components/buttons-list'
import { formatDate } from '../../utils/format-date'
import Markdown from 'react-markdown'



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
          <MarkdowndStyled>{responseIssue.body}</MarkdowndStyled>
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
  @media (max-width: 873px) {
    width: 100%;
  }
`
const ContainerInfoWithIcon = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`
const ContainerArticle = styled.article`
  display: flex;
  padding: 40px 32px;
  width: 54rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: var(--base-text, #afc2d4);
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  margin: 0 auto;
  @media (max-width: 864px) {
    width: 100%;
  }
  h1 {
    font-size: 32px;
  }
`

const MarkdowndStyled = styled(Markdown)`
width: 100%;
display: flex;
flex-direction: column;
gap: 15px;
img{
  width: 100%;
}
h2{
  color: white;
}
`
