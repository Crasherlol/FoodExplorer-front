import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";
export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;

}

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
    color: ${({theme}) => theme.COLORS.WHITE_100};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

body, input, button, textarea{
    font-family: 'Poppins', sans-serif;
    outline: none;
    -webkit-font-smoothing: antialised;
}

:root{
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
     font-size: 12px;
    }
  }

a, input{
    text-decoration: none;
    border: none;
}

button, a {
    cursor: pointer;
    transition: filter 0.2s;

}

button:hover, a:hover {
  filter: brightness(0.9);

}

`;