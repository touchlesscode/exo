import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontSize: {
            xsmall: string;
            small: string;
            regular: string;
            medium: string;
        },
        fontWeight: {
            regular: number;
            medium: number;
            bold: number;
        },
        colors: {
            text: {
                white: string;
                default: string;
                warning: string;
                success: string;
                danger: string;
                l1: string;
                l2: string;
                l3: string;
            },
            primary: {
                default: string;
                hover: string;
                active: string;
                unused: string;
                disabled: string;
                text: {
                    default: string;
                    unused: string;
                    disabled: string;
                }
            },
            backgrounds: {
                white: string;
                default: string;
                hover: string;
                active: string;
                secondary: string;
                spacer: string;
                highlight: string;
                opacity: string;
                shadow: string;
            },
            warning: {
                default: string;
                l1: string;
                l2: string;
            },
            error: {
                default: string;
                l1: string;
                l2: string;
                l3: string;
            },
            info: {
                default: string;
                l1: string;
                l2: string;
                shadow: string;
            },
            success: {
                default: string;
                l1: string;
                l2: string;
            }
            shadow: {
                default: string;
            }
        }
    }
}