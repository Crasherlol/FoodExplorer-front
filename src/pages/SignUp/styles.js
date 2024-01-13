import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   align-items: center;
   height: 100vh;
   width: 100%;
   justify-content: space-around;

   animation-name: fadeIn;
  animation-duration: 0.8s;
`;

export const Form = styled.form`
    display: flex;
    height: 38rem;
    width: 33rem;
    padding: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    border: 1px solid #000;

  
   
    
    .createAccount {
        background: transparent;
        text-decoration: none;
        border: none;
        font-family: Poppins;
        color: ${({theme}) => theme.COLORS.WHITE_100};
        margin-top: 2rem;
    }
    >button {
        margin-top: 2rem;
    }

    >label{
        display: inline-flex;
        margin-right: 19rem;
        margin-top: 2rem;
        width: 8rem;
    
    }
    @keyframes fadeIn {
    0% {
      opacity: 0;
    }
  }
   
`;