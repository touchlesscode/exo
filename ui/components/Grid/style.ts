import styled from "styled-components"


export const GridContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: ${(props) =>
		`${props.rowGap !== undefined ? props.rowGap : 4}rem  ${props.colGap !== undefined ? props.colGap : 2}rem`};
	overflow-x: hidden;
	background-color: ${(props) =>
		props.theme.themeType === "dark" ? props.theme.darkThemeColor : props.theme.backgroundColor};
`