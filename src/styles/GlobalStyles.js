import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url(${LatoFont});
  @import url(${PoppinsFont});

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
