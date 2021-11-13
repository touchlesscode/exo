import styled, { css } from "styled-components"

interface ContainerProp {
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}
interface CoverImageWrapperProp {
    imageWidth ?: string;
    imageHeight ?: string;
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}

interface PreviewBoxProp {
    imageWidth ?: string;
    imageHeight ?: string;
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}

interface PreviewImageProp {
    screenType ?: string;
    inGrid ?: boolean;
    layout ?: "default" | "secondary";
}

export const ContainerWithBackgroundImage = styled.div`
	width: "100%";
	background-image: url(${(props: { img?: any }) => props.img});
	height: 100%;
	background-size: 100% 100%;
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
    overflow-y: hidden;
`

export const Container = styled.div<ContainerProp>`
    position: relative;
	display: flex;
	flex-flow: ${(props) => (!props.inGrid && props.screenType === "lg" ? "row" : "column")};
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
    overflow-y: hidden;

    ${props => props.layout === "secondary" && css<ContainerProp>`
        width: ${props => props.screenType === "lg" ? '60%' : '55vw'};
        height: 20.25rem;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    `}
`

export const SliderWrapper = styled.div<CoverImageWrapperProp>`
	width: ${(props) => props.imageWidth ?? "100%"};
	height: ${(props) => (props.imageHeight ?? (!props.inGrid && props.screenType === "lg") ? "24.25rem" : "16.063rem")};
	border-top-right-radius: inherit;
	border-top-left-radius: inherit;
    ${props => props.layout === "secondary" && css`
        width: 60%;
        height: 20.25rem;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    `}
`

export const CoverImageWrapper = styled.div<CoverImageWrapperProp>`
	width: ${(props) => props.imageWidth ?? "100%"};
	height: ${(props) => (props.imageHeight ?? (!props.inGrid && props.screenType === "lg") ? "24.25rem" : "16.063rem")};
	border-radius: inherit;
    ${props => props.layout === "secondary" && css`
        height: 20.25rem;
    `}

	img {
		width: 100%;
		height: 100%;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}
`

export const PreviewBox = styled.div<PreviewBoxProp>`
	display: flex;
	justify-content: flex-start;
	flex-flow: ${(props) => (!props.inGrid && props.screenType === "lg" ? "column" : "row")};
	gap: 0.125rem;
	-ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
	${(props) =>
		!props.inGrid &&
		props.screenType === "lg" &&
		css<PreviewBoxProp>`
			height: ${(props) => props.imageHeight ?? "24.25rem"};
			margin-left: 0.125rem;
            overflow-y: auto;
		`}

	${(props) =>
		props.screenType !== "lg" &&
		css<PreviewBoxProp>`
			width: ${(props) => props.imageWidth ?? "100vw"};
			margin-top: 0.125rem;
            overflow-x: auto;
		`}

    ${props => props.layout === "secondary" && css<PreviewBoxProp>`
        height: ${props => props.screenType === "lg" && '20.25rem'};
        width: ${props => props.screenType !== "lg" && '53vw'};
    `}
`

export const PreviewImage = styled.div<PreviewImageProp>`
    width: ${props => (!props.inGrid && props.screenType === "lg") ? '10.813rem' : '6.375rem'};
    height: ${props => (!props.inGrid && props.screenType === "lg") ? '8rem' : '6.25rem'};
    flex-shrink: 0;
    cursor: pointer;
    img { 
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    ${props => props.layout === "secondary" && css`
        width: 6.375rem;
        height: 6.25rem;
    `}
`

export const AbsolutePreviewBox = styled.div<PreviewBoxProp>`
    position: absolute;
    display: flex;
    gap: 0.5rem;
    bottom: 0.5rem;
    left: 0.688rem;
    overflow: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
    max-width: 90%;

`

export const AbsolutePreviewImage = styled.div`
    width: 5.188rem;
    height: 3.125rem;
    flex-shrink: 0;
    cursor: pointer;

    img { 
        width: 100%;
        height: 100%;
    }
`
