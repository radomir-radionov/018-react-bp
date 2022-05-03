import { createGlobalStyle } from "styled-components";
import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${typography.FONT_FAMILY_MONTSERRAT};
  }

  body {
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100vw;
  }

  ul, ol, li, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  ul, ol, li {
    list-style: none;
  }
`;

export default GlobalStyles;
