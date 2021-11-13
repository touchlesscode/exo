import styled from "styled-components"
export interface FlexProps {
	direction?: string
	justifyContent?: any
	left?: number
	flex?: number
	top?: number
	right?: number
	bottom?: number
	style?: React.CSSProperties
	onClick?: (e: any) => void
	block?: boolean
	id?: string
}

export const FlexWrapper = styled.div`
	display: flex;
	flex-direction: ${(props: FlexProps) => props.direction || "row"};
	justify-content: ${(props: FlexProps) => props.justifyContent};
	// ${(props: FlexProps) => (props.block ? "" : "width: 100%")};
	margin-left: ${(props: FlexProps) => props.left || 0}px;
	margin-top: ${(props: FlexProps) => props.top || 0}px;
	margin-right: ${(props: FlexProps) => props.right || 0}px;
	margin-bottom: ${(props: FlexProps) => props.bottom || 0}px;
	flex: ${(props: FlexProps) => props.flex || 0}px;
`

export const Block = styled.div`
	display: block;
	text-align: start;
	margin-left: ${(props: FlexProps) => props.left || 0}px;
	margin-top: ${(props: FlexProps) => props.top || 0}px;
	margin-right: ${(props: FlexProps) => props.right || 0}px;
	margin-bottom: ${(props: FlexProps) => props.bottom || 0}px;
`
