import React from "react"
import Flex from "@components/Flex"
import Typography from "@components/Typography"
import { Block } from "@components/Flex/style"
import Badge from "@components/Badge"
import ScrollerLayout from "@components/ScrollerLayout"

interface HorizontalListProps {
	data: Array<any>
	renderItem: (i: any, index: number) => React.ReactNode
	gap?: number
	itemWidth?: number | string
	title?: string
	showViewAll?: boolean
	idPrefix: string
	id: string
	scrollOffSet?: number
}
function HorizontalList(props: HorizontalListProps) {
	return (
		<Block style={{ position: "relative" }}>
			<Flex left={10} right={10} block>
				<Flex>
					<Typography type={"h2"}>{props.title}</Typography>
				</Flex>
				{props.showViewAll && (
					<Flex direction={"row-reverse"}>
						<Badge>
							<Typography type={"h6"} color={"primary"}>
								View All
							</Typography>
						</Badge>
					</Flex>
				)}
			</Flex>

			<ScrollerLayout scrollOffSet={props.scrollOffSet} targetId={props.id} idPrefix={props.idPrefix}>
				{props.data.map((i, index) => {
					return (
						<div
							//@ts-ignore
							name={props.idPrefix + "scrollItem"}
							style={{ minWidth: props.itemWidth || "90%", margin: props.gap || 10 }}
						>
							{props.renderItem(i, index)}
						</div>
					)
				})}
			</ScrollerLayout>
		</Block>
	)
}

export default HorizontalList
