import { OptionsType, OptionType } from "../type";

export interface NavItemsPropType {
    options ?: OptionsType[];
    isSidebar ?: boolean;

    showDropdownArrow ?: boolean;
    showDropdown ?: boolean;

    navItemAlignment ?: string;
    navExpandIcon ?: string;

    onNavClick ?: (a: OptionType) => void;
    onNavHover ?: (a: OptionType) => void;
}