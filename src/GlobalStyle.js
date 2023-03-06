import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: #fafafa;
  font-family: 'Roboto Condensed', sans-serif;
  margin: auto;
}
`;
