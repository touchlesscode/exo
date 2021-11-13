import { ReactNode } from "react";

export interface OptionType {
    id: string | number;
    label: ReactNode;
    url : string;
}

export interface AdditionalKeyType {
    id: string;
    key: string;
    value: string;
}

export interface OptionsType extends OptionType{
    subNavOptions ?: OptionType[];
}

export type ActionButtonType = {
    text ?: string;
    onClick ?: (id: string) => void;
}

export type CardType = {
    id: string;
    cardStyleType ?: string;
    layout ?: "default" | "secondary";

    imageSrc ?: string;
    gatsbyImageSrc ?: any;
    imageWidth ?: string;
    imageHeight ?: string;
    imageGallery ?: string[];
    carousel ?: boolean;
    absolutePreview ?: boolean;
    inGrid ?: boolean;
    
    topText ?: string;
    titleLeft: string;
    descriptionLeft ?: string;
    titleRight ?: string;
    newTitleRight ?: string;
    descriptionRight ?: string;
    additionalDetails ?: AdditionalKeyType[];
    actionButton ?: ActionButtonType | ActionButtonType[]; 
    cardHelpers ?: string | string[];
    hasHeartIcon ?: boolean;
    onHeartClick ?: (id: string, state: boolean) => void;
}

export interface CardsPropType {
    cards: CardType[];
}