import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.mercury};
    color: ${({theme}) => theme.colors.woodsmoke};
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
}

button {
  cursor: pointer;
}

`;