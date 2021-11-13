import styled from "styled-components";

interface SlideProp {
    active ?: boolean;
}

export const SlideContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
`

export const Slide = styled.div<SlideProp>`
	width: 100%;
	height: 100%;
	position: absolute;
	opacity: ${(props) => (props.active ? 1 : 0)};
	transition: opacity ease-in-out 0.4s;
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
	}
`