import React, { useEffect, useState } from "react"
import { ModalContainer, ModalContent, CloseButton, CloseButtonProps } from "./style"
import useWindowSize from "@hooks/useWindowSize"

interface ModalProps extends CloseButtonProps {
	children: React.ReactNode
	onHide?: Function
	show: boolean
	closeButtonImg?: string
	direction?: "TTB" | "BTT" | "LTR" | "RTL"
	modalType?: "default" | "fullscreen"
	height?: number | string
	width?: number | string
	floatingCloseButton?: boolean
    themeType ?: string;
}

function Modal(props: ModalProps) {
	const {
		floatingCloseButton,
		show,
		direction,
		closeButtonImg,
		onHide = () => {},
		modalType = "default",
		height,
		width,
		closeButtonColor,
        themeType
	} = props
    const { type } = useWindowSize();
	const [showModal, setShowModal] = useState<boolean>(false)
	useEffect(() => {
		setShowModal(show)
	}, [show])
	useEffect(() => {
		if (!showModal) {
			onHide()
		}
	}, [showModal])
	return (
		<ModalContainer
			height={height}
			width={width}
			modalType={modalType}
			direction={direction}
            screenType={type}
            themeType={themeType}
			display={showModal ? "flex" : "none"}
		>
			<ModalContent className={"modal-content"}>
				{/* <CloseButton
					closeButtonColor={closeButtonColor}
					floatingCloseButton={!!floatingCloseButton}
					onClick={() => {
						setShowModal(false)
					}}
				>
					{closeButtonImg ? <img src={closeButtonImg} alt="" /> : "✖"}
				</CloseButton> */}

				{props.children}
			</ModalContent>
		</ModalContainer>
	)
}

export default Modal
