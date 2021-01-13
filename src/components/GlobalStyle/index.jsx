import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #333;
    }

    * {
        box-sizing: border-box;
    }

`;
export default GlobalStyle;
