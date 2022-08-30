import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";

const GlobalStyle = createGlobalStyle`

@keyframes hyphen {
  0% {
    width: 0.5em;
  }
  100% {
    width: 1em;
  }
}

body {
  font-family: 'Mazius Review';
  font-size: 48px;
  line-height: 1.25;
  margin: 100vh 0 0 0;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  width: 100%;
}

::-webkit-scrollbar {
  width: 8px;
  background-image: linear-gradient(180deg, #ffffff, #f9868d, #8652ff, #ff4141, #ffffff);
}

::-webkit-scrollbar-thumb {
  background-color: #000000;
}
`;

export default GlobalStyle;
