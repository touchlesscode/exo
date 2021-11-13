import React from "react"
import { TypographyContainer } from "./style"
interface TypographyProps {
	children: React.ReactNode
	type?: string
	color?: string
	fontFamily?: string
	style?: React.CSSProperties
	name?: string
}
function Typography(props: TypographyProps) {
	//@ts-ignore
	return (
		<TypographyContainer
			name={props.name}
			style={props.style}
			type={props.type}
			color={props.color}
			fontFamily={props.fontFamily}
		>
			{props.children}
		</TypographyContainer>
	)
}

export default Typography
