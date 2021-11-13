import styled from "styled-components"

export const BadgeContainer = styled.div`
	background-color: ${(props) => props.theme.colors[props.color] || props.color};
	border-radius: 26px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	cursor: pointer;
`
