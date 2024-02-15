import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate; //preciso disso pra usar border-spacing
  border-spacing: 0 0.5rem; //para distanciar uma linha da tabela pra outra em 0.5rem
  margin-top: 1.5rem;

  td {
    padding: 1.5rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const TrashButton = styled.button`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  border: 0;

  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme.white};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['red-700']};

    transition: background-color 0.2s;
  }
`
