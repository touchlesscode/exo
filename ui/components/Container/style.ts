import styled from "styled-components"

export interface ContainerWrapperProps extends React.CSSProperties {
	theme?: any
	isSecondary?: boolean
	children?: React.ReactNode
	id?: string
	name?: string
}

export const ContainerWrapper = styled.div`
	position: ${(props: ContainerWrapperProps) => props.position};
	background-color: ${(props: ContainerWrapperProps) =>
		props.theme.themeType === "dark"
			? props.isSecondary
				? props.theme.darkThemeSecondaryColor
				: props.theme.darkThemeColor
			: props.theme.backgroundColor};
`
