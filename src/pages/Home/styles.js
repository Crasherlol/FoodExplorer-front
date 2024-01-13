import styled from "styled-components"

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 6.56rem auto;
    grid-template-areas: 
    "header"
    "banner"
    "content"
    ;
`;

export const Banner = styled.div`
display: flex;
font-family: Poppins;
justify-self: center;
margin-top: 10rem;
width: 70rem;
height: 16.25rem;
flex-shrink: 0;
grid-area: banner;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
border-radius: 0.5rem;

.bannerImage {
 position: relative;
 width: 36rem;
 height: 24rem;
 left: -4rem;
 top: -3.9rem;
}
.bannerDiv{    
display: flex;
align-items: center;
justify-self: left;

}
.bannerText >p{
    font-size: 0.75rem;

}

`;