import React from "react"
import { FlexWrapper, FlexProps } from "./style"
interface FlexComponentProps extends FlexProps {
	children: React.ReactNode
}
function Flex(props: FlexComponentProps) {
	return <FlexWrapper {...props}>{props.children}</FlexWrapper>
}

export default Flex
