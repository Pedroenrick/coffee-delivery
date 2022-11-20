import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({theme}) => theme.colors["base-text"]};
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: "Roboto", sans-serif;
  }
  
  h1, h2, h3{
    font-family: "Baloo 2", cursive;
    color: ${({ theme }) => theme.colors["base-title"]};
    line-height: 1.3;
  }

  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
