import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    padding: 1.5rem 7.68rem;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    margin-top: auto;

    >h1 {
        display: flex;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        align-items: center;
        gap: 0.7rem;
    }

    

`;