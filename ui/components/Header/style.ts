import styled, { css } from "styled-components";

interface HeaderWrapperProps {
    position?: "absolute" | "fixed";
    transparent?: boolean;
    backgroundColor?: string;
    direction?: "reverse";
    scrollDir?: string;
}

interface HeaderRowProps {
    direction?: "reverse";
}

interface IconWrapperProps {
    screenType ?: string;
    iconWidth ?: string;
    iconHeight ?: string;
    hideOnSmallScreen ?: boolean;
}

interface HeaderTray {
    screenType ?: string;
}

interface SearchWrapperProp {
    screenType ?: string;
}

const FLEX_DIRECTIONS = {
  reverse: "row-reverse",
};

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
	display: flex;
	flex-direction: column;
	padding: 15px 20px;
	width: 100%;
	box-sizing: border-box;

	position: ${(props) => props.position ?? "relative"};
	${(props) =>
		(props.position === "fixed" || props.position === "absolute") &&
		css`
			top: 0;
			left: 0;
		`}
	background-color: ${(props) =>
		props.transparent
			? "transparent"
			: props.backgroundColor
			? props.backgroundColor
			: props.theme.themeType === "dark"
			? props.theme.headerDarkThemeColor
			: props.theme.headerBackgroundColor};
	${(props) =>
		!props.transparent &&
		css`
			box-shadow: 0px 5px 22px -2px rgba(0, 0, 0, 0.2);
			-webkit-box-shadow: 0px 5px 22px -2px rgba(0, 0, 0, 0.2);
			-moz-box-shadow: 0px 5px 22px -2px rgba(0, 0, 0, 0.2);
		`}
	${(props) =>
		props.scrollDir === "scrolling up" &&
		css`
			position: fixed;
			top: 0;
			left: 0;
		`}
    z-index:111;
`

export const HeaderRow = styled.div<HeaderRowProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	flex-direction: ${(props) => props.theme.headerDirection || "row"};
`

export const IconWrapper = styled.button<IconWrapperProps>`
    border: none;
    padding: 0;
	background-color: transparent;
    width: ${props => props.iconWidth ?? '1.625rem'};
    height: ${props => props.iconHeight ?? '1.625rem'};
    display: ${props => (props.hideOnSmallScreen && props.screenType === "lg") ? "none" : "block"};
`;

export const HeaderTray = styled.div<HeaderTray>`
    margin-top: 23px;
    display: ${props => props.screenType === "lg" ? 'none' : 'flex'};
`

export const SearchWrapper = styled.div<SearchWrapperProp>`
    width: 451px;
    display: ${props => props.screenType !== "lg" ? 'none' : 'block'};
`
