import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 0;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  font-weight: bold;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};

    transition: background-color 0.2s;
  }
`
