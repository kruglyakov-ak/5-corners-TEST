import { createGlobalStyle } from 'styled-components';
import HelveticaBoldOtf from '../../assets/fonts/helvetica_bold.woff2';
import HelveticaRegularOtf from '../../assets/fonts/helvetica_regular.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    src: url(${HelveticaRegularOtf}) format('otf');
  }

@font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    src: url(${HelveticaBoldOtf}) format('otf');
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    line-height: 1.15;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
}

body {
    width: 100%;
    height: 100%;

    font-family: 'Helvetica', Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.base};
    line-height: 19.2px;
    color: ${({ theme }) => theme.color.black};
}

html,
body {
    margin: 0;
    padding: 0;
}

main {
    display: block;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

a {
    background-color: transparent;
}

img {
    border-style: none;
}

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}


button,
input {
    overflow: visible;
}

input::placeholder {
    color: ${({ theme }) => theme.color.grey1};;
  }

button,
select {
    text-transform: none;
}


button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
}

textarea {
    overflow: auto;
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
}

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
}

[hidden] {
    display: none;
}
`;

export { GlobalStyle };
