import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
width: 7rem;
background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.WHITE_600};
color: ${({theme}) => theme.COLORS.WHITE_100};
border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.WHITE_600}` : "none"};
border-radius: 10px;


    >button{
        border: none;
        background: transparent;
        color: ${({theme}) => theme.COLORS.WHITE_200};
        margin-top: 5px;
        margin-right: 10px;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.WHITE_600};
    }

    >input {
        height: 2rem;
        width: 100%;
        border-radius: 0.5rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.WHITE_600};
        border: none;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.BLACK_300}
        }
    }

    

`;