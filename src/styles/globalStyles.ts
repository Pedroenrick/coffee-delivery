import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({theme}) => theme.colors["base-text"]};
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
