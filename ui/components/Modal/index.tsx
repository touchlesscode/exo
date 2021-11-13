import React, { useEffect, useState } from "react"
import { ModalContainer, ModalContent, CloseButton, CloseButtonProps } from "./style"
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
	} = props
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
			display={showModal ? "flex" : "none"}
		>
			<ModalContent className={"modal-content"}>
				<CloseButton
					closeButtonColor={closeButtonColor}
					floatingCloseButton={!!floatingCloseButton}
					onClick={() => {
						setShowModal(false)
					}}
				>
					{closeButtonImg ? <img src={closeButtonImg} /> : "✖"}
				</CloseButton>

				{props.children}
			</ModalContent>
		</ModalContainer>
	)
}

export default Modal
