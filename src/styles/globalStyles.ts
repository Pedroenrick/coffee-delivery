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

  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
