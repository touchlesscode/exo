/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC } from 'react'

import { ThemeProvider } from "styled-components"

interface TouchlessThemeProviderPropType {
    theme: any;
}

const TouchlessThemeProvider:FC<TouchlessThemeProviderPropType> = ({ theme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default TouchlessThemeProvider
