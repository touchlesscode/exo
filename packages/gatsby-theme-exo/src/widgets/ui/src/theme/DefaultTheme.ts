import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
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
    },
    colors: {
        text: {
            white: '#FFFFFF',
            default: 'hsl(0, 0%, 17.6%)',
            success: '#18835A',
            warning: '#C26715',
            danger: '#C92F24',
            l1: 'hsl(0, 0%, 32.6%)',
            l2: 'hsl(0, 0%, 47.6%)',
            l3: 'hsl(0, 0%, 62.6%)',
        },
        primary: {
            default: 'hsl(229.3, 63.6%, 56.9%)',
            hover: 'hsl(229.3, 63.6%, 51.9%)',
            active: 'hsl(229.3, 63.6%, 46.9%)',
            unused: 'hsla(229.3, 63.6%, 56.9%, 0.8)',
            disabled: 'hsla(229.3, 63.6%, 56.9%, 0.6)',
            text: {
                default: 'hsl(0, 0%, 100%)',
                unused: 'hsl(0, 0%, 100%)',
                disabled: 'hsl(0, 0%, 0%)',
            }
        },
        backgrounds: {
            white: 'hsl(0, 0%, 100%)',
            default: 'hsl(0, 0%, 100%)',
            hover: 'hsl(229.3, 63.6%, 96%)',
            active: 'hsl(229.3, 63.6%, 94%)',
            secondary: 'hsl(0, 0%, 93%)',
            spacer: 'hsl(0, 0%, 90%)',
            highlight: 'hsl(0, 0%, 99%)',
            opacity: 'hsla(0, 0%, 93%, 0.5)',
            shadow: 'hsla(0, 0%, 12%, 0.15)',
        },
        success: {
            default: '#347F4D',
            l1: '#58d07E',
            l2: '#EDF9F0'
        },
        error: {
            default: '#C92F24',
            l1: '#F17E7E',
            l2: '#FCEAE8',
            l3: '#F2E0DF',
        },
        info: {
            default: '#285FFA',
            l1: '#8EACFB',
            l2: '#EBF1FF',
            shadow: 'rgba(40, 95, 250, 0.25)',
        },
        warning: {
            default: '#A36127',
            l1: '#FE9B6C',
            l2: '#FFF4EC'
        },
        shadow: {
            default: 'hsla(0, 0%, 12%, 0.15)',
        }
    }
}

export default theme;