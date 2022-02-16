import styled, { css } from "styled-components";

interface HamburgerSpanProps {
  shadow?: boolean;
  pathname: string;
  linkColor?: string;
}

export const HamburgerWrapper = styled.button`
  display: flex;
  flex-flow: column;
  align-items: center;
  align-self: center;
  gap: 0.213rem;
  padding: 0;
  margin: 0;
  position: relative;
  background-color: transparent;
  border: none;
`;

export const HamburgerSpan = styled.span<HamburgerSpanProps>`
  display: block;
  height: 0.188rem;
  width: 1.5rem;
  background-color: ${(props) => {
    if (["/landing", "/landing/"].includes(props.pathname)) {
      return "black";
    }
    return props?.theme?.themeType === "dark"
      ? props?.theme?.darkThemeContrastColor
      : "black";
  }};
  border-radius: 2.188rem;

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
    `}
`;
