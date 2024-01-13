import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;


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
            margin-top: 1rem;
            font-size: 1.2rem;
        }
    }

`;

export const Body = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    input[type="file"] {
        display: none;
    }
    >fieldset {
        border: none;
    }

    >form{
        width: 100%;
        display: flex;
        gap: 1rem;
    }
    .firstLine{
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;

    }
    .inputImage {
        display: flex;
        flex-direction: column;
        padding-top: 2.7rem;
    }
    

    .inputName {
        width: 100%;
        

    }
    #file{
        background-color: ${({ theme }) => theme.COLORS.BLACK_300};

    }
    .inputNamebar {
        background-color: ${({ theme }) => theme.COLORS.BLACK_300};

    }
    .cartegory{
        width: 100%;
    }
    select {
        width: 100%;
            background-color: ${({ theme }) => theme.COLORS.BLACK_300};
            color: ${({ theme }) => theme.COLORS.WHITE_500};
            border: none;
            border-radius: 5px;
            padding: 1rem;
            font-weight: 400;

            appearance: none;
            cursor: pointer;
    }
    .secondLine{
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
    }
    input[type="number"]{
        background-color: ${({ theme }) => theme.COLORS.BLACK_300};
        width: 100%;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.ingredientTags{
    background-color: ${({ theme }) => theme.COLORS.BLACK_300};
    width: 100%;
    height: 3rem;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
}
.textArea {
    width: 100%;
}
textarea{
    background-color: ${({ theme }) => theme.COLORS.BLACK_300};
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    width: 100%;
    padding: 1rem;
    height: 11rem;
    resize: none;
    border-radius: 5px;
    border: none;



    
}
.inputButton{
    display: flex;
    align-items: center;
    text-align: center;
    height: 3rem;
    width: 14rem;
    gap: 4px;
    border-radius: 0.65rem;
    border: none;
    background-color: ${({theme}) => theme.COLORS.BLACK_300};
    color: ${({theme}) => theme.COLORS.WHITE_200};

     >svg{
        font-size: 1.5rem;
        margin-left: 1rem;
     }

     >label{
        display: inline-block;
        flex-direction: row;
        height: 2rem;
        width: 100%;
        margin-top: 1rem;
        cursor: pointer;
        
     }
}
textarea::placeholder{
    color: ${({ theme }) => theme.COLORS.WHITE_500};

}
.saveButton {
display: flex;
flex-direction: row-reverse;
margin-top: 1rem;
}


`;
