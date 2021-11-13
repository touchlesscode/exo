import { HTMLAttributes } from "react";

export interface ListOptionType {
    id: number | string;
    mutedText ?: string;
    label ?: string;
    iconSrc ?: string;
    type ?: "link";
    url ?: string;
}

export interface AllOptionsType {
    id: string;
    title: string;
    active ?: boolean;
    disabled ?: boolean;
    options: ListOptionType[]
}

export interface DetailsListPropType extends HTMLAttributes<HTMLDivElement> {
    title ?: string;
    titleFontSize ?: string;
    iconType ?: "none" | "tick" | "custom";
    options ?: ListOptionType[];
    tabHeader?: boolean;
    allOptions ?: AllOptionsType[];
    fontFamily ?: string;
    mutedTextColor ?: string;
    mutedTextFontSize ?: string;

    labelColor ?: string;
    labelFontSize ?: string;

    width ?: string;
    iconWidth ?: string;
    iconHeight ?: string;
    border ?: string;
    borderRadius ?: string;
    boxShadow ?: string;
}