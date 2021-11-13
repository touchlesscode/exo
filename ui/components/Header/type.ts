import React, { ReactNode } from "react";

import { OptionsType, OptionType } from "../type";

export interface HeaderPropsType {
    options ?: OptionsType[];
    showOnScrollUp ?: boolean;

    showDropdownArrow ?: boolean;
    showDropdown ?: boolean;
    onNavClick ?: (a: OptionType) => void;
    onNavHover ?: (a: OptionType) => void;

    transparent ?: boolean;
    position?: "absolute" | "fixed";
    headerContentOrder ?: "reverse";
    
    leftIcon ?: string;
    leftIconShadow ?: boolean;
    onLeftIconClick ?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    brand ?: string;
    searchPlaceholder ?: string;
    navExpandIcon ?: string;

    rightIcon ?: string;
    rightIconWidth ?: string;
    rightIconHeight ?: string;
}