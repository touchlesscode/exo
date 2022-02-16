import React from "react"
import { TypographyContainer } from "./style"
interface TypographyProps {
	children: React.ReactNode
	type?: string
	color?: string
	fontWeight?: string
	style?: React.CSSProperties
	name?: string
  className?:string
  fontSize?: string
}
function Typography(props: TypographyProps) {
	//@ts-ignore
	return (
		<TypographyContainer
			className={props.className}
			name={props.name}
			style={props.style}
			type={props.type}
			color={props.color}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
		>
			{props.children}
		</TypographyContainer>
	)
}

export default Typography
