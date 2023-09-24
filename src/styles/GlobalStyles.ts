import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    max-width: 100%;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.bodyBackgroundColor};
    font-family: "Ubuntu", sans-serif;
    margin: 0;
    text-align: center;
  }
`;

export default GlobalStyles;
