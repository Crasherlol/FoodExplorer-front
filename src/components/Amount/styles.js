import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1rem;

   .minus, .plus{
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-weight: 700;
    font-size: 1rem;
    background: transparent;
    border: none;
  }

  > strong {
    font-family: Roboto;
  }
`