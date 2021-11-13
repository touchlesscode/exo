import HorizontalList from "@components/HorizontalList"
import useWindowSize from "@hooks/useWindowSize"
import React from "react"
import { PhotoGalleryImage } from "./style"
interface PhotoGelleryProps {
	images: Array<string>
	onSeeAll?: () => void
}
function PhotoGellery(props: PhotoGelleryProps) {
	const { type } = useWindowSize()
	return (
		<>
			<HorizontalList
				idPrefix={"gallery-"}
				id={"gallery"}
				scrollOffSet={10}
				itemWidth={type !== "sm" ? "30%" : "100%"}
				data={props.images}
				renderItem={(i, index) => {
					return <PhotoGalleryImage id={"img" + index} src={i} />
				}}
			/>
		</>
	)
}

export default PhotoGellery
