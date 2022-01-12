import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './DefaultTheme';
import GlobalStyle from './GlobalStyle';

const TextKitTheme = ({ children }: { children: React.ReactChild }) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </>
    );
}

export default TextKitTheme;