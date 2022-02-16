interface ThemeType {
    tabHeadingWrapper ?: any;
    tabHeadingItem ?: any;
    tabHeadingText ?: any;
}

export interface OptionType {
    id: string;
    heading: string;
    active ?: boolean;
    disabled ?: boolean;
}

export interface TabPanelPropType {
    columns ?: number;
    theme ?: ThemeType;
    options: OptionType[]
}