import { createGlobalStyle } from "styled-components";
// Supports weights 200-800
import "@fontsource-variable/manrope";
const GlobalStyle = createGlobalStyle`

  html{
    margin:0;
    padding:0;
    scroll-behavior:smooth;
    max-width: 1920px;
    @media (max-width: 700px) {
      font-size:14px;
    }
  }
  body {
    display: block;
    margin: 0;
    padding: 0;
    background-color: #0e1119;
    width: 100vw;
    overflow-x: hidden;
    font-family: 'Manrope Variable', sans-serif;
  }
  main{
    display:block;
  }
  section{
    display:block;
  }
  div{
    display:block;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Lato", sans-serif;
    color: #cfd5dc;
    font-weight: normal;
  }
  p{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1rem;
    color: #cfd5dc;
  }
  a{
    text-decoration: none;
    color: #7a70b3;
  }
  iframe{
    width: 600px;
    margin-top: -20px;
    margin-bottom: -20px;
    overflow-clip-margin: content-box !important;
    overflow: clip !important;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
    @media (max-width: 950px) {
      width: 100%;
      margin: 0;
      text-align: center;
      height: 56.25vw;
      margin-bottom: 50px;
    }
  }
  
`;

export default GlobalStyle;
