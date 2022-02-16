import { HTMLAttributes } from "react";

export interface ListOptionType {
    id: number | string;
    mutedText ?: string;
    label ?: string;
    labelIconSrc ?: string;
    rowIconSrc ?: string;
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
    themeType ?: string;
    tabHeader?: boolean;
    width ?: string;

    title ?: string;
    titleIcon ?: string;
    
    rowIconType ?: "none" | "tick" | "custom";
    rowIconWidth ?: string;
    rowIconHeight ?: string;
    options ?: ListOptionType[];
    allOptions ?: AllOptionsType[];
}