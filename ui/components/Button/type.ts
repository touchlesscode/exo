import { HTMLAttributes } from "react";

export type BackgroundType = "none" | "green" | "yellow" | "blue";

export interface ButtonPropType extends HTMLAttributes<HTMLButtonElement> {
    label: string;
    backgroundType ?: BackgroundType;
    backgroundColor ?: string;
    sharpBorder ?: boolean;
	btnType ?: "primary" | "secondary" | "default"
}