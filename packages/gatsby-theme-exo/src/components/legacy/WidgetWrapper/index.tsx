import React, { useState } from "react"
import IframeResizer from "iframe-resizer-react"
import { WidgetContainer, Title } from "./style"
import Typography from "@components/Typography"
import usePostMessageEvent from "@hooks/usePostMessageEvent"
import ChevronDown from "../../assets/icons/chevron-down.svg"

import ChevronUp from "../../assets/icons/chevron-up.svg"

interface WidgetWrapperProps {
	src: string
	id: string
}

function WidgetWrapper(props: WidgetWrapperProps) {
	const { src, id } = props
	const { pushEvent, event } = usePostMessageEvent()
	const [isExpanded, setIsExpanded] = useState<boolean>(true)

	return (
		<WidgetContainer>
			<Title
				onClick={() => {
					pushEvent({
						id: id,
						type: `textkit/${isExpanded ? "widgetMinimized" : "widgetMaxmized"}`,
						value: 20,
					})
					setIsExpanded(!isExpanded)
				}}
			>
				<div style={{ flex: 1 }}>
					<Typography type={"h1"}>Contact Info</Typography>
				</div>
				<img src={isExpanded ? ChevronUp : ChevronDown} />
			</Title>
			<div style={{ border: "10x solid #fefefe" }}>
				<IframeResizer style={{ border: "none", height: 800 }} seamless id={props.id} src={props.src} />
			</div>
		</WidgetContainer>
	)
}

export default WidgetWrapper
