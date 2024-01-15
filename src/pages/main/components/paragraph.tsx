import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

type TheightProps = '7rem' | '3.25rem';

export default function Paragraph({
  description,
  heightProps = '7rem',
}: {
  description: string;
  heightProps?: TheightProps;
}) {
  return (
    <Container heightProps={heightProps}>
      <Markdown>{description}</Markdown>
    </Container>
  );
}

interface ContainerProps {
  heightProps: TheightProps;
}

const Container = styled.div<ContainerProps>`
  height: ${({ heightProps }) => heightProps};
`;

const Markdown = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.colors.baseText};
  font-family: Nunito;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  width: 22rem;
  flex-shrink: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  flex: 1;
  @media (max-width: 367px) {
    width: 15rem
  }
`;

