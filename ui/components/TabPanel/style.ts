import styled, { css } from "styled-components";

interface TabHeadingWrapperProp {
    screenType ?: string;
}
interface TabHeadingItemProp {
    active ?: boolean;
    disabled ?: boolean;
    screenType ?: string;
}

export const TabHeadingWrapper = styled.div<TabHeadingWrapperProp>`
	display: inline-flex;

	margin-bottom: 1.5rem;
	max-width: 100%;
	overflow-x: scroll;
`

export const TabHeadingItem = styled.button<TabHeadingItemProp>`
	font-style: normal;
	font-size: 21px;
	line-height: 36px;
	text-align: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-weight: ${(props) => (props.active ? "900" : "700")};

	${(props) =>
		props.active &&
		css`
			border-bottom: ${`4px solid ${props.theme.colors.primary}`};
		`}

	${(props) =>
		props.disabled &&
		css`
			color: #ccc;
			cursor: not-allowed;
		`}
`