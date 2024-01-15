import styled from 'styled-components'
interface InputPros {
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>
}
export default function InputSearch({ inputAttributes }: InputPros) {
  return <InputSearchContent {...inputAttributes} />
}

const InputSearchContent = styled.input`
  display: flex;
  width: 864px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  border: 1px solid var(--base-border, #1c2f41);
  background: var(--base-input, #040f1a);
  color: var(--base-label, #3a536b);

  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  ::placeholder {
  }

  @media (max-width: 864px) {
    width: 100%;
  }
`
