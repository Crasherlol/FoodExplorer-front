import styled from "styled-components";

export const Container = styled.header`
grid-area: header;
display: flex;
width: 100%;
height: 100%;
padding: 1.5rem 7.6875rem;
align-items: center;
justify-content: space-between;
gap: 2rem;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
 >h2 {
    display: flex;
    width: 20rem;
    gap: 0.925rem;
    align-items: center;
 }
 >button {
    width: 15.5rem;
    gap: 0.5rem;
 }
 .receiptIcon {
    width: 1.3rem;
    height: 1.3rem;
 }
 .signOutButton {
    background: transparent;
    text-decoration: none;
    border:none;
    color: ${({theme}) => theme.COLORS.WHITE_200};
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    font-size: 2rem;
 }

 .inputIcon{
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.WHITE_100};
   
 }
 
`;