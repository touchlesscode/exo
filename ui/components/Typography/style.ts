import styled, { css } from "styled-components"
import { getThemeObjectByType } from "@utils/index"

interface TypographyContainerProp {
	theme: any
	type?: string
	color?: string
	fontFamily?: string
	className?: string
	id?: string
	name?: string
}

export const TypographyContainer = styled.span.attrs((props: TypographyContainerProp) => ({
	className: props.className,
}))<TypographyContainerProp>`
	${(props) => getThemeObjectByType(props?.type, props.theme.text)};

	color: ${(props: TypographyContainerProp) => {
		return props.theme.themeType === "dark"
			? props.theme.darkThemeContrastColor || "black"
			: props.theme.colors[props.color || "Black"]
			? props.theme.colors[props.color || "Black"]
			: getThemeObjectByType(props?.type, props.theme.colors)
	}};
	font-family: ${(props) =>
		getThemeObjectByType(props?.type, props.theme.text)?.fontFamily || props.theme.fontFamily};
	${(props) => props?.id && props.theme.ids && getThemeObjectByType(props?.id, props.theme.ids)};
	${(props) => props?.name && props.theme.names && getThemeObjectByType(props?.name, props.theme.names)};
`

