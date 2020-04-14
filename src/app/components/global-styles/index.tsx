import { createGlobalStyle } from "styled-components";
import Theme from "../../settings/theme";

const GlobalStyles = createGlobalStyle`
  html, body {
    color: ${Theme.palette.light};
    background: ${Theme.palette.dark};
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    scroll-behavior: smooth;
    --scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
      --scroll-behavior: auto;
    }
    
    * {
      box-sizing: border-box;
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  
  .grecaptcha-badge{
    visibility: collapse !important;
  }
`;

export default GlobalStyles;
