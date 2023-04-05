import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gugi', cursive;
    src: url('https://fonts.googleapis.com/css2?family=Gugi&display=swap')
  }

  body {
    font-family: 'Gugi', cursive;
    padding-top: 1em;
    white-space: pre-wrap;
  }

  ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;

export default GlobalStyle;
