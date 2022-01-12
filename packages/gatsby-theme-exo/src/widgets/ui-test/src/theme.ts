import { createGlobalStyle, DefaultTheme } from 'styled-components'
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'BrandonText';
        src: url('fonts/BrandonText-Regular.otf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: url('fonts/BrandonText-Medium.otf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: url('fonts/BrandonText-Bold.otf');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: url('/fonts/BrandonText-Regular.otf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: url('/fonts/BrandonText-Medium.otf');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'BrandonText';
        src: url('/fonts/BrandonText-Bold.otf');
        font-weight: 700;
        font-style: normal;
    }
    html {
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html * {
        font-family: 'BrandonText';
    }
    * {
        box-sizing: border-box;
    }
    #root {
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
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

export const defaultTheme: DefaultTheme = {
    colors: {
        background: {
            default: 'hsl(0, 0%, 100%)',
            hover: 'hsl(229.3, 63.6%, 96%)',
            active: 'hsl(229.3, 63.6%, 94%)',
            secondary: 'hsl(0, 0%, 93%)',
            spacer: 'hsl(0, 0%, 90%)',
            highlight: 'hsl(0, 0%, 99%)',
            opacity: 'hsla(0, 0%, 93%, 0.5)',
            shadow: 'hsla(0, 0%, 12%, 0.15)',
        },
        primary: {
            default: 'hsl(229.3, 63.6%, 56.9%)',
            hover: 'hsl(229.3, 63.6%, 51.9%)',
            active: 'hsl(229.3, 63.6%, 46.9%)',
            unused: 'hsla(229.3, 63.6%, 56.9%, 0.8)',
            disabled: 'hsla(229.3, 63.6%, 56.9%, 0.6)',
            text: 'hsl(0, 0%, 100%)',
            textUnused: 'hsl(0, 0%, 100%)',
            textDisabled: 'hsl(0, 0%, 0%)',
        },
        sidebar: {
            default: 'hsl(0, 0%, 10.2%)',
            icon: 'hsl(0, 0%, 100%)',
            hover: 'hsl(0, 0%, 25%)',
        },
        text: {
            default: 'hsl(0, 0%, 17.6%)',
            l1: 'hsl(0, 0%, 32.6%)',
            l2: 'hsl(0, 0%, 47.6%)',
            l3: 'hsl(0, 0%, 62.6%)',
        }
    },
    fontSize: {
        xsmall: '12px',
        small: '14px',
        regular: '16px',
        medium: '20px'
    },
    fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
    }
}