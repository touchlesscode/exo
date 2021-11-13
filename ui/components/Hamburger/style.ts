import styled, { css } from "styled-components";

interface HamburgerSpanProps {
    shadow ?: boolean;
}

export const HamburgerWrapper = styled.div`
    display: flex;
	flex-flow: column;
    align-items: center;
    align-self: center;
	gap: 0.313rem;
`;

export const HamburgerSpan = styled.span<HamburgerSpanProps>`
    display: block;
    height: 3px;
    width: 24px;
    background-color: ${(props) =>
        props.theme.themeType === "dark" ? props.theme.darkThemeContrastColor : "black"};
    border-radius: 35px;

    ${(props) => props.shadow && css`
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
    `}
`