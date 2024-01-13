import styled from "styled-components";

export const Container = styled.button`
    
    background-color: ${({theme}) => theme.COLORS.RED};
    color: ${({theme}) => theme.COLORS.WHITE_100};

    height: 3.5 rem;
    border: 0;
    padding: 0 1rem;
    border-radius: 0.3125rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    display: flex;
    padding: 0.75rem 0rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    &:disabled{
        opacity: 0.5;
        
    }
    
`;