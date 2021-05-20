import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
  }
  /* Remove the stupid outer glow in Webkit */
  input:focus {
    outline: 0;
  }
  /* Box Sizing Reset
  -----------------------------------------------*/
  /* All of our custom controls should be what we expect them to be */
  input,
  textarea {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  /* These elements are usually rendered a certain way by the browser */
  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'],
  input[type='checkbox'],
  input[type='radio'],
  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  /* Text Inputs
  -----------------------------------------------*/
  input[type='date'],
  input[type='datetime'],
  input[type='datetime-local'],
  input[type='email'],
  input[type='month'],
  input[type='number'],
  input[type='password'],
  input[type='range'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='time'],
  input[type='url'],
  input[type='week'] {
  }
  /* File Uploads
  -----------------------------------------------*/
  input[type='file'] {
  }
  /* Search Input
  -----------------------------------------------*/
  /* Make webkit render the search input like a normal text field */
  input[type='search'] {
    -webkit-appearance: textfield;
  }
  /* Turn off the recent search for webkit. It adds about 15px padding on the left */
  ::-webkit-search-decoration {
    display: none;
  }
  /* Buttons
  -----------------------------------------------*/
  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    /* Fix IE7 display bug */
    overflow: visible;
    width: auto;
  }
  /* IE8 and FF freak out if this rule is within another selector */
  ::-webkit-file-upload-button {
    padding: 0;
    border: 0;
    background: none;
  }
  /* Textarea
  -----------------------------------------------*/
  textarea {
    /* Move the label to the top */
    vertical-align: top;
    /* Turn off scroll bars in IE unless needed */
    overflow: auto;
  }
  /* Selects
  -----------------------------------------------*/
  select {
  }
  select[multiple] {
    /* Move the label to the top */
    vertical-align: top;
  }
  button {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #000000;
  }
  ::-webkit-scrollbar-thumb {
    background: #8C6239 100%;
    border-radius: 5px;
  }
  * {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Lato:ital,wght@0,100;0,700;1,300&display=swap');

`;
 
export default GlobalStyle