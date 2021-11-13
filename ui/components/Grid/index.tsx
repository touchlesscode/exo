import React from "react"
import useWindowSize from "@hooks/useWindowSize"

import { GridContainer } from "./style"
 interface GridProps {
		render?: Function
		data?: Array<any>
		sm?: number
		md?: number
		lg?: number
		xs?: number
		mobilePortrait?: number
		tabletPortrait?: number
		laptopDisplay?: number
		desktopDisplay?: number
		mobileLandscape?: number
		tabletLandscape?: number
		[key: string]: any
		type?:
			| "sm"
			| "lg"
			| "md"
			| "xs"
			| "mobilePortrait"
			| "tabletPortrait"
			| "laptopDisplay"
			| "desktopDisplay"
			| "mobileLandscape"
			| "tabletLandscape"
		rowGap?: number
		colGap?: number

		children: React.ReactNode
 }

 function Grid(props: GridProps) {
		const { children = [], rowGap, colGap } = props
		const { types } = useWindowSize()
		const deviceTypeInProps = types?.find((i) => Object.keys(props).includes(i)) as string
		const width = dimensions[props[deviceTypeInProps]]
		return (
			<GridContainer {...props}>
				{children ? (
					//@ts-ignore
					children.map ? (
						//@ts-ignore
						children.map(
							(
								child:
									| boolean
									| React.ReactChild
									| React.ReactFragment
									| React.ReactPortal
									| null
									| undefined
							) => {
								return <div style={{ width: width }}>{child}</div>
							}
						)
					) : (
						<div style={{ width: width }}>{children}</div>
					)
				) : (
					props.data?.map((i, index) => {
						return <div style={{ width: width }}>{props.render && props.render(i)}</div>
					})
				)}
			</GridContainer>
		)
 }

 //@ts-ignore
const dimensions: ObjectStringKey = {
	12: "100%",
	9: "75%",
	6: "45%",
	4: "25%",
	3: "20%",
	2: "5%",
}

export default Grid
