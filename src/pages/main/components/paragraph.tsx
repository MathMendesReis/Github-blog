import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

type TheightProps = '7rem' | '3.25rem';
type TwidthProps = '22rem' | '38.25rem';

export default function Paragraph({
  description,
  heightProps = '7rem',
  widthProps = '22rem',
}: {
  description: string;
  heightProps?: TheightProps;
  widthProps?: TwidthProps;
}) {
  return (
    <Container heightProps={heightProps} widthProps={widthProps}>
      <Markdown>{description}</Markdown>
    </Container>
  );
}

interface ContainerProps {
  heightProps: TheightProps;
  widthProps: TwidthProps;
}

const Container = styled.div<ContainerProps>`
  /* Estilos gerais do container */
  width: ${({ widthProps }) => widthProps};
  height: ${({ heightProps }) => heightProps};
`;

const Markdown = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.colors.baseText};
  font-family: Nunito;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  width: 100%; /* Pode ajustar conforme necessário */
  flex-shrink: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  flex: 1;
  @media (max-width: 844px) {
    width: 100%;
  }
`;

// Certifique-se de que você possui a biblioteca ReactMarkdown instalada no seu projeto.
