import React from "react"
import { PaperContainer } from "./style"

interface PaperProps {
	children: React.ReactNode
}
function Paper(props: PaperProps) {
	return <PaperContainer>{props.children}</PaperContainer>
}

export default Paper
