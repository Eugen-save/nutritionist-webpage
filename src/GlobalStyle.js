import { createGlobalStyle, keyframes } from "styled-components";

const gradient = keyframes`
        0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
`;

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(270deg,#84fab0,#8fd3f4,#00a86b);
    color: ${({ theme }) => theme.colors.woodsmoke};
    margin: 0 auto;
    font-style: normal;
    font-weight: normal;
    background-size: 180% 180%;
    animation: ${gradient} 9s ease infinite;
}

button {
  cursor: pointer;
}

`;