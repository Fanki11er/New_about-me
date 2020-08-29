import { createGlobalStyle } from "styled-components";
import mainTheme from "../styles/mainTheme";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    overflow-x: hidden;

  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    overflow-x: hidden;
    width: 100vw;
    min-width: ${mainTheme.minScreen};
    position: relative;

    
  }
  button {
    display: flex;
    align-items: center;
    padding: 0;
    cursor: pointer;
    font-family: 'Roboto';
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    cursor: pointer;
  }
  a:visited {
    text-decoration: none;
    color: inherit;
  }
.withError {
  border: 2px solid ${mainTheme.red};
}

`;

export default GlobalStyle;
