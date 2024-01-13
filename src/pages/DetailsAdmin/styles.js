import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    position: relative;
    main {
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

    }
    .body {
      
    }
    img{
        height: 25%;
        width: 25%;
    }
    .priceButtom{
        display: flex;
        align-items: center;
        width: 22rem;
        height: 3.5rem;
        margin-top: 3rem;
        gap: 2rem;
        }
    .tags{
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
    .dishDescription{
        display: flex;
        flex-direction: column;
        font-family: Poppins;
        gap: 1.5rem;

        >p{
            width: 29rem;
        }
    }
    .backButton {
        display: flex;
        gap: 5px;
        align-items: center;
        text-align: center;
        >button{
            border: none;
            background: transparent;
            color: ${({theme}) => theme.COLORS.WHITE_100};
            font-weight: bold;
            margin-left: 7.5rem;
            margin-top: 1rem;
            font-size: 1.2rem;
        }
    }
    
`;