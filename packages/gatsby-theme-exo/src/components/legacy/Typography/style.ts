import styled, { css } from "styled-components"
import { getThemeObjectByType } from "@utils/index"

interface TypographyContainerProp {
	theme: any
	type?: string
	color?: string
	fontWeight?: string
  fontSize?: string
	className?: string
	id?: string
	name?: string
}

export const TypographyContainer = styled.span<TypographyContainerProp>`

    margin: 0;
    ${(props) => getThemeObjectByType(props?.type, props?.theme?.text || {})};

	color: ${(props: TypographyContainerProp) => {
		return props?.theme?.themeType === "dark"
			? props?.theme?.darkThemeContrastColor || "black"
			: props?.theme?.colors?.[props?.color || "Black"]
			? props?.theme?.colors?.[props?.color || "Black"]
			: getThemeObjectByType(props?.type, props?.theme?.colors)
	}};
    font-family: ${props => props?.theme?.fontFamily};
	font-weight: ${props => props?.fontWeight && props?.fontWeight};
	font-size: ${props => props?.fontSize && props?.fontSize};
	${(props) => props?.id && props?.theme?.ids && getThemeObjectByType(props?.id, props?.theme?.ids)};
	${(props) => props?.name && props?.theme?.names && getThemeObjectByType(props?.name, props?.theme?.names)};
`

