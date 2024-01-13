import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 3rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    >input {
      height: 3rem;
      width: 100%;
      padding: 1.3rem;
      border-radius: 0.3125rem;
      color: ${({theme}) => theme.COLORS.WHITE_200};
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }
    >svg {
      margin-bottom: 5px;  
      transform: translate(1.2rem);
    }
  
    
`;