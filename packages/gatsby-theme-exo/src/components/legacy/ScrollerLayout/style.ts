import styled from "styled-components"
import Flex from "@components/Flex"

export const ScrollArrow = styled(Flex)`
	position: absolute;
	cursor: pointer;
	z-index: ${(props) => props?.theme?.scrollArrowsZIndex};
`
