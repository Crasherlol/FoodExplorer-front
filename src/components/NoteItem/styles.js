import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

background-color: ${({theme, isNew}) => isNew? "transparent" : theme.COLORS.WHITE_500};
color: ${({theme, isNew}) => isNew? theme.COLORS.WHITE_100 : theme.COLORS.WHITE_500};
border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.WHITE_500}}` : "none"};

margin-bottom: 8px;
border-radius: 10px;
padding-right: 1rem;

    >button{
        border: none;
        background: transparent;
    }

    >input {
        height: 3rem;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        padding: 12px;
        background-color: ${({theme}) => theme.COLORS.BLACK_300};

        border: none;
    }

`;