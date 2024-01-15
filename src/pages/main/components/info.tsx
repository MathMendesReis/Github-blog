import styled from 'styled-components'
import Subtitle from '../../../components/subtitle'
import Span from '../../../components/base-span'
import useIssues from '../../../service/useIssues'

export default function Infos() {
  const { responseIssues } = useIssues()
  const totalIssues = responseIssues?.length
  return (
    <ContainerInfo>
      <Subtitle text="Publicações" />
      <Span text={`${totalIssues} publicações`} />
    </ContainerInfo>
  )
}

const ContainerInfo = styled.section`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  width: 864px;
  justify-content: space-between;
  margin-top: 72px;
  margin-bottom: 12px;
  @media (max-width: 864px) {
    width: 100%;
  }
`
