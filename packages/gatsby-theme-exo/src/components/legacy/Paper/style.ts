import styled from "styled-components"

export const PaperContainer = styled.div`
	${(props) => props?.theme?.paper};

	background-color: ${(props) =>
		props?.theme?.themeType === "dark" ? props?.theme?.darkThemeSecondaryColor : props?.theme?.backgroundColor};
`
