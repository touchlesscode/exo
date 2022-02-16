import Flex from "@components/Flex"
import Modal from "@components/Modal"
import Slider from "@components/Slider"
import React from "react"

interface GalleryProps {
	imgs: Array<string>
	type?: "default" | "fullscreen"
}
function Gallery(props: GalleryProps) {
	return (
		<Modal floatingCloseButton closeButtonColor={"white"} modalType={props.type} show={true}>
			<Slider content={props.imgs} />
		</Modal>
	)
}

export default Gallery
