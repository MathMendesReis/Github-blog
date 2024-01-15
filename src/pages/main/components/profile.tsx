import styled from 'styled-components'
import { BoxProfilDefault } from '../../../components/box-profile'
import Avatar from '../../../components/avatar-profile'
import Paragraph from './paragraph'
import Info from './infoWithIcon'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'
import { Buildings, Share, Users } from '@phosphor-icons/react'
import Title from './title'
import useProfile from '../../../service/useProfile'

export default function Profile() {
  const { response } = useProfile()
  return (
    <CardProfile>
      <Avatar image={response?.avatar_url as string} />
      <Container>
        <ContainerNameWithLink>
          <Title text={response?.name as string} />
          <ContainerLink>
            <TagLink href={'https://github.com/MathMendesReis'} target="_blank">
              github
            </TagLink>
            <Share size={18} />
          </ContainerLink>
        </ContainerNameWithLink>
        <Paragraph
          description={response?.bio as string}
          heightProps="3.25rem"
        />
        <ContainerInfo>
          <Info
            icon={<GithubLogo size={24} />}
            text={response?.login as string}
          />
          <Info
            icon={<Buildings size={24} />}
            text={response?.company as string}
          />
          <Info
            icon={<Users size={24} />}
            text={response?.followers as number}
          />
        </ContainerInfo>
      </Container>
    </CardProfile>
  )
}

const ContainerLink = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`
const ContainerInfo = styled.div`
  flex: 1;
  display: flex;
  gap: 38px;
  margin-top: 1rem;
  @media (max-width: 884px) {
    display: hidden;
    flex-wrap: wrap;
  }
`

const ContainerNameWithLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 884px) {
    width: 100%;
  }
`
const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`
const CardProfile = styled(BoxProfilDefault)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 32px 32px 32px 40px;
  flex-wrap: wrap;
  @media (max-width: 884px) {
    width: 100%;
    min-height: 500px;

  }
`
const TagLink = styled.a`
  color: var(--brand-blue, #3294f8);

  /* Components/Link */
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 19.2px */
  text-transform: uppercase;
`
