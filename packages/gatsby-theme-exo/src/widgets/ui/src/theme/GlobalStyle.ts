import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'BrandonText';
        src: local('BrandonText'), url('../fonts/BrandonText-Regular.otf') format('otf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: local('BrandonText'), url('../fonts/BrandonText-Medium.otf') format('otf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: local('BrandonText'), url('../fonts/BrandonText-Bold.otf') format('otf');
        font-weight: 700;
        font-style: normal;
    }
    body, html {
        font-family: 'BrandonText', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        font-smooth: antialiased;
        text-rendering: optimizeLegibility;
        line-height: 1.42857143;
        color: #000000;
        width: 100%;
    }
    textarea, input {
        font-family: 'BrandonText', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
    .transition {
        transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
        transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
        transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
        transition-timing-function: cubic-bezier(0.4,0,0.2,1);
        transition-duration: 150ms;
    }
    .transition-opacity {
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4,0,0.2,1);
        transition-duration: 150ms;
    }
    .opacity-0 {
        opacity: 0;
    }
    .opacity-75 {
        opacity: 0.75;
    }
    .opacity-100 {
        opacity: 1;
    }
    .duration-75 {
        transition-duration: 75ms; 
    }
    .duration-100 { 
        transition-duration: 0.1s;
    }
    .duration-150 {
        transition-duration: 150ms;
    }
    .ease-in {
        transition-timing-function: cubic-bezier(0.4,0,1,1);
    }
    .ease-out {
        transition-timing-function: cubic-bezier(0,0,0.2,1);
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowrap;
        border-width: 0;
    }
    .not-sr-only {
        position: static;
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
    }
`