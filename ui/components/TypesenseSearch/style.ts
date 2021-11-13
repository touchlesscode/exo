import styled, { css } from "styled-components";
import { getThemeObjectByType } from "@utils/index";

interface StyledSearchboxProp {
    screenType ?: string;
}

export const StyledSearchbox = styled.input<StyledSearchboxProp>`
    padding: 10px 16px;
    border: 2px solid #C7C7C7;
    box-sizing: border-box;
    border-radius: 90px;
    width: 100%;
    ${(props: { theme: any }) => getThemeObjectByType("p1", props.theme.text)}

    &::placeholder {
        color: ${props => props.theme.colors['gray-60']};
    }

    ${props => props.screenType === "lg" && css`
        padding: 11px 20px;
        border-width: 1px;
        border-radius: 57px;
        ${(props: { theme: any }) => getThemeObjectByType("p2", props.theme.text)}

        &::placeholder {
            color: ${props => props.theme.colors["gray-40"]};
        }
    `}
`