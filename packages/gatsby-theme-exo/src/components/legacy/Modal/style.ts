import styled, { css } from "styled-components"

interface ModalContainerProps {
	display: string
	direction?: "TTB" | "BTT" | "LTR" | "RTL"
	modalType?: "default" | "fullscreen"
	height?: number | string
	width?: number | string
    screenType : string;
    themeType ?: string;
}
//@ts-ignore
const directions: ObjectStringKey = {
	TTB: `top`,
	BTT: `bottom`,
	RTL: `right`,
	LTR: `left`,
}

export const ModalContainer = styled.div`
	display: ${(props: ModalContainerProps) => props.display};

	z-index: ${(props) => props?.theme?.modalZIndex}; /* Sit on top */
	position: fixed; /* Stay in place */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	justify-content: center;

	.modal-content {
    overflow: auto; /* Enable scroll if needed */
		position: relative;
		background-color: ${(props) =>
			props?.theme?.themeType === "dark" ? props?.theme?.darkThemeSecondaryColor : props?.theme?.backgroundColor};
		margin: auto;
		padding: 0;
		border: ${props => (props?.theme?.modal && props?.theme?.modal[props?.themeType || ""]?.border) ?? '1px solid #888'};
		width: ${(props: ModalContainerProps) =>
			props.width ? props.width : props.modalType === "default" ? "80%" : "100%"};
		height: ${(props: ModalContainerProps) =>
			props.height ? props.height : props.modalType === "default" ? "80%" : "100%"};

		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		animation-name: animatetop;
		animation-duration: 0.4s;
		border-radius: ${props => (props?.theme?.modal && props?.theme?.modal[props?.themeType || ""]?.borderRadius) ?? "10px"};

        ${props => props.screenType === "sm" && css`
                height: 95vh;
                border-bottom-left-radius: 0;
                margin-top: 5vh;
                border-bottom-right-radius: 0;
                border: 0;
        `}
	}

	@keyframes animatetop {
		${(props: ModalContainerProps) => `	from {
			${directions[props.direction || "TTB"]}: -300px;
			opacity: 0;
		}
		to {
			${directions[props.direction || "TTB"]}: 0;
			opacity: 1;
		}`}
	}
`

export const ModalContent = styled.div``

export interface CloseButtonProps {
	floatingCloseButton?: boolean
	closeButtonColor?: string
	closeButtonPosition?: "left" | "right" | "top" | "bottom"
}

export const CloseButton = styled.div`
	color: ${(props) =>
		props?.theme?.themeType === "dark" ? props?.theme?.darkThemeContrastColor : props?.closeButtonColor || "black"};
	font-size: 28px;
	font-weight: 600;
	margin: 5px;
	cursor: pointer;
	${(props: CloseButtonProps) =>
		props.floatingCloseButton
			? `	position: absolute;
z-index: 14;
right: 0;
`
			: `float:right`}
`

// background-color: rgb(0, 0, 0); /* Fallback color */
// background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
