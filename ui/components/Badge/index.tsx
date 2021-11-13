import React from "react"
import { BadgeContainer } from "./style"

interface BadgeProps {
	children: React.ReactNode
	color?: string
}
function Badge(props: BadgeProps) {
	return <BadgeContainer color={props.color || "primary-light"}>{props.children}</BadgeContainer>
}

export default Badge
