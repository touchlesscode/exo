import React from "react"

import styled, { ThemedStyledFunction } from "styled-components"

import { getThemeObjectByType } from "@utils/index";

interface StyledButtonProps {
	backgroundColor?: string
	color?: string
	borderRadius?: string
	theme: any
	btnType?: "primary" | "secondary" | "default"
	width?: number | string
}

export const StyledButton = styled.button<StyledButtonProps>`
	border: none;
	background-color: ${(props) => props.backgroundColor ?? "#c8102e"};
	color: ${(props) => props.color ?? "white"};
	padding: 12px;
	border-radius: ${(props) => props.borderRadius ?? "4px"};
	cursor: pointer;
	font-size: 16px;
	line-height: 16px;
	width: ${(props: StyledButtonProps) => props.width};
	${(props) => props.btnType && getThemeObjectByType(props.btnType, props.theme.button)};
`
